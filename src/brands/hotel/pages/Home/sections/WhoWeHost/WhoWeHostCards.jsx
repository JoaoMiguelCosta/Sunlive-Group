import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelWhoWeHostCard from "../../../../shared/ui/HotelWhoWeHostCard/HotelWhoWeHostCard.jsx";
import styles from "./WhoWeHostCards.module.css";

export default function WhoWeHostCards({ items = [] }) {
  if (!items.length) return null;

  const icons = hotelBrand?.icons ?? {};

  const mappedItems = items.map((item) => {
    const IconComponent = item.iconKey
      ? resolveHotelIcon(icons, item.iconKey)
      : null;

    return {
      ...item,
      icon: IconComponent ? <IconComponent /> : null,
    };
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {mappedItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <HotelWhoWeHostCard
              id={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
