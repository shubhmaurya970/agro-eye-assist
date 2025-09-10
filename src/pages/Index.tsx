import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BackgroundSection from "@/components/BackgroundSection";
import GovernmentSection from "@/components/GovernmentSection";
import SolutionSection from "@/components/SolutionSection";
import ParametersSection from "@/components/ParametersSection";
import BenefitsSection from "@/components/BenefitsSection";
import DemoSection from "@/components/DemoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BackgroundSection />
      <GovernmentSection />
      <SolutionSection />
      <ParametersSection />
      <BenefitsSection />
      <DemoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
