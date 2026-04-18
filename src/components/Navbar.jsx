import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteContent } from "../data/siteContent";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home", to: "/" },
  { id: "services", label: "Services", to: "/#services", hashId: "services" },
  { id: "contact", label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const targetId = location.hash.slice(1);
    const section = document.getElementById(targetId);
    if (!section) {
      return;
    }

    window.requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname, location.hash]);

  const handleBrandClick = (event) => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavItemClick = (item) => (event) => {
    setIsMenuOpen(false);

    if (item.hashId) {
      if (location.pathname === "/") {
        event.preventDefault();
        const section = document.getElementById(item.hashId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      return;
    }

    if (location.pathname === item.to) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActiveItem = (item) => {
    if (item.hashId) {
      return location.pathname === "/" && location.hash === `#${item.hashId}`;
    }

    return location.pathname === item.to;
  };

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`} ref={headerRef}>
      <div className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          <Link
            className="navbar__logo"
            to="/"
            onClick={handleBrandClick}
            aria-label={siteContent.businessName}
          >
            <img
              className="navbar__logo-image"
              src={siteContent.logoUrl}
              alt={`${siteContent.businessName} logo`}
            />
          </Link>

          <button
            type="button"
            className={`navbar__toggle ${isMenuOpen ? "navbar__toggle--open" : ""}`}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`}
            aria-label="Primary navigation"
          >
            <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    className={`navbar__menu-link ${isActiveItem(item) ? "navbar__menu-link--active" : ""}`}
                    to={item.to}
                    aria-current={isActiveItem(item) ? "page" : undefined}
                    onClick={handleNavItemClick(item)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={siteContent.phoneLink}
              className="navbar__book-btn"
              aria-label={`Call ${siteContent.phoneDisplay}`}
            >
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
