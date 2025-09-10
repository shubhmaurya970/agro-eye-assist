import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Building, Users, Smartphone } from "lucide-react";

const ContactSection = () => {
  const integrationFeatures = [
    {
      icon: Smartphone,
      title: "BPA Integration",
      description: "Seamless connection with Bharat Pashudhan App for centralized data management"
    },
    {
      icon: Building,
      title: "Government Systems",
      description: "Direct integration with ministry databases and reporting systems"
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description: "Role-based access for farmers, veterinarians, and government officials"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@agriclassify.gov.in",
      description: "General inquiries and support"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91-11-2XXX-XXXX",
      description: "Technical support hotline"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Department of Animal Husbandry",
      description: "Ministry of Fisheries, Animal Husbandry and Dairying"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Integration & Contact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to revolutionize your dairy farming operations? Connect with our team to 
              integrate AI classification into your existing systems and government programs.
            </p>
          </div>

          {/* Integration Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">
              System Integration Capabilities
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {integrationFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-strong transition-all duration-300 animate-scale-in border-none shadow-soft"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-strong border-none">
              <h3 className="text-xl font-bold text-primary mb-6">
                Get Started Today
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-primary">Full Name</Label>
                    <Input id="name" placeholder="Your full name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-primary">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="organization" className="text-primary">Organization</Label>
                    <Input id="organization" placeholder="Your organization" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-primary">Role</Label>
                    <Input id="role" placeholder="Your role/position" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-primary">Subject</Label>
                  <Input id="subject" placeholder="Integration inquiry" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-primary">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements and how we can help integrate AI classification into your operations..."
                    rows={5}
                    className="mt-1"
                  />
                </div>
                
                <Button className="w-full hero-gradient shadow-soft">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 shadow-soft border-none">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{info.title}</h4>
                        <p className="text-primary font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-none bg-gradient-to-r from-success/10 to-primary/10">
                <h3 className="text-lg font-bold text-primary mb-4">
                  Ready for Deployment?
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our AI classification system is ready for immediate deployment. Contact us to:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-success rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    Schedule a live demonstration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-success rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    Discuss integration requirements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-success rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    Plan pilot implementation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-success rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    Customize for your needs
                  </li>
                </ul>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
                  Schedule Demo
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;