"use client";
import { Accordion } from "@/components/Accordian";
import { FAQs } from "@/utils/constants";
import { useState } from "react";

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
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
        <div className="w-full flex flex-col gap-5">
          {FAQs.map((f, i) => (
            <Accordion
              key={i}
              question={f.question}
              answer={f.answer}
              isOpen={activeIndex === i}
              onClick={() => toggleAccordion(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
