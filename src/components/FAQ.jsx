import { useState } from "react";
import { useAppPreferences } from "../context/AppPreferencesContext";
import "./FAQ.css";

const faqCopy = {
  en: {
    eyebrow: "Got Questions?",
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our AC services and solutions",
  },
  hi: {
    eyebrow: "कोई सवाल है?",
    title: "अक्सर पूछे जाने वाले सवाल",
    subtitle: "हमारी एसी सेवाओं से जुड़े सामान्य सवालों के जवाब पाएं।",
  },
  te: {
    eyebrow: "Questions Unnaya?",
    title: "Frequently Asked Questions",
    subtitle: "Mana AC services gurinchi common questions ki samadhanalu.",
  },
};

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className="faq-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div className="faq-answer">
          {Array.isArray(answer) ? (
            <div className="faq-answer-content">
              {answer.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="faq-answer-content">{answer}</p>
          )}
        </div>
      )}
    </div>
  );
}

function FAQ({ items }) {
  const { language } = useAppPreferences();
  const copy = faqCopy[language] ?? faqCopy.en;

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p className="faq-subtitle">{copy.subtitle}</p>
        </div>

        <div className="faq-list">
          {items.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
