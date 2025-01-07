import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { TreatmentsSection } from "./components/TreatmentsSection";

export const HomePage = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
    </div>
  );
};
