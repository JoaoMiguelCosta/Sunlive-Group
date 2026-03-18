import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import HotelFacilitySummaryCard from "../../../../shared/ui/HotelFacilitySummaryCard/HotelFacilitySummaryCard.jsx";
import HotelFacilityDetailPanel from "../../../../shared/ui/HotelFacilityDetailPanel/HotelFacilityDetailPanel.jsx";

import styles from "./WellBeingExperiences.module.css";

export default function WellBeingExperiences() {
  const content = hotelBrand?.pages?.facilities?.sections?.wellBeing ?? null;
  const rawItems = Array.isArray(content?.items) ? content.items : [];

  const items = useMemo(
    () =>
      rawItems.map((item) => ({
        ...item,
        icon: {
          ...item.icon,
          component: item.icon?.key
            ? resolveHotelIcon(hotelBrand?.icons, item.icon.key)
            : null,
        },
      })),
    [rawItems],
  );

  if (!items.length) return null;

  const accordionItems = useMemo(
    () =>
      items.map((item, index) => ({
        key: item.key,
        defaultOpen: index === 0,
      })),
    [items],
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: false,
  });

  const activeItem = items.find((item) => isOpen(item.key)) ?? null;
  const sectionId = content?.id ?? "well-being";

  return (
    <div className={styles.content}>
      <div className={styles.cardsGrid}>
        {items.map((item) => {
          const panelId = `${sectionId}-panel-${item.key}`;
          const buttonId = `${sectionId}-button-${item.key}`;
          const open = isOpen(item.key);

          return (
            <HotelFacilitySummaryCard
              key={item.key}
              title={item.title}
              summary={item.summary}
              icon={item.icon?.component ?? null}
              iconLabel={item.icon?.ariaLabel ?? item.title}
              isOpen={open}
              onToggle={() => toggle(item.key)}
              controlsId={panelId}
              buttonId={buttonId}
            />
          );
        })}
      </div>

      <div className={styles.detailsArea}>
        {activeItem ? (
          <HotelFacilityDetailPanel
            id={`${sectionId}-panel-${activeItem.key}`}
            labelledBy={`${sectionId}-button-${activeItem.key}`}
            title={activeItem.details?.title ?? activeItem.title}
            icon={activeItem.icon?.component ?? null}
            iconLabel={activeItem.icon?.ariaLabel ?? activeItem.title}
            features={activeItem.details?.features ?? []}
            image={activeItem.details?.image ?? null}
            imageAlt={activeItem.details?.imageAlt ?? activeItem.title}
          />
        ) : null}
      </div>
    </div>
  );
}