import styles from "./TravelShowcaseHero.module.css";

function getSafeArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function getSafeMetrics(metrics) {
  return getSafeArray(metrics).filter((item) => item?.value && item?.label);
}

function getSafeHighlights(highlights) {
  return getSafeArray(highlights).filter(Boolean);
}

function getSafeInsights(insights) {
  return getSafeArray(insights).filter(
    (item) => item?.title && item?.description,
  );
}

export default function TravelShowcaseHero({
  content = {},
  className = "",
  sectionKey = "travel-showcase-hero",
}) {
  const safeMetrics = getSafeMetrics(content?.metrics);
  const safeInsights = getSafeInsights(content?.insights);
  const safeHighlights = getSafeHighlights(
    content?.highlightPills ?? content?.routeStops,
  );

  const hasContent =
    content?.eyebrow ||
    content?.title ||
    content?.lead ||
    content?.supportingText ||
    content?.highlightsLabel ||
    content?.routeLabel ||
    safeMetrics.length > 0 ||
    safeInsights.length > 0 ||
    safeHighlights.length > 0;

  if (!hasContent) return null;

  const metricsAriaLabel =
    content?.ui?.metricsAriaLabel ?? "Indicadores da secção";

  const insightsAriaLabel =
    content?.ui?.insightsAriaLabel ?? "Destaques editoriais da secção";

  const highlightsAriaLabel =
    content?.ui?.highlightsAriaLabel ??
    content?.ui?.routeAriaLabel ??
    "Destaques da secção";

  const highlightsLabel = content?.highlightsLabel ?? content?.routeLabel ?? "";

  const rootClassName = [styles.hero, className].filter(Boolean).join(" ");

  return (
    <header className={rootClassName} data-travel-showcase-hero={sectionKey}>
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.copyColumn}>
        {content?.eyebrow ? (
          <p className={styles.eyebrow}>{content.eyebrow}</p>
        ) : null}

        {content?.title ? (
          <h2 className={styles.title}>{content.title}</h2>
        ) : null}

        {content?.lead ? <p className={styles.lead}>{content.lead}</p> : null}

        {content?.supportingText ? (
          <p className={styles.supportingText}>{content.supportingText}</p>
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

        {highlightsLabel || safeHighlights.length > 0 ? (
          <div className={styles.highlightsPanel}>
            {highlightsLabel ? (
              <p className={styles.highlightsLabel}>{highlightsLabel}</p>
            ) : null}

            {safeHighlights.length > 0 ? (
              <ul
                className={styles.highlightPills}
                aria-label={highlightsAriaLabel}
              >
                {safeHighlights.map((highlight) => (
                  <li key={String(highlight)} className={styles.highlightPill}>
                    <span
                      className={styles.highlightPillDot}
                      aria-hidden="true"
                    />
                    <span className={styles.highlightPillLabel}>
                      {highlight}
                    </span>
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
