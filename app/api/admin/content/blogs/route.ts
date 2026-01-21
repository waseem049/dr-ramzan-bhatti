import { NextRequest, NextResponse } from 'next/server';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const BLOGS_DIR = path.join(process.cwd(), 'content/blogs');

// GET - Fetch all blog posts
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');

    // Read all markdown files from blogs directory
    const files = await glob(`${BLOGS_DIR}/*.md`);
    
    const blogs = await Promise.all(
      files.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8');
        const { data, content: markdown } = matter(content);
        const slug = path.basename(file, '.md');

        return {
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          author: data.author || 'Dr. Ramzan Bhatti',
          publishedDate: data.publishedDate || null,
          status: data.status || 'draft',
          category: data.category || 'Uncategorized',
          tags: data.tags || [],
          views: data.views || 0,
          featured: data.featured || false,
          content: markdown,
        };
      })
    );

    // Filter by status if provided
    const filteredBlogs = status && status !== 'all'
      ? blogs.filter(blog => blog.status === status)
      : blogs;

    // Sort by published date (newest first)
    filteredBlogs.sort((a, b) => {
      if (!a.publishedDate) return 1;
      if (!b.publishedDate) return -1;
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    });

    return NextResponse.json({
      success: true,
      blogs: filteredBlogs,
      count: filteredBlogs.length,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}
