import { AboutSection } from "./components/AboutSection";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { TreatmentsSection } from "./components/TreatmentsSection";

export const HomePage = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <FaqSection />
    </div>
  );
};
