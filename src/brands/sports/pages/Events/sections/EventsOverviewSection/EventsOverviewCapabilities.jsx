import styles from "./EventsOverviewCapabilities.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsOverviewCapabilities({
  items,
  ariaLabel,
  sectionId,
}) {
  const capabilityItems = hasItems(items) ? items : [];

  if (capabilityItems.length === 0) return null;

  return (
    <ul className={styles.capabilityStack} aria-label={ariaLabel}>
      {capabilityItems.map((item, index) => (
        <li
          key={item.key ?? `${sectionId}-capability-${index}`}
          className={`${styles.capabilityCard} ${
            index === 0 ? styles.capabilityCardPrimary : ""
          }`}
        >
          <span className={styles.capabilityIndex} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className={styles.capabilityContent}>
            {item.title ? (
              <h3 className={styles.capabilityTitle}>{item.title}</h3>
            ) : null}

            {item.description ? (
              <p className={styles.capabilityDescription}>{item.description}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
