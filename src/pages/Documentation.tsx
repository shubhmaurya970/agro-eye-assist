import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Code, 
  Zap, 
  Shield,
  Copy,
  ExternalLink,
  CheckCircle
} from "lucide-react";

const Documentation = () => {
  const quickStartSteps = [
    {
      title: "Sign Up & Get API Key",
      description: "Create your account and obtain your unique API key from the dashboard.",
      code: `# Your API key will look like this:
API_KEY="ak_live_1234567890abcdef"`
    },
    {
      title: "Install SDK",
      description: "Install our SDK for your preferred programming language.",
      code: `# Python
pip install agriclassify-python

# Node.js  
npm install agriclassify-node

# PHP
composer require agriclassify/php-sdk`
    },
    {
      title: "Make Your First Request",
      description: "Upload an image and get classification results.",
      code: `from agriclassify import AgriClassify

client = AgriClassify(api_key="your_api_key")
result = client.classify_image("path/to/cattle.jpg", animal_type="cattle")
print(f"Classification: {result.grade}")`
    }
  ];

  const endpoints = [
    {
      method: "POST",
      endpoint: "/v1/classify",
      description: "Classify an animal from uploaded image",
      params: ["image (file)", "type (string)", "options (object)"]
    },
    {
      method: "GET",
      endpoint: "/v1/classification/{id}",
      description: "Retrieve classification results by ID",
      params: ["id (string)"]
    },
    {
      method: "GET",
      endpoint: "/v1/parameters",
      description: "Get list of available parameters for classification",
      params: ["type (string, optional)"]
    },
    {
      method: "POST",
      endpoint: "/v1/batch",
      description: "Process multiple images in batch",
      params: ["images (array)", "type (string)", "webhook_url (string, optional)"]
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
                Developer Resources
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                API Documentation
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Everything you need to integrate AgriClassify into your applications. 
                Simple, powerful, and well-documented APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" className="hero-gradient">
                  <Code className="mr-2 h-4 w-4" />
                  Get API Key
                </Button>
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Examples
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Quick Start Guide</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get up and running with AgriClassify API in minutes
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {quickStartSteps.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 hero-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Code</span>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    <pre className="text-xs text-foreground overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">API Reference</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete reference for all available endpoints and methods
              </p>
            </div>

            <Tabs defaultValue="endpoints" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                <TabsTrigger value="authentication">Auth</TabsTrigger>
                <TabsTrigger value="responses">Responses</TabsTrigger>
                <TabsTrigger value="errors">Errors</TabsTrigger>
              </TabsList>

              <TabsContent value="endpoints" className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={endpoint.method === 'GET' ? 'secondary' : 'default'}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm text-foreground">{endpoint.endpoint}</code>
                        </div>
                        <p className="text-muted-foreground">{endpoint.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Parameters:</h4>
                      <div className="space-y-1">
                        {endpoint.params.map((param, idx) => (
                          <code key={idx} className="text-xs text-muted-foreground block">
                            {param}
                          </code>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="authentication">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Authentication</h3>
                  <p className="text-muted-foreground mb-4">
                    AgriClassify uses API key authentication. Include your API key in the Authorization header:
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <pre className="text-sm text-foreground">
                      <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                    </pre>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm text-foreground">API keys are unique to each account</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm text-foreground">Keep your API key secure and never expose it client-side</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span className="text-sm text-foreground">Rate limits apply based on your subscription plan</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="responses">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Response Format</h3>
                  <p className="text-muted-foreground mb-4">
                    All API responses are returned in JSON format with a consistent structure:
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <pre className="text-sm text-foreground overflow-x-auto">
                      <code>{`{
  "success": true,
  "data": {
    "classification_id": "cls_abc123",
    "grade": "Grade A",
    "confidence": 0.992,
    "parameters": {
      "body_length": 85.2,
      "height_at_withers": 132.5,
      "chest_width": 45.8,
      "rump_angle": 28.5
    },
    "processed_at": "2024-01-15T10:30:00Z"
  },
  "metadata": {
    "processing_time": 2.3,
    "model_version": "v2.1.0"
  }
}`}</code>
                    </pre>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="errors">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Error Handling</h3>
                  <p className="text-muted-foreground mb-4">
                    AgriClassify uses conventional HTTP response codes to indicate success or failure:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="secondary">200</Badge>
                      <div>
                        <div className="font-medium text-foreground">OK</div>
                        <div className="text-sm text-muted-foreground">Request succeeded</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="destructive">400</Badge>
                      <div>
                        <div className="font-medium text-foreground">Bad Request</div>
                        <div className="text-sm text-muted-foreground">Invalid request parameters</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="destructive">401</Badge>
                      <div>
                        <div className="font-medium text-foreground">Unauthorized</div>
                        <div className="text-sm text-muted-foreground">Invalid or missing API key</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="destructive">429</Badge>
                      <div>
                        <div className="font-medium text-foreground">Rate Limited</div>
                        <div className="text-sm text-muted-foreground">Too many requests</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Official SDKs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use our official SDKs to integrate AgriClassify in your favorite programming language
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Python SDK</h3>
                <p className="text-muted-foreground mb-4">
                  Full-featured Python library with async support
                </p>
                <Button variant="outline" className="w-full">
                  View on PyPI
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Node.js SDK</h3>
                <p className="text-muted-foreground mb-4">
                  TypeScript-first SDK for Node.js applications
                </p>
                <Button variant="outline" className="w-full">
                  View on NPM
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">PHP SDK</h3>
                <p className="text-muted-foreground mb-4">
                  Lightweight PHP library with Laravel support
                </p>
                <Button variant="outline" className="w-full">
                  View on Packagist
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our developer support team is here to help you integrate successfully
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" className="hero-gradient">
                  <Shield className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <Zap className="mr-2 h-4 w-4" />
                  Join Discord
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

export default Documentation;