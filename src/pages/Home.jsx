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
    trustEyebrow: "WHY CHOOSE US",
    trustTitle: "Why Businesses Choose Us",
    trustHighlights: [
      { title: "Experienced Technicians", description: "Skilled professionals for all AC services." },
      { title: "Quick & Reliable Service", description: "Fast response with same-day service availability." },
      { title: "24/7 Support", description: "Always available whenever you need help." },
    ],
    trustBadges: ["Transparent Pricing", "Same-Day Service", "Verified Technicians"],
    statsEyebrow: "PROVEN TRACK RECORD",
    statsTitle: "By the Numbers",
    statsDescription:
      "Serving homes, offices, and commercial facilities across Hyderabad with reliable AC support.",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating", icon: "rating" },
      { value: 500, suffix: "+", label: "Happy Customers", icon: "customers" },
      { value: 10, suffix: "+", label: "Years Experience", icon: "experience" },
      { value: 24, suffix: "/7", label: "Support", icon: "support" },
    ],
    collaboratorsEyebrow: "OUR COLLABORATORS",
    collaboratorsTitle: "Brands We Work With",
    collaboratorsDescription:
      "Trusted support for leading air conditioning brands across residential and commercial spaces.",
    serviceFocusEyebrow: "OUR SERVICES",
    serviceFocusTitle: "Professional Cooling Services with Better Coverage",
    latestArticlesEyebrow: "LATEST ARTICLES",
    latestArticlesTitle: "Helpful Tips & Resources",
    latestArticlesDescription: "Learn more about AC maintenance, installation, and long-term care.",
    readArticle: "Read article",
    askGuidance: "Ask our team for guidance",
    serviceSupportEyebrow: "SERVICE SUPPORT",
    serviceSupportTitle: "Contact & Location",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
    workingHoursLabel: "Working Hours",
    whatsappUs: "WhatsApp Us",
    faqEyebrow: "Got Questions?",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our AC services and solutions.",
    quickTrustLabel: "Quick trust badges",
    availableServicesAria: "Available service options",
    starAria: "Five star visual rating",
  },
  hi: {
    heroBadge: "गूगल रेटिंग 4.9",
    heroTitleStart: "हर जगह के लिए विशेषज्ञ एसी समाधान",
    heroTitleHighlight: "विश्वसनीय कूलिंग",
    heroSummary:
      "रिहायशी से लेकर कमर्शियल तक पूरी एयर कंडीशनिंग सेवाएं। हैदराबाद में इंस्टॉलेशन, रिपेयर, मेंटेनेंस और एएमसी प्लान उपलब्ध हैं।",
    directSupport: "सीधा सहायता",
    callNow: "कॉल करें",
    bookConsultation: "सर्विस बुक करें",
    callPrefix: "कॉल:",
    trustEyebrow: "हम क्यों",
    trustTitle: "भरोसेमंद कूलिंग सपोर्ट",
    trustHighlights: [
      { title: "अनुभवी तकनीशियन", description: "हर तरह की एसी सर्विस के लिए प्रशिक्षित विशेषज्ञ।" },
      { title: "तेज और भरोसेमंद सेवा", description: "तेज प्रतिक्रिया और जरूरत पड़ने पर उसी दिन सेवा।" },
      { title: "24/7 सहायता", description: "जब भी मदद चाहिए, हमारी टीम उपलब्ध है।" },
    ],
    trustBadges: ["मल्टी-ब्रांड विशेषज्ञ", "पारदर्शी मूल्य", "सत्यापित तकनीशियन"],
    statsEyebrow: "भरोसे के आंकड़े",
    statsTitle: "सेवा आंकड़े",
    statsDescription:
      "रेटिंग से लेकर सहायता उपलब्धता तक, ये आंकड़े हमारी भरोसेमंद एसी सेवाओं को दर्शाते हैं।",
    stats: [
      { value: 4.9, decimals: 1, label: "गूगल रेटिंग", icon: "rating" },
      { value: 500, suffix: "+", label: "संतुष्ट ग्राहक", icon: "customers" },
      { value: 10, suffix: "+", label: "सालों का अनुभव", icon: "experience" },
      { value: 24, suffix: "/7", label: "सहायता", icon: "support" },
    ],
    collaboratorsEyebrow: "हमारे सहयोगी",
    collaboratorsTitle: "वे ब्रांड जिनके साथ हम काम करते हैं",
    collaboratorsDescription: "शीर्ष एसी ब्रांड्स के लिए भरोसेमंद सपोर्ट।",
    serviceFocusEyebrow: "हमारी सेवाएं",
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
    quickTrustLabel: "विश्वास संकेतक",
    availableServicesAria: "उपलब्ध सेवा विकल्प",
    starAria: "पांच सितारा दृश्य रेटिंग",
  },
  te: {
    heroBadge: "Google Rating 4.9",
    heroTitleStart: "Prathi Sthalanki Expert AC Solutions",
    heroTitleHighlight: "Smart Cooling",
    heroSummary:
      "Residential nundi commercial varaku complete AC services. Hyderabad lo installation, repair, maintenance mariyu AMC plans.",
    directSupport: "Direct Support",
    callNow: "Call Cheyyandi",
    bookConsultation: "Service Book Cheyyandi",
    callPrefix: "Call:",
    trustEyebrow: "ENDUKU MEME",
    trustTitle: "Nammakamaina Cooling Support",
    trustHighlights: [
      { title: "Experienced Technicians", description: "All AC services kosam trained professionals." },
      { title: "Quick & Reliable Service", description: "Fast response mariyu same-day service availability." },
      { title: "24/7 Support", description: "Meeru eppudu contact chesina support untundi." },
    ],
    trustBadges: ["Multi-Brand Experts", "Transparent Pricing", "Verified Team"],
    statsEyebrow: "SERVICE NUMBERS",
    statsTitle: "Trusted by Hundreds Across Hyderabad",
    statsDescription:
      "Mana reliable AC services, satisfied customers mariyu support gurinchi quick overview.",
    stats: [
      { value: 4.9, decimals: 1, label: "Google Rating", icon: "rating" },
      { value: 500, suffix: "+", label: "Happy Customers", icon: "customers" },
      { value: 10, suffix: "+", label: "Years Experience", icon: "experience" },
      { value: 24, suffix: "/7", label: "Support", icon: "support" },
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
    quickTrustLabel: "Quick trust badges",
    availableServicesAria: "Available service options",
    starAria: "Five star visual rating",
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

function ContactSectionPremium({ copy, siteContent, mapEmbedUrl }) {
  return (
    <HomeSection
      className="home-modern-section--contact"
      eyebrow={copy.serviceSupportEyebrow}
      title={copy.serviceSupportTitle}
      description={siteContent.contactPageDescription?.[0] ?? siteContent.companyDescription?.[0]}
      revealClass="home-reveal-delay-1"
    >
      <div className="home-modern-grid home-modern-grid--blog">
        <HomeCard className="home-modern-blog-card">
          <div className="home-modern-blog-card__content">
            <h3>{copy.phoneLabel}</h3>
            <p>
              <a className="home-modern-inline-link" href={siteContent.phoneLink}>
                {siteContent.phoneDisplay}
              </a>
            </p>
            <h3>{copy.emailLabel}</h3>
            <p>
              <a className="home-modern-inline-link" href={siteContent.emailLink}>
                {siteContent.email}
              </a>
            </p>
            <h3>{copy.locationLabel}</h3>
            <p>{siteContent.location}</p>
            <h3>{copy.workingHoursLabel}</h3>
            <p>{siteContent.workingHours}</p>
            <p>
              <a className="home-modern-inline-link" href={siteContent.whatsappLink} target="_blank" rel="noreferrer">
                {copy.whatsappUs}
              </a>
            </p>
            <div className="footer-socials">
              {siteContent.socialLinks.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialLink.label}
                  className={`social-icon-${socialLink.label.toLowerCase()}`}
                >
                  {utilitySocialIcons[socialLink.label]}
                </a>
              ))}
            </div>
          </div>
        </HomeCard>

        <div className="home-trusted-by__media">
          <iframe
            title={`${siteContent.businessName} map`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: "100%", minHeight: "100%", border: 0, borderRadius: "24px" }}
          />
        </div>
      </div>
    </HomeSection>
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
      image: "/images/AC Service & Maintenance.jpg",
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
    icon: trustHighlightIcons[index] ?? trustHighlightIcons[0],
  }));

  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteContent.location)}&output=embed`;
  const blogPosts =
    Array.isArray(siteContent.blogPosts) && siteContent.blogPosts.length
      ? siteContent.blogPosts
      : siteContent.blogTitles.map((title) => ({ title, slug: null }));

  const blogLinks = blogPosts.map((post, index) => {
    const matchedBlog = blogs.find((blog) => blog.slug === post.slug) ?? blogs[index] ?? null;

    return {
      ...post,
      slug: post.slug ?? matchedBlog?.slug ?? null,
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
          <div className="home-modern-hero__left">
            <div className="home-modern-hero__content">
              <p className="home-modern-hero__badge">{copy.heroBadge}</p>
              <h1 className="home-modern-hero__title">
                <span>{copy.heroTitleStart}</span>
                <span>{copy.heroTitleHighlight}</span>
              </h1>
              <p className="home-modern-hero__summary">{copy.heroSummary}</p>
              <div className="home-modern-hero__actions">
                <Link className="home-modern-button home-modern-button--primary" to="/contact">
                  {copy.bookConsultation}
                </Link>
                <a className="home-modern-button home-modern-button--secondary" href={siteContent.phoneLink}>
                  {copy.callNow}
                </a>
              </div>
              <ul className="home-modern-hero__trust-pills" aria-label="Business trust indicators">
                {enterpriseTrustIndicators.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="home-modern-hero__right">
            <form className="home-lead-card home-lead-card--hero" onSubmit={(event) => event.preventDefault()}>
              <div className="home-lead-card__header">
                <p className="home-lead-card__eyebrow">{copy.directSupport}</p>
                <h2>Tell us about your requirement</h2>
                <p>
                  {copy.callPrefix} {siteContent.phoneDisplay}
                </p>
              </div>

              <div className="home-lead-card__grid">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Company Name
                  <input type="text" name="company" placeholder="Your company or site name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="Your email" required />
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
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Share timeline, location, service scope, or any special requirements."
                  />
                </label>
              </div>

              <button type="submit">Submit Request</button>
              <small>Your information is safe with us.</small>
            </form>
          </div>
        </section>

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

          <div className="home-trust-section__cta">
            <Link className="home-trust-section__cta-button" to="/book-service">
              Book AC Service
            </Link>
            <Link className="home-trust-section__cta-button home-trust-section__cta-button--secondary" to="/contact">
              Get Free Quote
            </Link>
          </div>
        </section>

        <AnimatedStats
          eyebrow={copy.statsEyebrow}
          title={copy.statsTitle}
          description={copy.statsDescription}
          stats={copy.stats}
          locale={statsLocaleByLanguage[language] ?? "en-IN"}
        />

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
          className="home-modern-section--services"
          eyebrow={copy.serviceFocusEyebrow}
          title={copy.serviceFocusTitle}
          description={siteContent.companyDescription?.[0]}
          revealClass="home-reveal-delay-1"
        >
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
                    Learn More
                  </Link>
                </div>
              </article>
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
              <HomeCard
                key={post.title}
                className="home-modern-blog-card"
                revealClass={revealDelayClass(index + 1)}
              >
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
            {copy.askGuidance}
          </Link>
        </HomeSection>

        <HomeFaqAccordion
          items={siteContent.faqItems}
          eyebrow={copy.faqEyebrow}
          title={copy.faqTitle}
          subtitle={copy.faqSubtitle}
        />

        <ContactSectionPremium copy={copy} siteContent={siteContent} mapEmbedUrl={mapEmbedUrl} />
      </div>

      <Footer />
    </>
  );
}

export default Home;
