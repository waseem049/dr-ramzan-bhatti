type BlogPageProps = {
  slug: string;
};

export const BlogPage: React.FC<BlogPageProps> = ({ slug }) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-background  flex justify-center items-center">
      <h1 className="font-poppinsRegular text-foreground text-[40px]">
        {slug}
      </h1>
    </div>
  );
};
