import { Card } from "@/components/ui/card";
import { Ruler, Heart, Box, Triangle, Circle, Activity } from "lucide-react";

const ParametersSection = () => {
  const parameters = [
    {
      icon: Ruler,
      title: "Body Length",
      description: "AI measures the distance from point of shoulder to pin bone for optimal body frame assessment",
      accuracy: "±2cm",
      color: "bg-accent"
    },
    {
      icon: Heart,
      title: "Height at Withers",
      description: "Precise measurement of animal height at the highest point of the shoulders for size classification",
      accuracy: "±1.5cm",
      color: "bg-success"
    },
    {
      icon: Box,
      title: "Chest Width",
      description: "Analysis of chest cavity dimensions to evaluate respiratory capacity and overall health",
      accuracy: "±1.8cm",
      color: "bg-primary"
    },
    {
      icon: Triangle,
      title: "Rump Angle",
      description: "Computer vision calculates optimal pelvic slope for improved reproductive performance",
      accuracy: "±0.5°",
      color: "bg-earth"
    },
    {
      icon: Circle,
      title: "Udder Structure",
      description: "Comprehensive evaluation of mammary system for milk production potential assessment",
      accuracy: "95.8%",
      color: "bg-accent"
    },
    {
      icon: Activity,
      title: "Leg Structure",
      description: "Analysis of limb conformation for locomotion efficiency and overall structural soundness",
      accuracy: "94.2%",
      color: "bg-success"
    }
  ];

  return (
    <section id="parameters" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Key Evaluation Parameters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI system evaluates over 50 morphological and physiological parameters with 
              exceptional precision, ensuring comprehensive and objective animal classification 
              that surpasses traditional manual evaluation methods.
            </p>
          </div>

          {/* Parameters Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {parameters.map((parameter, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-strong transition-all duration-300 animate-scale-in group border-none shadow-soft overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${parameter.color} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 mb-4 ${parameter.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <parameter.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary mb-3">{parameter.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{parameter.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">Accuracy</span>
                    <span className="text-sm font-bold text-success">{parameter.accuracy}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* AI Advantage */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  AI Measurement Advantage
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-success rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-primary">Objective Analysis:</strong>
                      <span className="text-muted-foreground ml-2">Eliminates human bias and subjective interpretation</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-accent rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-primary">Consistent Results:</strong>
                      <span className="text-muted-foreground ml-2">Standardized measurements across all evaluations</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-primary">Precision Tracking:</strong>
                      <span className="text-muted-foreground ml-2">Sub-centimeter accuracy for critical measurements</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-white rounded-xl shadow-soft">
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Parameters</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-soft">
                    <div className="text-2xl font-bold text-success mb-1">99.2%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-soft">
                    <div className="text-2xl font-bold text-accent mb-1">&lt;5s</div>
                    <div className="text-sm text-muted-foreground">Processing</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-soft">
                    <div className="text-2xl font-bold text-earth mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParametersSection;