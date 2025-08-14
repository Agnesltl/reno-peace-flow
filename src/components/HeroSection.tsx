import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Stress-Free Home
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Renovations, Finally.
            </span>
          </h1>
          
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
                  {/* Screen Content - RenovEase App Interface */}
                  <div className="aspect-[9/19.5] bg-background relative">
                    {/* Status Bar */}
                    <div className="h-6 bg-background flex items-center justify-between px-6 text-xs text-foreground">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-foreground rounded-sm opacity-60"></div>
                        <div className="w-6 h-2 bg-foreground rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="bg-primary text-white p-4">
                      <h3 className="font-semibold text-sm">Kitchen Renovation</h3>
                      <p className="text-xs opacity-90">Progress: 65% Complete</p>
                    </div>
                    
                    {/* Progress Timeline */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground">Demolition</p>
                          <p className="text-xs text-muted-foreground">Completed 3 days ago</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground">Plumbing & Electrical</p>
                          <p className="text-xs text-muted-foreground">In progress</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-muted-foreground">Flooring</p>
                          <p className="text-xs text-muted-foreground">Starts in 5 days</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Recent Comments */}
                    <div className="px-4 pb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2">Recent Updates</h4>
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        <p className="text-xs text-foreground mb-1">Sarah (Designer)</p>
                        <p className="text-xs text-muted-foreground">"Electrical work on schedule. Cabinet delivery confirmed for Friday."</p>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-background border-t border-border p-3">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <div className="w-6 h-6 bg-primary rounded mx-auto mb-1"></div>
                          <span className="text-xs text-primary">Timeline</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted rounded mx-auto mb-1"></div>
                          <span className="text-xs text-muted-foreground">Comments</span>
                        </div>
                        <div className="text-center">
                          <div className="w-6 h-6 bg-muted rounded mx-auto mb-1"></div>
                          <span className="text-xs text-muted-foreground">Ideas</span>
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