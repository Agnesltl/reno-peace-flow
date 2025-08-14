import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award } from "lucide-react";

const CredibleIDsSection = () => {
  const designers = [
    {
      name: "Sarah Chen",
      firm: "Modern Living Design",
      rating: 4.9,
      projects: 45,
      image: "SC"
    },
    {
      name: "Daniel Rodriguez",
      firm: "Elegant Spaces",
      rating: 4.8,
      projects: 62,
      image: "DR"
    },
    {
      name: "Emily Thompson",
      firm: "Coastal Interiors",
      rating: 5.0,
      projects: 38,
      image: "ET"
    },
    {
      name: "Michael Park",
      firm: "Urban Nest Design",
      rating: 4.9,
      projects: 51,
      image: "MP"
    }
  ];

  return (
    <section id="ids" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle sketch pattern background */}
      <div className="absolute inset-0 bg-sketch-pattern opacity-[0.015] bg-repeat" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Find Trusted IDs Who Use RenovEase
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We work with Interior Designers who believe in transparency and accountability. 
            Browse our directory of RenovEase-certified IDs, read homeowner reviews, and choose with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {designers.map((designer, index) => (
            <div key={index} className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                  {designer.image}
                </div>
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                  <Award className="w-3 h-3 mr-1" />
                  Certified
                </Badge>
              </div>

              {/* Designer Info */}
              <div className="text-center">
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  {designer.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {designer.firm}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-foreground font-medium ml-1">
                    {designer.rating}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    ({designer.projects} projects)
                  </span>
                </div>

                <Badge variant="secondary" className="text-xs">
                  RenovEase Certified
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-4">
            Browse All Certified IDs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CredibleIDsSection;