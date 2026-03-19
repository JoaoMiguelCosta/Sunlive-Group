import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

import styles from "./FutureGoalsCards.module.css";

export default function FutureGoalsCards() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.futureGoals ?? null;

  const rawItems = Array.isArray(section?.goalCards?.items)
    ? section.goalCards.items
    : [];

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

  const desktopColumns = Math.min(items.length, 4);

  return (
    <div
      className={styles.grid}
      role="list"
      aria-label="Objetivos futuros"
      style={{ "--future-goals-columns": desktopColumns }}
    >
      {items.map((item) => (
        <div key={item.id} role="listitem" className={styles.item}>
          <SustainabilityActionCard
            title={item.title}
            description={item.description}
            icon={item.resolvedIcon}
            ariaLabel={item.title}
            className={styles.card}
          />
        </div>
      ))}
    </div>
  );
}
