import Image from "next/image";
import { ActionButton } from "./Components/ActionButton";
import { formatDate } from "@/utils/formatDate";

type BlogCardProps = {
  slug: string;
  title: string;
  coverImage?: string;
  category?: string;
  author: string;
  excerpt: string;
  tags?: string[];
  createdAt: Date;
};

export const BlogCard = ({
  slug,
  title,
  coverImage,
  category,
  author = "Anonymous",
  excerpt,
  tags = [],
  createdAt,
}: BlogCardProps) => {
  const authorInitial = author?.charAt(0)?.toUpperCase() || "A";

  return (
    <article className="rounded-2xl overflow-hidden bg-white flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-purple-100 to-blue-100" />
        )}
        {category && (
          <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {category}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{excerpt}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 flex items-center justify-center text-blue-700">
              {authorInitial}
            </div>
            <span className="ml-2 text-gray-700 font-medium">{author}</span>
          </div>

          <h1 className="text-gray-500">{formatDate(createdAt)}</h1>
        </div>
        <ActionButton slug={slug} />
      </div>
    </article>
  );
};
