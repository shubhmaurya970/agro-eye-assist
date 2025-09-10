import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Zap, Users, TrendingUp, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Standardization",
      description: "Consistent evaluation criteria and scoring methodology across all locations and assessments",
      impact: "100% Consistency"
    },
    {
      icon: CheckCircle,
      title: "Accuracy",
      description: "Objective AI analysis eliminates human bias and provides precise, repeatable measurements",
      impact: "99.2% Accurate"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Rapid processing and instant results compared to time-intensive manual evaluation methods",
      impact: "10x Faster"
    },
    {
      icon: Users,
      title: "Ease of Use",
      description: "Simple photo capture process enables field staff to perform evaluations without specialized training",
      impact: "Zero Training"
    },
    {
      icon: TrendingUp,
      title: "Scientific Data",
      description: "Comprehensive data collection improves breeding research and genetic improvement programs",
      impact: "Data-Driven"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Continuous monitoring and validation ensures reliable classification results over time",
      impact: "Guaranteed"
    }
  ];

  const comparisons = [
    {
      aspect: "Evaluation Time",
      manual: "45-60 minutes",
      ai: "< 5 seconds",
      improvement: "720x faster"
    },
    {
      aspect: "Consistency",
      manual: "Variable results",
      ai: "100% standardized",
      improvement: "Perfect consistency"
    },
    {
      aspect: "Training Required",
      manual: "Months of training",
      ai: "No training needed",
      improvement: "Instant deployment"
    },
    {
      aspect: "Cost per Evaluation",
      manual: "₹500-800",
      ai: "₹25-50",
      improvement: "90% cost reduction"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Revolutionary Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your dairy farming operations with AI-powered classification that delivers 
              unprecedented accuracy, efficiency, and consistency in animal evaluation processes.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-strong transition-all duration-300 animate-scale-in group border-none shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 success-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-primary">{benefit.title}</h4>
                      <span className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                        {benefit.impact}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Comparison Section */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              Manual vs AI Classification Comparison
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left py-4 px-2 text-primary font-semibold">Evaluation Aspect</th>
                    <th className="text-center py-4 px-2 text-muted-foreground">Manual Method</th>
                    <th className="text-center py-4 px-2 text-success">AI Method</th>
                    <th className="text-center py-4 px-2 text-accent">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="border-b border-border/10 last:border-b-0">
                      <td className="py-4 px-2 font-medium text-primary">{comparison.aspect}</td>
                      <td className="py-4 px-2 text-center text-muted-foreground">{comparison.manual}</td>
                      <td className="py-4 px-2 text-center text-success font-medium">{comparison.ai}</td>
                      <td className="py-4 px-2 text-center text-accent font-bold">{comparison.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ROI Section */}
          <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Return on Investment
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our AI classification system delivers exceptional ROI through reduced operational costs, 
                improved breeding outcomes, and enhanced genetic progress in dairy herds.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-success/10 rounded-lg">
                  <span className="text-primary font-medium">Cost Savings</span>
                  <span className="text-success font-bold">90% Reduction</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg">
                  <span className="text-primary font-medium">Time Efficiency</span>
                  <span className="text-accent font-bold">720x Faster</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                  <span className="text-primary font-medium">Accuracy Improvement</span>
                  <span className="text-primary font-bold">35% Better</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-strong animate-scale-in">
              <h4 className="text-lg font-bold text-primary mb-6 text-center">
                Monthly Impact for 1000 Animals
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Manual Cost</span>
                  <span className="text-destructive font-bold">₹6,00,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">AI Cost</span>
                  <span className="text-success font-bold">₹40,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">Monthly Savings</span>
                    <span className="text-success font-bold text-xl">₹5,60,000</span>
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

export default BenefitsSection;