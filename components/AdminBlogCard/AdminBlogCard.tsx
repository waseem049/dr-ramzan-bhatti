import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Blog } from "@prisma/client";
import { formatIso } from "@/utils/dateFormatters";
import { Icon } from "../Icon";
import Link from "next/link";

type AdminBlogCardProps = Blog & {
  selectedBlog?: Blog | null;
  setSelectedBlog?: Dispatch<SetStateAction<Blog | null>>;
};

export const AdminBlogCard: React.FC<AdminBlogCardProps> = ({
  selectedBlog,
  setSelectedBlog,
  ...blog
}) => {
  const authorInitial = blog.author?.charAt(0)?.toUpperCase() || "A";
  const isSelected = blog.id === selectedBlog?.id;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (setSelectedBlog) {
      setSelectedBlog(isSelected ? null : blog);
    }
  };

  return (
    <div
      className={`
      w-full
      sm:w-[calc(50%-0.625rem)]
      md:w-[calc(30%-0.835rem)]
    `}
    >
      <article
        className={`bg-blue-950 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-blue-900 ${
          isSelected
            ? "border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            : ""
        }`}
      >
        {/* Image Container */}
        <Link href={`/blogs/${blog.slug}`}>
          <div className="relative w-full pt-[60%]">
            {blog.coverImage ? (
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="absolute inset-0 object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-950" />
            )}

            {/* Category Badge */}
            {blog.category && (
              <span className="absolute top-4 left-4 bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-blue-900">
                {blog.category}
              </span>
            )}

            <div
              className="absolute top-4 right-4 bg-blue-100 px-3 py-1 rounded-full flex flex-row gap-3 items-center cursor-pointer"
              onClick={(e) => handleClick(e)}
              onMouseDown={(e) => e.preventDefault()}
            >
              <Icon iconName="editDoc" />
              <h1 className="font-poppinsRegular text-xs">Select To Edit</h1>
            </div>

            <div className="absolute top-12 right-4 bg-blue-100 px-3 py-1 rounded-full">
              <h1 className="font-poppinsRegular text-black text-xs">
                {blog.status}
              </h1>
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="p-4 flex flex-col">
          <h3 className="text-lg font-semibold text-blue-50 hover:text-blue-200 transition-colors duration-200 mb-2 line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-blue-200/80 text-sm mb-4 line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {blog.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-900/50 text-blue-200 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-800 to-blue-700 flex items-center justify-center text-blue-100 font-medium">
                {authorInitial}
              </div>
              <span className="ml-2 text-blue-200">{blog.author}</span>
            </div>
            <span className="text-blue-300">{formatIso(blog.createdAt)}</span>
          </div>
        </div>
      </article>
    </div>
  );
};
