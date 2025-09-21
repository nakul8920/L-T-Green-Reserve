import React, { useState } from "react";
import ContactForm from "./ContactForm";

const tiers = [
  {
    name: "Majesta 3 BHK",
    price: "₹6.25 Cr*",
    features: ["2850 sq.ft.", "Dual-aspect living", "Deck with golf views", "2 car parks"],
    accent: "from-gold to-gold-light",
  },
  {
    name: "Presidential 4 BHK",
    price: "On Request",
    features: ["3555 sq.ft.", "Corner-plan privacy", "Private lounge", "3 car parks"],
    highlight: true,
    accent: "from-gold to-white/80",
  },
  {
    name: "Rgalia 5 BHK",
    price: "On Request",
    features: ["5720 sq.ft.", "Double-height living", "Exclusive lift lobby", "Terrace with plunge"],
    accent: "from-gold-dark to-gold",
  },
];

const PricingSection: React.FC = () => {
  const [showEnquireForm, setShowEnquireForm] = useState(false);

  return (
    <section id="price" className="relative py-24 bg-background overflow-hidden">
      {/* Background aurora */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl bg-gradient-to-tr from-primary to-gold"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl bg-gradient-to-tr from-primary to-gold"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gold to-white">
            Signature Pricing & Privileges
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Curated residences with privileges that elevate everyday living. Choose your signature.
          </p>
        </div>

        {/* Glass grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative group rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl overflow-hidden ${
                tier.highlight ? "md:-mt-6 md:mb-6 ring-2 ring-gold/40" : ""
              }`}
            >
              {/* Gradient edge */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tier.accent}`}></div>

              {/* Halo on hover */}
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 blur-2xl bg-gradient-to-r ${tier.accent} opacity-20`}></div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <span className="text-sm text-white/80">Limited Release</span>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-white">
                    {tier.price}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/90">
                      <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${tier.accent}`}></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <button 
                    className="rounded-lg bg-gold-gradient text-black font-medium py-2.5 hover:opacity-90 transition"
                    onClick={() => setShowEnquireForm(true)}
                  >
                    Enquire
                  </button>
                  <button 
                    className="rounded-lg border border-gold text-white font-medium py-2.5 hover:bg-gold/20 transition"
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=+917303665082&text=Hi,%20I%20want%20to%20schedule%20a%20site%20visit%20for%20L%20and%20T%20Green%20Reserve.')}
                  >
                    Schedule Visit
                  </button>
                </div>
              </div>

              {/* Corner badge */}
              <div className="absolute -right-12 -top-12 rotate-45">
                <div className="w-48 py-2 text-center text-xs font-semibold text-black bg-gold-gradient shadow-lg">
                  L&T Exclusive
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="mt-10 text-center text-xs text-white/80">
          * Taxes and statutory charges extra. Prices subject to availability.
        </p>
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

export default PricingSection;
