import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const handleHomeClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServicesClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      const element = document.getElementById("services");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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
        <Link to="/" onClick={handleHomeClick}>Home</Link>
        <Link to="/#services" onClick={handleServicesClick}>Services</Link>
        <Link to="/contact" className="site-nav-cta">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;