import { Link } from "react-router-dom";
import "./CTA.css";

function CTA({ title, description, primaryButtonText, primaryButtonLink, secondaryButtonText, secondaryButtonLink, icon = "phone" }) {
  const iconMap = {
    phone: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.172 6.172A2 2 0 012 7.5v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H4a2 2 0 00-1.828 1.172m15 0l3.172 3.172a2 2 0 002 2H22v5a2 2 0 01-2 2h-10a2 2 0 01-2-2v-5a2 2 0 012-2h10a2 2 0 012-2" />
      </svg>
    ),
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-icon">{iconMap[icon]}</div>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>

          <div className="cta-buttons">
            {primaryButtonLink && primaryButtonText && (
              <Link to={primaryButtonLink} className="cta-button cta-button--primary">
                {primaryButtonText}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
            {secondaryButtonLink && secondaryButtonText && (
              <a href={secondaryButtonLink} target="_blank" rel="noreferrer" className="cta-button cta-button--secondary">
                {secondaryButtonText}
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="cta-visual">
          <div className="cta-decoration cta-decoration--1"></div>
          <div className="cta-decoration cta-decoration--2"></div>
          <div className="cta-decoration cta-decoration--3"></div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
