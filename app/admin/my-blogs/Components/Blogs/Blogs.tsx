import { BlogCard } from "@/components";

import { Blog } from "@prisma/client";

type BlogsProps = {
  blogs: Blog[];
};

export const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <div className="w-full h-full flex flex-row flex-wrap overflow-y-auto">
      {blogs.map((b) => (
        <BlogCard
          key={b.id}
          slug={b.slug}
          title={b.title}
          author={b.author}
          excerpt={b.excerpt}
          createdAt={b.createdAt}
        />
      ))}
    </div>
  );
};
