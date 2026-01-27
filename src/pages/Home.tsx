import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactSection from "@/components/sections/ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
