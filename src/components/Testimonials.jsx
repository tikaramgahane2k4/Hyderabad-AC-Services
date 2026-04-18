import { useState, useEffect } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Homeowner, Jubilee Hills",
      rating: 5,
      text: "Excellent service! They installed a 2-ton split AC in my living room within 3 hours. Very professional team and fair pricing.",
      initials: "RK",
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Office Manager, Gachibowli",
      rating: 5,
      text: "We've been using their AMC plan for our office of 20 ACs. Prompt service, well-trained technicians, and great communication.",
      initials: "PS",
    },
    {
      id: 3,
      name: "Mohammed Rizwan",
      title: "Restaurant Owner, Banjara Hills",
      rating: 5,
      text: "They fixed our commercial AC that two other companies couldn't repair. Saved us from buying a new unit. Highly recommended!",
      initials: "MR",
    },
  ];

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div>
            <p className="eyebrow">What Our Customers Say</p>
            <h2>Join hundreds of satisfied customers</h2>
            <p className="testimonials-subtitle">
              Experience world-class AC services with 4.9★ Google Rating
            </p>
          </div>
        </div>

        <div className="testimonials-carousel">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === activeIndex ? "active" : ""}`}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.initials}</div>
                  <div className="testimonial-meta">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button className="carousel-button carousel-button--prev" onClick={handlePrev} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="carousel-button carousel-button--next" onClick={handleNext} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <h3>4.9★</h3>
            <p>Google Rating</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
