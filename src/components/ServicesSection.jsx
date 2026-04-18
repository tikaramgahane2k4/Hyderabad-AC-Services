import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceDetailsView from "./ServiceDetailsView";
import QuoteRequestModal from "./QuoteRequestModal";

const services = [
  {
    title: "AC Installation",
    description:
      "Precision installation for split, ducted, and central AC systems with optimal airflow planning.",
    longDescription:
      "We design and install cooling systems for offices, retail spaces, and multi-unit business locations with a focus on uptime, airflow balance, and long-term efficiency.",
    includes: ["Site assessment and load planning", "Equipment selection guidance", "Mounting, piping, and commissioning", "Testing for airflow and performance"],
    bestFor: "New commercial fit-outs, office upgrades, and replacement installs.",
    businessValue: "A properly installed system reduces maintenance costs, improves comfort, and protects operational continuity.",
    turnaround: "1-3 days",
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-label="AC installation icon">
        <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v4A2.5 2.5 0 0 1 18.5 13h-13A2.5 2.5 0 0 1 3 10.5v-4Zm2 0v4a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5ZM8 9h2M12 9h4M8 16c0 1.4-1 2.4-2.5 2.8m10.5-2.8c0 1.4 1 2.4 2.5 2.8M12 16v3" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AC Maintenance",
    description:
      "Scheduled preventive maintenance that improves energy efficiency and extends unit lifespan.",
    longDescription:
      "Our maintenance plans help commercial AC systems run smoothly year-round by catching wear early, cleaning critical parts, and keeping cooling output consistent.",
    includes: ["Filter cleaning and coil care", "Performance inspection and tuning", "Refrigerant and electrical checks", "Scheduled service reporting"],
    bestFor: "Businesses that need predictable cooling performance and fewer breakdowns.",
    businessValue: "Regular maintenance extends asset life, lowers energy spend, and reduces emergency repair interruptions.",
    turnaround: "Same day",
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-label="AC maintenance icon">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4m-2.2-6.8-2.8 2.8M8 16l-2.8 2.8m0-13.6L8 8m8 8 2.8 2.8" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
  {
    title: "AC Repair",
    description:
      "Rapid diagnostics and dependable repairs to minimize downtime for critical cooling infrastructure.",
    longDescription:
      "When a system fails, we isolate the issue fast and restore cooling with a clear repair plan that prioritizes business continuity and system reliability.",
    includes: ["Fault diagnosis and testing", "Component replacement and wiring checks", "Compressor, fan, and drainage repairs", "Post-repair performance verification"],
    bestFor: "Urgent breakdowns, inconsistent cooling, and recurring fault conditions.",
    businessValue: "Fast repair response keeps staff comfortable and prevents productivity losses during peak heat.",
    turnaround: "2-6 hours",
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-label="AC repair icon">
        <path d="M9 4h6l1 3h3v4l-2 1v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6l-2-1V7h3l1-3Zm0 8h6M10 16h1m3 0h1" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "HVAC Systems",
    description:
      "End-to-end HVAC planning, integration, and optimization for commercial and industrial spaces.",
    longDescription:
      "We handle HVAC system strategy for businesses that need controlled temperature, airflow, and ventilation across multiple zones or larger footprints.",
    includes: ["System design and zoning strategy", "Ventilation and airflow optimization", "Equipment integration support", "Energy-efficiency recommendations"],
    bestFor: "Warehouses, offices, retail spaces, and industrial facilities.",
    businessValue: "A well-planned HVAC system improves occupancy comfort, compliance, and operating efficiency.",
    turnaround: "Project-based",
    icon: (
      <svg viewBox="0 0 24 24" role="img" aria-label="HVAC systems icon">
        <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <path d="M11 8h2M8 11v2m8-2v2m-5 3h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [quoteService, setQuoteService] = useState(null);
  const [lastQuote, setLastQuote] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && !quoteService) {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <p className="eyebrow">Our Services</p>
        <h2>Reliable AC solutions for homes &amp; businesses</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            onLearnMore={() => setSelectedService(service)}
          />
        ))}
      </div>

      {lastQuote && (
        <div className="quote-toast" role="status" aria-live="polite">
          Quote request sent for <strong>{lastQuote.service}</strong>. We’ll contact {lastQuote.name} shortly.
        </div>
      )}

      <ServiceDetailsView
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={() => {
          setQuoteService(selectedService);
          setSelectedService(null);
        }}
      />

      {quoteService && (
        <QuoteRequestModal
          service={quoteService}
          onClose={() => setQuoteService(null)}
          onSubmit={(payload) => {
            setLastQuote(payload);
          }}
        />
      )}
    </section>
  );
}

export default ServicesSection;
