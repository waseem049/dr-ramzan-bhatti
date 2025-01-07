"use client";
import { useRef } from "react";
import { Icon } from "../Icon";

type AccordianProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};
export const Accordion: React.FC<AccordianProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <button
        onClick={onClick}
        className="w-full text-left p-4 focus:outline-none bg-primary transition-colors"
      >
        <div className="flex flex-row gap-5 items-center ">
          <Icon
            iconName={"caretRight"}
            className={`text-white text-[22px] ${
              isOpen ? "rotate-90" : ""
            } transition-all duration-300 ease-in-out`}
          />
          <h2 className="text-[22px] font-montserratRegular text-white">
            {question}
          </h2>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0",
        }}
      >
        <div ref={contentRef} className="p-4 bg-greyishBg">
          <p className="text-[16px] font-poppinsRegular text-darkGrey">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
