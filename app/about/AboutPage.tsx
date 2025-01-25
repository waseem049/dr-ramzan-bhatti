import { CareerHighlightsCard } from "@/components";
import { CareerHighlights } from "@/utils/constants";

export const AboutPage = () => {
  return (
    <div className="w-full pt-20 pb-8 lg:pt-[15vh] md:pb-20 flex flex-col gap-6">
      <div className="w-full bg-primary px-6 lg:px-32">
        <h1 className="font-poppinsSemibold text-[32px] lg:text-[42px] text-white">
          Dr Jibran Bashir
        </h1>
      </div>
      <div className="w-full px-6 lg:px-32 flex flex-col gap-10">
        {Object.entries(CareerHighlights).map(([key, section]) => (
          <CareerHighlightsCard
            key={key}
            heading={section.heading}
            highlights={section.highlights}
          />
        ))}
      </div>
    </div>
  );
};
