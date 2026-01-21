"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  author: string;
  status: 'draft' | 'published';
  featured: boolean;
  views: number;
  publishedDate: string | null;
  updatedAt: string;
}

export default function BlogsPage() {
  const { hasPermission } = useAdminAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, [statusFilter, categoryFilter, searchQuery]);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (categoryFilter !== 'all') params.append('category', categoryFilter);
      if (searchQuery) params.append('search', searchQuery);

      const response = await fetch(`/api/admin/blogs?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        setPosts(data.posts);
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handlePublish = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    
    try {
      const response = await fetch(`/api/admin/blogs/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          status: newStatus,
          publishedDate: newStatus === 'published' ? new Date().toISOString() : null
        }),
      });

      if (response.ok) {
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error updating blog status:', error);
    }
  };

  if (!hasPermission(['doctor', 'editor'])) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icon iconName="lock" className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-montserratBold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600 font-poppinsRegular">
          You don't have permission to manage blog posts.
        </p>
      </div>
    );
  }

  const statusCounts = {
    all: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    draft: posts.filter(p => p.status === 'draft').length,
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <button
          onClick={() => setStatusFilter('all')}
          className={`p-6 rounded-xl border-2 transition-all text-left ${
            statusFilter === 'all'
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <p className="text-3xl font-montserratBold text-gray-900">{statusCounts.all}</p>
          <p className="text-sm text-gray-600 font-poppinsRegular">All Posts</p>
        </button>

        <button
          onClick={() => setStatusFilter('published')}
          className={`p-6 rounded-xl border-2 transition-all text-left ${
            statusFilter === 'published'
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <p className="text-3xl font-montserratBold text-gray-900">{statusCounts.published}</p>
          <p className="text-sm text-gray-600 font-poppinsRegular">Published</p>
        </button>

        <button
          onClick={() => setStatusFilter('draft')}
          className={`p-6 rounded-xl border-2 transition-all text-left ${
            statusFilter === 'draft'
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 hover:border-gray-300 bg-white'
          }`}
        >
          <p className="text-3xl font-montserratBold text-gray-900">{statusCounts.draft}</p>
          <p className="text-sm text-gray-600 font-poppinsRegular">Drafts</p>
        </button>

        <div className="p-6 rounded-xl border-2 border-gray-200 bg-white">
          <p className="text-3xl font-montserratBold text-gray-900">
            {posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 font-poppinsRegular">Total Views</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Icon
              iconName="magnifying-glass"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog posts..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
            />
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* Refresh Button */}
          <button
            onClick={fetchBlogs}
            disabled={isLoading}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-poppinsMedium hover:bg-gray-200 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Icon iconName={isLoading ? "spinner" : "rotate"} className={isLoading ? "animate-spin" : ""} />
            Refresh
          </button>

          {/* Create New Button */}
          <Link
            href="/admin/blogs/new"
            className="px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors flex items-center gap-2"
          >
            <Icon iconName="plus" />
            New Post
          </Link>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="space-y-4">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
              <div className="flex gap-6">
                <div className="w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          ))
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Icon iconName="file-lines" className="text-6xl text-gray-300 mb-4 inline-block" />
            <h3 className="text-xl font-montserratBold text-gray-900 mb-2">No Blog Posts Found</h3>
            <p className="text-gray-600 font-poppinsRegular mb-6">
              {searchQuery ? "Try adjusting your search or filters" : "Start by creating your first blog post"}
            </p>
            <Link
              href="/admin/blogs/new"
              className="px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors inline-flex items-center gap-2"
            >
              <Icon iconName="plus" />
              Create First Post
            </Link>
          </div>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-6">
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-montserratBold text-gray-900">
                          {post.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-poppinsMedium capitalize ${
                            post.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {post.status}
                        </span>
                        {post.featured && (
                          <span className="px-3 py-1 rounded-full text-xs font-poppinsMedium bg-blue-100 text-blue-800">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-poppinsRegular text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-6 text-sm text-gray-500 font-poppinsRegular mb-4">
                    <span className="flex items-center gap-2">
                      <Icon iconName="user" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon iconName="folder" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon iconName="eye" />
                      {post.views} views
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon iconName="calendar" />
                      {post.publishedDate 
                        ? new Date(post.publishedDate).toLocaleDateString()
                        : 'Not published'}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-poppinsRegular"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/blogs/${post.id}`}
                      className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppinsMedium text-sm inline-flex items-center gap-2"
                    >
                      <Icon iconName="pen-to-square" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handlePublish(post.id, post.status)}
                      className={`px-4 py-2 rounded-lg transition-colors font-poppinsMedium text-sm inline-flex items-center gap-2 ${
                        post.status === 'published'
                          ? 'text-orange-600 hover:bg-orange-50'
                          : 'text-green-600 hover:bg-green-50'
                      }`}
                    >
                      <Icon iconName={post.status === 'published' ? 'eye-slash' : 'check'} />
                      {post.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-poppinsMedium text-sm inline-flex items-center gap-2"
                    >
                      <Icon iconName="trash" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
