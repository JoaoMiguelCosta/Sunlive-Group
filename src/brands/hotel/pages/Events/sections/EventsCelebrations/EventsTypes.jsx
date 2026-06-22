import { Fragment, useEffect, useMemo, useRef, useState } from "react";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import eventsCelebrations from "../../../../config/sections/events/eventsCelebrations.js";
import { resolveHotelIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import HotelProfileCard from "../../../../shared/ui/HotelProfileCard/HotelProfileCard.jsx";
import HotelOfferPanel from "../../../../shared/ui/HotelOfferPanel/HotelOfferPanel.jsx";

import styles from "./EventsTypes.module.css";

const EMPTY_ITEMS = Object.freeze([]);

function getColumnsFromViewport() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth <= 760) return 1;
  if (window.innerWidth <= 1180) return 2;

  return 4;
}

function getPanelRowEndIndex({ activeIndex, columns, totalItems }) {
  if (activeIndex < 0) return -1;

  if (columns >= 4) {
    return totalItems - 1;
  }

  const rowStart = Math.floor(activeIndex / columns) * columns;

  return Math.min(rowStart + columns - 1, totalItems - 1);
}

export default function EventsTypes() {
  const eventTypes = eventsCelebrations?.eventTypes ?? null;

  const sourceItems = Array.isArray(eventTypes?.items)
    ? eventTypes.items
    : EMPTY_ITEMS;

  const [columns, setColumns] = useState(getColumnsFromViewport);

  const offerPanelRef = useRef(null);
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

  const accordionItems = useMemo(
    () =>
      sourceItems.map((item) => ({
        key: item.key,
        defaultOpen: Boolean(item.defaultOpen),
      })),
    [sourceItems],
  );

  const resolvedItems = useMemo(() => {
    return sourceItems
      .filter((item) => item?.key && item?.title)
      .map((item) => {
        const CardIcon = item?.iconKey
          ? resolveHotelIcon(ICONS,item.iconKey)
          : null;

        return {
          ...item,
          panelId: `${eventTypes?.id ?? "events-types"}-${item.key}-panel`,
          triggerId: `${eventTypes?.id ?? "events-types"}-${item.key}-trigger`,
          ResolvedIcon: CardIcon ?? null,
          offerPanel: item?.offerPanel
            ? {
                ...item.offerPanel,
                items: Array.isArray(item.offerPanel.items)
                  ? item.offerPanel.items.map((entry) => {
                      const EntryIcon = entry?.iconKey
                        ? resolveHotelIcon(ICONS,entry.iconKey)
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
  }, [eventTypes?.id, sourceItems]);

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: false,
  });

  const activeItem =
    resolvedItems.find((item) => isOpen(item.key)) ??
    resolvedItems.find((item) => item.defaultOpen) ??
    null;

  const activeIndex = resolvedItems.findIndex((item) => isOpen(item.key));

  const panelRowEndIndex = useMemo(() => {
    if (!activeItem?.offerPanel || activeIndex < 0) {
      return -1;
    }

    return getPanelRowEndIndex({
      activeIndex,
      columns,
      totalItems: resolvedItems.length,
    });
  }, [activeItem, activeIndex, columns, resolvedItems.length]);

  useEffect(() => {
    if (!shouldRevealPanelRef.current) return;
    if (typeof window === "undefined") return;

    if (window.innerWidth > 1180) {
      shouldRevealPanelRef.current = false;
      return;
    }

    const node = offerPanelRef.current;

    if (!node) {
      shouldRevealPanelRef.current = false;
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });

      shouldRevealPanelRef.current = false;
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [activeItem]);

  function handleToggle(itemKey) {
    shouldRevealPanelRef.current = true;
    toggle(itemKey);
  }

  if (!resolvedItems.length) {
    return null;
  }

  return (
    <div className={styles.block}>
      <div
        className={styles.cardsGrid}
        aria-label={eventTypes?.ariaLabel ?? "Tipos de eventos"}
      >
        {resolvedItems.map((item, index) => {
          const open = isOpen(item.key);

          const shouldRenderPanelHere =
            activeItem?.offerPanel && panelRowEndIndex === index;

          return (
            <Fragment key={item.id ?? item.key}>
              <div className={styles.cardCell}>
                <HotelProfileCard
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  ctaLabel={item.ctaLabel ?? "Ver detalhes"}
                  onClick={() => handleToggle(item.key)}
                  detailsOpen={open}
                  controlsId={item.panelId}
                  buttonId={item.triggerId}
                  Icon={item.ResolvedIcon}
                  theme="events"
                  className={open ? styles.cardActive : ""}
                />
              </div>

              {shouldRenderPanelHere ? (
                <div
                  id={activeItem.panelId}
                  ref={offerPanelRef}
                  className={styles.offerPanelWrap}
                  role="region"
                  aria-labelledby={activeItem.triggerId}
                >
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
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
