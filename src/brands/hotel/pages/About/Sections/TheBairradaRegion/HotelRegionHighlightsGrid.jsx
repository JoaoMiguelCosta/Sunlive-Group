import HotelRegionHighlightCard from "./HotelRegionHighlightCard.jsx";
import styles from "./HotelRegionHighlightsGrid.module.css";

export default function HotelRegionHighlightsGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <HotelRegionHighlightCard
            key={item.id ?? `${item.title}-${index}`}
            id={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
