import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Check, 
  X, 
  Star, 
  ArrowRight,
  Users,
  Building,
  Globe
} from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Users,
      description: "Perfect for small farms and individual researchers",
      monthlyPrice: 299,
      annualPrice: 2390, // 20% off
      features: [
        "Up to 100 classifications/month",
        "Basic parameter analysis",
        "Email support",
        "Mobile app access",
        "Standard reporting"
      ],
      limitations: [
        "Limited API access",
        "No custom parameters",
        "No priority support"
      ],
      popular: false
    },
    {
      name: "Professional",
      icon: Building,
      description: "Ideal for medium farms and research institutions",
      monthlyPrice: 899,
      annualPrice: 7192, // 33% off
      features: [
        "Up to 1,000 classifications/month",
        "Advanced parameter analysis",
        "Priority email & chat support",
        "Mobile + web app access",
        "Advanced reporting & analytics",
        "API access (5,000 calls/month)",
        "Custom parameter configuration",
        "Data export capabilities"
      ],
      limitations: [
        "Limited integrations",
        "No dedicated support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      icon: Globe,
      description: "For large operations and government agencies",
      monthlyPrice: 2499,
      annualPrice: 19992, // 33% off
      features: [
        "Unlimited classifications",
        "Full parameter suite",
        "24/7 dedicated support",
        "All platforms + API",
        "Custom reporting & dashboards",
        "Unlimited API calls",
        "Custom parameter development",
        "Full data ownership",
        "White-label options",
        "On-premise deployment",
        "Training & onboarding",
        "SLA guarantee"
      ],
      limitations: [],
      popular: false
    }
  ];

  const addOns = [
    {
      name: "Additional Classifications",
      price: "₹2 per classification",
      description: "Extra classifications beyond your plan limit"
    },
    {
      name: "Custom Parameter Development",
      price: "₹50,000 one-time",
      description: "Development of breed-specific parameters"
    },
    {
      name: "Training & Consultation",
      price: "₹15,000 per day",
      description: "On-site training and system setup"
    },
    {
      name: "Priority Support",
      price: "₹10,000 per month",
      description: "Dedicated support manager and 2-hour response SLA"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Flexible Pricing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Choose the Perfect 
                <span className="text-primary block">Plan for You</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transparent pricing designed to grow with your operation. 
                No hidden fees, no setup costs.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <Switch
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                />
                <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  Annual
                </span>
                <Badge variant="secondary" className="ml-2">
                  Save up to 33%
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative p-8 ${plan.popular ? 'ring-2 ring-primary shadow-elegant' : ''}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 hero-gradient">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">
                        ₹{isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-muted-foreground">
                          Billed annually (₹{plan.annualPrice})
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start">
                        <X className="w-5 h-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${plan.popular ? 'hero-gradient' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Add-ons & Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enhance your plan with additional services and support options
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{addon.name}</h3>
                    <span className="text-primary font-bold">{addon.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{addon.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can I change my plan anytime?
                </h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
                  immediately, and we'll prorate the billing accordingly.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What happens if I exceed my classification limit?
                </h3>
                <p className="text-muted-foreground">
                  We'll notify you when you're approaching your limit. You can either upgrade 
                  your plan or purchase additional classifications at ₹2 per classification.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Is there a free trial available?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 14-day free trial with 50 free classifications so you can 
                  test our platform before committing to a paid plan.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Do you offer discounts for educational institutions?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide special pricing for universities, research institutions, 
                  and government agencies. Contact our sales team for custom pricing.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Operation?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust AgriClassify for 
                their animal classification needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" className="hero-gradient shadow-soft">
                  Start Free Trial
                </Button>
                <Button variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;