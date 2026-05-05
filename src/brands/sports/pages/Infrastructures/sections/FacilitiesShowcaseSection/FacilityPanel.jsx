import styles from "./FacilityPanel.module.css";

const MAX_VISIBLE_IMAGES = 2;

function getImageFrameClassName(index) {
  return index === 0 ? styles.primaryImageFrame : styles.secondaryImageFrame;
}

function getImageClassName(index) {
  return [styles.image, index === 1 ? styles.secondaryImageZoomed : ""]
    .filter(Boolean)
    .join(" ");
}

export default function FacilityPanel({
  panelRef,
  panelId,
  labelledBy,
  card,
  currentCounter,
  totalCounter,
}) {
  const images = Array.isArray(card?.images)
    ? card.images.slice(0, MAX_VISIBLE_IMAGES)
    : [];

  const hasImages = images.length > 0;

  return (
    <article
      ref={panelRef}
      id={panelId}
      className={styles.panel}
      role="tabpanel"
      aria-labelledby={labelledBy}
      tabIndex={-1}
      aria-live="polite"
    >
      <div className={styles.media}>
        {hasImages ? (
          <div className={styles.imageStack}>
            {images.map((image, index) => (
              <figure
                key={`${card.key}-image-${index}`}
                className={getImageFrameClassName(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={getImageClassName(index)}
                  style={{ "--facility-image-position": image.position }}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span>{card.title}</span>
          </div>
        )}
      </div>

      <div className={styles.panelContent}>
        <div className={styles.panelHeader}>
          <p className={styles.panelMeta}>
            {currentCounter} / {totalCounter}
          </p>

          <h3 className={styles.panelTitle}>{card.title}</h3>

          {card.description ? (
            <p className={styles.panelDescription}>{card.description}</p>
          ) : null}

          {card.highlight ? (
            <p className={styles.panelHighlight}>{card.highlight}</p>
          ) : null}
        </div>

        {card.features.length > 0 ? (
          <ul className={styles.features}>
            {card.features.map((feature, index) => (
              <li
                key={`${card.key}-feature-${index}`}
                className={styles.feature}
              >
                {feature}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
