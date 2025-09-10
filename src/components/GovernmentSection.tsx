import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users } from "lucide-react";
import rgmFlowImage from "@/assets/rgm-flow.jpg";

const GovernmentSection = () => {
  const objectives = [
    {
      icon: Award,
      title: "Elite Dam Selection",
      description: "Identifying superior female cattle based on comprehensive genetic and performance evaluation"
    },
    {
      icon: TrendingUp,
      title: "Breeding Bull Development",
      description: "Developing high-quality breeding bulls through systematic progeny testing programs"
    },
    {
      icon: Users,
      title: "Genetic Improvement",
      description: "Enhancing overall genetic potential of indigenous cattle breeds across India"
    }
  ];

  return (
    <section id="government" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Rashtriya Gokul Mission Context
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The Rashtriya Gokul Mission (RGM) is India's flagship program for genetic improvement 
              of bovines. Animal Type Classification plays a pivotal role in achieving RGM's objectives 
              through Progeny Testing (PT) and Pedigree Selection (PS).
            </p>
          </div>

          {/* RGM Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-primary mb-6">Mission Overview</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                RGM aims to enhance productivity and genetic potential of indigenous cattle breeds 
                through scientific breeding practices. The mission focuses on conservation and 
                development of indigenous breeds while improving milk production capacity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-success rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary">Conservation:</strong>
                    <span className="text-muted-foreground ml-2">Preserving indigenous cattle breeds and their genetic diversity</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary">Development:</strong>
                    <span className="text-muted-foreground ml-2">Enhancing productivity through selective breeding programs</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong className="text-primary">Propagation:</strong>
                    <span className="text-muted-foreground ml-2">Distributing superior germplasm across the country</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img
                src={rgmFlowImage}
                alt="RGM breeding flow from Elite Dams to Genetic Improvement"
                className="w-full rounded-2xl shadow-strong"
              />
            </div>
          </div>

          {/* Critical Role of ATC */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-12 shadow-soft">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Why ATC is Critical for RGM Success
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Progeny Testing (PT)</h4>
                <p className="text-muted-foreground mb-4">
                  Accurate ATC ensures proper evaluation of breeding bulls based on their offspring's 
                  performance, leading to more effective genetic improvement programs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Pedigree Selection (PS)</h4>
                <p className="text-muted-foreground mb-4">
                  Standardized classification helps in maintaining accurate breeding records and 
                  selecting superior animals for breeding programs.
                </p>
              </div>
            </div>
          </div>

          {/* Key Objectives */}
          <div>
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              RGM Key Objectives
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-strong transition-all duration-300 animate-scale-in border-none shadow-soft"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 success-gradient rounded-full flex items-center justify-center">
                    <objective.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{objective.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;