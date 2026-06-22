import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import HotelWhoWeHostCard from "../../../../shared/ui/HotelWhoWeHostCard/HotelWhoWeHostCard.jsx";

import styles from "./WhoWeHostCards.module.css";

function mapItemsWithIcons(items, icons) {
  return items.map((item) => {
    const IconComponent = item.iconKey
      ? resolveHotelIcon(icons, item.iconKey)
      : null;

    return {
      ...item,
      icon: IconComponent ? <IconComponent /> : null,
    };
  });
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => item && typeof item === "object" && item.id)
    : [];
}

export default function WhoWeHostCards({ items = [] }) {
  const validItems = getValidItems(items);
  if (!validItems.length) return null;

  const icons = ICONS;
  const mappedItems = mapItemsWithIcons(validItems, icons);

  const featuredItem =
    mappedItems.find((item) => item.featured) ?? mappedItems[0] ?? null;

  const secondaryItems = mappedItems.filter(
    (item) => item.id !== featuredItem?.id,
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.layout}>
        {featuredItem ? (
          <div
            className={styles.featuredSlot}
            style={{ "--who-card-delay": "0ms" }}
          >
            <HotelWhoWeHostCard
              id={featuredItem.id}
              icon={featuredItem.icon}
              eyebrow={featuredItem.eyebrow}
              title={featuredItem.title}
              description={featuredItem.description}
              variant="featured"
            />
          </div>
        ) : null}

        {secondaryItems.length > 0 ? (
          <div className={styles.secondaryGrid}>
            {secondaryItems.map((item, index) => (
              <div
                key={item.id}
                className={styles.secondaryItem}
                style={{ "--who-card-delay": `${(index + 1) * 40}ms` }}
              >
                <HotelWhoWeHostCard
                  id={item.id}
                  icon={item.icon}
                  eyebrow={item.eyebrow}
                  title={item.title}
                  description={item.description}
                  variant="default"
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
