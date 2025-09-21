import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, Download, MapPin, Home, Users, Car, Star, ArrowRight, Building2, Trees, Shield, Zap } from "lucide-react";
import ContactForm from "./ContactForm";

const MasterLayoutSection = () => {
  const [showEnquireForm, setShowEnquireForm] = useState(false);

  const layoutFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Premium Residences",
      description: "600+ luxury units across 2 towers",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: "Green Spaces",
      description: "45% green cover with landscaped gardens",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Security",
      description: "Advanced security systems & surveillance",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Living",
      description: "Smart home technology & power backup",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="master-layout" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Master Layout
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience the grandeur of our master-planned community with world-class amenities, 
            lush green spaces, and premium residential towers.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Header Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-gold/10 rounded-full text-primary font-semibold text-sm">
                <Star className="w-4 h-4 mr-2" />
                Master Planned Community
              </div>
              <h3 className="text-5xl font-bold text-gray-800 leading-tight">
                L&T Green Reserve
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                A meticulously planned 6-acre development featuring two premium residential towers 
                with over 600 luxury units. Our master layout combines modern architecture with 
                sustainable living, creating an unparalleled residential experience.
              </p>
            </div>


            {/* Features - Enhanced */}
            <div className="space-y-5">
              <h4 className="text-3xl font-bold text-gray-800">Key Highlights</h4>
              <div className="grid grid-cols-1 gap-4">
                {layoutFeatures.map((feature, idx) => (
                  <div key={idx} className="group flex items-start space-x-5 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-primary to-gold text-white hover:from-primary/90 hover:to-gold/90 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setShowEnquireForm(true)}
                >
                  <Eye className="w-6 h-6 mr-3" />
                  View Master Layout
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-2 border-primary text-white hover:bg-primary hover:text-white py-5 text-lg font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  onClick={() => setShowEnquireForm(true)}
                >
                  <Download className="w-6 h-6 mr-3" />
                  Download Layout
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Click any button to access detailed master layout plans
              </p>
            </div>
          </div>

          {/* Right: Enhanced Blurred Image with Overlay */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              {/* Blurred Background Image */}
              <div 
                className="w-full h-[600px] bg-cover bg-center bg-no-repeat filter blur-sm scale-105 group-hover:scale-110 transition-transform duration-700"
                style={{ 
                  backgroundImage: `url('/master-plan.jpeg')` 
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="text-center text-white space-y-6">
                  {/* Icon with Animation */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 border border-white/30">
                      <Eye className="w-12 h-12" />
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 w-24 h-24 bg-white/10 rounded-full mx-auto animate-ping"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold mb-2">Master Layout Preview</h4>
                    <p className="text-lg text-white/90 max-w-md mx-auto leading-relaxed">
                      Click to view the complete master layout and explore our premium development with detailed amenities
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 font-bold py-4 px-8 backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-xl"
                    onClick={() => setShowEnquireForm(true)}
                  >
                    <ArrowRight className="w-5 h-5 mr-3" />
                    View Full Layout
                  </Button>
                </div>
              </div>
              
              {/* Premium Badge - Enhanced */}
              <div className="absolute top-8 right-8">
                <div className="bg-gradient-to-r from-gold to-gold-light text-black px-6 py-3 rounded-full text-sm font-bold shadow-2xl border border-gold/30">
                  <Star className="w-4 h-4 inline mr-2" />
                  Premium Layout
                </div>
              </div>
              
              {/* Bottom Info Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="text-sm font-semibold">L&T Green Reserve</div>
                      <div className="text-xs text-white/80">Master Planned Community</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">6 Acres</div>
                      <div className="text-xs text-white/80">Development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default MasterLayoutSection;
