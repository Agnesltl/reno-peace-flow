import completeWireframes from "@/assets/complete-wireframes.jpg";

const WireframeView = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            RenovEase Marketing Website - Complete Wireframes
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            All sections mapped out for Figma design reference
          </p>
          <div className="bg-muted/50 p-4 rounded-lg inline-block mb-6">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Right-click the image below → "Save image as"</strong> to download for Figma
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-large">
          <img 
            src={completeWireframes} 
            alt="Complete RenovEase Marketing Website Wireframes" 
            className="w-full h-auto border border-border rounded"
          />
        </div>

        <div className="mt-8 bg-gradient-section p-6 rounded-xl">
          <h2 className="text-xl font-bold text-foreground mb-4">Wireframe Sections Included:</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-foreground mb-2">📱 Hero Section</h3>
              <p className="text-muted-foreground">Navigation, headline, CTAs, phone mockup</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">⚡ Problem & Solution</h3>
              <p className="text-muted-foreground">Two-column layout with pain points vs solutions</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">⭐ Features Grid</h3>
              <p className="text-muted-foreground">4-card showcase of key app features</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">👥 Credible IDs</h3>
              <p className="text-muted-foreground">Directory of certified interior designers</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">💬 Testimonials</h3>
              <p className="text-muted-foreground">Social proof with customer reviews and stats</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">🎯 Call-to-Action</h3>
              <p className="text-muted-foreground">Final conversion section with app downloads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframeView;