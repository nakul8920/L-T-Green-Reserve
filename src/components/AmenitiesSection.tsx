import { useState, useEffect } from "react";
import { 
  Waves, 
  Dumbbell, 
  Car, 
  Shield, 
  Wifi, 
  TreePine, 
  UtensilsCrossed, 
  Gamepad2, 
  Camera, 
  Sparkles, 
  Users, 
  Coffee,
  Mountain,
  Heart,
  Star,
  Activity,
  Home,
  Zap,
  ArrowRight,
  Play,
  MapPin,
  Clock,
  Award,
  Crown,
  Gem,
  Eye,
  Plus,
  Minus,
  CheckCircle,
  Flame,
  Sun,
  Moon,
  Sparkle,
  Zap as Lightning,
  Droplets,
  Wind,
  ChevronLeft,
  ChevronRight,
  Circle,
  ArrowLeft,
  ArrowRight as ArrowRightIcon
} from "lucide-react";

const AmenitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const amenities = [
    {
      id: 1,
      name: "Swimming Pool",
      icon: <Waves className="w-8 h-8" />,
      description: "Temperature-controlled infinity pool with panoramic golf course views and separate kids section",
      image: "/swimming pool.jpeg",
      category: "Aqua & Wellness",
      features: ["Infinity Design", "Temperature Control", "Kids Section", "Poolside Loungers"],
      status: "Premium",
      color: "from-blue-500 to-cyan-500",
      safety: "Lifeguard On Duty",
      capacity: "50 People"
    },
    {
      id: 2,
      name: "Elite Fitness Center",
      icon: <Dumbbell className="w-8 h-8" />,
      description: "World-class gymnasium with personal trainers and cutting-edge equipment",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
      category: "Fitness & Health",
      features: ["Personal Trainers", "Premium Equipment", "Yoga Studio", "Sauna"],
      status: "Elite",
      color: "from-green-500 to-emerald-500",
      timings: "24/7 Access",
      capacity: "30 People"
    },
    {
      id: 3,
      name: "Gourmet Restaurant",
      icon: <UtensilsCrossed className="w-8 h-8" />,
      description: "Fine dining experience with world-renowned chefs and extensive wine cellar",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
      category: "Dining & Entertainment",
      features: ["Fine Dining", "Wine Cellar", "Private Dining", "Chef's Table"],
      status: "Exclusive",
      color: "from-orange-500 to-red-500",
      timings: "7:00 AM - 11:00 PM",
      capacity: "80 People"
    },
    {
      id: 4,
      name: "Kids Adventure Zone",
      icon: <Gamepad2 className="w-8 h-8" />,
      description: "Interactive play area with educational games and safe environment",
      image: "/kids play zone.jpg",
      category: "Family & Kids",
      features: ["Educational Games", "Safe Environment", "Supervised Play", "Learning Center"],
      status: "Family",
      color: "from-yellow-500 to-orange-500",
      timings: "8:00 AM - 8:00 PM",
      capacity: "25 Children"
    },
    {
      id: 5,
      name: "Mini Theatre & Screening Room",
      icon: <Play className="w-8 h-8" />,
      description: "Cozy private cinema with recliner seating, 4K projection and immersive sound",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&h=800&fit=crop",
      category: "Entertainment",
      features: ["Recliner Seating", "4K Projector", "Dolby Atmos", "Private Screenings"],
      status: "Premium",
      color: "from-rose-500 to-pink-500",
      safety: "Soundproofed Room",
      capacity: "20 Seats"
    },
    {
      id: 6,
      name: "Artisan Coffee Bar",
      icon: <Coffee className="w-8 h-8" />,
      description: "Premium coffee experience with artisanal blends and expert baristas",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop",
      category: "Lifestyle & Leisure",
      features: ["Artisan Blends", "Expert Baristas", "Cozy Ambiance", "Fresh Pastries"],
      status: "Artisan",
      color: "from-amber-500 to-yellow-500",
      timings: "6:00 AM - 9:00 PM",
      capacity: "40 People"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % amenities.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? amenities.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="amenities" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent transform -skew-y-1"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              LUXURY AMENITIES
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Discover our world-class amenities through an interactive carousel experience. 
            Each amenity is designed to provide unparalleled luxury and comfort.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {amenities.map((amenity, index) => (
                <div key={amenity.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[450px]">
                    {/* Left Side - Image */}
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={amenity.image}
                        alt={amenity.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Image Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-gray-800 font-bold text-sm">{amenity.category}</span>
                          </div>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{amenity.name}</h3>
                        <p className="text-gray-200 text-sm leading-relaxed">{amenity.description}</p>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`bg-gradient-to-r ${amenity.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                          {amenity.status}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="bg-white p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${amenity.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          {amenity.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{amenity.name}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                              ))}
                            </div>
                            <span className="text-gray-600 font-medium text-sm">Premium Rated</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        {amenity.description}
                      </p>

                      {/* Info Cards */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-xl p-4 border border-primary/10">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Shield className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-gray-800 font-bold text-sm">Safety</span>
                          </div>
                          <p className="text-gray-600 font-medium text-xs">{amenity.safety || 'Lifeguard On Duty'}</p>
                        </div>
                        <div className="bg-gradient-to-r from-gold/5 to-primary/5 rounded-xl p-4 border border-gold/10">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                              <Users className="w-4 h-4 text-gold" />
                            </div>
                            <span className="text-gray-800 font-bold text-sm">Capacity</span>
                          </div>
                          <p className="text-gray-600 font-medium text-xs">{amenity.capacity}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-gray-800 mb-3">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {amenity.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-gold rounded-full"></div>
                              <span className="text-gray-700 font-medium text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex justify-center">
                        <button 
                          className="bg-gradient-to-r from-primary to-gold text-white py-3 px-8 rounded-lg font-bold text-sm hover:from-primary/90 hover:to-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                          onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082&text=Hi,%20I%20want%20to%20schedule%20a%20site%20visit%20for%20L%20and%20T%20Green%20Reserve.')}
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <Eye className="w-4 h-4" />
                            <span>Schedule Visit</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <button 
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-10 h-10 bg-gradient-to-r from-primary to-gold rounded-full flex items-center justify-center text-white hover:from-primary/90 hover:to-gold/90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {amenities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-primary to-gold scale-125 shadow-md' 
                      : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-10 h-10 bg-gradient-to-r from-primary to-gold rounded-full flex items-center justify-center text-white hover:from-primary/90 hover:to-gold/90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <p className="text-gray-600 font-medium text-sm">
              {currentSlide + 1} of {amenities.length}
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AmenitiesSection;
