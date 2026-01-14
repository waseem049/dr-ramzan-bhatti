// components/AccordionList.tsx
"use client";
import { useState } from "react";
import { Accordion } from "@/components";

type AccordionListProps = {
  accordianItems: { question: string; answer: string }[];
};

export const AccordionList = ({ accordianItems }: AccordionListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col divide-y divide-gray-100">
      {accordianItems.map((f, i) => (
        <Accordion
          key={i}
          question={f.question}
          answer={f.answer}
          isOpen={activeIndex === i}
          onClick={() => toggleAccordion(i)}
        />
      ))}
    </div>
  );
};
