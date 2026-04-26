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

const blogCardDefaults = {
  category: "Tips",
  image: "/images/AC%20services.jpg",
  meta: "3 min read",
  ctaLabel: "Read More →",
};

const blogCardPresets = {
  installation: {
    category: "Installation",
    image: "/images/AC%20Service%20%26%20Maintenance.jpg",
    meta: "Expert Tip",
    ctaLabel: "Read More →",
  },
  maintenance: {
    category: "Maintenance",
    image: "/images/AC%20services.jpg",
    meta: "3 min read",
    ctaLabel: "Read More →",
  },
  repair: {
    category: "Repair",
    image: "/images/AC%20Installation.jpg",
    meta: "4 min read",
    ctaLabel: "Read More →",
  },
  copper: {
    category: "Tips",
    image: "/images/Annual%20Maintenance%20Contracts.jpg",
    meta: "Expert Guide",
    ctaLabel: "Read More →",
  },
};

const getBlogCardPreset = (post, index) => {
  const searchText = `${post?.slug ?? ""} ${post?.title ?? ""}`.toLowerCase();

  if (searchText.includes("copper")) {
    return blogCardPresets.copper;
  }

  if (searchText.includes("install")) {
    return blogCardPresets.installation;
  }

  if (searchText.includes("repair") || searchText.includes("leak")) {
    return blogCardPresets.repair;
  }

  if (searchText.includes("service") || searchText.includes("maint")) {
    return blogCardPresets.maintenance;
  }

  const fallbackByIndex = [
    blogCardPresets.installation,
    blogCardPresets.repair,
    blogCardPresets.copper,
    blogCardPresets.maintenance,
  ];

  return fallbackByIndex[index % fallbackByIndex.length] ?? blogCardDefaults;
};

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

const homeCopyByLanguage = {
  en: {
    heroBadge: "Google Rating 4.9",
    heroTitleStart: "Expert AC Solutions for",
    heroTitleHighlight: "Every Space",
    heroSummary:
      "End-to-end air conditioning services - from residential to commercial. Installation, repair, maintenance and AMC plans in Hyderabad.",
    directSupport: "Direct Support",
    callNow: "Call Now",
    bookConsultation: "Book Free Consultation",
    callPrefix: "Call:",
    trustEyebrow: "WHY CUSTOMERS CHOOSE US",
    trustTitle: "Simple, reliable AC service",
    trustHighlights: [
      {
        title: "Experienced Technicians",
        description: "Skilled professionals for all AC services",
      },
      {
        title: "Quick & Reliable Service",
        description: "Fast response times with same-day service available",
      },
      {
        title: "Enterprise Grade Support",
        description: "24/7 availability for your critical cooling needs",
      },
    ],
    trustBadges: ["Multi-Brand Specialists", "Transparent Pricing", "Emergency Support", "Verified Service Team"],
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
    collaboratorsEyebrow: "Our Collaborators",
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
    trustEyebrow: "विश्वसनीयता",
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
    trustEyebrow: "Business Trust",
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
    icon: trustHighlightIcons[index] ?? trustHighlightIcons[0],
  }));

  const blogPosts =
    Array.isArray(siteContent.blogPosts) && siteContent.blogPosts.length
      ? siteContent.blogPosts
      : siteContent.blogTitles.map((title) => ({ title, href: null }));

  const blogImageOverrides = [
    null,
    "/images/AC Service & Maintenance.jpg",
    "/images/AC services.jpg",
    "/images/AC repair.jpg",
  ];

  const blogLinks = blogPosts
    .filter((post) => typeof post?.title === "string" && post.title.trim().length > 0)
    .map((post, index) => {
      const matchedBlog = blogs[index] ?? null;
      const slug = matchedBlog?.slug ?? null;
      const cardPreset = getBlogCardPreset({ ...post, slug }, index);

      return {
        ...post,
        slug,
        ...blogCardDefaults,
        ...cardPreset,
        image: blogImageOverrides[index] ?? cardPreset.image ?? blogCardDefaults.image,
      };
    });

  const resourceCards = Array.from({ length: 4 }, (_, index) => {
    const post = blogLinks[index] ?? blogs[index] ?? null;

    if (!post) {
        return null;
    }

    const media = post; 

    return {
        ...post,
        image: media.image,
        imagePosition: media.imagePosition,
        summary: media.summary,
    };
    }).filter(Boolean);

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
            <p className="home-modern-hero__badge">Trusted HVAC Partner</p>
            <h1 className="home-modern-hero__title">Reliable AC Solutions for Businesses & Commercial Spaces</h1>

            <p className="home-modern-hero__summary">
              End-to-end air conditioning services designed to ensure uninterrupted operations, energy efficiency, and long-term system performance.
            </p>

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

          </div>
        </div>

        <div className="home-modern-hero__right">
          <form className="home-lead-card" onSubmit={(event) => event.preventDefault()}>
            <div className="home-lead-card__header">
              <h2>Get Expert Consultation</h2>
              <p>Share your details and our commercial HVAC team will respond promptly.</p>
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
                <textarea name="message" rows="4" placeholder="Tell us about your requirement" />
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
        revealClass="home-reveal-delay-1"
      >
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
              <div className="home-modern-blog-card__media">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>

              <div className="home-modern-blog-card__content">
                <span className="home-modern-blog-tag">{post.category}</span>
                <h3>{post.title}</h3>
                <p className="home-modern-blog-meta">{post.meta}</p>

                <Link className="home-modern-blog-link" to={post.slug ? `/blog/${post.slug}` : "/blog"}>
                  {post.ctaLabel}
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
  