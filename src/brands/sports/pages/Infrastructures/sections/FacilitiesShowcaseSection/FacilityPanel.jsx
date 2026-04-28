import styles from "./FacilityPanel.module.css";

export default function FacilityPanel({
  panelRef,
  panelId,
  labelledBy,
  card,
  currentCounter,
  totalCounter,
}) {
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
        {card.image ? (
          <img
            key={card.key}
            src={card.image}
            alt={card.imageAlt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
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
