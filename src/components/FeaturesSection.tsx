import { Calendar, MessageCircle, CheckSquare, Lightbulb } from "lucide-react";
import sketchKitchen from "@/assets/sketch-kitchen-plan.jpg";
import sketchLivingRoom from "@/assets/sketch-living-room.jpg";
import sketchTimeline from "@/assets/sketch-bathroom-timeline.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Progress Timeline",
      description: "See every milestone at a glance—know what's done, what's delayed, and what's next.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Comments & Concerns",
      description: "Voice your ideas, concerns, and clarifications directly inside the app.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: CheckSquare,
      title: "Approvals Made Simple",
      description: "No more back-and-forth. Approve changes with one tap, with everything logged for accountability.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Idea Box",
      description: "Save inspirations and design ideas in one place to share with your ID.",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Hand-drawn elements background */}
      <div className="absolute inset-0 bg-design-elements opacity-[0.02] bg-repeat" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for Peace of Mind
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to keep your renovation project on track and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hand-drawn Design Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              From Sketch to Reality
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Just like Interior Designers sketch their ideas, RenovEase captures every detail of your renovation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-soft group-hover:shadow-medium transition-shadow duration-300">
                <img 
                  src={sketchKitchen} 
                  alt="Hand-drawn kitchen renovation plan" 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Plan & Design</h4>
              <p className="text-muted-foreground text-sm">Capture initial sketches and design concepts</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-soft group-hover:shadow-medium transition-shadow duration-300">
                <img 
                  src={sketchTimeline} 
                  alt="Hand-drawn renovation timeline" 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Track Progress</h4>
              <p className="text-muted-foreground text-sm">Monitor each phase from concept to completion</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-soft group-hover:shadow-medium transition-shadow duration-300">
                <img 
                  src={sketchLivingRoom} 
                  alt="Hand-drawn living room concept" 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Bring to Life</h4>
              <p className="text-muted-foreground text-sm">See your designer's vision become reality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;