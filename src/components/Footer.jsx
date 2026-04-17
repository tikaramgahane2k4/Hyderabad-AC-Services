function Footer() {
  const socialLinks = [
    {
      label: "WhatsApp",
      href: "https://wa.me/91XXXXXXXXXX",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.8 14.2c-.24.68-1.2 1.25-1.98 1.41-.53.11-1.23.2-3.58-.77-3.01-1.25-4.95-4.32-5.1-4.52-.15-.2-1.22-1.62-1.22-3.09s.77-2.19 1.04-2.49c.27-.3.6-.38.8-.38h.58c.19 0 .45-.08.7.52.26.62.89 2.14.97 2.3.08.16.13.35.03.56-.1.2-.15.32-.29.5-.14.18-.3.39-.43.52-.14.14-.29.29-.12.59.17.3.74 1.22 1.6 1.98 1.11.99 2.04 1.29 2.34 1.44.3.15.48.13.66-.08.18-.21.77-.89.98-1.19.21-.3.41-.25.69-.15.28.1 1.77.84 2.08 1 .31.16.51.24.59.38.08.14.08.82-.16 1.5Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 6A2.5 2.5 0 1 1 6.5 1a2.5 2.5 0 0 1 0 5ZM4 8.5h5V22H4V8.5Zm7 0h4.8v1.84h.07c.67-1.25 2.3-2.57 4.73-2.57C23.17 7.77 24 10.1 24 13.14V22h-5v-7.86c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.14V22h-5V8.5Z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column footer-brand">
          <p className="footer-label">Hyderabad AC Services</p>
          <p className="footer-description">
            Reliable AC installation, maintenance & repair services in Hyderabad.
          </p>
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Services</p>
          <ul>
            <li><a href="/#services">Installation</a></li>
            <li><a href="/#services">Maintenance</a></li>
            <li><a href="/#services">Repair</a></li>
            <li><a href="/#services">HVAC Systems</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-label">Quick Links</p>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <p className="footer-label">Contact Info</p>
          <ul className="footer-contact-list">
            <li><span>Phone:</span> +91 XXXXX XXXXX</li>
            <li><span>Location:</span> Hyderabad, India</li>
            <li><span>Email:</span> info@hyderabadacservices.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Hyderabad AC Services. All rights reserved.</p>
        <a href="/">Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;