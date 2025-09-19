import { Wrench, Zap, BookOpen, Paintbrush, Scissors, Car, Home, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Expert plumbers for repairs, installations, and maintenance",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Licensed electricians for all your electrical needs",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: BookOpen,
      title: "Tutoring",
      description: "Qualified tutors for all subjects and age groups",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Professional painters for interior and exterior work",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Scissors,
      title: "Beauty & Salon",
      description: "Hair stylists, beauticians, and grooming experts",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Car,
      title: "Auto Repair",
      description: "Skilled mechanics and auto service professionals",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: Home,
      title: "Home Cleaning",
      description: "Reliable cleaning services for homes and offices",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Laptop,
      title: "Tech Support",
      description: "Computer repair and technical assistance",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Services at Your Fingertips
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From everyday repairs to specialized skills, find the right professional for every job in your local community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;