import Link from "next/link";
import { PreviewBlogCards } from "./components/PreviewBlogCards";
import { Icon } from "@/components";

export const BlogsSection = () => {
  return (
    <div className="w-full px-5 lg:px-16 py-5 lg:py-16 flex flex-col gap-10 ">
      <h1 className="text-primary text-[28px] font-poppinsRegular text-center">
        BLOGS
      </h1>
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 justify-start lg:justify-center py-3">
        <PreviewBlogCards />
      </div>
      <div className="w-full flex justify-center items-center">
        <Link
          href={"/blogs"}
          className="bg-primary flex flex-row gap-3 px-4 py-2 items-center rounded-md hover:scale-[105%] transition-all duration-300 ease-in-out"
        >
          <h1 className="text-white font-poppinsRegular">View More</h1>
          <Icon iconName={"circleRight"} className="text-white" />
        </Link>
      </div>
    </div>
  );
};
