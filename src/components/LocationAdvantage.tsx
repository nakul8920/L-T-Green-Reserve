import { MapPin, Train, Building, Plane, ShoppingBag, GraduationCap, Heart, Target, ArrowRight, Clock } from "lucide-react";

const LocationAdvantage = () => {
  const advantages = [
    {
      icon: <Train className="w-5 h-5" />,
      title: "Expressway Connectivity",
      description: "Near Noida-Greater Noida Expressway – seamless connectivity to Delhi & Greater Noida.",
      time: "5 mins",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Business Hub Proximity",
      description: "Close to Axis House and major IT/Business Parks (e.g., Aditya Tech Park).",
      time: "8 mins",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "Airport Access",
      description: "Upcoming Noida International Airport nearby.",
      time: "45 mins",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Shopping & Dining",
      description: "Proximity to DLF Mall of India and Skymark One for shopping & dining.",
      time: "12 mins",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Premium Education",
      description: "Nearby Amity University and Jaypee Institute of Information Technology.",
      time: "15 mins",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-gray-700 uppercase">Strategic Location</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Location Advantage
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically positioned for maximum convenience and connectivity across Noida and Delhi NCR.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Animated Cards (First 5) */}
          <div className="space-y-6">
            {advantages.slice(0, 5).map((advantage, index) => (
              <div 
                key={advantage.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-gold/40 via-primary/30 to-gold/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="rounded-[15px] bg-white/90 backdrop-blur-sm p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${advantage.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {advantage.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                            {advantage.title}
                          </h3>
                          {advantage.time !== "0 mins" && (
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                              <Clock className="w-3 h-3" />
                              {advantage.time}
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                          {advantage.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className={`h-1 w-8 bg-gradient-to-r ${advantage.color} rounded-full`} />
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interactive Map Visualization */}
          <div className="relative mt-8">
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-gold/60 via-primary/40 to-gold/60 shadow-2xl">
              <div className="rounded-[22px] bg-white/95 backdrop-blur-sm overflow-hidden">
                {/* Map Header */}
                <div className="p-6 border-b border-gray-200/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">L&T Green Reserve</h3>
                      <p className="text-sm text-gray-600">Sector 128, Noida Expressway</p>
                    </div>
                  </div>
                </div>

                {/* Map Area */}
                <div className="relative h-96 bg-gradient-to-br from-primary/5 via-gray-50 to-gold/5">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2345678901234!2d77.3910!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1234567890%3A0x1234567890abcdef!2sSector%20128%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-3xl"
                    title="L&T Green Reserve Location Map"
                  />
                  
                  {/* Overlay with location pins */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Central Pin for L&T Green Reserve */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-primary shadow-lg flex items-center justify-center border-2 border-white">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute -inset-4 rounded-full bg-primary/20 animate-ping" />
                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
                            <div className="text-sm font-bold text-gray-900">L&T Green Reserve</div>
                            <div className="text-xs text-primary">Sector 128, Noida</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Nearby Location Pins */}
                    {[
                      { top: "15%", left: "20%", label: "Noida-Greater Noida Expressway", time: "5 mins", color: "from-blue-500 to-cyan-500" },
                      { top: "25%", right: "25%", label: "IT Parks & Business Hub", time: "8 mins", color: "from-green-500 to-emerald-500" },
                      { top: "10%", right: "15%", label: "Noida International Airport", time: "45 mins", color: "from-purple-500 to-indigo-500" },
                      { bottom: "30%", left: "25%", label: "DLF Mall of India", time: "12 mins", color: "from-orange-500 to-red-500" },
                      { bottom: "20%", right: "20%", label: "Amity University", time: "15 mins", color: "from-yellow-500 to-amber-500" }
                    ].map((location, index) => (
                      <div 
                        key={location.label}
                        className="absolute group"
                        style={{ [location.top ? 'top' : 'bottom']: location.top || location.bottom, [location.left ? 'left' : 'right']: location.left || location.right }}
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${location.color} flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-transform duration-300 border border-white`}>
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg border border-gray-200">
                            <div className="text-xs font-semibold text-gray-900">{location.label}</div>
                            <div className="text-[10px] text-primary">{location.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Footer */}
                <div className="p-6 bg-gradient-to-r from-primary/5 to-gold/5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">5 Key Advantages</span> within easy reach
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => window.open('https://www.google.com/maps/search/L%26T+Green+Reserve+Sector+128+Noida', '_blank')}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors duration-300"
                      >
                        View Map
                      </button>
                      <button 
                        onClick={() => window.open('https://www.google.com/maps/dir//L%26T+Green+Reserve+Sector+128+Noida', '_blank')}
                        className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors duration-300"
                      >
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationAdvantage;

