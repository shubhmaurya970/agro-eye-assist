import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">AI</span>
                </div>
                <span className="text-xl font-bold">AgriClassify</span>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
                Revolutionizing dairy farming through AI-powered animal type classification. 
                Supporting the Rashtriya Gokul Mission with cutting-edge technology for 
                genetic improvement and breeding excellence.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Try Demo
                </Button>
                <Button size="sm" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#background" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Background
                  </a>
                </li>
                <li>
                  <a href="#government" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Government Context
                  </a>
                </li>
                <li>
                  <a href="#solution" className="text-primary-foreground/80 hover:text-white transition-colors">
                    AI Solution
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80">contact@agriclassify.gov.in</p>
                    <p className="text-sm text-primary-foreground/60">General inquiries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80">+91-11-2XXX-XXXX</p>
                    <p className="text-sm text-primary-foreground/60">Technical support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80">Ministry of Fisheries, Animal Husbandry and Dairying</p>
                    <p className="text-sm text-primary-foreground/60">Government of India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 AgriClassify. All rights reserved. Developed for Rashtriya Gokul Mission.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;