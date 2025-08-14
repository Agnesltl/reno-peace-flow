import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2">
              Stress-Free Home
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Renovations, Finally.
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up">
            Track progress, raise concerns, and work only with credible IDs—all in one app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-hero px-8 py-4 text-lg"
              onClick={() => {
                // Scroll to the CTA section or you could implement signup modal
                document.querySelector('section:last-of-type')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-border hover:bg-secondary/50 px-8 py-4 text-lg"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>

          {/* App Mockup */}
          <div className="relative max-w-md mx-auto animate-float">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative bg-card rounded-[3rem] p-2 shadow-hero">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content - Enhanced RenovEase App Interface */}
                  <div className="aspect-[9/19.5] bg-gradient-to-b from-background to-secondary/20 relative">
                    {/* Status Bar */}
                    <div className="h-6 bg-background flex items-center justify-between px-6 text-xs text-foreground">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-foreground rounded-full"></div>
                          <div className="w-1 h-1 bg-foreground rounded-full"></div>
                          <div className="w-1 h-1 bg-foreground rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header with Progress */}
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-sm">Modern Kitchen Reno</h3>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">65%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <p className="text-xs opacity-90 mt-2">Next: Cabinet Installation • 3 days</p>
                    </div>
                    
                    {/* Recent Photos Section */}
                    <div className="p-4">
                      <h4 className="text-xs font-semibold text-foreground mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Latest Progress Photos
                      </h4>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg relative overflow-hidden">
                          <div className="absolute inset-2 bg-gradient-to-br from-gray-300 to-gray-400 rounded"></div>
                          <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-xs p-1 rounded text-center">
                            Plumbing Done
                          </div>
                        </div>
                        <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg relative overflow-hidden">
                          <div className="absolute inset-2 bg-gradient-to-br from-amber-300 to-amber-400 rounded"></div>
                          <div className="absolute bottom-1 left-1 right-1 bg-black/50 text-white text-xs p-1 rounded text-center">
                            Electrical Work
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Timeline */}
                    <div className="px-4 pb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-3">Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                          <div className="flex-1 bg-green-50 p-2 rounded-lg">
                            <p className="text-xs font-medium text-foreground">Demolition Complete</p>
                            <p className="text-xs text-green-600">✓ Finished Mar 15</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-primary rounded-full shadow-sm animate-pulse"></div>
                          <div className="flex-1 bg-blue-50 p-2 rounded-lg border-l-2 border-primary">
                            <p className="text-xs font-medium text-foreground">Plumbing & Electrical</p>
                            <p className="text-xs text-primary">🔧 In progress</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-muted rounded-full"></div>
                          <div className="flex-1 bg-gray-50 p-2 rounded-lg opacity-60">
                            <p className="text-xs font-medium text-muted-foreground">Cabinet Installation</p>
                            <p className="text-xs text-muted-foreground">📅 Starts Mar 25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border/20 p-3">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-primary rounded-lg mx-auto mb-1 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm"></div>
                          </div>
                          <span className="text-xs text-primary font-medium">Timeline</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted rounded-lg mx-auto mb-1 flex items-center justify-center">
                            <div className="w-3 h-2 bg-white rounded-sm"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">Photos</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted rounded-lg mx-auto mb-1 flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <span className="text-xs text-muted-foreground">Chat</span>
                        </div>
                      </div>
                    </div>
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

export default HeroSection;