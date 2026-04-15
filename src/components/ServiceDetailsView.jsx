function ServiceDetailsView({ service, onClose, onRequestQuote }) {
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
        <button type="button" className="service-details-close" onClick={onClose} aria-label="Close service details">
          ×
        </button>

        <div className="service-details-hero">
          <div className="service-details-icon" aria-hidden="true">
            {service.icon}
          </div>
          <div>
            <p className="service-details-kicker">Service Details</p>
            <h3 id="service-details-title">{service.title}</h3>
            <p id="service-details-description">{service.longDescription}</p>
          </div>
        </div>

        <div className="service-details-grid">
          <div className="service-details-card">
            <h4>What it includes</h4>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-details-card">
            <h4>Best for</h4>
            <p>{service.bestFor}</p>
            <div className="service-details-stat">
              <span>{service.turnaround}</span>
              <small>Typical turnaround</small>
            </div>
          </div>

          <div className="service-details-card service-details-highlight">
            <h4>Business value</h4>
            <p>{service.businessValue}</p>
            <button type="button" className="service-details-cta" onClick={onRequestQuote}>
              Request a quote
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetailsView;