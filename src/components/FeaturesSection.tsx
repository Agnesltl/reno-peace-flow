import { Calendar, MessageCircle, CheckSquare, Lightbulb } from "lucide-react";

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
    <section id="features" className="py-20 bg-gradient-section">
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
      </div>
    </section>
  );
};

export default FeaturesSection;