import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Aijaz Khan",
    role: "Software Engineer",
    rating: 5,
    text: "Always impressed with these guys...",
  },
  {
    id: 2,
    name: "Raju",
    role: "Doctor",
    rating: 5,
    text: "When I called they were out within two hours...",
  },
  {
    id: 3,
    name: "Sangeeta",
    role: "Chartered Accountant",
    rating: 4,
    text: "Excellent customer service to start off!",
  },
];

const stats = [
  { label: "Average Rating", value: "4.5/5" },
  { label: "Verified Reviews", value: "5000+" },
  { label: "Repeat Customers", value: "86%" },
  { label: "On-Time Service", value: "98%" },
];

const starsFor = (rating) => `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;

const getScrollStep = (container) => {
  const firstCard = container?.querySelector(".trust-review-card");
  if (!firstCard) return 0;

  const style = window.getComputedStyle(container);
  const gap = Number.parseFloat(style.columnGap || style.gap || "0") || 0;

  return firstCard.getBoundingClientRect().width + gap;
};

function Testimonials() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const step = getScrollStep(slider);
      if (!step) return;

      const index = Math.round(slider.scrollLeft / step);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const step = getScrollStep(slider);
      if (!step) return;

      const next = activeIndex >= reviews.length - 1 ? 0 : activeIndex + 1;

      slider.scrollTo({
        left: step * next,
        behavior: "smooth",
      });

      setActiveIndex(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const scroll = (dir) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const step = getScrollStep(slider);
    const next = Math.max(0, Math.min(activeIndex + dir, reviews.length - 1));

    slider.scrollTo({ left: step * next, behavior: "smooth" });
    setActiveIndex(next);
  };

  return (
    <section className="trust-reviews-section">
      <header className="trust-reviews-top">
        <h2>
          Read reviews, <strong>ride with confidence.</strong>
        </h2>
        <p>⭐ 4.5/5 Trustpilot | Based on 5000+ reviews</p>
      </header>

      <div className="trust-reviews-layout">
        <aside className="trust-reviews-side">
          <span className="trust-quote-icon">“</span>
          <p>What our customers are saying</p>

          <div className="trust-reviews-nav">
            <button onClick={() => scroll(-1)} disabled={activeIndex === 0}>←</button>
            <button onClick={() => scroll(1)} disabled={activeIndex === reviews.length - 1}>→</button>
          </div>
        </aside>

        <div className="trust-reviews-slider" ref={sliderRef}>
          {reviews.map((r) => (
            <article className="trust-review-card" key={r.id}>
              <p>"{r.text}"</p>
              <p>{starsFor(r.rating)}</p>
              <h3>{r.name}</h3>
              <p>{r.role}</p>
            </article>
          ))}
        </div>
      </div>

      {/* ✅ STATS (FROM FEATURE BRANCH) */}
      <section className="trust-stats-section">
        <div className="trust-stats-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <p>{s.value}</p>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Testimonials;