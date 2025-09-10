import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Brain, BarChart3, Smartphone, Camera, Zap } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Simple Image Upload",
      description: "Upload high-quality animal images directly through our user-friendly interface or mobile app"
    },
    {
      icon: Brain,
      title: "AI Analysis Engine",
      description: "Advanced computer vision algorithms extract precise body parameters and anatomical measurements"
    },
    {
      icon: BarChart3,
      title: "Automated Scoring",
      description: "Generate standardized classification scores based on international dairy cattle evaluation standards"
    },
    {
      icon: Smartphone,
      title: "BPA Integration",
      description: "Seamless integration with Bharat Pashudhan App for centralized data management and reporting"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Capture",
      description: "Take photos of the animal from multiple angles using mobile device",
      icon: Camera
    },
    {
      step: "02",
      title: "Process",
      description: "AI algorithms analyze images and extract key morphological features",
      icon: Brain
    },
    {
      step: "03",
      title: "Evaluate",
      description: "Generate comprehensive scoring based on standardized parameters",
      icon: BarChart3
    },
    {
      step: "04",
      title: "Integrate",
      description: "Sync results with BPA and government databases automatically",
      icon: Zap
    }
  ];

  return (
    <section id="solution" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              AI-Powered Classification Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our cutting-edge AI system revolutionizes animal type classification by providing 
              objective, accurate, and standardized evaluation through advanced computer vision 
              and machine learning technologies.
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              System Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-strong transition-all duration-300 animate-scale-in group border-none shadow-soft"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-primary mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Workflow Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              How It Works
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((step, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto success-gradient rounded-full flex items-center justify-center shadow-strong">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Demonstration */}
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Experience AI Classification
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              See how our AI system analyzes animal images and generates precise classification 
              scores in real-time. Try our interactive demo to experience the future of dairy farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient shadow-strong">
                Try Live Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                Watch Video Tutorial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;