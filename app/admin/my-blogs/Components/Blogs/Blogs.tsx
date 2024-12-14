import { BlogCard } from "@/components";
import { Blog } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

type BlogsProps = {
  blogs: Blog[];
  selectedBlog?: Blog | null;
  setSelectedBlog?: Dispatch<SetStateAction<Blog | null>>;
};

export const Blogs: React.FC<BlogsProps> = ({
  blogs,
  selectedBlog,
  setSelectedBlog,
}) => {
  return (
    <div className="w-full h-full flex flex-row flex-wrap gap-10 overflow-y-auto justify-center">
      {blogs.map((b) => (
        <BlogCard
          key={b.id}
          onAdminPanel={true}
          selectedBlog={selectedBlog}
          setSelectedBlog={setSelectedBlog}
          {...b}
        />
      ))}
    </div>
  );
};
