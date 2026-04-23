import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import AnimatedStats from "../components/AnimatedStats";
import HomeCard from "../components/home/HomeCard";
import HomeFaqAccordion from "../components/home/HomeFaqAccordion";
import HomeSection from "../components/home/HomeSection";
import { blogs } from "../data/blogs";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "../styles/home.css";

const heroBackground = "/images/Background.png";

const partnerBrands = [
  { name: "Voltas", logo: "/images/partners/voltas-logo.svg" },
  { name: "Blue Star", logo: "/images/partners/blue-star-logo.svg" },
  { name: "Carrier", logo: "/images/partners/carrier-logo.svg" },
  { name: "Daikin", logo: "/images/partners/daikin-logo.svg" },
];

const revealDelayClass = (index) => `home-reveal-delay-${(index % 6) + 1}`;

const serviceCardIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 8h16v6H4z" />
      <path d="M8 8V5m8 3V5M7 18h10" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 7h18v5H3z" />
      <path d="M12 12v7" strokeLinecap="round" />
      <path d="m9 16 3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 12h18M6 8h12M6 16h12" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
];

const articleIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M6 4h12v16H6z" />
    <path d="M9 9h6M9 13h6M9 17h4" strokeLinecap="round" />
  </svg>
);

const trustHighlightIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.8 1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 4 7v6c0 4.2 3.2 7.8 8 8 4.8-.2 8-3.8 8-8V7l-8-4Z" />
      <path d="m9.2 12.2 1.8 1.8 3.8-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3.8 14.6 9l5.7.8-4.1 4 1 5.7L12 16.7 6.8 19.5l1-5.7-4.1-4 5.7-.8L12 3.8Z" />
    </svg>
  ),
];

const industryIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 21h18M3 7v14M13 3v18M17 7v14M21 3v18M7 9h2M7 13h2M7 17h2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 3h18v18H3zM9 9h6M9 13h6M9 17h6" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 21v-4M8 21h8M12 11V3M7 7h10M12 7V3" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 21h18M3 10h18M3 7l9-4 9 4M7 21V10M17 21V10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

const homeCopyByLanguage = {
  en: {
    heroBadge: "Google Rating 4.9",
    heroTitleStart: "Professional HVAC & AC Solutions for",
    heroTitleHighlight: "Every Space",
    heroSummary:
      "Enterprise-grade air conditioning services for businesses and homes. Expert installation, repair, and commercial AMC plans across Hyderabad.",
    directSupport: "Direct Support",
    callNow: "Call Now",
    bookConsultation: "Book Free Consultation",
    callPrefix: "Call:",
    trustEyebrow: "Business Trust",
    trustTitle: "Reliable Cooling Support with Proven Credibility",
    trustHighlights: [
      {
        title: "20+ Years Experience",
        description: "Delivering reliable AC installation, repair, and maintenance support across Hyderabad.",
      },
      {
        title: "Trusted HVAC Experts",
        description: "Professionally trained technicians for residential and commercial cooling requirements.",
      },
      {
        title: "Google Rating 4.9",
        description: "Consistent service quality with clear communication and dependable response time.",
      },
    ],
    trustBadges: ["Multi-Brand Specialists", "Transparent Pricing", "Emergency Support", "Verified Service Team"],
    statsEyebrow: "Service Numbers",
    statsTitle: "Numbers That Reflect Consistent Cooling Support",
    statsDescription:
      "A quick snapshot of the reliability, customer trust, and always-on support that shape our AC service experience across Hyderabad.",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating" },
      { value: 500, suffix: "+", label: "Happy Customers" },
      { value: 10, suffix: "+", label: "Years Experience" },
      { value: 24, suffix: "/7", label: "Direct Support" },
    ],
    collaboratorsEyebrow: "Our Collaborators",
    collaboratorsTitle: "Brands We Work With",
    collaboratorsDescription: "Trusted support for leading air conditioning brands across residential and commercial spaces.",
    industriesEyebrow: "Industries We Serve",
    industriesTitle: "Specialized Cooling for Every Sector",
    industriesDescription: "From corporate headquarters to industrial warehouses, we provide tailored HVAC infrastructure.",
    industries: [
      { title: "Corporate Offices", description: "Efficient multi-zone cooling systems for productive workspaces." },
      { title: "Restaurants & Kitchens", description: "Heavy-duty exhaust and climate control for the hospitality industry." },
      { title: "Healthcare Facilities", description: "Precision temperature and air quality control for clinics and hospitals." },
      { title: "Industrial & Warehouses", description: "Large-scale HVAC solutions for factories and storage facilities." },
    ],
    serviceFocusEyebrow: "Service Focus",
    serviceFocusTitle: "Professional Cooling Services with Better Coverage",
    latestArticlesEyebrow: "Latest Articles",
    latestArticlesTitle: "Helpful Tips & Resources",
    latestArticlesDescription: "Learn more about AC maintenance, installation, and care",
    readArticle: "Read article",
    askGuidance: "Ask our team for guidance",
    serviceSupportEyebrow: "Service Support",
    serviceSupportTitle: "Contact & Location",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
    workingHoursLabel: "Working Hours",
    whatsappUs: "WhatsApp Us",
    faqEyebrow: "Got Questions?",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our AC services and solutions",
    ctaTitle: "Need AC Service Today?",
    ctaDescription:
      "Book a free consultation now. Our expert technicians are ready to help with any AC problem - residential or commercial.",
    privacyPolicy: "Privacy Policy",
    sitemapLabel: "Sitemap",
    socialLinksLabel: "Social links",
    quickTrustLabel: "Quick trust badges",
    contactDetailsLabel: "Contact details",
    availableServicesAria: "Available service options",
    footerLinksAria: "Footer completion links",
    callAriaPrefix: "Call",
    locationMapSuffix: "location map",
    starAria: "Five star visual rating",
    copyright: "Copyright Hyderabad Ac Services 2021",
    sitemapLinks: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  hi: {
    heroBadge: "गूगल रेटिंग 4.9",
    heroTitleStart: "हर जगह के लिए विशेषज्ञ एसी समाधान",
    heroTitleHighlight: "विश्वसनीय कूलिंग",
    heroSummary:
      "रिहायशी से लेकर कमर्शियल तक पूरी एयर कंडीशनिंग सेवाएं। हैदराबाद में इंस्टॉलेशन, रिपेयर, मेंटेनेंस और एएमसी प्लान उपलब्ध हैं।",
    directSupport: "सीधा सहायता",
    callNow: "कॉल करें",
    bookConsultation: "फ्री कंसल्टेशन बुक करें",
    callPrefix: "कॉल:",
    trustEyebrow: "विश्वसनीयता",
    trustTitle: "भरोसेमंद कूलिंग सपोर्ट",
    trustHighlights: [
      {
        title: "20+ साल का अनुभव",
        description: "हैदराबाद भर में विश्वसनीय एसी इंस्टॉलेशन, रिपेयर और मेंटेनेंस सपोर्ट।",
      },
      {
        title: "विश्वसनीय एचवीएसी विशेषज्ञ",
        description: "रिहायशी और कमर्शियल कूलिंग के लिए प्रशिक्षित तकनीशियन।",
      },
      {
        title: "गूगल रेटिंग 4.9",
        description: "स्पष्ट संवाद के साथ लगातार उच्च गुणवत्ता वाली सेवा।",
      },
    ],
    trustBadges: ["मल्टी-ब्रांड विशेषज्ञ", "पारदर्शी मूल्य", "इमरजेंसी सहायता", "सत्यापित टीम"],
    statsEyebrow: "सेवा आंकड़े",
    statsTitle: "वे नंबर जो हमारी भरोसेमंद सेवा दिखाते हैं",
    statsDescription:
      "रेटिंग से लेकर उपलब्ध सहायता तक, ये आंकड़े हैदराबाद में हमारी लगातार और भरोसेमंद एसी सेवा को दर्शाते हैं।",
    stats: [
      { value: 4.9, decimals: 1, label: "गूगल रेटिंग" },
      { value: 500, suffix: "+", label: "संतुष्ट ग्राहक" },
      { value: 10, suffix: "+", label: "सालों का अनुभव" },
      { value: 24, suffix: "/7", label: "सीधा सहायता" },
    ],
    collaboratorsEyebrow: "हमारे सहयोगी",
    collaboratorsTitle: "वे ब्रांड जिनके साथ हम काम करते हैं",
    collaboratorsDescription: "शीर्ष एसी ब्रांड्स के लिए भरोसेमंद सपोर्ट।",
    industriesEyebrow: "उद्योग क्षेत्र",
    industriesTitle: "हर क्षेत्र के लिए विशेष कूलिंग",
    industriesDescription: "कॉर्पोरेट ऑफिस से लेकर इंडस्ट्रियल वेयरहाउस तक, हम समाधान प्रदान करते हैं।",
    industries: [
      { title: "कॉर्पोरेट ऑफिस", description: "कार्यस्थलों के लिए कुशल मल्टी-ज़ोन कूलिंग सिस्टम।" },
      { title: "रेस्टोरेंट और किचन", description: "हॉस्पिटालिटी उद्योग के लिए हैवी-ड्यूटी एग्जॉस्ट।" },
      { title: "स्वास्थ्य सुविधाएं", description: "क्लीनिक और अस्पतालों के लिए सटीक तापमान नियंत्रण।" },
      { title: "औद्योगिक और वेयरहाउस", description: "फैक्ट्रियों के लिए बड़े पैमाने पर एचवीएसी समाधान।" },
    ],
    serviceFocusEyebrow: "सेवा फोकस",
    serviceFocusTitle: "पेशेवर कूलिंग सेवाएं",
    latestArticlesEyebrow: "नए लेख",
    latestArticlesTitle: "उपयोगी टिप्स और जानकारी",
    latestArticlesDescription: "एसी मेंटेनेंस, इंस्टॉलेशन और देखभाल के बारे में जानें।",
    readArticle: "लेख पढ़ें",
    askGuidance: "हमारी टीम से मार्गदर्शन लें",
    serviceSupportEyebrow: "सेवा सहायता",
    serviceSupportTitle: "संपर्क और स्थान",
    phoneLabel: "फ़ोन",
    emailLabel: "ईमेल",
    locationLabel: "स्थान",
    workingHoursLabel: "कार्य समय",
    whatsappUs: "व्हाट्सऐप करें",
    faqEyebrow: "कोई सवाल है?",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faqSubtitle: "हमारी एसी सेवाओं से जुड़े सामान्य सवालों के जवाब पाएं।",
    ctaTitle: "आज ही एसी सर्विस चाहिए?",
    ctaDescription: "अभी फ्री कंसल्टेशन बुक करें। हमारी विशेषज्ञ टीम हर एसी समस्या में आपकी मदद के लिए तैयार है।",
    privacyPolicy: "गोपनीयता नीति",
    sitemapLabel: "साइटमैप",
    socialLinksLabel: "सोशल लिंक",
    quickTrustLabel: "विश्वास संकेतक",
    contactDetailsLabel: "संपर्क विवरण",
    availableServicesAria: "उपलब्ध सेवा विकल्प",
    footerLinksAria: "फुटर लिंक अनुभाग",
    callAriaPrefix: "कॉल",
    locationMapSuffix: "स्थान मानचित्र",
    starAria: "पांच सितारा दृश्य रेटिंग",
    copyright: "कॉपीराइट हैदराबाद एसी सर्विसेज 2021",
    sitemapLinks: [
      { label: "होम", to: "/" },
      { label: "हमारे बारे में", to: "/about" },
      { label: "सेवाएं", to: "/services" },
      { label: "ब्लॉग", to: "/blog" },
      { label: "संपर्क", to: "/contact" },
    ],
  },
  te: {
    heroBadge: "Google Rating 4.9",
    heroTitleStart: "Prathi Sthalanki Expert AC Solutions",
    heroTitleHighlight: "Smart Cooling",
    heroSummary:
      "Residential nundi commercial varaku complete AC services. Hyderabad lo installation, repair, maintenance mariyu AMC plans.",
    directSupport: "Direct Support",
    callNow: "Call Cheyyandi",
    bookConsultation: "Free Consultation Book Cheyyandi",
    callPrefix: "Call:",
    trustEyebrow: "Business Trust",
    trustTitle: "Nammakamaina Cooling Support",
    trustHighlights: [
      {
        title: "20+ Years Experience",
        description: "Hyderabad lo reliable AC installation, repair mariyu maintenance support.",
      },
      {
        title: "Trusted HVAC Experts",
        description: "Residential mariyu commercial cooling needs kosam trained technicians.",
      },
      {
        title: "Google Rating 4.9",
        description: "Clear communication tho consistent service quality.",
      },
    ],
    trustBadges: ["Multi-Brand Experts", "Transparent Pricing", "Emergency Support", "Verified Team"],
    statsEyebrow: "Service Numbers",
    statsTitle: "Maa Reliable Cooling Support ni chupinche numbers",
    statsDescription:
      "Rating nundi support availability varaku, ee numbers Hyderabad lo customers nammina maa consistent AC service ni chupistayi.",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating" },
      { value: 500, suffix: "+", label: "Happy Customers" },
      { value: 10, suffix: "+", label: "Years Experience" },
      { value: 24, suffix: "/7", label: "Direct Support" },
    ],
    collaboratorsEyebrow: "Mana Collaborators",
    collaboratorsTitle: "Memu Panichesey Brands",
    collaboratorsDescription: "Top AC brands kosam trusted support.",
    industriesEyebrow: "Industries We Serve",
    industriesTitle: "Prathi Sector ki Specialized Cooling",
    industriesDescription: "Corporate offices nundi industrial warehouses varaku tailored HVAC infrastructure.",
    industries: [
      { title: "Corporate Offices", description: "Workspaces kosam efficient multi-zone cooling systems." },
      { title: "Restaurants & Kitchens", description: "Hospitality industry kosam heavy-duty exhaust systems." },
      { title: "Healthcare Facilities", description: "Clinics mariyu hospitals kosam precision cooling." },
      { title: "Industrial & Warehouses", description: "Factories mariyu storage kosam large-scale solutions." },
    ],
    serviceFocusEyebrow: "Service Focus",
    serviceFocusTitle: "Professional Cooling Services",
    latestArticlesEyebrow: "Latest Articles",
    latestArticlesTitle: "Helpful Tips & Resources",
    latestArticlesDescription: "AC maintenance, installation mariyu care gurinchi telusukondi.",
    readArticle: "Article Chadavandi",
    askGuidance: "Mana team nundi guidance tiskondi",
    serviceSupportEyebrow: "Service Support",
    serviceSupportTitle: "Contact & Location",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Sthanam",
    workingHoursLabel: "Working Hours",
    whatsappUs: "WhatsApp Cheyyandi",
    faqEyebrow: "Questions Unnaya?",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Mana AC services gurinchi common questions ki samadhanalu.",
    ctaTitle: "Ivalo AC Service Kavala?",
    ctaDescription: "Free consultation book cheyyandi. Mana experts prathi AC problem ki ready ga untaru.",
    privacyPolicy: "Privacy Policy",
    sitemapLabel: "Sitemap",
    socialLinksLabel: "Social links",
    quickTrustLabel: "Quick trust badges",
    contactDetailsLabel: "Contact details",
    availableServicesAria: "Available service options",
    footerLinksAria: "Footer completion links",
    callAriaPrefix: "Call",
    locationMapSuffix: "location map",
    starAria: "Five star visual rating",
    copyright: "Copyright Hyderabad Ac Services 2021",
    sitemapLinks: [
      { label: "Home", to: "/" },
      { label: "Maa Gurinchi", to: "/about" },
      { label: "Sevalu", to: "/services" },
      { label: "Blog", to: "/blog" },
      { label: "Sampradinchandi", to: "/contact" },
    ],
  },
};

const utilitySocialIcons = {
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

function HomeWaveDivider({ flip = false }) {
  return (
    <div className={`home-wave-divider ${flip ? "home-wave-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1600 120" preserveAspectRatio="none">
        <path d="M0 64C178 16 356 16 534 64C712 112 890 112 1068 64C1246 16 1424 16 1600 64V120H0V64Z" />
      </svg>
    </div>
  );
}

function Home() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const copy = homeCopyByLanguage[language] ?? homeCopyByLanguage.en;
  const statsLocaleByLanguage = {
    en: "en-IN",
    hi: "hi-IN",
    te: "te-IN",
  };

  const serviceCards = [
    {
      title: siteContent.highlightedServices[0],
      points: siteContent.airConditioningServices.slice(0, 3),
      icon: serviceCardIcons[0],
    },
    {
      title: siteContent.highlightedServices[1],
      points: siteContent.airConditioningServices.slice(3, 6),
      icon: serviceCardIcons[1],
    },
    {
      title: siteContent.highlightedServices[2],
      points: siteContent.exhaustServices.slice(0, 3),
      icon: serviceCardIcons[2],
    },
  ];

  const trustHighlights = copy.trustHighlights.map((item, index) => ({
    ...item,
    icon: trustHighlightIcons[index],
  }));

  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteContent.location)}&output=embed`;
  const blogPosts =
    Array.isArray(siteContent.blogPosts) && siteContent.blogPosts.length
      ? siteContent.blogPosts
      : siteContent.blogTitles.map((title) => ({ title, href: null }));
  const blogLinks = blogPosts.map((post, index) => {
    const matchedBlog = blogs[index] ?? null;

    return {
      ...post,
      slug: matchedBlog?.slug ?? null,
    };
  });

  return (
    <>
      <div className="home-page home-page--modern">
      <section className="home-modern-hero" style={{ "--hero-image": `url(${heroBackground})` }}>
        <div className="home-modern-hero__media" aria-hidden="true"></div>
        <div className="home-modern-hero__overlay" aria-hidden="true"></div>

        <div className="home-modern-hero__content">
          <p className="home-modern-hero__badge">{copy.heroBadge} ★</p>
          <h1 className="home-modern-hero__title">
            {copy.heroTitleStart} <span>{copy.heroTitleHighlight}</span>
          </h1>

          <p className="home-modern-hero__summary">{copy.heroSummary}</p>

          <a className="home-modern-hero__phone-highlight" href={siteContent.phoneLink} aria-label={`${copy.callAriaPrefix} ${siteContent.phoneDisplay}`}>
            <span>{copy.directSupport}</span>
            <strong>{siteContent.phoneDisplay}</strong>
          </a>

          <div className="home-modern-hero__actions">
            <a className="home-modern-button home-modern-button--call" href={siteContent.phoneLink}>
              {copy.callNow}
            </a>
            <Link className="home-modern-button home-modern-button--primary" to="/book-service">
              {copy.bookConsultation}
            </Link>
            <a className="home-modern-button home-modern-button--secondary" href={siteContent.phoneLink}>
              {copy.callPrefix} {siteContent.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <HomeWaveDivider />

      <section className="home-trust-section home-reveal home-reveal-delay-1" data-reveal>
        <header className="home-trust-section__header">
          <p className="home-modern-eyebrow">{copy.trustEyebrow}</p>
          <h2 className="home-modern-section__title">{copy.trustTitle}</h2>
        </header>

        <div className="home-trust-grid">
          {trustHighlights.map((item, index) => (
            <article key={item.title} className="home-trust-card">
              <span className="home-trust-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>

              {index === 2 ? (
                <p className="home-trust-card__stars" aria-label={copy.starAria}>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </p>
              ) : null}

              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <ul className="home-trust-badges" aria-label={copy.quickTrustLabel}>
          {copy.trustBadges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </section>

      <AnimatedStats
        eyebrow={copy.statsEyebrow}
        title={copy.statsTitle}
        description={copy.statsDescription}
        stats={copy.stats}
        locale={statsLocaleByLanguage[language] ?? "en-IN"}
      />

      <HomeSection
        id="industries"
        className="home-modern-section--industries"
        eyebrow={copy.industriesEyebrow}
        title={copy.industriesTitle}
        description={copy.industriesDescription}
        revealClass="home-reveal-delay-1"
      >
        <div className="home-industries-grid">
          {copy.industries.map((industry, index) => (
            <HomeCard
              key={industry.title}
              className={`home-industry-card home-industry-card--${index + 1}`}
              icon={industryIcons[index]}
              title={industry.title}
              description={industry.description}
              revealClass={revealDelayClass(index + 1)}
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection
        className="home-modern-section--collaborators"
        eyebrow={copy.collaboratorsEyebrow}
        title={copy.collaboratorsTitle}
        description={copy.collaboratorsDescription}
        revealClass="home-reveal-delay-1"
      >
      
        <div className="home-trusted-by__layout">
          <div className="home-trusted-by__left">
            <div className="home-trusted-by__logos home-modern-grid home-modern-grid--logos" aria-label={copy.collaboratorsTitle}>
              {partnerBrands.map((brand, index) => (
                <HomeCard
                  key={brand.name}
                  className="home-modern-logo-card home-trusted-by__logo-card"
                  revealClass={revealDelayClass(index + 1)}
                >
                  <img className="home-modern-logo-card__image" src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
                </HomeCard>
              ))}
            </div>
          </div>

          <div className="home-trusted-by__media">
            <img src="/images/AC%20services.jpg" alt="Technician servicing an AC system" loading="lazy" />
          </div>
        </div>
      </HomeSection>

      <HomeSection
        id="services"
        eyebrow={copy.serviceFocusEyebrow}
        title={copy.serviceFocusTitle}
        description={siteContent.companyDescription[0]}
        revealClass="home-reveal-delay-1"
      >
        <div className="home-modern-grid home-modern-grid--services">
          {serviceCards.map((serviceCard, index) => (
            <HomeCard
              key={serviceCard.title}
              className="home-modern-service-card"
              icon={serviceCard.icon}
              title={serviceCard.title}
              revealClass={revealDelayClass(index + 1)}
            >
              <ul className="home-modern-list">
                {serviceCard.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </HomeCard>
          ))}
        </div>

        <div className="home-modern-chip-row" aria-label={copy.availableServicesAria}>
          {siteContent.serviceOptions.map((serviceOption) => (
            <span key={serviceOption} className="home-modern-chip">
              {serviceOption}
            </span>
          ))}
        </div>
      </HomeSection>

      <HomeWaveDivider flip />

      <div className="home-modern-block home-reveal home-reveal-delay-1" data-reveal>
        <Testimonials />
      </div>

      <HomeSection
        className="home-modern-section--articles"
        eyebrow={copy.latestArticlesEyebrow}
        title={copy.latestArticlesTitle}
        description={copy.latestArticlesDescription}
        revealClass="home-reveal-delay-1"
      >
        <div className="home-modern-grid home-modern-grid--blog">
          {blogLinks.map((post, index) => (
            <HomeCard key={post.title} className="home-modern-blog-card" revealClass={revealDelayClass(index + 1)}>
              <span className="home-modern-blog-icon" aria-hidden="true">
                {articleIcon}
              </span>

              <div className="home-modern-blog-card__content">
                <h3>{post.title}</h3>

                <Link className="home-modern-blog-link" to={post.slug ? `/blog/${post.slug}` : "/blog"}>
                  {copy.readArticle}
                </Link>
              </div>
            </HomeCard>
          ))}
        </div>

        <Link className="home-modern-inline-link" to="/contact">
          {copy.askGuidance} →
        </Link>
      </HomeSection>

      <HomeFaqAccordion
        items={siteContent.faqItems}
        eyebrow={copy.faqEyebrow}
        title={copy.faqTitle}
        subtitle={copy.faqSubtitle}
      />

            </div>
      <Footer />
    </>
  );
}

export default Home;
