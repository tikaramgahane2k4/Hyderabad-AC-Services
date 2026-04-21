function HomeCard({
  as: Tag = "article",
  className = "",
  icon,
  title,
  description,
  children,
  revealClass = "",
  ...rest
}) {
  const cardClassName = ["home-modern-card", className, "home-reveal", revealClass]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={cardClassName} data-reveal {...rest}>
      {icon ? <div className="home-modern-card__icon" aria-hidden="true">{icon}</div> : null}
      {title ? <h3 className="home-modern-card__title">{title}</h3> : null}
      {description ? <p className="home-modern-card__description">{description}</p> : null}
      {children}
    </Tag>
  );
}

export default HomeCard;
