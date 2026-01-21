export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';

import fs from 'node:fs/promises';
import path from 'node:path';

const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json');

// Helper to read blogs
async function readBlogs() {
  try {
    const data = await fs.readFile(BLOGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return { posts: [], categories: [] };
  }
}

// Helper to write blogs
async function writeBlogs(data: any) {
  await fs.writeFile(BLOGS_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// GET - Fetch all blogs
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const data = await readBlogs();
    let posts = data.posts || [];

    // Filter by status
    if (status && status !== 'all') {
      posts = posts.filter((post: any) => post.status === status);
    }

    // Filter by category
    if (category && category !== 'all') {
      posts = posts.filter((post: any) => post.category === category);
    }

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      posts = posts.filter((post: any) =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some((tag: string) => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort by date (newest first)
    posts.sort((a: any, b: any) => {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      return dateB - dateA;
    });

    return NextResponse.json({
      success: true,
      posts,
      categories: data.categories || [],
      count: posts.length,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = await readBlogs();
    if (!data.posts) {
      data.posts = [];
    }

    // Generate slug from title if not provided
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const newPost = {
      id: `blog_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      ...body,
      slug,
      views: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    data.posts.push(newPost);
    await writeBlogs(data);

    return NextResponse.json({
      success: true,
      post: newPost,
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
