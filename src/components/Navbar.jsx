import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";

  const handleHomeClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="site-navbar">
      <Link className="site-brand" to="/" onClick={handleHomeClick}>
        <span className="site-brand-mark" aria-hidden="true">H</span>
        <span>
          <strong>Hyderabad AC Services</strong>
          <small>Reliable cooling solutions</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" onClick={handleHomeClick} className={isHomePage ? "site-nav-link-active" : ""}>Home</Link>
        <Link to="/about" className={isAboutPage ? "site-nav-link-active" : ""}>About Us</Link>
        <Link to="/services" className={isServicesPage ? "site-nav-link-active" : ""}>Services</Link>
        <Link to="/contact" className={isContactPage ? "site-nav-link-active" : ""}>Contact</Link>
        <Link to="/book-service" className="site-nav-cta">Book Now</Link>
      </nav>
    </header>
  );
}

export default Navbar;