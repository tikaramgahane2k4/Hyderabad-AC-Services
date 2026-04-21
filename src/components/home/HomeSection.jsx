function HomeSection({ id, className = "", eyebrow, title, description, children, revealClass = "" }) {
  const sectionClassName = ["home-modern-section", className, "home-reveal", revealClass]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClassName} data-reveal>
      {(eyebrow || title || description) && (
        <header className="home-modern-section__header">
          {eyebrow ? <p className="home-modern-eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="home-modern-section__title">{title}</h2> : null}
          {description ? <p className="home-modern-section__description">{description}</p> : null}
        </header>
      )}
      {children}
    </section>
  );
}

export default HomeSection;
