import { Link, useLocation } from "react-router-dom";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";

const footerTranslations = {
  en: {
    contactInfo: "Contact Info",
    blog: "Blog",
    quickLinks: "Quick Links",
    reachUsAt: "Reach us at",
    home: "Home",
    about: "About",
    contact: "Contact",
    phone: "Phone:",
    location: "Location:",
    email: "Email:",
    note: "Note:",
    socialLinks: "Social links",
    copyright: "Copyright Hyderabad AC Services 2021",
    backToTop: "Back to top",
  },
  hi: {
    contactInfo: "संपर्क जानकारी",
    blog: "ब्लॉग",
    quickLinks: "त्वरित लिंक",
    reachUsAt: "हमसे जुड़ें",
    home: "होम",
    about: "हमारे बारे में",
    contact: "संपर्क",
    phone: "फ़ोन:",
    location: "स्थान:",
    email: "ईमेल:",
    note: "नोट:",
    socialLinks: "सोशल लिंक",
    copyright: "कॉपीराइट हैदराबाद एसी सर्विसेज 2021",
    backToTop: "ऊपर जाएं",
  },
  te: {
    contactInfo: "Contact Info",
    blog: "Blog",
    quickLinks: "Quick Links",
    reachUsAt: "Reach us at",
    home: "Home",
    about: "Maa Gurinchi",
    contact: "Sampradinchandi",
    phone: "Phone:",
    location: "Sthanam:",
    email: "Email:",
    note: "Note:",
    socialLinks: "Social links",
    copyright: "Copyright Hyderabad AC Services 2021",
    backToTop: "Paiki Vellu",
  },
};

function Footer() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const labels = footerTranslations[language] ?? footerTranslations.en;
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

  const footerBlogs = (siteContent.blogPosts ?? []).slice(0, 4);

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column footer-brand">
            <p className="footer-label">{labels.contactInfo}</p>
            <div className="footer-brand-header">
              <svg className="footer-support-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <p className="footer-label">{siteContent.businessName}</p>
                <div className="footer-phone-highlight">
                  <a href={siteContent.phoneLink}>{siteContent.phoneDisplay}</a>
                </div>
              </div>
            </div>

            <p className="footer-short-text">
              Trusted AC installation, repair and HVAC support across Hyderabad.
            </p>

            <div className="footer-contact-lines" aria-label={labels.contact}>
              <p>{siteContent.location}</p>
              <p><a href={siteContent.emailLink}>{siteContent.email}</a></p>
              <p><a href={siteContent.phoneLink}>{siteContent.phoneDisplay}</a></p>
            </div>

            <p className="footer-note-text">
              {labels.note} All services are Chargeable
            </p>
          </div>

          <div className="footer-column">
            <p className="footer-label">{labels.blog}</p>
            <ul className="footer-link-list footer-blog-list">
              {footerBlogs.map((post) => (
                <li key={post.title}>
                  <Link to={`/blog/${post.slug}`}>
                    » {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-label">{labels.quickLinks}</p>
            <ul className="footer-link-list footer-quick-links">
              <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column footer-contact-panel">
            <p className="footer-label">{labels.reachUsAt}</p>
            <p className="footer-mini-label">Find us online</p>
            <div className="footer-socials" aria-label={labels.socialLinks}>
              {siteContent.socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className={`social-icon-${link.label.toLowerCase()}`}>
                  {socialIcons[link.label]}
                </a>
              ))}
            </div>

            <div className="footer-map-card" aria-label={siteContent.location}>
              <iframe
                title="Hyderabad AC Services Location"
                src="https://maps.google.com/maps?q=709/58,%20Navodaya%20Colony,%20Gudimalkapur,%20Hyderabad,%20Telangana%20500006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;