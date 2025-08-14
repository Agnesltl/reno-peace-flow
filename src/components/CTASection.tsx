import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Plan your dream home with confidence.
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Join RenovEase and turn your renovation journey into a smooth experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 shadow-large px-8 py-4 text-lg font-semibold"
          >
            Get Started Free
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
          >
            Browse Trusted IDs
          </Button>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 h-14 px-6"
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 h-14 px-6"
            >
              <div className="flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;