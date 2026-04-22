function ServiceCard({ icon, title, description, cta = "Learn More", onLearnMore, image, isActive = false }) {
  const handleLearnMore = (event) => {
    event.preventDefault();
    if (onLearnMore) {
      onLearnMore();
    }
  };

  return (
    <article className={`service-card${isActive ? " is-active" : ""}`} aria-label={title}>
      {image && (
        <div 
          className="service-card-image" 
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      )}
      
      <div className="service-card-overlay" />
      
      <div className="service-card-content">
        <div className="service-card-icon-wrapper" aria-hidden="true">
          <div className="service-card-icon">
            {icon}
          </div>
        </div>
        
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        
        <a
          href="#"
          className="service-card-cta"
          onClick={handleLearnMore}
          aria-label={`${cta} about ${title}`}
        >
          <span>{cta}</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </article>
  );
}


export default ServiceCard;
