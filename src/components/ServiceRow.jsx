import { Link } from "react-router-dom";

function ServiceRow({ service }) {
  return (
    <section className="service-row">
      <div className="service-row-media">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className={service.imageClass ? `service-row-image ${service.imageClass}` : "service-row-image"}
        />
        <div className="service-row-image-veil" aria-hidden="true" />
        <div
          className={
            service.logoClass ? `service-row-logo ${service.logoClass}` : "service-row-logo"
          }
          aria-hidden="true"
        >
          <img src="/images/logo%202.png" alt="Hyderabad AC Services logo" />
        </div>
      </div>

      <div className="service-row-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <ul className="service-row-points">
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <Link className="service-row-cta" to={`/book-service?service=${encodeURIComponent(service.queryTitle)}`}>
          {service.bookLabel || "Book This Service"}
        </Link>
      </div>
    </section>
  );
}

export default ServiceRow;