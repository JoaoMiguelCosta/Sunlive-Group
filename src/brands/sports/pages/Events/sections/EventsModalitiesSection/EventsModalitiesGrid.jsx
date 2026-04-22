import styles from "./EventsModalitiesGrid.module.css";
import EventsModalitiesCard from "./EventsModalitiesCard.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsModalitiesGrid({ items, ariaLabel, sectionId }) {
  const modalities = hasItems(items) ? items : [];

  if (modalities.length === 0) return null;

  return (
    <div className={styles.grid} aria-label={ariaLabel}>
      {modalities.map((item, index) => (
        <EventsModalitiesCard
          key={item.key || `${sectionId}-card-${index}`}
          item={item}
          index={index}
          sectionId={sectionId}
        />
      ))}
    </div>
  );
}
