import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Brain, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Camera,
      title: "Advanced Image Analysis",
      description: "Upload high-resolution images and let our AI extract detailed body parameters with precision.",
      features: ["Multi-angle capture", "Automatic cropping", "Quality validation", "Batch processing"]
    },
    {
      icon: Brain,
      title: "AI-Powered Classification",
      description: "Our deep learning models analyze 50+ parameters to provide accurate animal type classification.",
      features: ["Neural networks", "Computer vision", "Pattern recognition", "Continuous learning"]
    },
    {
      icon: BarChart3,
      title: "Comprehensive Scoring",
      description: "Generate standardized scores based on established breeding protocols and scientific standards.",
      features: ["Standardized metrics", "Comparative analysis", "Historical tracking", "Performance insights"]
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Seamlessly integrate with Bharat Pashudhan App for field operations and data synchronization.",
      features: ["BPA integration", "Offline capability", "Real-time sync", "Field-friendly UI"]
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security ensures your data is protected with advanced encryption.",
      features: ["End-to-end encryption", "GDPR compliant", "Secure storage", "Access controls"]
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Get instant results with our optimized AI pipeline that processes images in seconds.",
      features: ["Sub-second response", "Cloud processing", "Auto-scaling", "24/7 availability"]
    }
  ];

  const technicalSpecs = [
    { label: "Processing Speed", value: "< 3 seconds" },
    { label: "Accuracy Rate", value: "99.2%" },
    { label: "Supported Formats", value: "JPG, PNG, HEIC" },
    { label: "Max Image Size", value: "50MB" },
    { label: "API Uptime", value: "99.9%" },
    { label: "Concurrent Users", value: "10,000+" }
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
                Advanced AI Technology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Powerful Features for 
                <span className="text-primary block">Smart Agriculture</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how our comprehensive AI platform revolutionizes animal type classification 
                with cutting-edge technology and user-friendly interfaces.
              </p>
              <Button variant="default" className="hero-gradient shadow-soft">
                Try Demo Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Core Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need for accurate and efficient animal type classification
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Technical Specifications</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for performance, reliability, and scale
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{spec.value}</div>
                  <div className="text-muted-foreground">{spec.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Developer Friendly
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Easy Integration with RESTful API
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our comprehensive API makes it easy to integrate AI-powered classification 
                  into your existing systems. With detailed documentation and SDKs for 
                  popular programming languages.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">RESTful API with JSON responses</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">SDKs for Python, Node.js, and PHP</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">Comprehensive documentation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">Webhook support for real-time updates</span>
                  </div>
                </div>
                
                <Button variant="outline" className="mr-4">
                  View Documentation
                </Button>
                <Button variant="default" className="hero-gradient">
                  Get API Key
                </Button>
              </div>
              
              <Card className="p-6 bg-muted/50">
                <div className="text-sm text-muted-foreground mb-2">Example API Request</div>
                <pre className="bg-background p-4 rounded-lg text-sm text-foreground overflow-x-auto">
{`curl -X POST https://api.agriclassify.com/v1/classify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "image=@cattle_image.jpg" \\
  -F "type=cattle"

{
  "classification": "Grade A",
  "confidence": 0.992,
  "parameters": {
    "body_length": 85.2,
    "height_at_withers": 132.5,
    "chest_width": 45.8
  }
}`}
                </pre>
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
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of farmers and researchers who trust AgriClassify for 
                accurate animal type classification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" className="hero-gradient shadow-soft">
                  Start Free Trial
                </Button>
                <Button variant="outline">
                  Schedule Demo
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

export default Features;