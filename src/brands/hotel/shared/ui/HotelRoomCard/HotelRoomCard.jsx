import styles from "./HotelRoomCard.module.css";

/**
 * HotelRoomCard
 *
 * Props:
 *  - roomId?: string
 *  - title: string
 *  - description?: string
 *  - features?: Array<string>
 *  - imageSrc?: string | null
 *  - imageAlt?: string
 *  - badge?: string
 *  - detailsOpen?: boolean
 *  - onToggle?: () => void
 *  - className?: string
 *  - openDetailsLabel?: string
 *  - closeDetailsLabel?: string
 *  - featuresAriaLabel?: string
 *  - imageComingSoonLabel?: string
 */
export default function HotelRoomCard({
  roomId = "room",
  title,
  description,
  features = [],
  imageSrc = null,
  imageAlt = "",
  badge,
  detailsOpen = false,
  onToggle,
  className = "",
  openDetailsLabel = "Ver detalhes",
  closeDetailsLabel = "Ocultar detalhes",
  featuresAriaLabel = "Características do quarto",
  imageComingSoonLabel = "Imagem disponível em breve",
}) {
  const hasImage = Boolean(imageSrc);
  const hasFeatures = Array.isArray(features) && features.length > 0;
  const panelId = `room-details-${roomId}`;

  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.media} aria-label={imageAlt || title}>
        {hasImage ? (
          <>
            <img
              className={styles.image}
              src={imageSrc}
              alt={imageAlt || title}
              loading="lazy"
            />
            <div className={styles.mediaOverlay} aria-hidden="true" />
            <div className={styles.mediaHighlight} aria-hidden="true" />
            <div className={styles.mediaGlow} aria-hidden="true" />
            <div className={styles.mediaFrame} aria-hidden="true" />
          </>
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderInner}>
              <span className={styles.placeholderText}>
                {imageComingSoonLabel}
              </span>
            </div>
          </div>
        )}

        {badge ? <div className={styles.badge}>{badge}</div> : null}
      </div>

      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </header>

      {description ? (
        <div className={styles.desc}>
          <p className={styles.descText}>{description}</p>
        </div>
      ) : null}

      {hasFeatures ? (
        <>
          <div className={styles.toggleWrap}>
            <button
              type="button"
              className={styles.toggleButton}
              onClick={onToggle}
              aria-expanded={detailsOpen}
              aria-controls={panelId}
            >
              <span className={styles.toggleLabel}>
                {detailsOpen ? closeDetailsLabel : openDetailsLabel}
              </span>

              <span
                className={[
                  styles.chevron,
                  detailsOpen ? styles.chevronOpen : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M6 9l6 6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            id={panelId}
            className={[
              styles.detailsPanel,
              detailsOpen ? styles.detailsPanelOpen : styles.detailsPanelClosed,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className={styles.detailsInner}>
              <ul className={styles.features} aria-label={featuresAriaLabel}>
                {features.map((text, index) => (
                  <li
                    key={`${roomId}-${text}-${index}`}
                    className={styles.featureItem}
                  >
                    <span className={styles.check} aria-hidden="true">
                      ✓
                    </span>
                    <span className={styles.featureText}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </article>
  );
}
