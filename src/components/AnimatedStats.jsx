import { useEffect, useMemo, useRef, useState } from "react";
import "./AnimatedStats.css";

const DEFAULT_STATS = [
  { value: 4.9, decimals: 1, label: "Google Rating" },
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Direct Support" },
];

const easeOutQuint = (progress) => 1 - (1 - progress) ** 5;

const getDecimalPlaces = (value) => {
  const [, fraction = ""] = String(value).split(".");
  return fraction.length;
};

const normalizeStat = (stat) => {
  const numericValue = Number(stat.value ?? stat.target ?? 0);
  const safeValue = Number.isFinite(numericValue) ? numericValue : 0;

  return {
    ...stat,
    value: safeValue,
    decimals: stat.decimals ?? getDecimalPlaces(safeValue),
    duration: stat.duration ?? 2600,
    prefix: stat.prefix ?? "",
    suffix: stat.suffix ?? "",
  };
};

const formatCounterValue = (value, decimals, locale) =>
  new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

function useInViewOnce({ threshold = 0.3, rootMargin = "0px 0px -12% 0px" } = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      return undefined;
    }

    const node = elementRef.current;

    if (!node) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return { elementRef, isVisible };
}

function AnimatedCounterCard({ stat, index, isActive, stagger = 140, locale }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimatedRef.current) {
      return undefined;
    }

    hasAnimatedRef.current = true;

    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayValue(stat.value);
      return undefined;
    }

    let animationFrameId = 0;
    let startTime = 0;

    const startAnimation = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / stat.duration, 1);
      const easedProgress = easeOutQuint(progress);

      setDisplayValue(progress >= 1 ? stat.value : stat.value * easedProgress);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(startAnimation);
      }
    };

    const timeoutId = window.setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(startAnimation);
    }, index * stagger);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [index, isActive, stagger, stat.duration, stat.value]);

  const formattedValue = useMemo(
    () => `${stat.prefix}${formatCounterValue(displayValue, stat.decimals, locale)}${stat.suffix}`,
    [displayValue, locale, stat.decimals, stat.prefix, stat.suffix]
  );

  return (
    <article
      className={`animated-stat-card ${isActive ? "is-visible" : ""}`}
      style={{ "--stat-delay": `${index * 90}ms` }}
    >
      {stat.icon ? <span className="animated-stat-card__icon" aria-hidden="true">{stat.icon}</span> : null}
      <p className="animated-stat-card__value">{formattedValue}</p>
      <p className="animated-stat-card__label">{stat.label}</p>
      {stat.caption ? <p className="animated-stat-card__caption">{stat.caption}</p> : null}
    </article>
  );
}

export default function AnimatedStats({
  eyebrow = "Service Numbers",
  title = "Trusted by Thousands in Hyderabad",
  description = "Performance-backed AC service with reliable response, expert support, and consistently strong customer trust.",
  stats = DEFAULT_STATS,
  className = "",
  threshold = 0.3,
  rootMargin = "0px 0px -12% 0px",
  stagger = 140,
  locale,
}) {
  const normalizedStats = useMemo(() => stats.map(normalizeStat), [stats]);
  const { elementRef, isVisible } = useInViewOnce({ threshold, rootMargin });

  return (
    <section
      ref={elementRef}
      className={`animated-stats-section ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      <div className="animated-stats-shell">
        <header className="animated-stats-header">
          {eyebrow ? <p className="animated-stats-header__eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="animated-stats-header__title">{title}</h2> : null}
          {description ? <p className="animated-stats-header__description">{description}</p> : null}
        </header>

        <div className="animated-stats-grid">
          {normalizedStats.map((stat, index) => (
            <AnimatedCounterCard
              key={`${stat.label}-${stat.value}-${index}`}
              stat={stat}
              index={index}
              isActive={isVisible}
              stagger={stagger}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
