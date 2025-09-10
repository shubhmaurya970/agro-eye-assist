import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="text-primary">AgriClassify</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Pioneering the future of dairy farming through artificial intelligence and precision agriculture
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At AgriClassify, we believe that precision agriculture is the key to sustainable farming. 
                  Our AI-powered Animal Type Classification system eliminates human bias and subjectivity, 
                  ensuring that every evaluation is consistent, accurate, and scientifically sound.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We're committed to supporting India's Rashtriya Gokul Mission by providing cutting-edge 
                  technology that accelerates genetic improvement programs and enhances dairy productivity.
                </p>
                <Button variant="default" className="hero-gradient">
                  Learn More About Our Technology
                </Button>
              </div>
              <div className="relative">
                <div className="card p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Researchers</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary">99.2%</div>
                      <div className="text-sm text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-sm text-muted-foreground">States</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team of AI researchers, veterinarians, and agricultural experts work together 
                to revolutionize dairy farming.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="w-20 h-20 hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DR</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-primary mb-2">Chief AI Researcher</p>
                <p className="text-muted-foreground text-sm">
                  PhD in Computer Vision, 15+ years in agricultural AI research
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-20 h-20 hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DS</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Dr. Sunita Sharma</h3>
                <p className="text-primary mb-2">Veterinary Specialist</p>
                <p className="text-muted-foreground text-sm">
                  DVM, Animal Genetics expert with focus on dairy cattle breeding
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-20 h-20 hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Arjun Mehta</h3>
                <p className="text-primary mb-2">Product Director</p>
                <p className="text-muted-foreground text-sm">
                  Former Google engineer, specialized in scaling AI products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Precision</h3>
                <p className="text-muted-foreground">
                  Every measurement matters. We strive for absolute accuracy in every classification.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  Working hand-in-hand with farmers, researchers, and government agencies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Building technology that supports sustainable and ethical farming practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;