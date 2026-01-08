import { Blog } from "@prisma/client";
import { Icon } from "../Icon";
import { formatIso } from "@/utils/dateFormatters";
import Link from "next/link";

type BlogCardProps = Blog;

export const BlogCard: React.FC<BlogCardProps> = ({
  coverImage,
  category,
  tags,
  title,
  createdAt,
  updatedAt,
  excerpt,
  slug,
  isFeatured,
}) => {
  const url = `/blogs/${slug}`;

  return (
    <Link href={url} className="group block h-full">
      <article className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 h-full flex flex-col group-hover:transform group-hover:scale-105">
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-primary text-white text-xs font-montserratBold px-3 py-1 rounded-full shadow-lg">
              FEATURED
            </div>
          </div>
        )}

        {/* Image Section */}
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${
                coverImage || "/images/hero-bg.png"
              })`,
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm text-primary font-montserratSemibold text-sm px-3 py-1 rounded-full shadow-md">
                {category}
              </div>
            </div>
          )}

          {/* Reading Time Indicator */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur-sm text-gray-700 font-montserratSemibold text-sm px-3 py-1 rounded-full shadow-md flex items-center gap-2">
              <Icon iconName="calendar" className="text-primary" />
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary font-montserratSemibold text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="bg-gray-100 text-gray-600 font-montserratSemibold text-xs px-2 py-1 rounded-full">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-montserratBold text-gray-900 leading-tight mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 font-poppinsRegular text-base leading-relaxed mb-4 flex-1 line-clamp-3">
            {excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Icon iconName="calendar" className="text-primary" />
                <span>{formatIso(createdAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon iconName="update" className="text-primary" />
                <span>{formatIso(updatedAt)}</span>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon iconName="about" className="text-primary" />
              </div>
              <span className="text-gray-600 font-poppinsRegular text-sm">
                Dr. Ramzan Bhatti
              </span>
            </div>

            <div className="group/btn inline-flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-white font-montserratSemibold px-4 py-2 rounded-lg transition-all duration-300">
              <span>Read More</span>
              <Icon
                iconName="circleRight"
                className="group-hover/btn:translate-x-1 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-500" />

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </article>
    </Link>
  );
};
