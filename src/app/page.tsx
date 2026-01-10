import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Showcase } from "@/components/home/Showcase";
import { Equipment } from "@/components/home/Equipment";
import { FunForEveryone } from "@/components/home/FunForEveryone";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UseCases } from "@/components/home/UseCases";
import { FAQ } from "@/components/home/FAQ";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "SwingSpot",
    "description": "Premier indoor golf simulator in Clovis, NM using Trackman 4 technology.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "224 N. Main Street",
      "addressLocality": "Clovis",
      "addressRegion": "NM",
      "postalCode": "88101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.4048", // Approximate for Clovis
      "longitude": "-103.2052"
    },
    "url": "https://swingspot.com", // Placeholder
    "telephone": "+1-575-555-0123", // Placeholder
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": ["Clovis, NM", "Portales, NM", "Muleshoe, TX"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main className="min-h-screen">
        <Hero />
        <TrustStrip />
        <Showcase />
        <Equipment />
        <FunForEveryone />
        <FeaturesGrid />
        <HowItWorks />
        <UseCases />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
