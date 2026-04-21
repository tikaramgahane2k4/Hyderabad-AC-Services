import { useAppPreferences } from "../context/AppPreferencesContext";

const serviceDetailsCopy = {
  en: {
    close: "Close service details",
    kicker: "Service Details",
    includes: "What it includes",
    bestFor: "Best for",
    turnaround: "Typical turnaround",
    businessValue: "Business value",
    requestQuote: "Request a quote",
  },
  hi: {
    close: "सेवा विवरण बंद करें",
    kicker: "सेवा विवरण",
    includes: "इसमें क्या शामिल है",
    bestFor: "किसके लिए उपयुक्त",
    turnaround: "सामान्य समय अवधि",
    businessValue: "व्यावसायिक लाभ",
    requestQuote: "कोट प्राप्त करें",
  },
  te: {
    close: "Service details close cheyyandi",
    kicker: "Service Details",
    includes: "Indulo em untundi",
    bestFor: "Best for",
    turnaround: "Typical turnaround",
    businessValue: "Business value",
    requestQuote: "Quote adugandi",
  },
};

function ServiceDetailsView({ service, onClose, onRequestQuote }) {
  const { language } = useAppPreferences();
  const copy = serviceDetailsCopy[language] ?? serviceDetailsCopy.en;

  if (!service) {
    return null;
  }

  return (
    <div className="service-details-backdrop" role="presentation" onClick={onClose}>
      <section
        className="service-details-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-details-title"
        aria-describedby="service-details-description"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="service-details-close" onClick={onClose} aria-label={copy.close}>
          ×
        </button>

        <div className="service-details-hero">
          <div className="service-details-icon" aria-hidden="true">
            {service.icon}
          </div>
          <div>
            <p className="service-details-kicker">{copy.kicker}</p>
            <h3 id="service-details-title">{service.title}</h3>
            <p id="service-details-description">{service.longDescription}</p>
          </div>
        </div>

        <div className="service-details-grid">
          <div className="service-details-card">
            <h4>{copy.includes}</h4>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-details-card">
            <h4>{copy.bestFor}</h4>
            <p>{service.bestFor}</p>
            <div className="service-details-stat">
              <span>{service.turnaround}</span>
              <small>{copy.turnaround}</small>
            </div>
          </div>

          <div className="service-details-card service-details-highlight">
            <h4>{copy.businessValue}</h4>
            <p>{service.businessValue}</p>
            <button type="button" className="service-details-cta" onClick={onRequestQuote}>
              {copy.requestQuote}
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailsView;