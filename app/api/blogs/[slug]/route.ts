export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';

import fs from 'node:fs/promises';
import path from 'node:path';

const BLOGS_FILE = path.join(process.cwd(), 'data/blogs.json');

// GET - Fetch single published blog post by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    // Read blogs data
    const data = await fs.readFile(BLOGS_FILE, 'utf-8');
    const blogsData = JSON.parse(data);

    // Find published post by slug
    const post = blogsData.posts?.find(
      (p: any) => p.slug === slug && p.status === 'published'
    );

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post not found',
          blog: null,
        },
        { status: 404 }
      );
    }

    // Increment view count
    post.views = (post.views || 0) + 1;

    // Save updated view count
    try {
      await fs.writeFile(BLOGS_FILE, JSON.stringify(blogsData, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error updating view count:', error);
    }

    // Format response
    const formattedPost = {
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
      seo: post.seo,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };

    return NextResponse.json({
      success: true,
      blog: formattedPost,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog post',
        blog: null,
      },
      { status: 500 }
    );
  }
}
