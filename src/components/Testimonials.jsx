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

const stats = [
  { label: "Average Rating", value: "4.5/5" },
  { label: "Verified Reviews", value: "5000+" },
  { label: "Repeat Customers", value: "86%" },
  { label: "On-Time Service", value: "98%" },
];

function Testimonials() {
  return (
    <section className="trust-reviews-section" aria-label="Customer Reviews">
      <div className="trust-reviews-container">
        <header className="trust-reviews-top">
          <h2>
            Read reviews, <strong>ride with confidence.</strong>
          </h2>
          <p>⭐ 4.5/5 Trustpilot | Based on 5000+ reviews</p>
        </header>

        <div className="trust-reviews-grid" role="list" aria-label="Customer review cards">
          {reviews.map((review) => (
            <article className="trust-review-card" key={review.id} role="listitem">
              <p className="trust-review-text">"{review.text}"</p>
              <p className="trust-review-stars" aria-label={`${review.rating} out of 5 stars`}>
                {starsFor(review.rating)}
              </p>

              <div className="trust-review-user">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="trust-stats-section" aria-label="Service stats">
          <div className="trust-stats-grid">
            {stats.map((stat) => (
              <article className="trust-stat-card" key={stat.label}>
                <p className="trust-stat-value">{stat.value}</p>
                <p className="trust-stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Testimonials;
