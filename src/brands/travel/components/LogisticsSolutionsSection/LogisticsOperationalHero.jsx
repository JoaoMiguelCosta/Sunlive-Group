import styles from "./LogisticsOperationalHero.module.css";

export default function LogisticsOperationalHero({ hero = {} }) {
  const safeMetrics = Array.isArray(hero?.metrics)
    ? hero.metrics.filter((item) => item?.value && item?.label)
    : [];

  const safeTrustChips = Array.isArray(hero?.trustChips)
    ? hero.trustChips.filter(Boolean)
    : [];

  const safeAssurances = Array.isArray(hero?.assurances)
    ? hero.assurances.filter((item) => item?.title && item?.description)
    : [];

  const hasAside = safeMetrics.length > 0 || safeAssurances.length > 0;

  const hasContent =
    hero?.eyebrow ||
    hero?.title ||
    hero?.lead ||
    hero?.supportingText ||
    hero?.statusBadge ||
    safeMetrics.length > 0 ||
    safeTrustChips.length > 0 ||
    safeAssurances.length > 0;

  if (!hasContent) return null;

  const trustChipsAriaLabel =
    hero?.ui?.trustChipsAriaLabel ?? "Pontos-chave operacionais";

  const metricsAriaLabel =
    hero?.ui?.metricsAriaLabel ?? "Indicadores operacionais";

  const assurancesAriaLabel =
    hero?.ui?.assurancesAriaLabel ?? "Garantias operacionais";

  const heroGridClassName = [
    styles.heroGrid,
    !hasAside ? styles.heroGridSingleColumn : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={styles.hero}>
      <div className={heroGridClassName}>
        <div className={styles.primaryColumn}>
          {(hero?.eyebrow || hero?.statusBadge) && (
            <div className={styles.metaRow}>
              {hero?.eyebrow ? (
                <p className={styles.eyebrow}>{hero.eyebrow}</p>
              ) : (
                <span className={styles.metaSpacer} aria-hidden="true" />
              )}

              {hero?.statusBadge ? (
                <span className={styles.statusBadge}>{hero.statusBadge}</span>
              ) : null}
            </div>
          )}

          {(hero?.title || hero?.lead) && (
            <div className={styles.headingBlock}>
              {hero?.title ? (
                <h2 className={styles.title}>{hero.title}</h2>
              ) : null}

              {hero?.lead ? <p className={styles.lead}>{hero.lead}</p> : null}
            </div>
          )}

          {(hero?.supportingText || safeTrustChips.length > 0) && (
            <div className={styles.copyPanel}>
              {hero?.supportingText ? (
                <p className={styles.supportingText}>{hero.supportingText}</p>
              ) : null}

              {safeTrustChips.length > 0 ? (
                <ul
                  className={styles.trustChips}
                  aria-label={trustChipsAriaLabel}
                >
                  {safeTrustChips.map((chip) => (
                    <li key={chip} className={styles.trustChip}>
                      {chip}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
        </div>

        {hasAside ? (
          <aside className={styles.asideColumn}>
            {safeMetrics.length > 0 ? (
              <div
                className={styles.metricsPanel}
                aria-label={metricsAriaLabel}
              >
                {safeMetrics.map((metric) => (
                  <article
                    key={`${metric.value}-${metric.label}`}
                    className={styles.metricCard}
                  >
                    <strong className={styles.metricValue}>
                      {metric.value}
                    </strong>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </article>
                ))}
              </div>
            ) : null}

            {safeAssurances.length > 0 ? (
              <div
                className={styles.assurancesPanel}
                aria-label={assurancesAriaLabel}
              >
                {safeAssurances.map((item) => (
                  <article
                    key={item?.key ?? item.title}
                    className={styles.assuranceCard}
                  >
                    <h3 className={styles.assuranceTitle}>{item.title}</h3>
                    <p className={styles.assuranceDescription}>
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            ) : null}
          </aside>
        ) : null}
      </div>
    </header>
  );
}
