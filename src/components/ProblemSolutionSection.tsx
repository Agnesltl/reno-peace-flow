import { AlertCircle, CheckCircle, Users, MessageSquare } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why RenovEase?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Common Renovation Problems
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Communication Breakdowns</h4>
                  <p className="text-muted-foreground">
                    Renovation nightmares happen when communication breaks down between homeowners and contractors.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Feeling Lost & Overwhelmed</h4>
                  <p className="text-muted-foreground">
                    Homeowners feel lost, IDs feel overwhelmed, and subcontractors get blamed for delays and miscommunication.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No Clear Progress Tracking</h4>
                  <p className="text-muted-foreground">
                    Without proper tracking, important details get overlooked and accountability disappears.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Side */}
          <div className="bg-gradient-section p-8 md:p-12 rounded-3xl shadow-medium">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              The RenovEase Solution
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Crystal Clear Communication</h4>
                  <p className="text-muted-foreground">
                    Keep everyone aligned with real-time updates, comments, and instant notifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Complete Transparency</h4>
                  <p className="text-muted-foreground">
                    See progress, raise issues instantly, and hold your ID accountable every step of the way.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Peace of Mind</h4>
                  <p className="text-muted-foreground">
                    No detail is ever overlooked with our comprehensive tracking and approval system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;