import styles from "./DomesticEditorialHero.module.css";

export default function DomesticEditorialHero({ hero = {} }) {
  const safeRouteStops = Array.isArray(hero?.routeStops)
    ? hero.routeStops.filter(Boolean)
    : [];

  const safeMetrics = Array.isArray(hero?.metrics)
    ? hero.metrics.filter((item) => item?.value && item?.label)
    : [];

  const safeInsights = Array.isArray(hero?.insights)
    ? hero.insights.filter((item) => item?.title && item?.description)
    : [];

  const hasContent =
    hero?.eyebrow ||
    hero?.title ||
    hero?.lead ||
    hero?.supportingText ||
    hero?.routeLabel ||
    safeRouteStops.length > 0 ||
    safeMetrics.length > 0 ||
    safeInsights.length > 0;

  if (!hasContent) return null;

  const routeAriaLabel =
    hero?.ui?.routeAriaLabel ?? "Percurso editorial da secção";

  const metricsAriaLabel =
    hero?.ui?.metricsAriaLabel ?? "Indicadores da secção de destinos nacionais";

  const insightsAriaLabel =
    hero?.ui?.insightsAriaLabel ?? "Princípios da curadoria nacional";

  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.copyColumn}>
        {hero?.eyebrow ? (
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
        ) : null}

        {hero?.title ? <h2 className={styles.title}>{hero.title}</h2> : null}

        {hero?.lead ? <p className={styles.lead}>{hero.lead}</p> : null}

        {hero?.supportingText ? (
          <p className={styles.supportingText}>{hero.supportingText}</p>
        ) : null}
      </div>

      <div className={styles.sideColumn}>
        {safeMetrics.length > 0 ? (
          <div className={styles.metricsPanel}>
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
          </div>
        ) : null}

        {safeInsights.length > 0 ? (
          <div className={styles.insightsPanel} aria-label={insightsAriaLabel}>
            {safeInsights.map((insight) => (
              <article
                key={insight?.key ?? insight.title}
                className={styles.insightCard}
              >
                <h3 className={styles.insightTitle}>{insight.title}</h3>
                <p className={styles.insightDescription}>
                  {insight.description}
                </p>
              </article>
            ))}
          </div>
        ) : null}

        {hero?.routeLabel || safeRouteStops.length > 0 ? (
          <div className={styles.routePanel}>
            {hero?.routeLabel ? (
              <p className={styles.routeLabel}>{hero.routeLabel}</p>
            ) : null}

            {safeRouteStops.length > 0 ? (
              <ul className={styles.routeStops} aria-label={routeAriaLabel}>
                {safeRouteStops.map((stop) => (
                  <li key={stop} className={styles.routeStop}>
                    <span className={styles.routeStopDot} aria-hidden="true" />
                    <span className={styles.routeStopLabel}>{stop}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}
