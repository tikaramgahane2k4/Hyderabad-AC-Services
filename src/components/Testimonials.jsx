import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Aijaz Khan",
    role: "Software Engineer",
    rating: 5,
    text: "Always impressed with these guys. Friendly, professional, thorough and honest. They always take the time to explain exactly what they are doing and what my options are. Prices are fair, and they are always so nice! I highly recommend them to give you a bid at least, work is quality and professional! Thank you!",
  },
  {
    id: 2,
    name: "Raju",
    role: "Doctor",
    rating: 5,
    text: "When I called they were out within two hours of me calling, and they were extremely professional. The technicians that showed up were very friendly, worked quickly, and explained every detail of what was wrong with our air conditioning. They fixed it for a reasonable price and overall the experience was wonderful. Will only use this company from here on out.",
  },
  {
    id: 3,
    name: "Sangeeta",
    role: "Chartered Accountant",
    rating: 4,
    text: "Excellent customer service to start off! My AC went out over the weekend. I called Tuesday and they showed up within two hours to diagnose and fix the problem with my AC unit and already had the replacement part on hand. Technicians were very professional and excellent with timing and solving our issue. I will definitely be a returning customer.",
  },
];

const starsFor = (rating) => `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;

const getScrollStep = (container) => {
  if (!container) {
    return 0;
  }

  const firstCard = container.querySelector(".trust-review-card");
  if (!firstCard) {
    return 0;
  }

  const sliderStyle = window.getComputedStyle(container);
  const gap = Number.parseFloat(sliderStyle.columnGap || sliderStyle.gap || "0") || 0;
  return firstCard.getBoundingClientRect().width + gap;
};

function Testimonials() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) {
      return undefined;
    }

    const handleScroll = () => {
      const step = getScrollStep(slider);
      if (!step) {
        return;
      }

      const index = Math.round(slider.scrollLeft / step);
      setActiveIndex(Math.max(0, Math.min(index, reviews.length - 1)));
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || reviews.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      const step = getScrollStep(slider);
      if (!step) {
        return;
      }

      const nextIndex = activeIndex >= reviews.length - 1 ? 0 : activeIndex + 1;
      slider.scrollTo({
        left: step * nextIndex,
        behavior: "smooth",
      });
      setActiveIndex(nextIndex);
    }, 5200);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollCards = (direction) => {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const step = getScrollStep(slider);
    if (!step) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(activeIndex + direction, reviews.length - 1));
    slider.scrollTo({
      left: step * nextIndex,
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  };

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < reviews.length - 1;

  return (
    <section className="trust-reviews-section" aria-label="Customer Reviews">
      <header className="trust-reviews-top">
        <h2>
          Read reviews, <strong>ride with confidence.</strong>
        </h2>
        <p>⭐ 4.5/5 Trustpilot | Based on 5000+ reviews</p>
      </header>

      <div className="trust-reviews-layout">
        <aside className="trust-reviews-side" aria-label="Reviews overview">
          <span className="trust-quote-icon" aria-hidden="true">
            “
          </span>
          <p>What our customers are saying</p>
          <div className="trust-reviews-nav">
            <button
              type="button"
              className="trust-reviews-arrow"
              onClick={() => scrollCards(-1)}
              disabled={!canGoPrev}
              aria-label="Previous review"
            >
              ←
            </button>
            <button
              type="button"
              className="trust-reviews-arrow"
              onClick={() => scrollCards(1)}
              disabled={!canGoNext}
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </aside>

        <div className="trust-reviews-slider-wrap">
          <div className="trust-reviews-slider" ref={sliderRef}>
            {reviews.map((review) => (
              <article className="trust-review-card" key={review.id}>
                <p className="trust-review-text">"{review.text}"</p>
                <p className="trust-review-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {starsFor(review.rating)}
                </p>

                <div className="trust-review-user">
                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
