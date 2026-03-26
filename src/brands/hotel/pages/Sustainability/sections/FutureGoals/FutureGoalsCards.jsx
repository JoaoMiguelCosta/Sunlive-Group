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
    return rawItems.map((item, index) => {
      const IconComponent = item?.iconKey
        ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
        : null;

      return {
        ...item,
        step: item?.step ?? String(index + 1).padStart(2, "0"),
        resolvedIcon: IconComponent ? <IconComponent /> : null,
      };
    });
  }, [rawItems]);

  if (!items.length) return null;

  const desktopColumns = Math.min(items.length, 3);

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
            eyebrow={item.eyebrow}
            step={item.step}
            variant="futureGoals"
            className={styles.card}
          />
        </div>
      ))}
    </div>
  );
}
