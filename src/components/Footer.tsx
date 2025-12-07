import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="C7AI Solutions Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold">
                <span className="text-foreground">C7AI</span>
                <span className="gradient-text"> Solutions</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Empowering startups and small businesses with cutting-edge AI solutions. 
              From strategy to deployment, we're your partner in digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  101 Eaton Street<br />
                  Hampton, VA 23669
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href="tel:757-799-1095" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (757) 799-1095
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href="mailto:info@c7aisolutions.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@c7aisolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} C7AI Solutions LLC. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Hampton, Virginia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
