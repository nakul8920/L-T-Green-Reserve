# L&T Green Reserve — Sector 128, Noida

A modern, responsive real estate landing website for L&T Green Reserve, built as an internship project at Grow Infinity Realtors. It showcases ultra-luxury golf view residences with wellness-focused design in Sector 128, Noida.

##  Internship Context — Grow Infinity Realtors
Grow Infinity Realtors is a highly regarded real estate agent firm based in Noida, known for expertise in buying/selling premium properties across NCR.

## Operational Zones
- Sector-150, Ghaziabad, Noida Expressway
- Yamuna Expressway, Siddharth Vihar, Noida Extension

## Project Highlights
- Luxury 3, 4 & 5 BHK residences — starting at ₹6.25 Cr*
- Premium theme with responsive, mobile-first UI/UX
- Designed by Hafeez Contractor (as highlighted in hero/offer strip)
- Golf-view positioning, sector/location emphasis (Sector 128, Noida Expressway)
- Floor Plans with gated view (blurred images) that open an enquiry form before viewing
- Dual lead funnels: Enquire Now and Download Brochure with modal forms
- Validated lead forms with 10-digit mobile pattern, smooth animations, and thank-you flip state
- Pricing grid with tiered offerings + WhatsApp CTA to schedule site visit
- Location Advantage section with embedded map and interactive pins
- SEO-ready with title, description, keywords and Open Graph tags in `index.html`
- Full favicon set and web manifest for multi-device support
- Client-side routing and a dedicated Terms & Conditions page

## Tech Stack
- Vite, React, TypeScript
- Tailwind CSS
- shadcn/ui components (buttons, dialogs, forms, etc.)
- React Router, TanStack Query (React Query)
- Lucide Icons

##  Routes
Implemented via `src/App.tsx`:
- `/` (Home)
- `/price` → same landing view anchored to pricing
- `/floor-plan` → same landing view anchored to floor plans
- `/master-layout` → same landing view anchored to master layout
- `/amenities` → same landing view anchored to amenities
- `/location` → same landing view anchored to location
- `/terms-and-conditions` → terms page
- `/thank-you` → post-submit state route

##  Key Sections/Components
- `HeroSection` — project title, key stats (6 Acres, 45+ Floors, 600+ Premium Units), price highlight, enquiry CTA
- `FloorPlanSection` — selectable plans with name, size, price, features; blurred previews; brochure download and enquiry modals
- `PricingSection` — tiered pricing/features, enquire button, Schedule Visit via WhatsApp deep link
- `LocationAdvantage` — embedded map, strategic pins, quick-access buttons
- `ContactForm` & `PopupForm` — validated forms with flip animation to success state and route change to `/thank-you`
- `Navigation`, `Footer`, `AmenitiesSection`, `MasterLayoutSection`, `StatsSection`, `WelcomeSection` — supporting UI sections

## 🗂️ Project Structure (top-level)
```text
sector-128/
  index.html
  package.json
  favicon/
  public/
    logo1.png
    floor-*.jpeg
  src/
    main.tsx
    App.tsx
    pages/
      Index.tsx
      TermsAndConditions.tsx
    components/
      HeroSection.tsx
      FloorPlanSection.tsx
      PricingSection.tsx
      LocationAdvantage.tsx
      ContactForm.tsx
      PopupForm.tsx
      Navigation.tsx
      Footer.tsx
      AmenitiesSection.tsx
      MasterLayoutSection.tsx
      StatsSection.tsx
      ui/  (shadcn components)
    assets/
      hero-golf-course.jpg
    hooks/
      use-mobile.tsx
  tailwind.config.ts
  vite.config.ts
  tsconfig.json
```

