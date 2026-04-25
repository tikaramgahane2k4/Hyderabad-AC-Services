import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppPreferences } from "../context/AppPreferencesContext";
import "./Navbar.css";

const navItems = [
  { id: "home", labelKey: "home", to: "/" },
  { id: "about", labelKey: "about", to: "/about" },
  { id: "services", labelKey: "services", to: "/services" },
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
    airConditioning: "Air Conditioning",
    acService: "Ac Service",
    centralizedAc: "Centralized Air Conditioning",
    copperPiping: "Copper Pipe Planning",
    ducting: "Ducting",
    acGasLeak: "Ac Gas Leak",
    acInstallation: "Ac Installation",
    acRepair: "Ac Repair",
    acScrap: "Ac Scrap",
    airCurtain: "Air Curtain",
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
  ar: {
    home: "الرئيسية",
    services: "خدماتنا",
    about: "معلومات عنا",
    blog: "مدونة",
    contact: "اتصل بنا",
    bookNow: "احجز الآن",
    language: "Language",
    dark: "داكن",
    light: "مضيء",
    openMenu: "افتح قائمة التنقل",
    closeMenu: "أغلق قائمة التنقل",
    primaryNavigation: "التنقل الأساسي",
    selectLanguage: "اختر اللغة",
    switchThemeTo: "التبديل إلى",
    theme: "السمة",
    callAriaPrefix: "Call",
    logoSuffix: "logo",
  },
  kn: {
    home: "ಮುಖಪುಟ",
    services: "ಸೇವೆಗಳು",
    about: "ನಮ್ಮ ಬಗ್ಗೆ",
    blog: "ಬ್ಲಾಗ್",
    contact: "ಸಂಪರ್ಕಿಸಿ",
    bookNow: "ಬುಕ್ ಮಾಡಿ",
    language: "Language",
    dark: "ಡಾರ್ಕ್",
    light: "ಲೈಟ್",
    openMenu: "ನ್ಯಾವಿಗೇಷನ್ ಮೆನುವನ್ನು ತೆರೆಯಿರಿ",
    closeMenu: "ನ್ಯಾವಿಗೇಷನ್ ಮೆನುವನ್ನು ಮುಚ್ಚಿ",
    primaryNavigation: "ಪ್ರಾಥಮಿಕ ನ್ಯಾವಿಗೇಷನ್",
    selectLanguage: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    switchThemeTo: "ಬದಲಾಯಿಸಿ",
    theme: "ಥೀಮ್",
    callAriaPrefix: "Call",
    logoSuffix: "logo",
  },
  ml: {
    home: "ഹോം",
    services: "സേവനങ്ങൾ",
    about: "ഞങ്ങളെ കുറിച്ച്",
    blog: "ബ്ലോഗ്",
    contact: "ബന്ധപ്പെടുക",
    bookNow: "ബുക്ക് ചെയ്യുക",
    language: "Language",
    dark: "ഡാർക്ക്",
    light: "ലൈറ്റ്",
    openMenu: "നാവിഗേഷൻ മെനു തുറക്കുക",
    closeMenu: "നാവിഗേഷൻ മെനു അടയ്ക്കുക",
    primaryNavigation: "പ്രാഥമിക നാവിഗേഷൻ",
    selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    switchThemeTo: "മാറുക",
    theme: "തീം",
    callAriaPrefix: "Call",
    logoSuffix: "logo",
  },
  ta: {
    home: "முகப்பு",
    services: "சேவைகள்",
    about: "எங்களை பற்றி",
    blog: "வலைப்பதிவு",
    contact: "தொடர்பு கொள்ள",
    bookNow: "முன்பதிவு செய்",
    language: "Language",
    dark: "டார்க்",
    light: "லைட்",
    openMenu: "வழிசெலுத்தல் மெனுவைத் திற",
    closeMenu: "வழிசெலுத்தல் மெனுவை மூடு",
    primaryNavigation: "முதன்மை வழிசெலுத்தல்",
    selectLanguage: "மொழியைத் தேர்ந்தெடு",
    switchThemeTo: "மாற்று",
    theme: "தீம்",
    callAriaPrefix: "Call",
    logoSuffix: "logo",
  },
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useAppPreferences();
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

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`} ref={headerRef}>
      <div className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          <Link
            className="navbar__logo"
            to="/"
            onClick={handleBrandClick}
            aria-label="Hyderabad AC Services"
          >
            <img className="navbar__logo-image" src="/logo.png" alt="Hyderabad AC Services" />
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
                    {labels[item.labelKey] || item.labelKey}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/book-service"
              className="navbar__book-btn"
              aria-label={labels.bookNow}
            >
              {labels.bookNow}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
