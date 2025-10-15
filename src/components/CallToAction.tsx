import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-success relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Connect with Your Local Community?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of workers and customers who trust Kaarya Connect for reliable, 
          verified local services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="worker" asChild className="min-w-[200px] bg-white/10 text-primary border-blue-500 hover:bg-white/90">
              <Link to="/signup-worker">
                Start as Worker
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="customer" asChild className="min-w-[200px] bg-white/10 text-white border-white hover:bg-white/20">
              <Link to="/signup-customer">
                Find Workers
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-white" />
            <span>100% Free to Start</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-white" />
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-white" />
            <span>Secure Platform</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-white" />
            <span>Local Community</span>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CallToAction;