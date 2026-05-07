import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import SustainabilityPracticeCard from "../../../../shared/ui/SustainabilityPracticeCard/SustainabilityPracticeCard.jsx";

import styles from "./SustainabilityPracticesGrid.module.css";

export default function SustainabilityPracticesGrid() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.sustainabilityCommitment ??
    null;

  const rawItems = Array.isArray(section?.practices?.items)
    ? section.practices.items
    : [];

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

  const ariaLabel =
    section?.ui?.practicesAriaLabel ?? "Práticas de sustentabilidade";

  return (
    <div className={styles.grid} aria-label={ariaLabel}>
      {items.map((item, index) => {
        const itemClassName = [
          styles.item,
          item.featured ? styles.featured : styles.standard,
          index === 1 ? styles.wideStandard : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div key={item.id} className={itemClassName}>
            <SustainabilityPracticeCard
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              topIcon={item.resolvedTopIcon}
              features={item.features ?? []}
              metricText={item.metric?.text}
              featured={item.featured ?? false}
              media={item.media ?? null}
            />
          </div>
        );
      })}
    </div>
  );
}
