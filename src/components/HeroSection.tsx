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
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-hero px-8 py-4 text-lg">
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
                  {/* Screen Content Placeholder */}
                  <div className="aspect-[9/19.5] bg-gradient-hero relative">
                    <div className="absolute inset-4 bg-background/10 rounded-xl backdrop-blur-sm">
                      <div className="p-4 space-y-4">
                        <div className="h-8 bg-background/20 rounded-lg"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-background/20 rounded w-3/4"></div>
                          <div className="h-4 bg-background/20 rounded w-1/2"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-20 bg-background/20 rounded-lg"></div>
                          <div className="h-20 bg-background/20 rounded-lg"></div>
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