import { Link } from "react-router-dom";
import ServiceRow from "./ServiceRow";

const services = [
  {
    title: "AC Repair",
    image: "/images/AC repair.jpg",
    imageClass: "service-row-image--repair-focus",
    description:
      "Rapid diagnostics and dependable repairs to minimize downtime for critical cooling infrastructure.",
    points: ["All brands supported", "Genuine spare parts", "Same-day service", "90-day warranty"],
    queryTitle: "AC Repair",
  },
  {
    title: "AC Installation",
    image: "/images/AC Installation.jpg",
    imageClass: "service-row-image--installation-focus",
    logoClass: "service-row-logo--installation-top",
    description:
      "Precision installation for split, ducted, and central AC systems with optimal airflow planning.",
    points: ["Site assessment included", "Expert mounting and setup", "Leak-proof copper piping", "Performance testing"],
    queryTitle: "AC Installation",
  },
  {
    title: "AC Service & Maintenance",
    image: "/images/AC Service & Maintenance.jpg",
    description:
      "Preventive maintenance that improves efficiency and extends unit lifespan for homes and businesses.",
    points: ["Deep coil and filter cleaning", "Gas pressure checks", "Drainage and airflow tuning", "Seasonal performance inspection"],
    queryTitle: "AC Service",
  },
  {
    title: "HVAC Systems",
    image: "/images/Exhaust Ducting.jpg",
    description:
      "End-to-end HVAC planning, integration, and optimization for commercial and industrial spaces.",
    points: ["Commercial duct and airflow planning", "Zoned cooling architecture", "Energy optimization", "Long-term maintenance planning"],
    queryTitle: "Exhaust Ducting",
  },
];

function ServicesSection({ showPageCta = false }) {
  return (
    <section className="services-section" id="services">
      <div className="services-content">
          <div className="services-header">
            <p className="services-kicker">Our Services</p>
            <h2 className="services-title">Reliable AC Solutions for Homes &amp; Businesses</h2>
            <div className="services-divider" aria-hidden="true" />
            <p className="services-subtitle">
              Expert installation, maintenance, and repair services tailored to your needs. We serve
              residential and commercial properties with precision and professionalism.
            </p>
          </div>

          <div className="services-bands" aria-label="Service offerings">
            {services.map((service) => (
              <ServiceRow key={service.title} service={service} />
            ))}
          </div>

          {showPageCta && (
            <section className="services-bottom-cta" aria-label="Book service call to action">
              <h3>Need Expert AC Service?</h3>
              <Link className="services-bottom-cta-button" to="/book-service">
                Book Now
              </Link>
            </section>
          )}
      </div>
    </section>
  );
}

export default ServicesSection;
