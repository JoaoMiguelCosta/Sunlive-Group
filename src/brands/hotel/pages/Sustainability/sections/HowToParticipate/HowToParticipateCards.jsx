import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

import styles from "./HowToParticipateCards.module.css";

export default function HowToParticipateCards() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.howToParticipate ?? null;

  const rawItems = section?.participationCards?.items ?? [];

  const items = useMemo(() => {
    return rawItems.map((item, index) => {
      const IconComponent = item?.iconKey
        ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
        : null;

      return {
        ...item,
        step: String(index + 1).padStart(2, "0"),
        resolvedIcon: IconComponent ? <IconComponent /> : null,
      };
    });
  }, [rawItems]);

  if (!items.length) return null;

  return (
    <div className={styles.grid} aria-label="Formas de participar">
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <SustainabilityActionCard
            title={item.title}
            description={item.description}
            icon={item.resolvedIcon}
            ariaLabel={item.title}
            eyebrow={item.eyebrow}
            step={item.step}
            className={styles.card}
          />
        </div>
      ))}
    </div>
  );
}
