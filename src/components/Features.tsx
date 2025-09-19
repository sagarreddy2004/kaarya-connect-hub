import { CheckCircle, Users, Clock, Shield, Star, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Verified Profiles",
      description: "All workers go through KYC verification and background checks to ensure trust and safety in our community."
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Real feedback from local customers helps you choose the best workers and maintain quality standards."
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Book skilled workers instantly with preferred time slots. No more waiting for callbacks or approvals."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Safe and secure payment processing with multiple options. Pay only when the job is completed satisfactorily."
    },
    {
      icon: Users,
      title: "Local Community",
      description: "Supporting local talent and small businesses in rural and small-town communities across the region."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Built-in dispute resolution and customer support to ensure fair and satisfactory service delivery."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Kaarya Connect?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built a platform that puts trust, quality, and community at the center of every connection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-success rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;