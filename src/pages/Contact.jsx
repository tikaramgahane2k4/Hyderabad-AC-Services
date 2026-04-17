import ContactForm from "../components/ContactForm";
import "./Contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="eyebrow">Contact Us</p>
        <h1>Send an inquiry and get a quick response from Hyderabad AC Services</h1>
        <p>Share your requirement and our team will connect with you to discuss installation, maintenance, or repair support.</p>
      </section>

      <section className="contact-section contact-section--page contact-page">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-card">
              <h3>Hyderabad AC Services</h3>
              <p className="contact-card-sub">Reliable AC installation, maintenance &amp; repair in Hyderabad.</p>

              <div className="contact-info">
                <div className="contact-info-row">
                  <FiMapPin />
                  <div>
                    <small>Location</small>
                    <span>Hyderabad, India</span>
                  </div>
                </div>

                <div className="contact-info-row">
                  <FiPhone />
                  <div>
                    <small>Phone</small>
                    <span>+91 XXXXX XXXXX</span>
                  </div>
                </div>

                <div className="contact-info-row">
                  <FiMail />
                  <div>
                    <small>Email</small>
                    <span>info@hyderabadacservices.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card contact-card--form">
            <div className="contact-card-header">
              <div className="contact-badge">Quick Inquiry</div>
              <h3>Tell us what you need</h3>
              <p>Use the form below for a fast callback from our support team.</p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer is rendered at the app root (App.jsx) */}
    </div>
  );
}

export default ContactPage;