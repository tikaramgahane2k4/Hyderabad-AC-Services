import React, { useState } from "react";
import "./Contact.css";
import { FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";

function ContactPage() {
  const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="contact-hero-section">
          <div className="header-badge-wrapper">
            <span className="asetize-badge badge-cyan hero-badge">CONTACT US</span>
          </div>
          <h1 className="hero-heading">
            Send an inquiry and get a quick<br />
            response from Hyderabad AC Services
          </h1>
          <p className="hero-subheading">
            Share your requirement and our team will connect with you to discuss installation,<br />
            maintenance, or repair support.
          </p>
        </div>

        <div className="asetize-grid">
          
          {/* Left Card: Form */}
        <div className="asetize-card">
          <div className="asetize-badge badge-cyan">QUICK INQUIRY</div>
          <h1 className="asetize-heading">Tell us what you need</h1>
          <p className="asetize-subheading">
            Use the form below for a fast callback from our support team.
          </p>
          
          <form className="asetize-form" onSubmit={handleSubmit}>
            <div className="asetize-input-group">
              <label className="asetize-label">Name</label>
              <input 
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="asetize-input" 
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="asetize-input-group">
              <label className="asetize-label">Phone</label>
              <input 
                type="tel" 
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="asetize-input" 
                placeholder="10-digit phone number"
                required
              />
            </div>
            
            <div className="asetize-input-group">
              <label className="asetize-label">Message</label>
              <textarea 
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="asetize-input asetize-textarea" 
                placeholder="Briefly describe your AC requirement"
                required
              />
            </div>

            <button type="submit" className="asetize-submit">
              {submitted ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Card: Info */}
        <div className="asetize-card">
          <div className="asetize-badge badge-gray">BUSINESS INFO</div>
          <h2 className="asetize-heading">Hyderabad AC Services</h2>
          <p className="asetize-subheading">
            Trusted AC installation, maintenance, and repair services in Hyderabad.
          </p>

          <div className="asetize-info-list">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <FiPhone size={18} />
              </div>
              <div className="info-content">
                <span className="info-label">PHONE</span>
                <span className="info-value">+91 XXXXX XXXXX</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <FiMapPin size={18} />
              </div>
              <div className="info-content">
                <span className="info-label">LOCATION</span>
                <span className="info-value">Hyderabad, India</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <FiCalendar size={18} />
              </div>
              <div className="info-content">
                <span className="info-label">WORKING HOURS</span>
                <span className="info-value">9 AM - 9 PM</span>
              </div>
            </div>
          </div>

          <div className="why-box">
            <h3 className="why-heading">Why customers call us</h3>
            <ul className="why-list">
              <li>Prompt response for residential and commercial requests</li>
              <li>Professional service with clear communication</li>
              <li>Flexible support for maintenance and emergency repairs</li>
            </ul>
          </div>

        </div>

      </div>
      </div>
    </div>
  );
}

export default ContactPage;
