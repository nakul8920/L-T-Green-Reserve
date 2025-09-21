import React, { useState } from "react";
import buildingImage from "@/assets/building-facade.jpg";
import ContactForm from "./ContactForm";

const WelcomeSection = () => {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const features = [
    { title: "6-Acre Development", highlight: "Premium Community" },
    { title: "45+ Floors", highlight: "Sky-High Living" },
    { title: "600+ Units", highlight: "3, 4 & 5 BHK" },
    { title: "₹6.25 Cr*", highlight: "Starting Price" }
  ];

  return (
    <>
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Premium Living</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Welcome To L&T Green Reserve
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience ultra-luxury living in Noida's most prestigious address. 
            Where contemporary architecture meets world-class amenities.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">Acres</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">45+</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">Floors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">600+</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">Units</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">₹ 6.25Cr*</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider">Starting</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Redefining Luxury Living
              </h2>
              
              <div className="space-y-3">
                <p className="text-base text-gray-600 leading-relaxed">
                  <span className="text-primary font-semibold">L&T Realty</span> presents an iconic residential masterpiece 
                  perfectly positioned at Sector 128, Noida. This prestigious development combines 
                  contemporary architecture with world-class amenities.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Designed by renowned architect <span className="text-primary font-semibold">Hafeez Contractor</span>, 
                  the project offers expansive 3, 4, and 5 BHK residences with prices starting from 
                  <span className="text-primary font-bold"> ₹6.25 Cr* onwards</span>.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="group p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-500">{feature.highlight}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                className="btn-luxury px-6 py-3 text-base font-semibold"
                onClick={() => setShowBrochureForm(true)}
              >
                Download Brochure
              </button>
              <button 
                className="px-6 py-3 text-base font-semibold border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082&text=Hi,%20I%20want%20to%20schedule%20a%20site%20visit%20for%20L%20and%20T%20Green%20Reserve.')}
              >
                Schedule Visit
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={buildingImage} 
                  alt="L&T Green Reserve Building" 
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <h3 className="text-2xl font-bold mb-2">Premium Architecture</h3>
                    <p className="text-base text-gray-200 mb-3">Designed by Hafeez Contractor</p>
                    <div className="flex items-center space-x-3">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold">45+</div>
                        <div className="text-xs text-gray-300">Floors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-gold">600+</div>
                        <div className="text-xs text-gray-300">Units</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black rounded-2xl shadow-3xl p-5 border border-yellow-300 ring-2 ring-gold/40">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black mb-1 tracking-tight drop-shadow">₹6.25 Cr*</div>
                <div className="text-[11px] md:text-xs font-semibold uppercase tracking-wider">Starting Price</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Limited</div>
                <div className="text-xs text-gray-500">Time Offer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Brochure Form Modal */}
    <ContactForm 
      isOpen={showBrochureForm} 
      onClose={() => setShowBrochureForm(false)} 
      type="brochure" 
    />
    </>
  );
};

export default WelcomeSection;