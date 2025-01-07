import { AccordionList } from "@/components";
import { FAQs } from "@/utils/constants";

export const FaqSection = () => {
  return (
    <div className="w-full px-5 lg:px-16 py-5 lg:py-16 flex flex-col lg:flex-row lg:gap-6">
      <div
        className="w-full lg:w-[50%] h-[40vh] lg:h-[70vh] bg-cover bg-top rounded-md overflow-hidden"
        style={{ backgroundImage: `url("/images/faq_image.png")` }}
      />
      <div className="w-full lg:w-[50%] rounded-md pt-5 flex flex-col gap-5">
        <h1 className="text-primary text-[28px] font-poppinsRegular text-center lg:text-left">
          ABOUT
        </h1>
        <AccordionList accordianItems={FAQs} />
      </div>
    </div>
  );
};
