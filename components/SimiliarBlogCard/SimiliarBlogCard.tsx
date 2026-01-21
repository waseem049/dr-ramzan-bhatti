import { Blog } from "@/utils/types";
import Link from "next/link";

type SimiliarBlogCardProps = {
  blog: Blog;
};

export const SimiliarBlogCard: React.FC<SimiliarBlogCardProps> = ({ blog }) => {
  const url = `/blogs/${blog.slug}`;

  return (
    <Link href={url} className="block group">
      <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
        {blog.featuredImage && (
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-montserratSemiBold text-sm text-gray-900 line-clamp-2 mb-1 group-hover:text-primary transition-colors">
            {blog.title}
          </h3>
          <p className="text-xs text-gray-500 font-poppinsRegular">
            {blog.author || "Dr. Ramzan Bhatti"}
          </p>
        </div>
      </div>
    </Link>
  );
};
