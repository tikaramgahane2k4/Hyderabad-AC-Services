import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import { siteContent } from "../data/siteContent";
import heroBackground from "../assets/hero-ac-bg.jpg";

const serviceGroups = [
  { title: "Air Conditioning", items: siteContent.airConditioningServices },
  { title: "Exhaust", items: siteContent.exhaustServices },
];

function Home() {
  const heroSummary =
    "End-to-end air conditioning services - from residential to commercial. Installation, repair, maintenance and AMC plans in Hyderabad.";

  useEffect(() => {
    const selectors = [
      ".home-page .home-section",
      ".home-page .page-card",
      ".home-page .testimonials-section",
      ".home-page .faq-section",
      ".home-page .cta-section",
      ".home-page .site-footer",
    ];

    const elements = Array.from(document.querySelectorAll(selectors.join(",")));

    elements.forEach((element, index) => {
      element.classList.add("home-soft-reveal");
      element.style.setProperty("--soft-delay", `${(index % 8) * 75}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("home-soft-reveal", "is-visible");
        element.style.removeProperty("--soft-delay");
      });
    };
  }, []);

  const handleHeroPointerMove = (event) => {
    if (event.pointerType === "touch") {
      return;
    }

    const heroBounds = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - heroBounds.left) / heroBounds.width;
    const pointerY = (event.clientY - heroBounds.top) / heroBounds.height;

    event.currentTarget.style.setProperty("--hero-glow-x", `${(pointerX * 100).toFixed(2)}%`);
    event.currentTarget.style.setProperty("--hero-glow-y", `${(pointerY * 100).toFixed(2)}%`);
    event.currentTarget.style.setProperty("--hero-shift-x", `${((pointerX - 0.5) * 12).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--hero-shift-y", `${((pointerY - 0.5) * 8).toFixed(2)}px`);
  };

  const handleHeroPointerLeave = (event) => {
    event.currentTarget.style.setProperty("--hero-glow-x", "72%");
    event.currentTarget.style.setProperty("--hero-glow-y", "30%");
    event.currentTarget.style.setProperty("--hero-shift-x", "0px");
    event.currentTarget.style.setProperty("--hero-shift-y", "0px");
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="home-hero"
        style={{ "--hero-image": `url(${heroBackground})` }}
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={handleHeroPointerLeave}
      >
        <div className="home-hero__media" aria-hidden="true"></div>
        <div className="home-hero__overlay" aria-hidden="true"></div>

        <div className="home-hero__content">
          <p className="home-hero__badge">Google Rating 4.9 ★</p>
          <h1 className="home-hero__title">
            Expert AC Solutions for <span>Every Space</span>
          </h1>

          <div className="home-hero__description">
            <p>{heroSummary}</p>
          </div>

          <div className="home-hero__actions">
            <a className="home-button home-button--primary" href={siteContent.whatsappLink}>
              Book Free Consultation
            </a>
            <a className="home-button home-button--secondary" href={siteContent.phoneLink}>
              Call: {siteContent.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Our Services</p>
          <h2>Expert AC Solutions for Every Space</h2>
          <p>Professional air conditioning and exhaust solutions across Hyderabad</p>
        </div>

        <div className="page-grid page-grid--two">
          {serviceGroups.map((group) => (
            <article className="page-card" key={group.title}>
              <p className="page-kicker">{group.title}</p>
              <h3>{group.title} Services</h3>
              <ul className="page-list">
                {group.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <Link className="home-inline-link" to="/contact">
                Book this service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ items={siteContent.faqItems} />

      {/* Blog Section */}
      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Latest Articles</p>
          <h2>Helpful Tips & Resources</h2>
          <p>Learn more about AC maintenance, installation, and care</p>
        </div>
        <div className="page-card page-card--copy">
          <ul className="page-list page-list--spacious">
            {siteContent.blogTitles.map((title) => (
              <li key={title}>
                <strong>{title}</strong>
              </li>
            ))}
          </ul>
          <Link className="home-inline-link" to="/contact">
            Ask our team for guidance →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Need AC Service Today?"
        description="Book a free consultation now. Our expert technicians are ready to help with any AC problem — residential or commercial."
        primaryButtonText="Book Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="WhatsApp Us"
        secondaryButtonLink={siteContent.whatsappLink}
        icon="phone"
      />

      <Footer />
    </div>
  );
}

export default Home;
