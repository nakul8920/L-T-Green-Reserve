import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Price", path: "/price" },
    { name: "FloorPlan", path: "/floor-plan" },
    { name: "Master Plan", path: "/master-layout" },
    { name: "Amenities", path: "/amenities" },
    { name: "Location", path: "/location" },
  ];

  const navigateToSection = (path: string) => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Navigate to the path
    navigate(path);
    
    // Scroll to section after navigation
    setTimeout(() => {
      const sectionId = path === '/' ? 'home' : path.substring(1);
      // Map pretty path to actual section id when needed
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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-green-900/90 backdrop-blur-md border-b border-green-700 shadow-xl' 
          : 'bg-white border-b border-gray-200 shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center md:grid md:grid-cols-3">
            {/* Left: Logo (Desktop) */}
            <div className="hidden md:flex items-center">
              <button onClick={() => navigateToSection('/')} className="inline-flex items-center group" aria-label="L&T Green Reserve Home">
                <img
                  src="/logo1.png"
                  alt="L&T Green Reserve"
                  className={`h-10 w-auto transition-all duration-300 ${
                    isScrolled 
                      ? 'drop-shadow-[0_4px_16px_rgba(255,255,255,0.35)] group-hover:scale-105' 
                      : 'drop-shadow-[0_4px_16px_rgba(34,197,94,0.35)] group-hover:scale-105'
                  }`}
                />
              </button>
            </div>

            {/* Center: Desktop Menu */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex items-center justify-center space-x-1 flex-nowrap whitespace-nowrap">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigateToSection(item.path)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium relative group ${
                      isScrolled
                        ? 'text-white hover:text-gold hover:bg-white/10'
                        : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${
                      isScrolled ? 'bg-gold group-hover:w-full' : 'bg-primary group-hover:w-full'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Contact Actions + Mobile Toggle (align end on desktop) */}
            <div className="flex items-center justify-between w-full md:justify-end md:space-x-2">
              {/* Mobile: Logo on the left */}
              <button onClick={() => navigateToSection('/')} className="md:hidden flex items-center group" aria-label="L&T Green Reserve Home">
                <img
                  src="/small-device-logo.png"
                  alt="L&T Green Reserve"
                  className={`h-8 w-auto transition-all duration-300 ${
                    isScrolled 
                      ? 'drop-shadow-[0_2px_8px_rgba(255,255,255,0.35)] group-hover:scale-105' 
                      : 'drop-shadow-[0_2px_8px_rgba(34,197,94,0.35)] group-hover:scale-105'
                  }`}
                />
              </button>

              {/* Desktop buttons */}
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className={`items-center space-x-2 px-4 py-2 transition-all duration-300 ${
                    isScrolled
                      ? 'border-gold text-gold hover:bg-gold/20 hover:text-white'
                      : 'border-primary text-primary bg-primary/5 hover:bg-primary hover:text-white'
                  }`}
                  onClick={() => window.open('tel:+917303665082')}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-bold text-sm">+91 7303665082</span>
                </Button>

                <Button
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 items-center space-x-2 px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="sm"
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082&text=Hi,%20I%20want%20to%20know%20more%20about%20L%20and%20T%20Green%20Reserve.')}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold text-sm">WhatsApp</span>
                </Button>
              </div>

              {/* Mobile Menu Button - Right side */}
              <Button
                variant="ghost"
                size="sm"
                className={`md:hidden transition-all duration-300 ${
                  isScrolled
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden border-t py-4 transition-all duration-300 ${
              isScrolled 
                ? 'border-green-700 bg-green-900/95 backdrop-blur-md' 
                : 'border-gray-200 bg-white'
            }`}>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigateToSection(item.path);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      isScrolled
                        ? 'text-white hover:text-gold hover:bg-white/10'
                        : 'text-gray-700 hover:text-primary hover:bg-primary/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <div className={`pt-4 border-t space-y-2 ${
                  isScrolled ? 'border-green-700' : 'border-gray-200'
                }`}>
                  <Button
                    variant="outline"
                    className={`w-full justify-start space-x-2 px-4 py-3 transition-all duration-300 ${
                      isScrolled
                        ? 'border-gold text-gold hover:bg-gold/20'
                        : 'border-primary text-primary bg-primary/5 hover:bg-primary hover:text-white'
                    }`}
                    onClick={() => window.open('tel:+917303665082')}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-bold">+91 7303665082</span>
                  </Button>
                  <Button
                    className="w-full justify-start space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300"
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082&text=Hi,%20I%20want%20to%20know%20more%20about%20L%20and%20T%20Green%20Reserve.')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="font-semibold">WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Fixed WhatsApp Button for Mobile - Outside nav for proper positioning */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button
          className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 flex items-center space-x-2 px-4 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full"
          size="lg"
          onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082&text=Hi,%20I%20want%20to%20know%20more%20about%20L%20and%20T%20Green%20Reserve.')}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold text-sm">WhatsApp</span>
        </Button>
      </div>
    </>
  );
};

export default Navigation;