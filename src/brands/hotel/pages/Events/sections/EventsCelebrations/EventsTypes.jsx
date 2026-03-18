import { useEffect, useMemo, useState } from "react";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import HotelProfileCard from "../../../../shared/ui/HotelProfileCard/HotelProfileCard.jsx";
import HotelOfferPanel from "../../../../shared/ui/HotelOfferPanel/HotelOfferPanel.jsx";

import styles from "./EventsTypes.module.css";

const getColumnsFromViewport = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth <= 700) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 4;
};

export default function EventsTypes() {
  const eventTypes =
    hotelBrand?.pages?.events?.sections?.eventsCelebrations?.eventTypes ?? null;

  const items = Array.isArray(eventTypes?.items) ? eventTypes.items : [];

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

  const accordionItems = useMemo(
    () =>
      items.map((item) => ({
        key: item.key,
        defaultOpen: Boolean(item.defaultOpen),
      })),
    [items],
  );

  const resolvedItems = useMemo(() => {
    return items.map((item) => {
      const CardIcon = item?.iconKey
        ? resolveHotelIcon(hotelBrand?.icons, item.iconKey)
        : null;

      return {
        ...item,
        ResolvedIcon: CardIcon ?? null,
        offerPanel: item?.offerPanel
          ? {
              ...item.offerPanel,
              items: Array.isArray(item.offerPanel.items)
                ? item.offerPanel.items.map((entry) => {
                    const EntryIcon = entry?.iconKey
                      ? resolveHotelIcon(hotelBrand?.icons, entry.iconKey)
                      : null;

                    return {
                      ...entry,
                      Icon: EntryIcon ?? null,
                    };
                  })
                : [],
            }
          : null,
      };
    });
  }, [items]);

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: false,
  });

  const activeItem =
    resolvedItems.find((item) => isOpen(item.key)) ??
    resolvedItems.find((item) => item.defaultOpen) ??
    null;

  const activeIndex = resolvedItems.findIndex((item) => isOpen(item.key));

  const panelRowEndIndex = useMemo(() => {
    if (!activeItem?.offerPanel || activeIndex < 0) return -1;

    if (columns >= 4) {
      return resolvedItems.length - 1;
    }

    const rowStart = Math.floor(activeIndex / columns) * columns;
    return Math.min(rowStart + columns - 1, resolvedItems.length - 1);
  }, [activeItem, activeIndex, columns, resolvedItems.length]);

  if (!resolvedItems.length) return null;

  return (
    <div className={styles.block}>
      <div className={styles.cardsGrid}>
        {resolvedItems.map((item, index) => {
          const open = isOpen(item.key);
          const shouldRenderPanelHere =
            activeItem?.offerPanel && panelRowEndIndex === index;

          return (
            <div key={item.id} className={styles.cardCell}>
              <HotelProfileCard
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                ctaLabel={item.ctaLabel ?? "Ver Detalhes"}
                onClick={() => toggle(item.key)}
                detailsOpen={open}
                Icon={item.ResolvedIcon}
                className={open ? styles.cardActive : ""}
              />

              {shouldRenderPanelHere ? (
                <div className={styles.offerPanelWrap}>
                  <HotelOfferPanel
                    title={activeItem.offerPanel.title}
                    items={activeItem.offerPanel.items}
                    highlightsTitle={activeItem.offerPanel.highlightsTitle}
                    highlights={activeItem.offerPanel.highlights}
                    ctaLabel={activeItem.offerPanel.ctaLabel}
                    ctaHref={activeItem.offerPanel.ctaHref}
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