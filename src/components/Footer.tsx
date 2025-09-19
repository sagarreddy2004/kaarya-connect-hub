import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KC</span>
              </div>
              <span className="text-xl font-bold">Kaarya Connect</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Connecting skilled local workers with customers in rural and small-town communities. 
              Building trust, one job at a time.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-white/80 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-white/80">support@kaaryaconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-white/80">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Kaarya Connect. All rights reserved. Empowering local communities through trusted connections.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;