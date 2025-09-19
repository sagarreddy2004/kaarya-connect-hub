import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KC</span>
            </div>
            <span className="text-xl font-bold text-foreground">Kaarya Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                About
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Services
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-3">
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;