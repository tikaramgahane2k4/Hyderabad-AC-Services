import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import AnimatedStats from "../components/AnimatedStats";
import HomeCard from "../components/home/HomeCard";
import HomeFaqAccordion from "../components/home/HomeFaqAccordion";
import HomeSection from "../components/home/HomeSection";
import ContactSectionPremium from "../components/ContactSectionPremium";
import { blogs } from "../data/blogs";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "../styles/home.css";

const heroBackground = "/images/wallpaper.png";

const enterpriseTrustIndicators = [
  "100+ Clients Served",
  "5+ Years Experience",
  "24/7 Support",
];

const heroServiceTypes = [
  "Commercial AC Installation",
  "HVAC Maintenance",
  "Emergency Repairs",
  "AMC Contracts",
  "Industrial Cooling",
];

const partnerBrands = [
  { name: "Voltas", logo: "/images/partners/voltas-logo.svg" },
  { name: "Blue Star", logo: "/images/partners/blue-star-logo.svg" },
  { name: "Carrier", logo: "/images/partners/carrier-logo.svg" },
  { name: "Daikin", logo: "/images/partners/daikin-logo.svg" },
];

const revealDelayClass = (index) => `home-reveal-delay-${(index % 6) + 1}`;

const servicesCardIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="m7 8 2.1 2.1M9.1 8 7 10.1M13.6 6.4l4 4M12.4 17.6l-4-4" strokeLinecap="round" />
      <path d="M12 3.8a8.2 8.2 0 1 0 8.2 8.2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M12 4v16M7.8 8a4.2 4.2 0 0 0 0 8M16.2 8a4.2 4.2 0 0 1 0 8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="m12 3.8 1.9 3.9 4.3.6-3.1 3 .7 4.2L12 13.7 8.2 15.5l.7-4.2-3.1-3 4.3-.6L12 3.8Z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M12 3.4 5.2 6.6v5.8c0 3.3 2.6 6.1 6.8 8.2 4.2-2.1 6.8-4.9 6.8-8.2V6.6L12 3.4Z" />
      <path d="m9.3 11.8 1.8 1.8 3.6-3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

const servicePointCheckIcon = (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
    <circle cx="10" cy="10" r="7" />
    <path d="m7 10 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

const customerStatIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3.5 14.4 8l4.9.7-3.6 3.5.9 4.9-4.6-2.4-4.6 2.4.9-4.9L4.7 8.7 9.6 8 12 3.5Z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
      <path d="M4.5 20c1.7-3 4.3-4.5 7.5-4.5S17.8 17 19.5 20" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14.5 4.5 19 9l-8.5 8.5H6v-4.5L14.5 4.5Z" />
      <path d="M13.2 5.8 18.2 10.8" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.8v4.6l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

const homeCopyByLanguage = {
  en: {
    heroBadge: "Google Rating 4.9",
    heroTitleStart: "Smart AC Solutions for",
    heroTitleHighlight: "Modern Commercial Spaces",
    heroSummary:
      "We deliver energy-efficient HVAC solutions designed for performance, cost savings, and long-term reliability.",
    directSupport: "Trusted Support",
    callNow: "Call Now",
    bookConsultation: "Book Service",
    callPrefix: "Call:",
    trustTitle: "Why Businesses Choose Us",
    trustHighlights: [
      {
        title: "Experienced Technicians",
        description: "Skilled professionals for all AC services",
      },
      {
        title: "Quick & Reliable Service",
        description: "Fast response with same-day service available",
      },
      {
        title: "24/7 Support",
        description: "Always available whenever you need help",
      },
    ],
    trustBadges: ["Transparent Pricing", "Same-Day Service", "Verified Technicians"],
    statsEyebrow: "PROVEN TRACK RECORD",
    statsTitle: "By the Numbers",
    statsDescription: "Serving enterprises and commercial facilities across Hyderabad with measurable results",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating", icon: customerStatIcons[0] },
      { value: 500, suffix: "+", label: "Enterprise Clients", icon: customerStatIcons[1] },
      { value: 10, suffix: "+", label: "Years in Service", icon: customerStatIcons[2] },
      { value: 24, suffix: "/7", label: "Support", icon: customerStatIcons[3] },
    ],
    collaboratorsEyebrow: "TRUSTED BRANDS",
    collaboratorsTitle: "Premier Partners in Cooling Solutions",
    collaboratorsDescription: "We're certified partners with industry-leading manufacturers, ensuring the highest standards in installation and maintenance.",
    serviceFocusEyebrow: "OUR SERVICES",
    serviceFocusTitle: "Comprehensive HVAC Solutions",
    latestArticlesEyebrow: "RESOURCES & INSIGHTS",
    latestArticlesTitle: "Expert Guidance",
    latestArticlesDescription: "Industry insights and best practices for optimal climate control in commercial and enterprise environments",
    readArticle: "Read More",
    askGuidance: "Contact Our Team",
    serviceSupportEyebrow: "GET IN TOUCH",
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
    statsEyebrow: "",
    statsTitle: "सेवा आंकड़े",
    statsDescription:
      "रेटिंग से लेकर उपलब्ध सहायता तक, ये आंकड़े हैदराबाद में हमारी लगातार और भरोसेमंद एसी सेवा को दर्शाते हैं।",
    stats: [
      { value: 4.9, decimals: 1, label: "गूगल रेटिंग", icon: "rating" },
      { value: 500, suffix: "+", label: "संतुष्ट ग्राहक", icon: "customers" },
      { value: 10, suffix: "+", label: "सालों का अनुभव", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 सहायता", icon: "support" },
    ],
    collaboratorsEyebrow: "हमारे सहयोगी",
    collaboratorsTitle: "वे ब्रांड जिनके साथ हम काम करते हैं",
    collaboratorsDescription: "शीर्ष एसी ब्रांड्स के लिए भरोसेमंद सपोर्ट।",
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
    statsEyebrow: "",
    statsTitle: "Trusted by Hundreds Across Hyderabad",
    statsDescription:
      "A quick overview of our trusted services, satisfied customers, and commitment to delivering reliable AC solutions across Hyderabad.",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating", icon: "rating" },
      { value: 500, suffix: "+", label: "Happy Customers", icon: "customers" },
      { value: 10, suffix: "+", label: "Years Experience", icon: "experience" },
      { value: 24, suffix: "/7", label: "24/7 Support", icon: "support" },
    ],
    collaboratorsEyebrow: "Mana Collaborators",
    collaboratorsTitle: "Memu Panichesey Brands",
    collaboratorsDescription: "Top AC brands kosam trusted support.",
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
      title: "AC Repair",
      points: ["Quick diagnosis", "Leak repair", "Multi-brand support"],
      image: "/images/AC%20repair.jpg",
      badge: "Repair",
      icon: servicesCardIcons[0],
      href: "/services/ac-repair",
    },
    {
      title: "AC Maintenance",
      points: ["System check", "Output check", "Energy saving"],
      image: "/images/AC%20Service%20&%20Maintenance.jpg",
      badge: "Maintenance",
      icon: servicesCardIcons[1],
      href: "/services/ac-service",
    },
    {
      title: "AC Installation",
      points: ["Expert setup", "Piping setup", "On-time handover"],
      image: "/images/AC%20Installation.jpg",
      badge: "Installation",
      icon: servicesCardIcons[2],
      href: "/services/ac-installation",
    },
    {
      title: "AMC Plans",
      points: ["Routine checks", "Preventive care", "Priority help"],
      image: "/images/Annual%20Maintenance%20Contracts.jpg",
      badge: "AMC",
      icon: servicesCardIcons[3],
      href: "/services/ac-service",
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
        <section
          className="home-modern-hero home-modern-hero--split"
          style={{
            backgroundImage: `url("${heroBackground}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="home-modern-hero__content">
            <p className="home-modern-hero__badge">B2B HVAC Solutions</p>
            <h1 className="home-modern-hero__title">
              <span>{copy.heroTitleStart}</span>
              <span>{copy.heroTitleHighlight}</span>
            </h1>
            <p className="home-modern-hero__summary">{copy.heroSummary}</p>
          </div>

          <div className="home-modern-hero__actions">
            <Link className="home-modern-button home-modern-button--primary" to="/contact">
              Get AMC Quote
            </Link>
            <Link className="home-modern-button home-modern-button--secondary" to="/book-service">
              Book Service
            </Link>
          </div>

          <ul className="home-modern-hero__trust-indicators" aria-label="Business trust indicators">
            {enterpriseTrustIndicators.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-modern-hero__right-section">
          <div className="home-lead-card__wrapper">
            <form className="home-lead-card home-lead-card--hero" onSubmit={(event) => event.preventDefault()}>
              <div className="home-lead-card__header">
                <p className="home-lead-card__eyebrow">B2B Lead Generation</p>
                <h2>Tell us about your requirement</h2>
                <p>Call or WhatsApp our team for a faster response.</p>
              </div>

              <div className="home-lead-card__grid">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  Email
                  <input type="email" name="email" placeholder="Your email" required />
                </label>

                <label className="home-lead-card__full">
                  Company Name
                  <input type="text" name="company" placeholder="Your company or site name" required />
                </label>

                <label>
                  Number of AC Units
                  <input type="number" name="units" placeholder="e.g. 12" min="1" />
                </label>

                <label className="home-lead-card__full">
                  Service Type
                  <select name="serviceType" defaultValue="" required>
                    <option value="" disabled>
                      Select service type
                    </option>
                    {heroServiceTypes.map((serviceType) => (
                      <option key={serviceType} value={serviceType}>
                        {serviceType}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="home-lead-card__full">
                  Message
                  <textarea name="message" rows="4" placeholder="Share timeline, location, service scope, or any special requirements." />
                </label>
              </div>

              <button type="submit">Submit Request</button>
              <small>Your information is safe with us.</small>
            </form>
          </div>
        </section>
      </div>

      <section
        className="home-trust-section home-reveal home-reveal-delay-1"
        data-reveal
      >
        <div className="home-trust-section__shell">
          <header className="home-trust-section__header">
            <h2 className="home-modern-section__title">{copy.trustTitle}</h2>
          </header>

          <div className="home-trust-grid">
            {trustHighlights.map((item, index) => (
              <article key={item.title} className="home-trust-card">
                <span className="home-trust-card__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                {index === 2 && item.title.includes("Google") ? (
                  <p className="home-trust-card__stars" aria-label={copy.starAria}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </p>
                ) : (
                  <p>{item.description}</p>
                )}
                {index !== 2 && <p>{item.description}</p>}
              </article>
            ))}
          </div>

          <div className="home-trust-section__cta">
            <Link className="home-trust-section__cta-button" to="/book-service">
              Book AC Service
            </Link>
            <Link
              className="home-trust-section__cta-button home-trust-section__cta-button--secondary"
              to="/contact"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <AnimatedStats
        eyebrow={copy.statsEyebrow}
        title={copy.statsTitle}
        description={copy.statsDescription}
        stats={copy.stats}
        locale={statsLocaleByLanguage[language] ?? "en-IN"}
      />

      <HomeSection className="home-modern-section--collaborators" revealClass="home-reveal-delay-1">
        <header className="home-collaborators__header">
          <h2 className="home-collaborators__heading">{copy.collaboratorsEyebrow}</h2>
          <p className="home-collaborators__subheading">{copy.collaboratorsTitle}</p>
          <p className="home-collaborators__description">{copy.collaboratorsDescription}</p>
        </header>

        <div className="home-trusted-by__layout">
          <div className="home-trusted-by__left">
            <div className="home-trusted-by__logos" aria-label={copy.collaboratorsTitle}>
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

          <ul className="home-trust-badges" aria-label={copy.quickTrustLabel}>
            {copy.trustBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
      </HomeSection>

      <HomeSection id="services" className="home-modern-section--services" eyebrow={copy.serviceFocusEyebrow} title={copy.serviceFocusTitle} description="Count on our certified professionals for reliable AC services, repairs, and maintenance. We ensure comfort, efficiency, and peace of mind - all year round." revealClass="home-reveal-delay-1">
        <div className="home-services-grid">
          {serviceCards.map((serviceCard, index) => (
            <article key={serviceCard.title} className={`home-services-card home-reveal ${revealDelayClass(index + 1)}`} data-reveal>
              <div className="home-services-card__media">
                <img src={serviceCard.image} alt={serviceCard.title} loading="lazy" />
              </div>
              <div className="home-services-card__content">
                <span className="home-services-card__icon" aria-hidden="true">
                  {serviceCard.icon}
                </span>
                <span className="home-services-card__badge">{serviceCard.badge}</span>
                <h3>{serviceCard.title}</h3>
                <ul className="home-services-card__list">
                  {serviceCard.points.map((point) => (
                    <li key={point}>
                      <span className="home-services-card__check" aria-hidden="true">
                        {servicePointCheckIcon}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link className="home-services-card__button" to={serviceCard.href}>
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="home-services-actions">
          <Link className="home-services-view-all" to="/services">
            View All Services →
          </Link>
        </div>
      </HomeSection>

      <HomeWaveDivider flip />

      <div className="home-modern-block home-reveal home-reveal-delay-1" data-reveal>
        <Testimonials />
      </div>

      <HomeSection className="home-modern-section--articles" eyebrow={copy.latestArticlesEyebrow} title={copy.latestArticlesTitle} description={copy.latestArticlesDescription} revealClass="home-reveal-delay-1">
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

      <HomeFaqAccordion items={siteContent.faqItems} eyebrow={copy.faqEyebrow} title={copy.faqTitle} subtitle={copy.faqSubtitle} />

      <ContactSectionPremium />

      <Footer />
    </>
  );
}

export default Home;