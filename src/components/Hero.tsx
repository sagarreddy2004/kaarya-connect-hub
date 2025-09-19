import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Local workers and customers connecting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-success/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find trusted local workers
            <span className="block text-success-light">instantly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with verified skilled workers in your community. From plumbers to tutors, 
            find reliable local professionals with just a few taps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="worker" asChild className="min-w-[200px]">
              <Link to="/signup-worker">Sign Up as Worker</Link>
            </Button>
            <Button size="lg" variant="customer" asChild className="min-w-[200px]">
              <Link to="/signup-customer">Sign Up as Customer</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Instant Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Local Community</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;