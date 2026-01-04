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
    <div className={`transition-colors duration-300 ${isOpen ? "bg-gray-50/50" : "bg-white hover:bg-gray-50"}`}>
      <button
        onClick={onClick}
        className="w-full text-left py-6 px-8 focus:outline-none flex justify-between items-center group gap-6"
      >
        <div className="flex items-center gap-4">
          {/* Optional: Add a subtle indicator/dot for unread/attention if needed, currently cleaner without */}
          <span className={`text-lg font-montserratSemibold transition-colors duration-300 ${isOpen ? "text-primary" : "text-gray-900 group-hover:text-primary"}`}>
            {question}
          </span>
        </div>

        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${isOpen ? "bg-primary border-primary text-white scale-110" : "bg-white border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary"}`}>
          <Icon
            iconName="caretRight"
            className={`text-xs transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          />
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden`}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + "px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="px-8 pb-8 pt-0 pl-[calc(2rem-2px)]"> {/* Align with text */}
          <p className="text-gray-500 font-poppinsRegular leading-[1.8] text-[0.95rem]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
