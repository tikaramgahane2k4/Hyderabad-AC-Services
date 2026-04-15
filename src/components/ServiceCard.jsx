function ServiceCard({ icon, title, description, cta = "Learn More", onLearnMore }) {
  return (
    <article className="service-card" aria-label={title}>
      <div className="service-card-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button type="button" className="service-card-cta" onClick={onLearnMore} aria-label={`${cta} about ${title}`}>
        <span>{cta}</span>
        <span className="arrow">→</span>
      </button>
    </article>
  );
}

export default ServiceCard;
