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
      <div className="container mx-auto px-4 py-6 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center text-center">
          
          {/* Brand & Contact */}
          <div>
            <div className="mb-4 md:mb-6">
              <img
                src="/logo1.png"
                alt="L&T Green Reserve"
                className="h-12 w-auto drop-shadow-[0_4px_16px_rgba(255,255,255,0.35)] hidden md:block"
              />
              <img
                src="/small-device-logo.png"
                alt="L&T Green Reserve"
                className="h-8 w-auto drop-shadow-[0_4px_16px_rgba(255,255,255,0.35)] block md:hidden"
              />
            </div>
            
            <p className="text-white/90 mb-4 md:mb-6 leading-relaxed text-sm md:text-base hidden md:block">
              Ultra-luxury residential project offering premium 3, 4 & 5 BHK residences 
              in one of Noida's most coveted addresses.
            </p>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center justify-center space-x-2 md:space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="text-sm md:text-base">+91 7303665082</span>
              </div>
              <div className="flex items-center justify-center space-x-2 md:space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="text-sm md:text-base">info@lntgreenreserve.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 md:space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="text-sm md:text-base">Sector 128, Noida Expressway</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-1.5 md:gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button 
                    onClick={() => navigateToSection(link.path)}
                    className="text-white/80 hover:text-gold transition-colors duration-200 text-center text-sm md:text-base w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact CTA */}
          <div className="text-center col-span-2 md:col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-6">Get In Touch</h3>
            <p className="text-white/90 mb-4 md:mb-6 text-sm md:text-base hidden md:block">
              Ready to experience luxury living? Contact us today for exclusive offers and site visits.
            </p>
            
            <div className="grid grid-cols-2 gap-2 md:gap-3 justify-items-center">
              <Button 
                className="bg-gradient-to-r from-gold to-gold-light text-black hover:from-gold-light hover:to-gold font-semibold shadow-lg text-sm md:text-base py-2 md:py-3"
                onClick={() => window.open('tel:+917303665082')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 font-semibold backdrop-blur-sm text-sm md:text-base py-2 md:py-3"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Project Stats */}
            <div className="hidden md:grid grid-cols-2 gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gold">6</div>
                <div className="text-xs md:text-sm text-white/70">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gold">600+</div>
                <div className="text-xs md:text-sm text-white/70">Units</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-4 md:mt-12 pt-3 md:pt-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-white text-xs md:text-sm text-center">
              © 2025 L&T Green Reserve. All rights reserved. | GREEN RESERVE TOWER 1 & 2 | UPRERAPRJ459796/09/2025
            </div>
            <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="/terms-and-conditions" className="text-white hover:text-gold transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;