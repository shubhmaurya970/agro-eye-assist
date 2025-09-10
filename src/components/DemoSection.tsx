import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Camera, BarChart3, Download, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  const [uploadStep, setUploadStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const mockResults = {
    overall_score: 85.2,
    parameters: [
      { name: "Body Length", score: 88, measurement: "156 cm", optimal: "150-160 cm" },
      { name: "Height at Withers", score: 82, measurement: "142 cm", optimal: "140-145 cm" },
      { name: "Chest Width", score: 87, measurement: "68 cm", optimal: "65-70 cm" },
      { name: "Rump Angle", score: 84, measurement: "28°", optimal: "25-30°" },
      { name: "Udder Structure", score: 86, measurement: "Excellent", optimal: "Good-Excellent" },
      { name: "Leg Structure", score: 83, measurement: "Good", optimal: "Good-Excellent" }
    ],
    classification: "Grade A",
    breeding_value: "High",
    recommendations: [
      "Suitable for breeding program",
      "Monitor udder health regularly",
      "Maintain current nutrition plan"
    ]
  };

  const handleFileUpload = () => {
    setIsProcessing(true);
    setUploadStep(1);
    
    setTimeout(() => {
      setUploadStep(2);
      setIsProcessing(false);
    }, 3000);
  };

  const resetDemo = () => {
    setUploadStep(0);
    setIsProcessing(false);
  };

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Interactive Demo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the power of AI-driven animal classification. Upload an image or try our 
              sample analysis to see how our system generates comprehensive evaluation reports in seconds.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Interface */}
            <div className="space-y-6">
              <Card className="p-8 shadow-strong border-none">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">
                  Try AI Classification
                </h3>
                
                {uploadStep === 0 && (
                  <div className="text-center">
                    <div className="border-2 border-dashed border-border rounded-2xl p-12 mb-6 hover:border-primary/50 transition-colors duration-300">
                      <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Upload animal images (JPEG, PNG)
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">
                        Multiple angles recommended for best results
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          onClick={handleFileUpload}
                          className="hero-gradient shadow-soft"
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          Upload Images
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={handleFileUpload}
                          className="border-primary/30 hover:bg-primary/5"
                        >
                          Try Sample
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {uploadStep === 1 && (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 hero-gradient rounded-full flex items-center justify-center animate-scan">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Analyzing Images...
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      AI is extracting morphological features and calculating scores
                    </p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                )}

                {uploadStep === 2 && (
                  <div>
                    <div className="text-center mb-6">
                      <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        Analysis Complete!
                      </h4>
                      <p className="text-muted-foreground">
                        Classification results generated successfully
                      </p>
                    </div>
                    
                    <div className="flex gap-3 justify-center">
                      <Button 
                        onClick={resetDemo}
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/5"
                      >
                        Try Another
                      </Button>
                      <Button className="success-gradient shadow-soft">
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 shadow-soft border-none text-center">
                  <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-semibold text-primary">99.2% Accuracy</div>
                </Card>
                <Card className="p-4 shadow-soft border-none text-center">
                  <BarChart3 className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-sm font-semibold text-primary">50+ Parameters</div>
                </Card>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              {uploadStep === 2 && (
                <Card className="p-6 shadow-strong border-none animate-scale-in">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Classification Report
                  </h3>
                  
                  {/* Overall Score */}
                  <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-primary font-semibold">Overall Score</span>
                      <span className="text-2xl font-bold text-success">{mockResults.overall_score}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Classification: {mockResults.classification}</span>
                      <span className="text-muted-foreground">Breeding Value: {mockResults.breeding_value}</span>
                    </div>
                  </div>

                  {/* Parameters */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-primary">Detailed Parameters</h4>
                    {mockResults.parameters.slice(0, 4).map((param, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <div className="font-medium text-primary text-sm">{param.name}</div>
                          <div className="text-xs text-muted-foreground">{param.measurement}</div>
                        </div>
                        <div className={`font-bold text-sm ${param.score >= 85 ? 'text-success' : param.score >= 75 ? 'text-accent' : 'text-warning'}`}>
                          {param.score}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3">AI Recommendations</h4>
                    <div className="space-y-2">
                      {mockResults.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {uploadStep !== 2 && (
                <Card className="p-6 shadow-soft border-none">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    What You'll Get
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-primary font-medium">Comprehensive Score</div>
                        <div className="text-sm text-muted-foreground">Overall classification rating with detailed breakdown</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-primary font-medium">Parameter Analysis</div>
                        <div className="text-sm text-muted-foreground">Individual scores for 50+ morphological features</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-primary font-medium">Breeding Recommendations</div>
                        <div className="text-sm text-muted-foreground">AI-generated suggestions for optimal breeding decisions</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-primary font-medium">BPA Integration</div>
                        <div className="text-sm text-muted-foreground">Automatic sync with government databases</div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;