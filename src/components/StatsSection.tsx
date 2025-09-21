import { Building2, Home, Users, Trees } from "lucide-react";

const stats = [
  { icon: <Building2 className="w-6 h-6 text-gold" />, label: "Towers", value: "12" },
  { icon: <Home className="w-6 h-6 text-gold" />, label: "Luxury Homes", value: "1,200+" },
  { icon: <Users className="w-6 h-6 text-gold" />, label: "Happy Residents", value: "3,500+" },
  { icon: <Trees className="w-6 h-6 text-gold" />, label: "Green Cover", value: "45%" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-xs font-semibold tracking-wider text-gray-700 uppercase">Key Metrics</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-gold to-primary bg-clip-text text-transparent">
              Project Highlights
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-8"></div>
          <p className="text-gray-600 mt-3">Numbers that speak for themselves.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="group relative rounded-[22px] p-[1px] bg-gradient-to-r from-gold/60 via-gold/20 to-primary/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2">
              <div className="rounded-[20px] bg-gradient-to-br from-white to-gray-50/60 p-7 md:p-8 overflow-hidden relative">
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5 md:mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center ring-2 ring-gold/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {s.icon}
                    </div>
                    <span className="text-[11px] md:text-xs font-extrabold text-gray-800 uppercase tracking-[0.12em]">{s.label}</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-3 md:mb-4">
                    <span className="bg-gradient-to-r from-gold-dark via-gold to-gold-light bg-clip-text text-transparent group-hover:from-primary group-hover:via-gold group-hover:to-primary transition-all duration-500">
                      {s.value}
                    </span>
                  </div>
                  <div className="h-[3px] w-14 md:w-16 bg-gradient-to-r from-gold to-primary rounded-full opacity-70 group-hover:opacity-100 group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


