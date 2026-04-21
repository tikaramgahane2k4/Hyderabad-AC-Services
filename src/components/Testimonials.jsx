import { useState, useEffect } from "react";
import { useAppPreferences } from "../context/AppPreferencesContext";
import "./Testimonials.css";

const testimonialsCopy = {
  en: {
    eyebrow: "What Our Customers Say",
    title: "Join hundreds of satisfied customers",
    subtitle: "Experience world-class AC services with 4.9★ Google Rating",
    previous: "Previous testimonial",
    next: "Next testimonial",
    goTo: "Go to testimonial",
    stats: [
      { value: "4.9★", label: "Google Rating" },
      { value: "500+", label: "Happy Customers" },
      { value: "10+", label: "Years Experience" },
      { value: "24/7", label: "Support Available" },
    ],
    testimonials: [
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
    ],
  },
  hi: {
    eyebrow: "हमारे ग्राहक क्या कहते हैं",
    title: "सैकड़ों संतुष्ट ग्राहकों के साथ जुड़ें",
    subtitle: "4.9★ गूगल रेटिंग के साथ उच्च गुणवत्ता वाली एसी सेवा का अनुभव करें",
    previous: "पिछला प्रशंसापत्र",
    next: "अगला प्रशंसापत्र",
    goTo: "प्रशंसापत्र पर जाएं",
    stats: [
      { value: "4.9★", label: "गूगल रेटिंग" },
      { value: "500+", label: "संतुष्ट ग्राहक" },
      { value: "10+", label: "साल का अनुभव" },
      { value: "24/7", label: "सहायता उपलब्ध" },
    ],
    testimonials: [
      {
        id: 1,
        name: "राजेश कुमार",
        title: "गृहस्वामी, जुबली हिल्स",
        rating: 5,
        text: "बहुत बढ़िया सेवा! 3 घंटे के अंदर स्प्लिट एसी इंस्टॉल कर दिया। टीम प्रोफेशनल थी और कीमत भी उचित थी।",
        initials: "रक",
      },
      {
        id: 2,
        name: "प्रिया शर्मा",
        title: "ऑफिस मैनेजर, गाचीबौली",
        rating: 5,
        text: "हम अपने ऑफिस के 20 एसी के लिए इनका एएमसी प्लान उपयोग कर रहे हैं। तेज़ प्रतिक्रिया और स्पष्ट संवाद मिलता है।",
        initials: "प्र",
      },
      {
        id: 3,
        name: "मोहम्मद रिजवान",
        title: "रेस्टोरेंट मालिक, बंजारा हिल्स",
        rating: 5,
        text: "दो कंपनियां जो ठीक नहीं कर पाईं, उन्होंने हमारा कमर्शियल एसी ठीक कर दिया। बहुत अनुशंसित सेवा।",
        initials: "मर",
      },
    ],
  },
  te: {
    eyebrow: "Mana Customers Emantunnaru",
    title: "Santoshamga unna customers tho kalavandi",
    subtitle: "4.9★ Google Rating tho best AC service experience pondandi",
    previous: "Mundhati testimonial",
    next: "Tarvata testimonial",
    goTo: "Testimonial ki vellandi",
    stats: [
      { value: "4.9★", label: "Google Rating" },
      { value: "500+", label: "Happy Customers" },
      { value: "10+", label: "Years Experience" },
      { value: "24/7", label: "Support Available" },
    ],
    testimonials: [
      {
        id: 1,
        name: "Rajesh Kumar",
        title: "Homeowner, Jubilee Hills",
        rating: 5,
        text: "Excellent service! 3 gantallo split AC install chesaru. Team chala professional ga undi.",
        initials: "RK",
      },
      {
        id: 2,
        name: "Priya Sharma",
        title: "Office Manager, Gachibowli",
        rating: 5,
        text: "Office AMC support kosam vallani use chestunnam. Prompt response mariyu manchi communication untundi.",
        initials: "PS",
      },
      {
        id: 3,
        name: "Mohammed Rizwan",
        title: "Restaurant Owner, Banjara Hills",
        rating: 5,
        text: "Inko rendu companies fix cheyaleni commercial AC ni vallu fix chesaru. Highly recommended.",
        initials: "MR",
      },
    ],
  },
};

function Testimonials() {
  const { language } = useAppPreferences();
  const copy = testimonialsCopy[language] ?? testimonialsCopy.en;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const testimonials = copy.testimonials;

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
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.title}</h2>
            <p className="testimonials-subtitle">
              {copy.subtitle}
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

          <button className="carousel-button carousel-button--prev" onClick={handlePrev} aria-label={copy.previous}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="carousel-button carousel-button--next" onClick={handleNext} aria-label={copy.next}>
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
              aria-label={`${copy.goTo} ${index + 1}`}
            />
          ))}
        </div>

        <div className="testimonials-stats">
          {copy.stats.map((item) => (
            <div className="stat" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
