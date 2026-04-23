import styles from "./LeisureDestinationsList.module.css";

import LeisureDestinationsItem from "./LeisureDestinationsItem.jsx";

export default function LeisureDestinationsList({ items = [], onSelect }) {
  if (items.length === 0) return null;

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <LeisureDestinationsItem
          key={item.key}
          item={item}
          position={item.position}
          onSelect={() => onSelect?.(item.key)}
        />
      ))}
    </div>
  );
}
