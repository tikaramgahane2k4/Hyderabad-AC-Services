import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/About.css";

function About() {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "24/7", label: "Support Availability" },
  ];

  const trustPoints = [
    {
      number: "01",
      title: "Experienced Engineers & Certified Technicians",
      desc: "Our team is fully certified and trained in HVAC systems for all residential and commercial needs.",
    },
    {
      number: "02",
      title: "Serving All Areas of Hyderabad",
      desc: "From Banjara Hills to Hitech City — we cover every part of Hyderabad and surrounding areas.",
    },
    {
      number: "03",
      title: "Transparent Pricing — No Hidden Charges",
      desc: "You'll know the full cost before we start. No surprises, no fine print.",
    },
    {
      number: "04",
      title: "Fast Response & Same-Day Service",
      desc: "AC emergency? We offer same-day service so you're never left sweating for long.",
    },
    {
      number: "05",
      title: "Eco-Friendly Practices & Responsible Recycling",
      desc: "We follow responsible refrigerant handling and eco-safe disposal practices on every job.",
    },
    {
      number: "06",
      title: "Customer Satisfaction Guaranteed",
      desc: "We don't consider a job done until you're completely happy with the result.",
    },
  ];

  const services = [
    {
      title: "AC Installation",
      description: "Split, window, and centralized cooling systems installed with precision and care.",
    },
    {
      title: "AC Repair",
      description: "Fast diagnosis, reliable fixes — for every brand, every problem.",
    },
    {
      title: "Preventive Maintenance",
      description: "Annual and seasonal AMC plans that keep your AC running like it's brand new.",
    },
    {
      title: "Ducting Systems",
      description: "Efficient air duct layout for better flow, lower energy bills, and cleaner air.",
    },
    {
      title: "Kitchen Exhaust",
      description: "Restaurant-grade exhaust systems built for heat, grease, and heavy daily use.",
    },
    {
      title: "VRF / VRV Systems",
      description: "Smart multi-zone cooling for large offices, hotels, and commercial buildings.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "You Call. We Listen.",
      desc: "Tell us your situation. We ask the right questions — not to waste your time, but to show up fully prepared.",
    },
    {
      step: "02",
      title: "We Assess. You Decide.",
      desc: "A certified engineer visits, evaluates your space, and gives you a clear, honest quote. No pressure.",
    },
    {
      step: "03",
      title: "We Work. You Relax.",
      desc: "Our team handles everything — on time, safely, and with a clean finish you'll actually notice.",
    },
    {
      step: "04",
      title: "Done. But Not Gone.",
      desc: "We follow up. We check in. We're available if anything feels off. That's just how we work.",
    },
  ];

  const testimonials = [
    {
      name: "Sangeta",
      role: "Chartered Accountant",
      quote:
        "My AC went out over the weekend. They showed up within two hours, had the part on hand, and fixed everything. Technicians were professional, punctual, and excellent. Will definitely return.",
      avatar: "SG",
    },
    {
      name: "Aijaz Khan",
      role: "Software Engineer",
      quote:
        "Friendly, professional, and always honest. They explain exactly what they're doing and what your options are. Fair prices, quality work. I highly recommend giving them a call.",
      avatar: "AK",
    },
    {
      name: "Raju",
      role: "Doctor",
      quote:
        "Within two hours of calling, they were at my door. Extremely professional — they explained everything clearly, worked quickly, and fixed it for a reasonable price. Will only use them from now on.",
      avatar: "RJ",
    },
  ];

  const sectors = [
    "Homes & Apartments",
    "Corporate Offices",
    "Restaurants & Kitchens",
    "Hospitals & Clinics",
    "Retail Showrooms",
    "Warehouses",
    "Industrial Facilities",
    "Commercial Buildings",
  ];

  return (
    <div className="about-page about-shell">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__left">
          <p className="about-eyebrow">About Us</p>
          <h1 className="about-hero__title">
            Complete AC &amp; HVAC Services<br />
            <span className="about-hero__title--accent">Across Hyderabad.</span>
          </h1>
          <p className="about-hero__sub">
            At Hyderabad AC Services, we provide complete Air Conditioning and HVAC Services in
            Hyderabad. With years of experience, we specialize in AC installation, repair,
            maintenance, ducting, centralized cooling, restaurant kitchen exhaust installation,
            and annual maintenance for both residential and commercial clients.
          </p>
          <p className="about-hero__trust">
            Our mission: keep every customer cool and comfortable with reliable, affordable,
            and professional AC Services.
          </p>
          <div className="about-hero__actions">
            <Link to="/contact" className="about-btn about-btn--primary">
              Get a Free Consultation
            </Link>
            <a className="about-btn about-btn--ghost" href="tel:+91XXXXXXXXXX">
              Call +91 XXXXX XXXXX
            </a>
          </div>
        </div>

        <div className="about-hero__right">
          <div className="about-hero__card">
            <div className="about-hero__card-tag">Trusted HVAC Partner</div>
            <p className="about-hero__card-desc">
              From split and window ACs to centralized ducting and VRF/VRV systems — we deliver
              end-to-end cooling solutions for homes, offices, restaurants, hospitals, and more.
            </p>
            <div className="about-stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="about-stat-item">
                  <strong>{s.number}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="about-hero__card-footer">
              <div className="about-rating">
                <span className="about-rating__score">4.9</span>
                <span className="about-rating__label">/ 5 average rating across 500+ clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="about-story">
        <div className="about-story__label">
          <p className="about-eyebrow">Who We Are</p>
          <div className="about-story__line" />
        </div>
        <div className="about-story__body">
          <h2>
            Certified HVAC professionals<br />
            committed to quality work.
          </h2>
          <p>
            Hyderabad AC Services is a team of certified HVAC engineers and professionals
            dedicated to delivering top-quality cooling solutions. From split and window ACs
            to centralized ducting and VRF/VRV systems, we provide end-to-end services
            tailored to your specific needs.
          </p>
          <p>
            Whether it's a home, office, restaurant, hospital, retail showroom, or industrial
            facility — we ensure every project is executed with precision, safety, and efficiency.
          </p>
          <p>
            Whether you're installing a new system, upgrading to centralized cooling, or just
            need seasonal maintenance — we're here to keep you cool, comfortable, and worry-free.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="about-values-section">
        <div className="about-section-head">
          <p className="about-eyebrow">Why Choose Us</p>
          <h2>Six reasons customers trust us with their AC</h2>
        </div>
        <div className="about-values-grid">
          {trustPoints.map((v) => (
            <div key={v.title} className="about-value-card">
              <span className="about-value-card__num">{v.number}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="about-services-section">
        <div className="about-section-head">
          <p className="about-eyebrow">What We Do</p>
          <h2>Everything HVAC. Under one roof.</h2>
          <p className="about-section-sub">
            Whether it's a simple repair or a complex centralized system — we've done it,
            certified for it, and ready for it.
          </p>
        </div>
        <div className="about-services-grid">
          {services.map((s) => (
            <article key={s.title} className="about-service-card">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="about-process-section">
        <div className="about-section-head">
          <p className="about-eyebrow">How It Works</p>
          <h2>Four steps. Zero stress.</h2>
          <p className="about-section-sub">
            We've made the whole experience simple — from the first call to the final check.
          </p>
        </div>
        <div className="about-process-grid">
          {process.map((p, i) => (
            <div key={p.step} className="about-process-card">
              <div className="about-process-card__connector" aria-hidden="true">
                {i < process.length - 1 && <div className="about-connector-line" />}
              </div>
              <span className="about-process-card__step">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="about-testimonials-section">
        <div className="about-section-head">
          <p className="about-eyebrow">Real Words. Real Clients.</p>
          <h2>Don't take our word for it</h2>
        </div>
        <div className="about-testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="about-testimonial-card">
              <blockquote className="about-testimonial-card__quote">
                "{t.quote}"
              </blockquote>
              <div className="about-testimonial-card__author">
                <div className="about-testimonial-card__avatar">{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="about-sectors-section">
        <div className="about-section-head">
          <p className="about-eyebrow">Where We Serve</p>
          <h2>Every kind of space. Every kind of need.</h2>
        </div>
        <div className="about-sectors-grid" role="list">
          {sectors.map((s) => (
            <div key={s} className="about-sector-card" role="listitem">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <div className="about-cta-section__inner">
          <p className="about-eyebrow about-eyebrow--light">Let's Talk</p>
          <h2>Ready to get your AC sorted?</h2>
          <p>
            No forms to fill, no waiting around. Just call or drop us a message —
            and we'll have someone with you faster than you'd expect.
          </p>
          <div className="about-cta-section__actions">
            <Link to="/contact" className="about-btn about-btn--white">
              Book a Free Visit
            </Link>
            <a className="about-btn about-btn--outline-white" href="tel:+91XXXXXXXXXX">
              Call +91 XXXXX XXXXX
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
