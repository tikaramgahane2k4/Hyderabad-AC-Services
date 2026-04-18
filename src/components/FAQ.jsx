import { useState } from "react";
import "./FAQ.css";

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
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <p className="eyebrow">Got Questions?</p>
          <h2>Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find answers to common questions about our AC services and solutions
          </p>
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
