import { useEffect, useMemo, useRef, useState } from "react";

import wellBeing from "../../../../config/sections/facilities/wellBeing.js";
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import HotelFacilitySummaryCard from "../../../../shared/ui/HotelFacilitySummaryCard/HotelFacilitySummaryCard.jsx";
import HotelFacilityDetailPanel from "../../../../shared/ui/HotelFacilityDetailPanel/HotelFacilityDetailPanel.jsx";

import styles from "./WellBeingExperiences.module.css";

const EMPTY_ITEMS = Object.freeze([]);

function getColumnsFromViewport() {
  if (typeof window === "undefined") return 4;

  if (window.innerWidth <= 720) return 1;
  if (window.innerWidth <= 1200) return 2;

  return 4;
}

function enrichItemsWithIcons(items, icons) {
  return items.map((item) => ({
    ...item,
    icon: {
      ...item.icon,
      component: item.icon?.key
        ? resolveHotelIcon(icons, item.icon.key)
        : null,
    },
  }));
}

function buildAccordionItems(items) {
  return items.map((item, index) => ({
    key: item.key,
    defaultOpen: index === 0,
  }));
}

function getPanelRowEndIndex({ activeIndex, columns, totalItems }) {
  if (activeIndex < 0) return -1;

  if (columns >= 4) {
    return totalItems - 1;
  }

  const rowStart = Math.floor(activeIndex / columns) * columns;

  return Math.min(rowStart + columns - 1, totalItems - 1);
}

export default function WellBeingExperiences() {
  const content = wellBeing;

  const rawItems = Array.isArray(content?.items)
    ? content.items
    : EMPTY_ITEMS;

  const sectionId = content?.id ?? "well-being";
  const ui = content?.ui ?? {};

  const [columns, setColumns] = useState(getColumnsFromViewport);

  const detailsRef = useRef(null);
  const shouldRevealPanelRef = useRef(false);

  useEffect(() => {
    function handleResize() {
      setColumns(getColumnsFromViewport());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = useMemo(() => {
    return enrichItemsWithIcons(rawItems, ICONS);
  }, [rawItems]);

  const accordionItems = useMemo(() => {
    return buildAccordionItems(items);
  }, [items]);

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: false,
  });

  const activeIndex = items.findIndex((item) => isOpen(item.key));
  const activeItem = activeIndex >= 0 ? items[activeIndex] : null;

  const panelRowEndIndex = useMemo(() => {
    return getPanelRowEndIndex({
      activeIndex,
      columns,
      totalItems: items.length,
    });
  }, [activeIndex, columns, items.length]);

  useEffect(() => {
    if (!shouldRevealPanelRef.current) return;
    if (!activeItem) return;
    if (typeof window === "undefined") return;

    const breakpoint = ui.scrollRevealBreakpoint ?? 1200;

    if (window.innerWidth > breakpoint) {
      shouldRevealPanelRef.current = false;
      return;
    }

    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    shouldRevealPanelRef.current = false;
  }, [activeItem, ui.scrollRevealBreakpoint]);

  if (!items.length) return null;

  return (
    <div className={styles.content}>
      <div
        className={styles.cardsGrid}
        aria-label={
          ui.summaryGridAriaLabel ??
          "Lista de experiências de bem-estar e lazer"
        }
      >
        {items.map((item, index) => {
          const panelId = `${sectionId}-panel-${item.key}`;
          const buttonId = `${sectionId}-button-${item.key}`;
          const open = isOpen(item.key);

          const shouldRenderPanelHere =
            panelRowEndIndex === index && Boolean(activeItem);

          return (
            <div key={item.key} className={styles.cardCell}>
              <HotelFacilitySummaryCard
                title={item.title}
                shortTitle={item.shortTitle ?? item.title}
                summary={item.summary}
                icon={item.icon?.component ?? null}
                iconLabel={item.icon?.ariaLabel ?? item.title}
                isOpen={open}
                onToggle={() => {
                  shouldRevealPanelRef.current = true;
                  toggle(item.key);
                }}
                controlsId={panelId}
                buttonId={buttonId}
                openLabel={ui.openLabel ?? "Ver detalhes"}
                closeLabel={ui.closeLabel ?? "Ocultar detalhes"}
              />

              {shouldRenderPanelHere ? (
                <div ref={detailsRef} className={styles.detailsArea}>
                  <HotelFacilityDetailPanel
                    id={`${sectionId}-panel-${activeItem.key}`}
                    labelledBy={`${sectionId}-button-${activeItem.key}`}
                    badge={ui.detailBadge ?? "Experiência em destaque"}
                    eyebrow={activeItem.details?.eyebrow ?? ""}
                    title={activeItem.details?.title ?? activeItem.title}
                    description={activeItem.details?.description ?? ""}
                    icon={activeItem.icon?.component ?? null}
                    iconLabel={
                      activeItem.icon?.ariaLabel ?? activeItem.title
                    }
                    features={activeItem.details?.features ?? []}
                    image={activeItem.details?.image ?? null}
                    imageAlt={
                      activeItem.details?.imageAlt ?? activeItem.title
                    }
                    imagePosition={
                      activeItem.details?.imagePosition ?? "center center"
                    }
                    fallbackLabel={
                      ui.detailFallbackLabel ??
                      "Imagem ilustrativa indisponível"
                    }
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

