import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah T.",
      role: "Homeowner",
      content: "RenovEase made my renovation stress-free. I could track progress daily and never felt in the dark. My designer was always responsive, and I knew exactly what was happening every step of the way.",
      rating: 5
    },
    {
      name: "Daniel L.",
      role: "Interior Designer",
      content: "My clients love the transparency. RenovEase helps me keep everything organized and builds trust from day one. It's become an essential part of how I run my business.",
      rating: 5
    }
  ];

  const stats = [
    { number: "90%", label: "Fewer Disputes Reported" },
    { number: "1,200+", label: "Projects Tracked" },
    { number: "100+", label: "Trusted IDs Onboard" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Homeowners and Designers Alike
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary/30 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;