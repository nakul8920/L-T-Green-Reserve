import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { submitLeadToAppsScript } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-golf-course.jpg";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [showEnquireForm, setShowEnquireForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-bg"></div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-3 gap-6 lg:gap-12 items-center min-h-screen py-4 sm:py-8 lg:py-24">
        
        {/* Project Info Card - Left */}
        <div className="lg:col-span-1">
          <div className="card-overlay p-4 sm:p-6 lg:p-8 rounded-3xl shadow-3xl max-h-[85vh]">
            {/* Limited Time Banner */}
            <div className="bg-gradient-to-r from-primary to-primary-light text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-center mb-2 sm:mb-3 font-semibold shadow-lg">
              <div className="flex items-center justify-center space-x-1">
                <span className="text-xs">⏰</span>
                <span className="text-xs">Available For A Limited Time Only!</span>
              </div>
            </div>

            {/* Project Title */}
            <div className="text-center mb-2 sm:mb-3">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-1">L&T Green Reserve</h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-1 font-medium">At Noida Expressway, Sector-128</p>
              <p className="text-xs text-gray-500 font-semibold">By L&T Realty</p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="text-center p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-700 mb-0.5 text-xs">Land Parcel</div>
                <div className="text-sm sm:text-lg lg:text-xl font-bold text-primary">6 Acres</div>
              </div>
              <div className="text-center p-1.5 sm:p-2 bg-gray-50 rounded-lg">
                <div className="font-semibold text-gray-700 mb-0.5 text-xs">Floors</div>
                <div className="text-sm sm:text-lg lg:text-xl font-bold text-primary">45+</div>
              </div>
            </div>

            <div className="text-center mb-2 sm:mb-3 p-1.5 sm:p-2 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-700 mb-0.5 text-xs">Premium Units</div>
              <div className="text-sm sm:text-lg lg:text-xl font-bold text-primary">600+</div>
            </div>

            {/* Special Offers */}
            <div className="bg-gradient-to-r from-gold to-primary text-white p-2 sm:p-3 rounded-lg mb-2 sm:mb-3 text-center shadow-lg">
              <div className="font-bold text-xs sm:text-sm mb-0.5">🎯 Avail Early Bird Offers</div>
              <div className="text-xs font-medium">Designed by Hafeez Contractor</div>
            </div>

            {/* Pricing */}
            <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex flex-col items-center text-center min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
              <span className="font-semibold text-gray-700 text-xs sm:text-sm">Luxury 3, 4 & 5 BHK Starting</span>
              <div className="flex-1 flex items-center">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-primary tracking-tight">₹ 6.25 Cr*</span>
              </div>
              <span className="text-gray-600 font-medium text-xs">Onwards</span>
            </div>

            {/* CTA Button */}
            <Button 
              className="w-full btn-luxury text-xs sm:text-sm py-1.5 sm:py-2" 
              size="lg"
              onClick={() => setShowEnquireForm(true)}
            >
              Enquire Now
            </Button>
          </div>
        </div>

        {/* Center Hero Content */}
        <div className="lg:col-span-1 text-center text-white">
          <div className="mb-8">
            <div className="text-sm font-semibold text-gold mb-4 tracking-wider uppercase">Premium Living</div>
            <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient leading-tight">
              GOLF VIEW
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              RESIDENCES
            </h2>
            <div className="text-2xl md:text-3xl font-medium text-white/90 mb-4">
              NOIDA • SECTOR 128
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-white mx-auto"></div>
          </div>
        </div>

        {/* Contact Form - Right */}
        <div className="lg:col-span-1">
          <div className="card-overlay p-8 rounded-3xl shadow-3xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Get The Best Quote
            </h3>
            
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                if (isSubmitting) return;
                if (!name.trim() || !phone.trim() || !email.trim()) return;
                setIsSubmitting(true);
                try {
                  await submitLeadToAppsScript({ name: name.trim(), number: phone.trim(), email: email.trim(), source: "hero" });
                  toast({
                    title: "Submitted successfully",
                    description: "Our team will contact you shortly.",
                  });
                  setName("");
                  setPhone("");
                  setEmail("");
                  navigate("/thank-you");
                } catch (err) {
                  toast({
                    title: "Submission failed",
                    description: "Please try again in a moment.",
                  });
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-lg font-medium bg-white text-gray-900 placeholder-gray-500 caret-gray-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-lg font-medium bg-white text-gray-900 placeholder-gray-500 caret-gray-900"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-lg font-medium bg-white text-gray-900 placeholder-gray-500 caret-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="consent" className="leading-tight font-medium">
                  I consent to the use of provided data in accordance with the privacy policy
                </label>
              </div>

              <Button type="submit" className="w-full btn-luxury text-lg py-4" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "📞 Get Best Quote Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Enquire Form */}
      <ContactForm 
        isOpen={showEnquireForm} 
        onClose={() => setShowEnquireForm(false)}
        type="enquire"
      />
    </section>
  );
};

export default HeroSection;