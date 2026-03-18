import { ICONS, resolveHotelIcon } from "../../../../config/index.js";

import HotelRegionHighlightCard from "./HotelRegionHighlightCard.jsx";
import styles from "./HotelRegionHighlightsGrid.module.css";

export default function HotelRegionHighlightsGrid({ items = [] }) {
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {safeItems.map((item, index) => {
          const Icon = resolveHotelIcon(ICONS, item.iconKey);

          return (
            <div
              key={item.id ?? `${item.title}-${index}`}
              className={styles.item}
            >
              <HotelRegionHighlightCard
                id={item.id}
                icon={Icon ? <Icon /> : null}
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}