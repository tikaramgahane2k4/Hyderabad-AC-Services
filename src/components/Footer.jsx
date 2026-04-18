import { Link, useLocation } from "react-router-dom";
import { siteContent } from "../data/siteContent";

function Footer() {
  const location = useLocation();
  const socialIcons = {
    Facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.3-.04-1.33-.12-2.53-.12-2.5 0-4.22 1.53-4.22 4.35v2.01H7.1V14h2.84v8h3.56Z" fill="currentColor" />
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" />
      </svg>
    ),
    WhatsApp: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.24.68-1.2 1.25-1.98 1.41-.53.11-1.23.2-3.58-.77-3.01-1.25-4.95-4.32-5.1-4.52-.15-.2-1.22-1.62-1.22-3.09s.77-2.19 1.04-2.49c.27-.3.6-.38.8-.38h.58c.19 0 .45-.08.7.52.26.62.89 2.14.97 2.3.08.16.13.35.03.56-.1.2-.15.32-.29.5-.14.18-.3.39-.43.52-.14.14-.29.29-.12.59.17.3.74 1.22 1.6 1.98 1.11.99 2.04 1.29 2.34 1.44.3.15.48.13.66-.08.18-.21.77-.89.98-1.19.21-.3.41-.25.69-.15.28.1 1.77.84 2.08 1 .31.16.51.24.59.38.08.14.08.82-.16 1.5Z" fill="currentColor" />
      </svg>
    ),
  };

  const handleHomeClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column footer-brand">
          <p className="footer-label">{siteContent.businessName}</p>
          <p className="footer-description">
            {siteContent.companyDescription[0]}
          </p>
          <div className="footer-socials" aria-label="Social links">
            {siteContent.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                {socialIcons[link.label]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Services</p>
          <ul>
            {siteContent.airConditioningServices.slice(0, 4).map((service) => (
              <li key={service}><Link to="/services">{service}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-label">Quick Links</p>
          <ul>
            <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-label">Contact Info</p>
          <ul className="footer-contact-list">
            <li><span>Phone:</span> {siteContent.phoneDisplay}</li>
            <li><span>Location:</span> {siteContent.location}</li>
            <li><span>Email:</span> {siteContent.email}</li>
            <li><span>Note:</span> {siteContent.serviceChargeNote}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Hyderabad Ac Services 2021</p>
        <button type="button" className="footer-top-link" onClick={handleBackToTop}>
          Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
