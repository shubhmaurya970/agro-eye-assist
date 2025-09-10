import { Card } from "@/components/ui/card";
import { Scale, Clock, Zap } from "lucide-react";

const BackgroundSection = () => {
  const problems = [
    {
      icon: Scale,
      title: "Human Bias",
      description: "Manual evaluation often varies between different evaluators, leading to inconsistent results across different locations and assessments."
    },
    {
      icon: Clock,
      title: "Evaluator Fatigue",
      description: "Long evaluation sessions can lead to decreased accuracy and attention to detail, affecting the quality of assessments."
    },
    {
      icon: Zap,
      title: "Inaccurate Measurements",
      description: "Human error in physical measurements and visual assessments can significantly impact breeding decisions and genetic progress."
    }
  ];

  return (
    <section id="background" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Understanding Animal Type Classification
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Animal Type Classification (ATC) is a critical process in dairy farming that evaluates 
              cattle and buffaloes based on their physical characteristics, performance metrics, and 
              genetic potential. This systematic evaluation is essential for improving breeding programs 
              and enhancing overall dairy productivity.
            </p>
          </div>

          {/* Importance */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 md:p-12 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-4">Why ATC Matters</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-4">
                    Accurate animal classification directly impacts:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Breeding program effectiveness and genetic improvement
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Economic returns for dairy farmers and cooperatives
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      National dairy production quality and quantity
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-muted-foreground mb-4">
                    Traditional methods face significant challenges:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-warning rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Subjective evaluation leading to inconsistent results
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-warning rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Time-intensive manual processes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-warning rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Limited scalability for large-scale operations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Problems with Manual ATC */}
          <div>
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              Challenges with Manual Classification
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-strong transition-all duration-300 animate-scale-in border-none shadow-soft"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{problem.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;