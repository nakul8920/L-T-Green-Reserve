import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Price", path: "/price" },
    { name: "FloorPlans", path: "/floor-plan" },
    { name: "Master Plan", path: "/master-layout" },
    { name: "Amenities", path: "/amenities" },
    { name: "Location", path: "/location" }
  ];

  const navigateToSection = (path: string) => {
    // Navigate to the path
    navigate(path);
    
    // Scroll to section after navigation
    setTimeout(() => {
      const sectionId = path === '/' ? 'home' : path.substring(1);
      const resolvedId = sectionId === 'master-layout' ? 'master-layout' : sectionId;
      const element = document.getElementById(resolvedId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="container mx-auto px-4 py-6 md:py-10">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {/* Brand Section */}
          <div className="text-center">
            <div className="mb-3">
              <img
                src="/small-device-logo.png"
                alt="L&T Green Reserve"
                className="h-8 w-auto drop-shadow-[0_4px_16px_rgba(255,255,255,0.35)] mx-auto"
              />
            </div>
            <p className="text-white/90 mb-3 leading-relaxed text-xs">
              Ultra-luxury residential project offering premium 3, 4 & 5 BHK residences 
              in one of Noida's most coveted addresses.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-4 h-4 text-gold" />
              <span className="text-sm">+91 7303665082</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-sm">info@lntgreenreserve.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-sm">Sector 128, Noida Expressway</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-center">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1">
              {quickLinks.map((link) => (
                <button 
                  key={link.path}
                  onClick={() => navigateToSection(link.path)}
                  className="text-white/80 hover:text-gold transition-colors duration-200 text-center text-xs py-1.5 px-2 rounded-lg hover:bg-white/10"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-center">Get In Touch</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                className="bg-gradient-to-r from-gold to-gold-light text-black hover:from-gold-light hover:to-gold font-semibold shadow-lg text-xs py-2"
                onClick={() => window.open('tel:+917303665082')}
              >
                <Phone className="w-3 h-3 mr-1" />
                Call Now
              </Button>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 font-semibold backdrop-blur-sm text-xs py-2"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082')}
              >
                <MessageCircle className="w-3 h-3 mr-1" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Project Stats - Mobile */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/20">
            <div className="text-center">
              <div className="text-xl font-bold text-gold">6</div>
              <div className="text-xs text-white/70">Acres</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gold">600+</div>
              <div className="text-xs text-white/70">Units</div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Brand & Contact */}
          <div>
            <div className="mb-4">
              <img
                src="/logo1.png"
                alt="L&T Green Reserve"
                className="h-10 w-auto drop-shadow-[0_4px_16px_rgba(255,255,255,0.35)]"
              />
            </div>
            
            <p className="text-white/90 mb-4 leading-relaxed text-sm">
              Ultra-luxury residential project offering premium 3, 4 & 5 BHK residences 
              in one of Noida's most coveted addresses.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-base">+91 7303665082</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-base">info@lntgreenreserve.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-base">Sector 128, Noida Expressway</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button 
                    onClick={() => navigateToSection(link.path)}
                    className="text-white/80 hover:text-gold transition-colors duration-200 text-sm w-full text-left py-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-white/90 mb-4 text-sm">
              Ready to experience luxury living? Contact us today for exclusive offers and site visits.
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                className="bg-gradient-to-r from-gold to-gold-light text-black hover:from-gold-light hover:to-gold font-semibold shadow-lg text-sm py-2"
                onClick={() => window.open('tel:+917303665082')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 font-semibold backdrop-blur-sm text-sm py-2"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">6</div>
                <div className="text-sm text-white/70">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">600+</div>
                <div className="text-sm text-white/70">Units</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-4 md:mt-6 pt-3 md:pt-4">
          <div className="flex flex-col items-center space-y-2 md:space-y-3">
            <div className="text-white text-xs md:text-sm text-center leading-relaxed">
              © 2025 L&T Green Reserve. All rights reserved.
            </div>
            <div className="text-white/80 text-xs text-center leading-relaxed">
              GREEN RESERVE TOWER 1 & 2 | UPRERAPRJ459796/09/2025
            </div>
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="/terms-and-conditions" className="text-white/80 hover:text-gold transition-colors duration-200">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;