import { BlogContent, SimiliarBlogList } from "@/components";
import { Blog } from "@prisma/client";

type BlogPageProps = {
  blog: Blog;
};

export const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-[10vw] lg:gap-[3vw] pt-[10vh] lg:pt-[12vh]">
      <div className="w-full lg:w-[70%]">
        <BlogContent blog={blog} />
      </div>
      <div className="w-full lg:w-[30%] lg:pt-[12vh] px-3 lg:px-4 lg:fixed lg:right-0 lg:top-[5%]">
        <SimiliarBlogList slug={blog.slug} />
      </div>
    </div>
  );
};
