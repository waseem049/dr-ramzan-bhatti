import { BlogContent } from "@/components";
import { Blog } from "@prisma/client";

type BlogPageProps = {
  blog: Blog;
};

export const BlogPage: React.FC<BlogPageProps> = ({ blog }) => {
  return (
    <div className="flex justify-center items-center overflow-y-auto">
      <BlogContent blog={blog} />
    </div>
  );
};
