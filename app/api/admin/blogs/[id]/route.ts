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

// GET - Fetch single blog
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await readBlogs();
    const post = data.posts?.find((p: any) => p.id === id);

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      post,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

// PATCH - Update blog
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const data = await readBlogs();
    const index = data.posts?.findIndex((p: any) => p.id === id);

    if (index === undefined || index === -1) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Update post
    data.posts[index] = {
      ...data.posts[index],
      ...body,
      ...body,
      id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    };

    await writeBlogs(data);

    return NextResponse.json({
      success: true,
      post: data.posts[index],
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE - Delete blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await readBlogs();
    const index = data.posts?.findIndex((p: any) => p.id === id);

    if (index === undefined || index === -1) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Remove post
    data.posts.splice(index, 1);
    await writeBlogs(data);

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
