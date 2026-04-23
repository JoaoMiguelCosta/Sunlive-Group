import styles from "./LeisureDestinationsFeatured.module.css";

function getValidItems(items) {
  if (!Array.isArray(items)) return [];

  return items.filter((item) => typeof item === "string" && item.trim());
}

function formatPosition(value) {
  return String(value).padStart(2, "0");
}

export default function LeisureDestinationsFeatured({
  item,
  position = 1,
  totalItems = 1,
}) {
  if (!item) return null;

  const highlights = getValidItems(item.highlights);
  const hasImage = Boolean(item.image?.src);
  const positionLabel = formatPosition(position);
  const totalLabel = formatPosition(totalItems);

  return (
    <article className={styles.card}>
      <div className={styles.shell}>
        <div
          className={styles.media}
          style={
            hasImage ? { backgroundImage: `url(${item.image.src})` } : undefined
          }
          role="img"
          aria-label={item.image?.alt || item.title}
        >
          <div className={styles.mediaOverlay} />
          <div className={styles.mediaGrid} />

          <div className={styles.mediaTopRow}>
            {item.eyebrow ? (
              <span className={styles.badge}>{item.eyebrow}</span>
            ) : null}

            <div className={styles.counter} aria-hidden="true">
              <span className={styles.counterValue}>{positionLabel}</span>
              <span className={styles.counterTotal}>/{totalLabel}</span>
            </div>
          </div>

          <div className={styles.mediaContent}>
            <h3 className={styles.title}>{item.title}</h3>
          </div>
        </div>

        <div className={styles.body}>
          {item.description ? (
            <div className={styles.descriptionBlock}>
              <p className={styles.description}>{item.description}</p>
            </div>
          ) : null}

          {highlights.length > 0 ? (
            <div className={styles.highlights}>
              <ul
                className={styles.list}
                aria-label={`Destaques de ${item.title}`}
              >
                {highlights.map((highlight) => (
                  <li key={highlight} className={styles.listItem}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
