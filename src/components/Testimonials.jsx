import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Aijaz Khan",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/160?img=12",
    text: "Always impressed with these guys. The technician arrived on time, explained the issue clearly, and had the cooling restored the same day.",
  },
  {
    id: 2,
    name: "Dr. Raju",
    role: "Clinic Owner",
    avatar: "https://i.pravatar.cc/160?img=68",
    text: "When I called, they were at our clinic within two hours. Fast diagnosis, professional behavior, and no unnecessary upselling.",
  },
  {
    id: 3,
    name: "Sangeeta Rao",
    role: "Chartered Accountant",
    avatar: "https://i.pravatar.cc/160?img=32",
    text: "Excellent customer service from the first call. The team was polite, tidy, and the AMC guidance was genuinely helpful for our office.",
  },
  {
    id: 4,
    name: "Farhan Ali",
    role: "Facility Manager",
    avatar: "https://i.pravatar.cc/160?img=51",
    text: "Reliable support for our commercial space. They handled multiple units efficiently and the after-service follow-up was a big plus.",
  },
  {
    id: 5,
    name: "Meghana Patel",
    role: "Operations Lead",
    avatar: "https://i.pravatar.cc/160?img=47",
    text: "Professional team, clear communication, and solid turnaround time. We now rely on them for ongoing AC maintenance support.",
  },
];

const stats = [
  { label: "Average Rating", value: "4.9/5" },
  { label: "Verified Reviews", value: "500+" },
  { label: "Repeat Customers", value: "86%" },
  { label: "On-Time Service", value: "98%" },
];


const starsFor = (rating) =>
  `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;


const getScrollStep = (container) => {
  const firstCard = container?.querySelector(".trust-review-card");
  if (!firstCard) return 0;

  const style = window.getComputedStyle(container);
  const gap = Number.parseFloat(style.columnGap || style.gap || "0") || 0;

  return firstCard.getBoundingClientRect().width + gap;
};


function Testimonials() {
  return (
    <section className="trust-reviews-section">
      <div className="trust-reviews-section__quote" aria-hidden="true">
        <FaQuoteRight />
      </div>

      <header className="trust-reviews-top">
        <h2>What our Clients say!</h2>
        <p>
          Honest customer feedback from residential and commercial clients who trust our team for responsive,
          reliable AC service across Hyderabad.
        </p>
      </header>

      <div className="trust-reviews-carousel-wrap">
        <button className="trust-reviews-nav trust-reviews-nav--prev" type="button" aria-label="Previous review">
          <span aria-hidden="true">←</span>
        </button>

        <Swiper
          className="trust-reviews-swiper"
          modules={[Autoplay, Navigation, A11y]}
          loop
          speed={400}
          grabCursor
          navigation={{
            prevEl: ".trust-reviews-nav--prev",
            nextEl: ".trust-reviews-nav--next",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 1.25,
              spaceBetween: 18,
            },
            960: {
              slidesPerView: 2.15,
              spaceBetween: 24,
            },
            1240: {
              slidesPerView: 2.4,
              spaceBetween: 28,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="trust-reviews-swiper__slide">
              <article className="trust-review-card">
                <span className="trust-review-card__quote" aria-hidden="true">
                  <FaQuoteRight />
                </span>

                <div className="trust-review-card__profile">
                  <img className="trust-review-card__avatar" src={review.avatar} alt={`${review.name} profile`} />
                  <div className="trust-review-card__person">
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                  </div>
                </div>

                <p className="trust-review-card__text">{review.text}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="trust-reviews-nav trust-reviews-nav--next" type="button" aria-label="Next review">
          <span aria-hidden="true">→</span>
        </button>
       </div>

      <section className="trust-stats-section">
        <div className="trust-stats-grid">
          {stats.map((stat) => (
            <div className="trust-stat-card" key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Testimonials;
