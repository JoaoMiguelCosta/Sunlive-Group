import HotelDiningFeatureCard from "../../../../shared/ui/HotelDiningFeatureCard/HotelDiningFeatureCard.jsx";
import hotelBrand, {
  resolveHotelIcon,
} from "../../../../config/index.js";

import styles from "./BreakfastFeatureGrid.module.css";

function getCardPlacementClass(index, total) {
  const remainder = total % 3;

  if (remainder !== 2) return "";

  const pairStartIndex = total - 2;

  if (index === pairStartIndex) return styles.lastRowLeft;
  if (index === pairStartIndex + 1) return styles.lastRowRight;

  return "";
}

export default function BreakfastFeatureGrid() {
  const section = hotelBrand?.pages?.dining?.sections?.breakfast ?? null;

  const items = Array.isArray(section?.featureCards?.items)
    ? section.featureCards.items
    : [];

  if (!items.length) return null;

  return (
    <div className={styles.block} aria-label="Destaques do pequeno-almoço">
      <div className={styles.grid}>
        {items.map((item, index) => {
          const placementClass = getCardPlacementClass(index, items.length);

          const Icon = item?.iconKey
            ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
            : null;

          return (
            <HotelDiningFeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={Icon ? <Icon /> : null}
              iconKey={item.iconKey}
              className={placementClass}
            />
          );
        })}
      </div>
    </div>
  );
}