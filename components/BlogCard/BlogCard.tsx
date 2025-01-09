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
}) => {
  const url = `/blogs/${slug}`;
  return (
    <Link href={url}>
      <div className="w-full lg:w-[30vw] h-[80vh] lg:h-[80vh] shadow-lg rounded-md overflow-hidden lg:hover:scale-[105%] transition-all duration-300 ease-in-out cursor-pointer border border-primary">
        <div
          className="w-full h-[50%] bg-center bg-cover relative"
          style={{
            backgroundImage: `url(${coverImage})`,
          }}
        >
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary rounded-md">
            <h1 className="font-poppinsRegular text-lg text-white">
              {category}
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full h-[50%] px-4 justify-center gap-3 bg-blogCardBg">
          {tags && tags.length > 0 && (
            <div className="flex flex-row flex-wrap gap-2">
              {tags.map((t, i) => (
                <h1
                  key={i}
                  className="bg-primary px-2 py-1 rounded-md text-[14px] text-white font-montserratRegular"
                >
                  {t}
                </h1>
              ))}
            </div>
          )}

          <h1 className="text-black text-[20px] lg:text-[28px] font-poppinsRegular text-wrap leading-tight line-clamp-2">
            {title}
          </h1>
          <div className="flex flex-row items-center gap-3">
            <Icon iconName={"calendar"} className="text-primary" />
            <h1 className="text-[14px] lg:text-[16px] font-poppinsRegular text-lightGrey">
              {formatIso(createdAt)}
            </h1>
            <Icon iconName={"update"} className="text-primary" />
            <h1 className="text-[14px] lg:text-[16px] font-poppinsRegular text-lightGrey">
              {formatIso(updatedAt)}
            </h1>
          </div>
          <p className="text-[16px] text-lightGrey line-clamp-3">{excerpt}</p>
          <div className="flex flex-row justify-end items-center">
            <div className="flex flex-row gap-2 bg-primary rounded-md px-2 py-1 items-center">
              <button className="border-none  text-white ">Read More</button>
              <Icon iconName={"circleRight"} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
