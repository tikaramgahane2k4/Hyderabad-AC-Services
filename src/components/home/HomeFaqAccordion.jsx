import { useState } from "react";

function HomeFaqAccordion({
  items,
  eyebrow = "Got Questions?",
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our AC services and solutions",
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <section className="home-modern-section home-modern-section--faq home-reveal" data-reveal>
      <header className="home-modern-section__header">
        <p className="home-modern-eyebrow">{eyebrow}</p>
        <h2 className="home-modern-section__title">{title}</h2>
        <p className="home-modern-section__description">{subtitle}</p>
      </header>

      <div className="home-faq-list">
        {items.map((item, index) => {
          const isOpen = index === openIndex;
          const panelId = `home-faq-panel-${index}`;
          const answerLines = Array.isArray(item.answer) ? item.answer : [item.answer];

          return (
            <article key={item.question} className={`home-faq-item ${isOpen ? "is-open" : ""}`}>
              <button
                type="button"
                id={`home-faq-button-${index}`}
                className="home-faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <svg className="home-faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                id={panelId}
                className={`home-faq-panel ${isOpen ? "is-open" : ""}`}
                role="region"
                aria-labelledby={`home-faq-button-${index}`}
              >
                <div className="home-faq-panel__inner">
                  <div className="home-faq-panel__content">
                    {answerLines.map((paragraph, paragraphIndex) => (
                      <p key={`${item.question}-${paragraphIndex}`}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default HomeFaqAccordion;
