import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-modern">
      <div className="footer-main">
        <div className="footer-col brand-col">
          <h4 className="footer-heading">HYDERABAD AC SERVICES</h4>
          <p className="footer-desc">
            Reliable AC installation, maintenance &amp; repair services in Hyderabad.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">SERVICES</h4>
          <ul className="footer-links">
            <li><a href="/#services">Installation</a></li>
            <li><a href="/#services">Maintenance</a></li>
            <li><a href="/#services">Repair</a></li>
            <li><a href="/#services">HVAC Systems</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-heading">CONTACT INFO</h4>
          <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
          <p><strong>Location:</strong> Hyderabad, India</p>
          <p><strong>Email:</strong> <a href="mailto:info@hyderabadacservices.com">info@hyderabadacservices.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Hyderabad AC Services. All rights reserved.</p>
        <a href="#top" onClick={handleScrollToTop} className="back-to-top">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;