import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import SustainabilityPracticeCard from "../../../../shared/ui/SustainabilityPracticeCard/SustainabilityPracticeCard.jsx";
import styles from "./SustainabilityPracticesGrid.module.css";

export default function SustainabilityPracticesGrid() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.sustainabilityCommitment ??
    null;

  const rawItems = section?.practices?.items ?? [];

  const items = useMemo(() => {
    return rawItems.map((item) => {
      const TopIcon = item?.topIconKey
        ? resolveHotelIcon(hotelBrand?.icons, item.topIconKey)
        : null;

      return {
        ...item,
        resolvedTopIcon: TopIcon ? <TopIcon /> : null,
      };
    });
  }, [rawItems]);

  if (!items.length) return null;

  return (
    <div className={styles.grid} aria-label="Práticas de sustentabilidade">
      {items.map((item) => (
        <SustainabilityPracticeCard
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          topIcon={item.resolvedTopIcon}
          features={item.features ?? []}
          metricText={item.metric?.text}
        />
      ))}
    </div>
  );
}