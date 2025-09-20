import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import PricingSection from "@/components/PricingSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import MasterLayoutSection from "@/components/MasterLayoutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationAdvantage from "@/components/LocationAdvantage";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";

const Index = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when page loads
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show popup after 2 seconds

    // Scroll to section based on current route
    const scrollToSection = () => {
      const path = location.pathname;
      let sectionId = 'home'; // default to home
      
      if (path === '/') {
        sectionId = 'home';
      } else if (path.startsWith('/')) {
        sectionId = path.substring(1);
      }
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(scrollToSection, 100);
    return () => {
      clearTimeout(timer);
      clearTimeout(popupTimer);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <PricingSection />
      <FloorPlanSection />
      <MasterLayoutSection />
      <AmenitiesSection />
      <LocationAdvantage />
      <Footer />
      
      {/* Popup Form */}
      <PopupForm 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
};

export default Index;
