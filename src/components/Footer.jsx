import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand">
          <div className="brand-mark">H</div>
          <div>
            <h3>Hyderabad AC Services</h3>
            <p className="tagline">Reliable AC installation, repair &amp; maintenance in Hyderabad.</p>
          </div>
        </div>

        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact</h4>
          <ul>
            <li>Hyderabad, India</li>
            <li><a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></li>
            <li><a href="mailto:info@hyderabadacservices.com">info@hyderabadacservices.com</a></li>
          </ul>
        </div>

        <div className="footer-col social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a className="social-link" href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a className="social-link" href="#" aria-label="Instagram"><FaInstagram /></a>
            <a className="social-link" href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-divider" />
      <div className="footer-bottom">© 2026 Hyderabad AC Services. All rights reserved.</div>
    </footer>
  );
}

export default Footer;