import styles from "./EventsOperatingModelCard.module.css";

export default function EventsOperatingModelCard({ point, index, isPrimary }) {
  if (!point) return null;

  return (
    <li className={`${styles.card} ${isPrimary ? styles.cardPrimary : ""}`}>
      <span className={styles.cardIndex} aria-hidden="true">
        0{index + 1}
      </span>

      <div className={styles.cardContent}>
        {point.title ? (
          <h3 className={styles.cardTitle}>{point.title}</h3>
        ) : null}

        {point.description ? (
          <p className={styles.cardDescription}>{point.description}</p>
        ) : null}
      </div>
    </li>
  );
}
