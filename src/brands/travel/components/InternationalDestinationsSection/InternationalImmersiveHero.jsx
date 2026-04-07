import styles from "./InternationalImmersiveHero.module.css";

export default function InternationalImmersiveHero({ hero = {} }) {
  const safeFlightStops = Array.isArray(hero?.flightStops)
    ? hero.flightStops.filter(Boolean)
    : [];

  const safeMetrics = Array.isArray(hero?.metrics)
    ? hero.metrics.filter((item) => item?.value && item?.label)
    : [];

  const safeFocusPoints = Array.isArray(hero?.focusPoints)
    ? hero.focusPoints.filter((item) => item?.title && item?.description)
    : [];

  const hasContent =
    hero?.eyebrow ||
    hero?.title ||
    hero?.lead ||
    hero?.supportingText ||
    hero?.flightLabel ||
    safeFlightStops.length > 0 ||
    safeMetrics.length > 0 ||
    safeFocusPoints.length > 0;

  if (!hasContent) return null;

  const flightAriaLabel =
    hero?.ui?.flightAriaLabel ?? "Percurso internacional da secção";

  const metricsAriaLabel =
    hero?.ui?.metricsAriaLabel ?? "Indicadores da secção internacional";

  const focusPointsAriaLabel =
    hero?.ui?.focusPointsAriaLabel ?? "Princípios da curadoria internacional";

  return (
    <header className={styles.hero}>
      <div className={styles.primaryPanel}>
        <div className={styles.copy}>
          {hero?.eyebrow ? (
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
          ) : null}

          {hero?.title ? <h2 className={styles.title}>{hero.title}</h2> : null}

          {hero?.lead ? <p className={styles.lead}>{hero.lead}</p> : null}

          {hero?.supportingText ? (
            <p className={styles.supportingText}>{hero.supportingText}</p>
          ) : null}
        </div>

        {hero?.flightLabel || safeFlightStops.length > 0 ? (
          <div className={styles.flightLineBlock}>
            {hero?.flightLabel ? (
              <p className={styles.flightLabel}>{hero.flightLabel}</p>
            ) : null}

            {safeFlightStops.length > 0 ? (
              <ul className={styles.flightStops} aria-label={flightAriaLabel}>
                {safeFlightStops.map((stop) => (
                  <li key={stop} className={styles.flightStop}>
                    <span className={styles.flightDot} aria-hidden="true" />
                    <span>{stop}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className={styles.secondaryPanel}>
        {safeMetrics.length > 0 ? (
          <div className={styles.metrics} aria-label={metricsAriaLabel}>
            {safeMetrics.map((metric) => (
              <article
                key={`${metric.value}-${metric.label}`}
                className={styles.metricCard}
              >
                <strong className={styles.metricValue}>{metric.value}</strong>
                <span className={styles.metricLabel}>{metric.label}</span>
              </article>
            ))}
          </div>
        ) : null}

        {safeFocusPoints.length > 0 ? (
          <div className={styles.focusPoints} aria-label={focusPointsAriaLabel}>
            {safeFocusPoints.map((point) => (
              <article
                key={point?.key ?? point.title}
                className={styles.focusCard}
              >
                <h3 className={styles.focusTitle}>{point.title}</h3>
                <p className={styles.focusDescription}>{point.description}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
