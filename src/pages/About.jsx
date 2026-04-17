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

      {/* Statistics Section */}
      <section className="about-stats-section">
        <div className="about-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-card">
              <div className="about-stat-emoji">{stat.icon}</div>
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          {/* About Us */}
          <div className="about-card">
            <div className="about-card-header">
              <span className="about-emoji">🏢</span>
              <h2>About Us</h2>
            </div>
            <div className="about-card-content">
              <p>
                At Hyderabad AC Services, we provide complete Air Conditioning and HVAC Services
                in Hyderabad. With years of experience, we specialize in AC installation, repair,
                maintenance, ducting, centralized cooling, restaurant kitchen exhaust installation,
                and annual maintenance for both residential and commercial clients.
              </p>
              <p className="about-highlight">
                Our mission is simple: to keep all our customers cool and comfortable with reliable,
                affordable, and professional AC Services.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="about-card">
            <div className="about-card-header">
              <span className="about-emoji">🌟</span>
              <h2>Who We Are</h2>
            </div>
            <div className="about-card-content">
              <p>
                Hyderabad AC Services is a team of certified HVAC engineers and professionals
                dedicated to delivering top-quality cooling solutions. From split and window ACs
                to centralized ducting and VRF/VRV systems, we provide end-to-end services tailored
                to your specific needs. Whether it's a home, office, restaurant, hospital, retail
                showroom, or industrial facility, we ensure every project is executed with precision,
                safety, and efficiency.
              </p>
            </div>
          </div>

          {/* Our Process */}
          <div className="about-card about-card--full">
            <div className="about-card-header">
              <h2>How We Work With You</h2>
            </div>
            <div className="about-process-grid">
              {process.map((item, idx) => (
                <div key={idx} className="about-process-item">
                  <div className="about-process-step">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="about-card about-card--full">
            <div className="about-card-header">
              <h2>Why Choose Hyderabad AC Services</h2>
            </div>
            <div className="about-features-grid">
              <div className="about-feature">
                <span className="about-feature-emoji">👨‍🔧</span>
                <h3>Experienced Engineers & Certified Technicians</h3>
                <p>Skilled professionals with years of industry experience</p>
              </div>

              <div className="about-feature">
                <span className="about-feature-emoji">📍</span>
                <h3>Serving All Areas of Hyderabad</h3>
                <p>Fast and reliable service across the entire city</p>
              </div>

              <div className="about-feature">
                <span className="about-feature-emoji">💸</span>
                <h3>Transparent Pricing</h3>
                <p>No hidden charges – clear and honest quotes</p>
              </div>

              <div className="about-feature">
                <span className="about-feature-emoji">⚡</span>
                <h3>Fast Response & Same-Day Service</h3>
                <p>Quick turnaround for urgent cooling needs</p>
              </div>

              <div className="about-feature">
                <span className="about-feature-emoji">♻️</span>
                <h3>Eco-Friendly Practices</h3>
                <p>Responsible recycling and sustainable solutions</p>
              </div>

              <div className="about-feature">
                <span className="about-feature-emoji">💯</span>
                <h3>Customer Satisfaction Guaranteed</h3>
                <p>Your comfort is our top priority</p>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="about-card about-card--full">
            <div className="about-card-header">
              <h2>What Our Clients Say</h2>
            </div>
            <div className="about-testimonials-grid">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="about-testimonial-card">
                  <div className="about-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="about-star">⭐</span>
                    ))}
                  </div>
                  <p className="about-testimonial-content">"{testimonial.content}"</p>
                  <div className="about-testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <small>{testimonial.role}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="about-cta-section">
            <h2>Ready to Experience Our Service?</h2>
            <p>
              Whether you're installing a new system, upgrading to centralized cooling, or just
              need seasonal maintenance—we're here to keep you cool, comfortable, and worry-free.
            </p>
            <a href="/contact" className="about-cta-button">
              Get in Touch Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
