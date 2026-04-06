import styles from "./DestinationCard.module.css";

function normalizeList(items) {
  if (!Array.isArray(items)) return [];
  return items.map((item) => String(item).trim()).filter(Boolean);
}

/**
 * DestinationCard
 * - variant?: "international" | "domestic" | "hotel" | "partner"
 * - flagIcon?: React.FC
 * - cta?: { label: string; href: string; external?: boolean }
 */
export default function DestinationCard({
  city,
  badge,
  imageSrc,
  imageAlt,
  summary,
  duration,
  highlights = [],
  includes = [],
  flagIcon: FlagIcon,
  variant,
  cta,
}) {
  if (!city || !imageSrc || !imageAlt) return null;

  const safeHighlights = normalizeList(highlights);
  const safeIncludes = normalizeList(includes);

  const hasSummary = Boolean(summary);
  const hasDuration = Boolean(duration);
  const hasIncludes = safeIncludes.length > 0;
  const hasHighlights = safeHighlights.length > 0;
  const hasCta = Boolean(cta?.href);

  const ariaLabel =
    variant === "partner" ? `Parceiro: ${city}` : `Destino: ${city}`;

  return (
    <article
      className={styles.card}
      aria-label={ariaLabel}
      data-variant={variant}
      data-has-cta={hasCta || undefined}
    >
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
        />

        {badge ? <span className={styles.badge}>{badge}</span> : null}
      </div>

      <div className={styles.titleBar} role="heading" aria-level={3}>
        {FlagIcon ? (
          <FlagIcon className={styles.flag} aria-hidden="true" />
        ) : null}

        <span className={styles.title}>{city}</span>
      </div>

      <div className={styles.body}>
        {hasSummary ? <p className={styles.summary}>{summary}</p> : null}

        {hasDuration ? (
          <div className={styles.durationRow} aria-label="Duração">
            <span className={styles.durationIcon} aria-hidden="true" />
            <span className={styles.durationText}>{duration}</span>
          </div>
        ) : null}

        {hasIncludes ? (
          <div className={styles.hlBlock} aria-label="Inclui">
            <div className={styles.hlHeader}>Inclui:</div>

            <ul className={styles.pillList} role="list">
              {safeIncludes.map((item, index) => (
                <li
                  key={`include-${index}`}
                  className={styles.hlPill}
                  role="listitem"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasHighlights ? (
          <div className={styles.hlBlock} aria-label="Destaques">
            <div className={styles.hlHeader}>Destaques:</div>

            <ul className={styles.pillList} role="list">
              {safeHighlights.map((item, index) => (
                <li
                  key={`highlight-${index}`}
                  className={styles.hlPill}
                  role="listitem"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hasCta ? (
          <div className={styles.ctaRow}>
            <a
              className={styles.ctaButton}
              href={cta.href}
              target={cta.external !== false ? "_blank" : "_self"}
              rel={cta.external !== false ? "noopener noreferrer" : undefined}
              aria-label={`${cta.label} – ${city}`}
            >
              {cta.label}
              <span aria-hidden="true" className={styles.ctaIcon} />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
