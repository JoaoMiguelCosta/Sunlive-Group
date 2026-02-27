// src/brands/hotel/pages/HotelAbout/sections/TheBairradaRegion/HotelRegionHighlightsGrid.jsx
import styles from "./HotelRegionHighlightsGrid.module.css";
import HotelWhoWeHostCard from "../../../../shared/ui/HotelWhoWeHostCard/HotelWhoWeHostCard.jsx";

export default function HotelRegionHighlightsGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {items.map((item) => (
          <HotelWhoWeHostCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
