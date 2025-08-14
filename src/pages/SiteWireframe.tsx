import wireframeImage from "@/assets/renovease-complete-wireframe.jpg";

const SiteWireframe = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            RenovEase Website Wireframe
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Complete wireframe of your current website for UX/UI design reference
          </p>
          <div className="bg-muted/50 p-4 rounded-lg inline-block mb-6">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Right-click the image below → "Save image as"</strong> to download for your designer
            </p>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border">
          <img 
            src={wireframeImage} 
            alt="RenovEase Website Wireframe for UX/UI Design" 
            className="w-full h-auto border border-border rounded"
            onError={(e) => {
              console.log("Image failed to load:", wireframeImage);
              e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzM3NDE1MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPldpcmVmcmFtZSBsb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==";
            }}
          />
        </div>

        <div className="mt-8 bg-card p-6 rounded-xl border">
          <h2 className="text-xl font-bold text-foreground mb-4">Wireframe Information:</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-semibold text-foreground mb-2">📐 Format</h3>
              <p className="text-muted-foreground">Professional UX wireframe ready for design handoff</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">🎯 Purpose</h3>
              <p className="text-muted-foreground">For your UX/UI designer to reference and improve</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">📱 Sections Included</h3>
              <p className="text-muted-foreground">All current website sections with layout structure</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">📄 Usage</h3>
              <p className="text-muted-foreground">Download and share with your design team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteWireframe;