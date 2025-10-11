import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Star, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Home,
  Wrench,
  Zap,
  Hammer,
  Palette,
  Truck,
  Monitor,
  Camera
} from "lucide-react";

const Landing = () => {
  const services = [
    { icon: Home, name: "Home Cleaning", description: "Professional cleaning services", providers: 45 },
    { icon: Wrench, name: "Plumbing", description: "Expert plumbing solutions", providers: 32 },
    { icon: Zap, name: "Electrical", description: "Licensed electrical work", providers: 28 },
    { icon: Hammer, name: "Carpentry", description: "Custom woodwork and repairs", providers: 23 },
    { icon: Palette, name: "Painting", description: "Interior and exterior painting", providers: 19 },
    { icon: Truck, name: "Moving", description: "Reliable moving services", providers: 15 },
    { icon: Monitor, name: "Tech Support", description: "Computer and tech help", providers: 12 },
    { icon: Camera, name: "Photography", description: "Professional photography", providers: 8 },
  ];

  const features = [
    {
      icon: Shield,
      title: "Trusted & Verified",
      description: "All service providers are background-checked and verified"
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "Rate and review system ensures top-quality services"
    },
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Book services instantly with flexible scheduling"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Trusted Local Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect with skilled professionals in your area. From home cleaning to repairs, 
            find the right service provider for every need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-2 shadow-lg flex">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full pl-10 pr-4 py-3 text-gray-900 rounded-lg focus:outline-none"
                />
              </div>
              <Button size="lg" className="ml-2">
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/services">Browse Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/signup">Join as Provider</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most requested services in your area
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                    <p className="text-xs text-gray-500">{service.providers} providers</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="mt-8">
              <Link to="/services">View More Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Kaarya Connect?</h2>
            <p className="text-xl text-gray-600">
              Your trusted platform for connecting with local service providers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <IconComponent className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Getting the help you need is simple
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Post Your Need</h3>
              <p className="text-gray-600">
                Describe what you need help with and get matched with qualified providers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Provider</h3>
              <p className="text-gray-600">
                Compare profiles, reviews, and prices to select the best provider for you
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get It Done</h3>
              <p className="text-gray-600">
                Work gets completed safely and you pay securely through our platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect service provider
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/services">
                Find Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link to="/signup">Become a Provider</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;