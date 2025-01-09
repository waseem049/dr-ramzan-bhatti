import { Blog } from "@prisma/client";
import Link from "next/link";

type SimiliarBlogCardProps = {
  blog: Blog;
};

export const SimiliarBlogCard: React.FC<SimiliarBlogCardProps> = ({ blog }) => {
  const url = `/blogs/${blog.slug}`;

  return (
    <Link href={url}>
      <div className="w-full h-[18vh] rounded-md shadow-lg flex flex-row lg:hover:scale-[105%] transition-all duration-300 ease-in-out cursor-pointer">
        <div
          className="w-[30%] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.coverImage})` }}
        />
        <div className="flex flex-col w-[70%] h-full p-2 gap-1 justify-between bg-backgroundBlue">
          <div className="w-full">
            <h1 className="text-[16px] lg:text-[18px] font-montserratSemibold line-clamp-2">
              {blog.title}
            </h1>
            <p className="text-[10px] lg:text-[12px] line-clamp-3 lg:line-clamp-2">
              {blog.excerpt}
            </p>
          </div>

          <div className="w-full flex flex-row justify-between items-center">
            <h2 className="text-[14px] lg:text-[16px]">{blog.author}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};
