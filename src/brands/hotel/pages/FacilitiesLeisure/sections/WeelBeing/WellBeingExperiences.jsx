import { useEffect, useMemo, useState } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import HotelFacilitySummaryCard from "../../../../shared/ui/HotelFacilitySummaryCard/HotelFacilitySummaryCard.jsx";
import HotelFacilityDetailPanel from "../../../../shared/ui/HotelFacilityDetailPanel/HotelFacilityDetailPanel.jsx";

import styles from "./WellBeingExperiences.module.css";

const getColumnsFromViewport = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 1200) return 2;
  return 4;
};

export default function WellBeingExperiences() {
  const content = hotelBrand?.pages?.facilities?.sections?.wellBeing ?? null;
  const rawItems = Array.isArray(content?.items) ? content.items : [];

  const [columns, setColumns] = useState(getColumnsFromViewport);

  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumnsFromViewport());
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  const activeIndex = items.findIndex((item) => isOpen(item.key));
  const sectionId = content?.id ?? "well-being";

  const panelRowEndIndex = useMemo(() => {
    if (!activeItem || activeIndex < 0) return -1;

    if (columns >= 4) {
      return items.length - 1;
    }

    const rowStart = Math.floor(activeIndex / columns) * columns;
    return Math.min(rowStart + columns - 1, items.length - 1);
  }, [activeItem, activeIndex, columns, items.length]);

  if (!items.length) return null;

  return (
    <div className={styles.content}>
      <div className={styles.cardsGrid}>
        {items.map((item, index) => {
          const panelId = `${sectionId}-panel-${item.key}`;
          const buttonId = `${sectionId}-button-${item.key}`;
          const open = isOpen(item.key);
          const shouldRenderPanelHere = panelRowEndIndex === index && activeItem;

          return (
            <div key={item.key} className={styles.cardCell}>
              <HotelFacilitySummaryCard
                title={item.title}
                summary={item.summary}
                icon={item.icon?.component ?? null}
                iconLabel={item.icon?.ariaLabel ?? item.title}
                isOpen={open}
                onToggle={() => toggle(item.key)}
                controlsId={panelId}
                buttonId={buttonId}
              />

              {shouldRenderPanelHere ? (
                <div className={styles.detailsArea}>
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
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}