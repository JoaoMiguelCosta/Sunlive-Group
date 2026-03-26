import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
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

export default function WhoWeHostCards({ items = [] }) {
  if (!Array.isArray(items) || !items.length) return null;

  const icons = hotelBrand?.icons ?? {};
  const mappedItems = mapItemsWithIcons(items, icons);

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

        {secondaryItems.length ? (
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
