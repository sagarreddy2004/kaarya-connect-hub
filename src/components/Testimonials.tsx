import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialsImg from "@/assets/testimonials-bg.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Homeowner",
      content: "Found an excellent plumber within minutes! The service was professional and the pricing was fair. Kaarya Connect made it so easy.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Raj Kumar",
      role: "Electrician",
      content: "As a local electrician, this platform has helped me reach more customers in my area. The verification process gave me credibility.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Meera Patel",
      role: "Working Mother",
      content: "Needed a math tutor for my daughter urgently. Found a qualified teacher nearby who has been amazing. Highly recommend!",
      rating: 5,
      avatar: "MP"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={testimonialsImg} 
          alt="Happy customers and workers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real stories from real people who have found success through Kaarya Connect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-strong bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Verified Workers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2000+</div>
              <div className="text-sm">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.8/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;