import wireframeHero from "@/assets/wireframe-hero.jpg";
import wireframeFeatures from "@/assets/wireframe-features.jpg";
import wireframeProblemSolution from "@/assets/wireframe-problem-solution.jpg";
import wireframeTestimonials from "@/assets/wireframe-testimonials.jpg";
import wireframeTeam from "@/assets/wireframe-team.jpg";
import wireframeCta from "@/assets/wireframe-cta.jpg";

const WireframeGallery = () => {
  const wireframes = [
    {
      title: "Hero Section",
      description: "Main landing area with headline, CTA buttons, and phone mockup",
      image: wireframeHero
    },
    {
      title: "Problem & Solution",
      description: "Two-column layout explaining problems and solutions",
      image: wireframeProblemSolution
    },
    {
      title: "Features Grid",
      description: "4-card grid layout showcasing key features",
      image: wireframeFeatures
    },
    {
      title: "Credible IDs Directory",
      description: "Team/profiles grid with ratings and certifications",
      image: wireframeTeam
    },
    {
      title: "Testimonials & Stats",
      description: "Social proof section with testimonials and statistics",
      image: wireframeTestimonials
    },
    {
      title: "Call-to-Action",
      description: "Final CTA section with app download options",
      image: wireframeCta
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            RenovEase Marketing Website Wireframes
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Use these wireframes as a foundation for your Figma designs
          </p>
          <div className="bg-muted/50 p-4 rounded-lg inline-block">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> Right-click any wireframe → "Save image as" to download for Figma
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wireframes.map((wireframe, index) => (
            <div key={index} className="bg-card rounded-lg shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300">
              <div className="aspect-square bg-background p-4">
                <img 
                  src={wireframe.image} 
                  alt={`${wireframe.title} Wireframe`}
                  className="w-full h-full object-contain border border-border rounded"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {wireframe.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {wireframe.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-section p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            How to Use These Wireframes in Figma
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">1. Import Process</h3>
              <ul className="space-y-1">
                <li>• Right-click and save each wireframe image</li>
                <li>• Import images into Figma as reference layers</li>
                <li>• Set images to 50% opacity</li>
                <li>• Lock the wireframe layers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">2. Design Over Wireframes</h3>
              <ul className="space-y-1">
                <li>• Create new layers above wireframes</li>
                <li>• Use wireframes as layout guides</li>
                <li>• Apply your visual design system</li>
                <li>• Hide wireframes when design is complete</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframeGallery;