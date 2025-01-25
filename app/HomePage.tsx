import { AboutSection } from "./components/AboutSection";
import { BlogsSection } from "./components/BlogsSection";
import { Counter } from "./components/Counter";
import { FaqSection } from "./components/FaqSection";
import { FeedbackSection } from "./components/FeedbackSection";
import { HeroSection } from "./components/HeroSection";
import { TreatmentsSection } from "./components/TreatmentsSection";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <FaqSection />
      <Counter />
      <FeedbackSection />
      <BlogsSection />
    </div>
  );
};
