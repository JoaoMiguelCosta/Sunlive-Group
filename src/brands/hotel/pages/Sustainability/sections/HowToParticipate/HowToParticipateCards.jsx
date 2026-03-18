import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

import styles from "./HowToParticipateCards.module.css";

export default function HowToParticipateCards() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.howToParticipate ?? null;

  const rawItems = section?.participationCards?.items ?? [];

  const items = useMemo(() => {
    return rawItems.map((item) => {
      const IconComponent = item?.iconKey
        ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
        : null;

      return {
        ...item,
        resolvedIcon: IconComponent ? <IconComponent /> : null,
      };
    });
  }, [rawItems]);

  if (!items.length) return null;

  return (
    <div className={styles.grid} aria-label="Formas de participar">
      {items.map((item) => (
        <SustainabilityActionCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.resolvedIcon}
          ariaLabel={item.title}
        />
      ))}
    </div>
  );
}