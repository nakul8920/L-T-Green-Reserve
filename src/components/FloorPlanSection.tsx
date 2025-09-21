import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Share2, Eye, Maximize2, Home, Car, Users, Star } from "lucide-react";
import ContactForm from "./ContactForm";

const FloorPlanSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [showEnquireForm, setShowEnquireForm] = useState(false);

  const floorPlans = [
    {
      id: 1,
      name: "Majesta 3 BHK",
      size: "2850 sq.ft.",
      price: "₹6.25 Cr*",
      bedrooms: 3,
      bathrooms: 3,
      image: "/floor-1.jpeg",
      features: ["Dual-aspect living", "Deck with golf views", "2 car parks", "Premium finishes"],
      popular: true
    },
    {
      id: 2,
      name: "Millenia 3 BHK",
      size: "3075 sq.ft.",
      price: "Price on Request",
      bedrooms: 4,
      bathrooms: 4,
      image: "/floor-2.jpeg",
      features: ["Corner-plan privacy", "Private lounge", "3 car parks", "Luxury amenities"],
      popular: false
    },
    {
      id: 3,
      name: "Presidential 4 BHK",
      size: "3555 sq.ft.",
      price: "Price on Request",
      bedrooms: 5,
      bathrooms: 5,
      image: "/floor-3.jpeg",
      features: ["Double-height living", "Exclusive lift lobby", "Terrace with plunge", "Penthouse luxury"],
      popular: true
    },
    {
      id: 4,
      name: "Royale 5 BHK",
      size: "5085 sq.ft.",
      price: "Price on Request",
      bedrooms: 3,
      bathrooms: 2,
      image: "/floor-4.jpeg",
      features: ["Modern layout", "Balcony views", "1 car park", "Smart home ready"],
      popular: false
    },
    {
      id: 5,
      name: "Rgalia 5 BHK",
      size: "5720 sq.ft.",
      price: "Price on Request",
      bedrooms: 4,
      bathrooms: 3,
      image: "/floor-5.jpeg",
      features: ["Spacious living", "Master suite", "2 car parks", "Premium location"],
      popular: false
    }
  ];

  return (
    <section id="floor-plan" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Floor Plans
            </span>
          </h2>
          <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-6 lg:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Choose from our carefully curated collection of premium floor plans, 
            each designed to offer the perfect blend of luxury and functionality.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left: Floor Plan List */}
          <div className="space-y-3 lg:space-y-6">
            {floorPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`group cursor-pointer transition-all duration-300 ${
                  selectedPlan === index 
                    ? 'transform scale-105' 
                    : 'hover:scale-102'
                }`}
                onClick={() => setSelectedPlan(index)}
              >
                <div className={`p-3 lg:p-6 rounded-xl lg:rounded-2xl border-2 transition-all duration-300 ${
                  selectedPlan === index
                    ? 'border-primary bg-primary/5 shadow-xl'
                    : 'border-gray-200 bg-white hover:border-primary/50 hover:shadow-lg'
                }`}>
                  {/* Mobile Layout */}
                  <div className="lg:hidden">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                          selectedPlan === index
                            ? 'border-primary bg-primary'
                            : 'border-gray-300 group-hover:border-primary'
                        }`}></div>
                        <div>
                          <h3 className="text-base font-bold text-gray-800">{plan.name}</h3>
                          <p className="text-xs text-gray-600">{plan.size}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-primary">{plan.price}</div>
                        {plan.popular && (
                          <div className="flex items-center text-gold text-xs">
                            <Star className="w-2.5 h-2.5 mr-1" />
                            Popular
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <div className="flex items-center space-x-1">
                          <Home className="w-3 h-3 text-primary" />
                          <span className="text-xs text-gray-600">{plan.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 text-primary" />
                          <span className="text-xs text-gray-600">{plan.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Car className="w-3 h-3 text-primary" />
                          <span className="text-xs text-gray-600">{plan.bedrooms - 1} Cars</span>
                        </div>
                      </div>
                      <ArrowRight className={`w-3 h-3 text-gray-400 transition-all duration-300 ${
                        selectedPlan === index ? 'text-primary' : 'group-hover:text-primary'
                      }`} />
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden lg:block">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          selectedPlan === index
                            ? 'border-primary bg-primary'
                            : 'border-gray-300 group-hover:border-primary'
                        }`}></div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
                          <p className="text-gray-600">{plan.size}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary mb-1">{plan.price}</div>
                        {plan.popular && (
                          <div className="flex items-center text-gold text-sm">
                            <Star className="w-4 h-4 mr-1" />
                            Popular
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                          <Home className="w-5 h-5 text-primary" />
                          <span className="text-gray-600">{plan.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="text-gray-600">{plan.bathrooms} Baths</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Car className="w-5 h-5 text-primary" />
                          <span className="text-gray-600">{plan.bedrooms - 1} Cars</span>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                        selectedPlan === index ? 'text-primary' : 'group-hover:text-primary'
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Selected Plan Details */}
          <div className="lg:sticky lg:top-24 mt-8 lg:mt-0">
            <div className="bg-gray-50 rounded-3xl p-4 lg:p-8 shadow-xl">
              {/* Plan Image */}
              <div className="relative mb-6 lg:mb-8 group cursor-pointer" onClick={() => setShowEnquireForm(true)}>
                <img
                  src={floorPlans[selectedPlan].image}
                  alt={floorPlans[selectedPlan].name}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg filter blur-sm select-none pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 rounded-2xl bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-full text-xs sm:text-sm font-semibold border border-white/40">
                    Click to view – verification required
                  </div>
                </div>
                <div className="absolute top-2 right-2 lg:top-4 lg:right-4 flex space-x-2">
                  <Button size="sm" className="bg-white/90 text-gray-700 hover:bg-white h-8 w-8 lg:h-10 lg:w-10 p-0" onClick={(e) => { e.stopPropagation(); setShowEnquireForm(true); }}>
                    <Eye className="w-3 h-3 lg:w-4 lg:h-4" />
                  </Button>
                  <Button size="sm" className="bg-white/90 text-gray-700 hover:bg-white h-8 w-8 lg:h-10 lg:w-10 p-0" onClick={(e) => { e.stopPropagation(); setShowEnquireForm(true); }}>
                    <Maximize2 className="w-3 h-3 lg:w-4 lg:h-4" />
                  </Button>
                </div>
              </div>

              {/* Plan Info */}
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                    {floorPlans[selectedPlan].name}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 lg:mb-4">{floorPlans[selectedPlan].size}</p>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 lg:mb-6">
                    {floorPlans[selectedPlan].price}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 lg:mb-4">Key Features</h4>
                  <div className="space-y-2 lg:space-y-3">
                    {floorPlans[selectedPlan].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 lg:space-x-3">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm lg:text-base text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                 {/* Action Buttons */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   <Button 
                     className="w-full bg-primary text-white hover:bg-primary/90 py-3 lg:py-4 text-sm lg:text-lg font-semibold"
                     onClick={() => setShowBrochureForm(true)}
                   >
                     <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                     Download Brochure
                   </Button>
                   <Button 
                     variant="outline"
                     className="w-full border-2 border-primary text-white hover:bg-primary hover:text-white py-3 lg:py-4 text-sm lg:text-lg font-semibold"
                     onClick={() => setShowEnquireForm(true)}
                   >
                     Enquire to View Plan
                   </Button>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Download Brochure Form */}
      <ContactForm 
        isOpen={showBrochureForm} 
        onClose={() => setShowBrochureForm(false)}
        type="brochure"
      />

      {/* Enquire to View Form */}
      <ContactForm 
        isOpen={showEnquireForm} 
        onClose={() => setShowEnquireForm(false)}
        type="enquire"
      />
    </section>
  );
};

export default FloorPlanSection;