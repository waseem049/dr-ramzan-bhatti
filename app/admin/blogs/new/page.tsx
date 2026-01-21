"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";

export default function NewBlogPage() {
  const router = useRouter();
  const { user } = useAdminAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    category: "Skin Care",
    tags: "",
    status: "draft",
    featured: false,
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: ""
    }
  });

  const categories = [
    "Skin Care",
    "Treatments",
    "Skin Conditions",
    "Anti-Aging",
    "Hair Care",
    "Cosmetic Procedures"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        ...formData,
        author: user?.name || "Admin",
        authorId: user?.id || "",
        tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
        publishedDate: formData.status === 'published' ? new Date().toISOString() : null,
      };

      const response = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push('/admin/blogs');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog post');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: any) => {
    if (field.startsWith('seo.')) {
      const seoField = field.split('.')[1];
      setFormData(prev => ({
        ...prev,
        seo: { ...prev.seo, [seoField]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-montserratBold text-gray-900 mb-2">
            Create New Blog Post
          </h1>
          <p className="text-gray-600 font-poppinsRegular">
            Write and publish a new blog post for your website
          </p>
        </div>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-900 font-poppinsMedium transition-colors flex items-center gap-2"
        >
          <Icon iconName="arrow-left" />
          Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
              Post Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter blog post title..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular text-lg"
              required
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => handleChange('excerpt', e.target.value)}
              placeholder="Brief summary of the blog post (150-200 characters)..."
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular resize-none"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.excerpt.length} / 200 characters
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
              Content * (Supports Markdown)
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Write your blog post content here... You can use Markdown formatting."
              rows={20}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-mono text-sm resize-none"
              required
            />
            <div className="mt-2 p-3 bg-gray-50 rounded-lg text-xs text-gray-600 font-poppinsRegular">
              <strong>Markdown Tips:</strong> Use ## for headings, **bold**, *italic*, - for lists, [link](url) for links
            </div>
          </div>
        </div>

        {/* Settings Sidebar */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Settings */}
          <div className="md:col-span-2 space-y-6">
            {/* Featured Image */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                value={formData.featuredImage}
                onChange={(e) => handleChange('featuredImage', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
              />
              {formData.featuredImage && (
                <div className="mt-4">
                  <img
                    src={formData.featuredImage}
                    alt="Featured"
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
              <h3 className="text-lg font-montserratBold text-gray-900">
                SEO Settings
              </h3>

              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={formData.seo.metaTitle}
                  onChange={(e) => handleChange('seo.metaTitle', e.target.value)}
                  placeholder="SEO optimized title (60 characters)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
                  maxLength={60}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.seo.metaTitle.length} / 60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={formData.seo.metaDescription}
                  onChange={(e) => handleChange('seo.metaDescription', e.target.value)}
                  placeholder="SEO meta description (160 characters)"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular resize-none"
                  maxLength={160}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.seo.metaDescription.length} / 160 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Keywords (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.seo.keywords}
                  onChange={(e) => handleChange('seo.keywords', e.target.value)}
                  placeholder="keyword1, keyword2, keyword3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Publish Settings */}
          <div className="space-y-6">
            {/* Publish Box */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
              <h3 className="text-lg font-montserratBold text-gray-900">
                Publish
              </h3>

              {/* Status */}
              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => handleChange('tags', e.target.value)}
                  placeholder="tag1, tag2, tag3"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Separate tags with commas
                </p>
              </div>

              {/* Featured */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => handleChange('featured', e.target.checked)}
                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="featured" className="text-sm font-poppinsMedium text-gray-700">
                  Mark as Featured Post
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Icon iconName="spinner" className="animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Icon iconName="check" />
                      {formData.status === 'published' ? 'Publish Post' : 'Save Draft'}
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => router.back()}
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-poppinsMedium hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
