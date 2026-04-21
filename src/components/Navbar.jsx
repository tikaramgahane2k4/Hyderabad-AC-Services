import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "./Navbar.css";

const navItems = [
  { id: "home", labelKey: "home", to: "/" },
  { id: "services", labelKey: "services", to: "/services" },
  { id: "about", labelKey: "about", to: "/about" },
  { id: "blog", labelKey: "blog", to: "/blog" },
  { id: "contact", labelKey: "contact", to: "/contact" },
];

const uiTranslations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About Us",
    blog: "Blog",
    contact: "Contact",
    bookNow: "Book Now",
    language: "Language",
    dark: "Dark",
    light: "Light",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    primaryNavigation: "Primary navigation",
    selectLanguage: "Select language",
    switchThemeTo: "Switch to",
    theme: "theme",
    callAriaPrefix: "Call",
    logoSuffix: "logo",
  },
  hi: {
    home: "होम",
    services: "सेवाएं",
    about: "हमारे बारे में",
    blog: "ब्लॉग",
    contact: "संपर्क",
    bookNow: "अभी बुक करें",
    language: "भाषा",
    dark: "डार्क",
    light: "लाइट",
    openMenu: "नेविगेशन मेनू खोलें",
    closeMenu: "नेविगेशन मेनू बंद करें",
    primaryNavigation: "मुख्य नेविगेशन",
    selectLanguage: "भाषा चुनें",
    switchThemeTo: "बदलें",
    theme: "थीम",
    callAriaPrefix: "कॉल",
    logoSuffix: "लोगो",
  },
  te: {
    home: "Home",
    services: "Sevalu",
    about: "Maa Gurinchi",
    blog: "Blog",
    contact: "Sampradinchandi",
    bookNow: "Book Cheyyandi",
    language: "Bhasha",
    dark: "Dark",
    light: "Light",
    openMenu: "Navigation menu open cheyyandi",
    closeMenu: "Navigation menu close cheyyandi",
    primaryNavigation: "Primary navigation",
    selectLanguage: "Bhasha select cheyyandi",
    switchThemeTo: "Marchandi",
    theme: "theme",
    callAriaPrefix: "Call",
    logoSuffix: "logo",
  },
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, theme, setTheme, languageOptions } = useAppPreferences();
  const location = useLocation();
  const headerRef = useRef(null);
  const siteContent = getLocalizedSiteContent(language);

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

  const handleBrandClick = (event) => {
    setIsMenuOpen(false);

    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavItemClick = (item) => (event) => {
    setIsMenuOpen(false);

    if (location.pathname === item.to) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActiveItem = (item) => {
    if (item.to === "/blog") {
      return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
    }

    return location.pathname === item.to;
  };

  const labels = uiTranslations[language] ?? uiTranslations.en;
  const nextThemeMode = theme === "light" ? "dark" : "light";
  const nextThemeLabel = nextThemeMode === "light" ? labels.light : labels.dark;

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
              alt={`${siteContent.businessName} ${labels.logoSuffix}`}
            />
          </Link>

          <button
            type="button"
            className={`navbar__toggle ${isMenuOpen ? "navbar__toggle--open" : ""}`}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`}
            aria-label={labels.primaryNavigation}
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
                    {labels[item.labelKey]}
                  </Link>
                </li>
              ))}

              <li className="navbar__menu-controls">
                <label className="navbar__language" htmlFor="navbar-language-select">
                  <span>{labels.language}</span>
                  <select
                    id="navbar-language-select"
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    aria-label={labels.selectLanguage}
                  >
                    {languageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="button"
                  className="navbar__theme-btn"
                  onClick={() => setTheme(nextThemeMode)}
                  aria-label={`${labels.switchThemeTo} ${nextThemeLabel} ${labels.theme}`}
                  title={`${labels.switchThemeTo} ${nextThemeLabel} ${labels.theme}`}
                >
                  {theme === "light" ? labels.dark : labels.light}
                </button>
              </li>
            </ul>

            <a
              href={siteContent.phoneLink}
              className="navbar__book-btn"
              aria-label={`${labels.callAriaPrefix} ${siteContent.phoneDisplay}`}
            >
              {labels.bookNow}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
