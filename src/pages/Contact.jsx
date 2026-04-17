import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="eyebrow">Contact Us</p>
        <h1>Send an inquiry and get a quick response from Hyderabad AC Services</h1>
        <p>
          Share your requirement and our team will connect with you to discuss installation,
          maintenance, or repair support.
        </p>
      </section>

      <section className="contact-section contact-section--page">
        <div className="contact-grid">
          <div className="contact-card contact-card--form">
            <div className="contact-card-header">
              <div className="contact-badge">Quick Inquiry</div>
              <h3>Tell us what you need</h3>
              <p>Use the form below for a fast callback from our support team.</p>
            </div>

            <ContactForm />
          </div>

          <aside className="contact-card contact-card--info" aria-label="Business information">
            <div className="contact-card-header">
              <div className="contact-badge contact-badge--alt">Business Info</div>
              <h3>Hyderabad AC Services</h3>
              <p>Trusted AC installation, maintenance, and repair services in Hyderabad.</p>
            </div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.1.37 2.29.57 3.52.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c0 1.23.2 2.42.57 3.52a1 1 0 0 1-.24 1.02L6.6 10.8Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <span>Phone</span>
                  <strong>+91 XXXXX XXXXX</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.3A2.3 2.3 0 1 1 12 6.7a2.3 2.3 0 0 1 0 4.6Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <span>Location</span>
                  <strong>Hyderabad, India</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 2h2v2H7V2Zm8 0h2v2h-2V2ZM5 6h14a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1Zm0 4h14V8H5v2Zm0 3v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6H5Z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <span>Working Hours</span>
                  <strong>9 AM – 9 PM</strong>
                </div>
              </div>
            </div>

            <div className="contact-trust-box">
              <h4>Why customers call us</h4>
              <ul>
                <li>Prompt response for residential and commercial requests</li>
                <li>Professional service with clear communication</li>
                <li>Flexible support for maintenance and emergency repairs</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;