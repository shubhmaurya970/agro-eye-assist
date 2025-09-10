import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-cows-ai.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI-powered cattle analysis in dairy farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Revolutionizing 
              <span className="block text-accent-light">Dairy Farming</span>
              with AI-Powered Classification
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Ensure objective, accurate, and standardized evaluation of cattle and buffaloes 
              with cutting-edge artificial intelligence technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-strong group"
              >
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 shadow-soft"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent-light">99.2%</div>
                <div className="text-white/80">Accuracy Rate</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent-light">50+</div>
                <div className="text-white/80">Parameters Analyzed</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-accent-light">24/7</div>
                <div className="text-white/80">Automated Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-accent/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-white/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;