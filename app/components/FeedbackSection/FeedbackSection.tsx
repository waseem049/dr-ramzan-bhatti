import { FeedbackCard } from "@/components";
import { Testimonials } from "@/utils/constants";

export const FeedbackSection = () => {
  return (
    <div className="w-full  px-5 lg:px-16 py-5 lg:py-16 flex flex-col lg:flex-row gap-5 bg-backgroundBlue">
      <div className="w-full  lg:w-[30%] rounded-md">
        <h1 className="text-primary text-[28px] font-poppinsRegular text-center lg:text-left">
          FEEDBACK
        </h1>
        <p className="text-black font-poppinsRegular text-[20px] lg:text-[26px] text-center lg:text-left">
          {`What Do They Say About Us?`}
        </p>
      </div>
      <div className="w-full lg:w-[70%] overflow-hidden p-4 flex flex-row justify-center items-center flex-wrap gap-5">
        {Testimonials.map((t, i) => (
          <FeedbackCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};
