import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function About() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Residential Client",
      content: "Outstanding service! The technicians were professional and the AC works perfectly now. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Restaurant Group",
      role: "Restaurant Owner",
      content: "Installed kitchen exhaust system perfectly. Reliable support and quick response time. Best choice for commercial needs!",
      rating: 5,
    },
    {
      name: "Hospital Administration",
      role: "Commercial Client",
      content: "Excellent centralized cooling system installation. Professional team, transparent pricing, no hidden charges.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: "👥" },
    { number: "1000+", label: "Projects Completed", icon: "✓" },
    { number: "10+", label: "Years Experience", icon: "⏰" },
    { number: "24/7", label: "Customer Support", icon: "📞" },
  ];

  const services = [
    { icon: "❄️", title: "AC Installation", description: "Split, window & centralized AC systems" },
    { icon: "🔧", title: "AC Repair", description: "Quick fixes and emergency support" },
    { icon: "🧹", title: "Maintenance", description: "Seasonal & annual maintenance plans" },
    { icon: "🏗️", title: "Ducting", description: "Professional ducting solutions" },
    { icon: "🍳", title: "Kitchen Exhaust", description: "Restaurant kitchen exhaust systems" },
    { icon: "🌬️", title: "VRF/VRV Systems", description: "Advanced cooling technologies" },
  ];

  const process = [
    { step: 1, title: "Consultation", description: "Free site assessment and requirement analysis" },
    { step: 2, title: "Quote", description: "Transparent pricing with detailed proposal" },
    { step: 3, title: "Installation", description: "Professional installation with precision" },
    { step: 4, title: "Support", description: "Ongoing maintenance and customer support" },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="eyebrow">Our Story</p>
        <h1>Keeping Hyderabad Cool, Comfortable & Worry-Free</h1>
        <p>Your trusted partner for complete Air Conditioning and HVAC Solutions</p>
      </section>

      {/* CTA Section */}
      <div className="about-cta-section">
        <h2>Ready to Experience Our Service?</h2>
        <p>
          Whether you're installing a new system, upgrading to centralized cooling, or just
          need seasonal maintenance—we're here to keep you cool, comfortable, and worry-free.
        </p>
        <Link to="/contact" className="about-cta-button">
          Get in Touch Today
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default About;