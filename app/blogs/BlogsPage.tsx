import { BlogList } from "@/components";

export const BlogsPage = () => {
  return (
    <div className="w-full pt-[12vh] lg:pt-[12vh] pb-6 flex flex-col items-center gap-6 lg:gap-12">
      <h1 className="text-[28px] lg:text-[48px] text-primary font-montserratSemibold">
        Blogs
      </h1>
      <BlogList />
    </div>
  );
};
