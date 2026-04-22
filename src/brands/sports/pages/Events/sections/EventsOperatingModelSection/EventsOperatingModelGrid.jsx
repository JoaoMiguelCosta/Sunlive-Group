import styles from "./EventsOperatingModelGrid.module.css";
import EventsOperatingModelCard from "./EventsOperatingModelCard.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsOperatingModelGrid({ items, ariaLabel }) {
  const points = hasItems(items) ? items : [];

  if (points.length === 0) return null;

  return (
    <ul className={styles.grid} aria-label={ariaLabel}>
      {points.map((point, index) => (
        <EventsOperatingModelCard
          key={point.key ?? `events-operating-model-point-${index}`}
          point={point}
          index={index}
          isPrimary={index === 0}
        />
      ))}
    </ul>
  );
}
