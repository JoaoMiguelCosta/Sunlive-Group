import styles from "./HotelInfoListCard.module.css";

export default function HotelInfoListCard({
  title,
  description = "",
  items = [],
  className = "",
}) {
  if (!title || !items.length) return null;

  const safeDescription = String(description ?? "").trim();

  return (
    <article className={`${styles.card} ${className}`.trim()}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {safeDescription ? (
          <p className={styles.description}>{safeDescription}</p>
        ) : null}
      </div>

      <div className={styles.body}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={`${title}-${index}`} className={styles.listItem}>
              <span className={styles.bullet} aria-hidden="true" />
              <span className={styles.itemText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
