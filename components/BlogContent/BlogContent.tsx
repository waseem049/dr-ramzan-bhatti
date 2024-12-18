import { Blog } from "@prisma/client";

type BlogContentProps = {
  blog: Blog;
  className?: string;
};

export const BlogContent: React.FC<BlogContentProps> = ({
  blog,
  className,
}) => {
  return (
    <article
      className={`blog-content ${className}`}
      dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
    />
  );
};
