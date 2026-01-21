import { AboutSection } from "./components/AboutSection";
import { BlogsSection } from "./components/BlogsSection";
import { Counter } from "./components/Counter";
import { FaqSection } from "./components/FaqSection";
import { FeedbackSection } from "./components/FeedbackSection";
import { HeroSection } from "./components/HeroSection";
import { TreatmentsSection } from "./components/TreatmentsSection";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <BeforeAfterGallery />
      <FaqSection />
      <Counter />
      <FeedbackSection />
      <BlogsSection />
    </div>
  );
};
