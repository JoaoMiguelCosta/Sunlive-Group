import styles from "./LeisureDestinationsItem.module.css";

function getValidItems(items) {
  if (!Array.isArray(items)) return [];

  return items.filter((item) => typeof item === "string" && item.trim());
}

function formatPosition(value) {
  return String(value).padStart(2, "0");
}

export default function LeisureDestinationsItem({
  item,
  position = 1,
  onSelect,
}) {
  if (!item) return null;

  const highlights = getValidItems(item.highlights).slice(0, 3);

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.trigger}
        onClick={onSelect}
        aria-label={`Destacar ${item.title}`}
      />

      <div className={styles.topRow}>
        {item.eyebrow ? (
          <span className={styles.badge}>{item.eyebrow}</span>
        ) : null}

        <span className={styles.counter} aria-hidden="true">
          {formatPosition(position)}
        </span>
      </div>

      <div className={styles.head}>
        <h3 className={styles.title}>{item.title}</h3>
      </div>

      {item.description ? (
        <p className={styles.description}>{item.description}</p>
      ) : null}

      {highlights.length > 0 ? (
        <ul className={styles.list} aria-label={`Destaques de ${item.title}`}>
          {highlights.map((highlight) => (
            <li key={highlight} className={styles.listItem}>
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
