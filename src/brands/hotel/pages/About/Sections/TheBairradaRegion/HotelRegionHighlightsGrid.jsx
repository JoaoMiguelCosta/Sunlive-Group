import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";

import HotelRegionHighlightCard from "./HotelRegionHighlightCard.jsx";

import styles from "./HotelRegionHighlightsGrid.module.css";

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          (item.title || item.description || item.iconKey),
      )
    : [];
}

export default function HotelRegionHighlightsGrid({ items = [] }) {
  const safeItems = getValidItems(items);
  const icons = hotelBrand?.icons ?? {};

  if (!safeItems.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {safeItems.map((item, index) => {
          const Icon = item.iconKey
            ? resolveHotelIcon(icons, item.iconKey)
            : null;

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
