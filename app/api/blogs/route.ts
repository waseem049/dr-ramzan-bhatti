export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';

import fs from 'node:fs/promises';
import path from 'node:path';

const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json');

// GET - Fetch published blog posts for public website
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');
    const excludeSlug = searchParams.get('excludeSlug');

    // Read blogs data
    const data = await fs.readFile(BLOGS_FILE, 'utf-8');
    const blogsData = JSON.parse(data);

    // Only return published posts
    let posts = blogsData.posts?.filter((post: any) => post.status === 'published') || [];

    // Filter by category
    if (category && category !== 'all') {
      posts = posts.filter((post: any) =>
        post.category.toLowerCase() === category.toLowerCase().replace('-', ' ')
      );
    }

    // Filter by featured
    if (featured === 'true') {
      posts = posts.filter((post: any) => post.featured === true);
    }

    // Exclude specific slug (for related posts)
    if (excludeSlug) {
      posts = posts.filter((post: any) => post.slug !== excludeSlug);
    }

    // Sort by published date (newest first)
    posts.sort((a: any, b: any) => {
      const dateA = new Date(a.publishedDate || a.createdAt).getTime();
      const dateB = new Date(b.publishedDate || b.createdAt).getTime();
      return dateB - dateA;
    });

    // Apply limit
    if (limit) {
      posts = posts.slice(0, parseInt(limit));
    }

    // Map to frontend format
    const formattedPosts = posts.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featuredImage,
      category: post.category,
      tags: post.tags,
      author: post.author,
      views: post.views,
      featured: post.featured,
      publishedDate: post.publishedDate,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }));

    return NextResponse.json({
      success: true,
      blogs: formattedPosts,
      count: formattedPosts.length,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blogs',
        blogs: [],
        count: 0,
      },
      { status: 500 }
    );
  }
}
