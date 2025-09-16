import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Download, FileText, Settings, User, BarChart3, Camera, Share2 } from "lucide-react";
import heroImage from "@/assets/hero-cows-ai.jpg";

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState(heroImage);

  const analysisResults = [
    { label: "Rump Angle Score", value: "8", score: 7.9, color: "bg-purple-500", bgColor: "bg-purple-100" },
    { label: "Rump Width Score", value: "7", score: 4.6, color: "bg-blue-500", bgColor: "bg-blue-100" },
    { label: "Body Length Score", value: "9", score: 2.9, color: "bg-cyan-500", bgColor: "bg-cyan-100" },
    { label: "Bone Structure Score", value: "8", score: 3.4, color: "bg-orange-500", bgColor: "bg-orange-100" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="h-16 bg-white border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <span className="text-lg font-semibold">ToqSiCim</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" size="sm">Home</Button>
            <Button variant="ghost" size="sm">Upload</Button>
            <Button variant="ghost" size="sm">Results</Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share Coupliftion
          </Button>
          <Button variant="ghost" size="sm">30+ 2005</Button>
          <div className="w-8 h-8 bg-primary rounded-full"></div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-border p-6 h-[calc(100vh-4rem)]">
          {/* Upload Section */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Upload className="w-5 h-5 mr-2 text-primary" />
                Upload Animal Image
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <img 
                  src={selectedImage} 
                  alt="Animal" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-primary text-white">
                    <Camera className="w-3 h-3 mr-1" />
                  </Badge>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Your calf name
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-6 h-6 bg-gray-200 rounded mr-2"></div>
                    <span className="font-medium">Breed: Holstein Friesian</span>
                  </div>
                  <div className="text-xs text-muted-foreground ml-8">
                    Detection: Ooh!!!Binguin
                  </div>
                  <div className="text-xs text-muted-foreground ml-8">
                    As et cecca teeth.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3 mb-6">
            <Button className="w-full" variant="default">
              <Upload className="w-4 h-4 mr-2" />
              199 Upload More
            </Button>
            <Button className="w-full" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Browse Files
            </Button>
          </div>

          {/* Additional Options */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-primary rounded mr-2"></div>
              <span>Mark homepage</span>
            </div>
            <div className="flex items-center text-red-500">
              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
              <span>Health</span>
              <span className="ml-auto">extremist</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Analysis Results Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Analysis Results</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">File specified: Birindek</span>
              <Badge className="bg-green-100 text-green-800">Scientific!</Badge>
            </div>
          </div>

          {/* Analysis Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {analysisResults.map((result, index) => (
              <Card key={index} className={`${result.bgColor}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">{result.label}</h3>
                    <div className={`w-2 h-2 ${result.color} rounded-full`}></div>
                  </div>
                  <div className="text-2xl font-bold mb-1">{result.value}</div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {result.label === "Rump Angle Score" ? "Broad Analysis" : 
                     result.label === "Rump Width Score" ? "Broad Width" :
                     result.label === "Body Length Score" ? "Body Length" : "Bone Analysis"}
                  </div>
                  <div className="text-xs font-medium">{result.score}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Milk Production and Prediction */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Milk Production */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Milk Production</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-500 mb-2">35 <span className="text-sm font-normal">lts/day</span></div>
                <div className="text-sm text-muted-foreground mb-4">HIGH production</div>
                
                {/* Good for Breeding Section */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-green-700">Good for Breeding</span>
                  </div>
                  <div className="text-xs text-green-600">Excellent milk production genetics</div>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>High quality milk</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Genetic potential</span>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <div className="w-8 h-8 bg-orange-200 rounded"></div>
                  <div className="space-y-1">
                    <div className="w-4 h-2 bg-green-500 rounded"></div>
                    <div className="w-4 h-2 bg-blue-500 rounded"></div>
                    <div className="w-4 h-2 bg-purple-500 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Milk Production Prediction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Milk Production Prediction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-32 mb-4">
                  <div className="w-24 h-24 border-4 border-green-500 rounded-full flex items-center justify-center bg-green-50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700">HIGH</div>
                      <div className="text-xs text-green-600">potential</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-green-600 text-center font-medium">Excellent Genetics</div>
              </CardContent>
            </Card>
          </div>

          {/* Extra Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Extra Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Comparison Mode</h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <img src={heroImage} alt="Cow 1" className="w-full h-20 object-cover rounded" />
                    <img src={heroImage} alt="Cow 2" className="w-full h-20 object-cover rounded" />
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">1min11 Spot: discontinuously</div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Discale</h4>
                  <div className="mb-4">
                    <img src={heroImage} alt="Mask measurement" className="w-full h-32 object-cover rounded" />
                  </div>
                  <div className="text-xs text-muted-foreground">Mask with measure</div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4 mt-6">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Feed & Care Rerominai
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Settings className="w-4 h-4 mr-2" />
                  Langing height ones
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-border p-6 h-[calc(100vh-4rem)]">
          {/* Health Index */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Health Index</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Breeding</span>
                    <span>Demand</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-green-600 font-medium">Good</div>
                    <div className="text-muted-foreground">Average</div>
                  </div>
                  <div>
                    <div className="text-orange-600 font-medium">Average</div>
                    <div className="text-muted-foreground">Poor</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Pet Department</div>
              </div>
            </CardContent>
          </Card>

          {/* Breed Score Comparison */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Breed Score Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Your Animal</span>
                  <span className="text-lg font-bold text-green-600">8.2</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '82%'}}></div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm">Breed Average</span>
                  <span className="text-lg font-bold text-blue-600">6.5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '65%'}}></div>
                </div>
                
                <div className="text-xs text-green-600 text-center mt-3 font-medium">
                  26% above breed average
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feed & Care Recommendation */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Feed & Care Recommendation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Dracomontie</div>
                    <div className="text-xs text-muted-foreground">Bloscent inside</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs">Phe in teosporanget three-in what and enzeare Vasuharbmatethe th dosnosoorfite</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs">thGloria asp ceptilicier By dhawain abhssole vainagwanirhinongatrietor</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2 mt-0.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-xs">siHipriviaiwableaananentia li fantentho Mesidailsinib anima Prosoephaln controal</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Language</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <Badge variant="outline">CHO</Badge>
                  <Badge variant="outline">HIT</Badge>
                  <Badge variant="outline">BE</Badge>
                </div>
                <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Cantinent Siphis</span>
                  <span className="ml-auto text-muted-foreground">weewham roblor</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span>Selas sisfull r seadies rerereadont</span>
                  <div className="ml-auto w-6 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;