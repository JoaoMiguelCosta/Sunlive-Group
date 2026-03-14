import { useMemo } from "react";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import hotelBrand from "../../../../config/index.js";
import HotelProfileCard from "../../../../shared/ui/HotelProfileCard/HotelProfileCard.jsx";
import HotelOfferPanel from "../../../../shared/ui/HotelOfferPanel/HotelOfferPanel.jsx";

import styles from "./EventsTypes.module.css";

export default function EventsTypes() {
  const eventTypes =
    hotelBrand?.pages?.events?.sections?.eventsCelebrations?.eventTypes ?? null;

  const items = Array.isArray(eventTypes?.items) ? eventTypes.items : [];

  const accordionItems = useMemo(
    () =>
      items.map((item) => ({
        key: item.key,
        defaultOpen: Boolean(item.defaultOpen),
      })),
    [items],
  );

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: false,
  });

  const activeItem =
    items.find((item) => isOpen(item.key)) ??
    items.find((item) => item.defaultOpen) ??
    null;

  if (!items.length) return null;

  return (
    <div className={styles.block}>
      <div className={styles.cardsGrid}>
        {items.map((item) => {
          const open = isOpen(item.key);

          return (
            <HotelProfileCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              ctaLabel={item.ctaLabel ?? "Ver Detalhes"}
              onClick={() => toggle(item.key)}
              detailsOpen={open}
              Icon={null}
              className={open ? styles.cardActive : ""}
            />
          );
        })}
      </div>

      {activeItem?.offerPanel ? (
        <div className={styles.offerPanelWrap}>
          <HotelOfferPanel
            title={activeItem.offerPanel.title}
            items={activeItem.offerPanel.items.map((entry) => ({
              ...entry,
              Icon: null,
            }))}
            highlightsTitle={activeItem.offerPanel.highlightsTitle}
            highlights={activeItem.offerPanel.highlights}
            ctaLabel={activeItem.offerPanel.ctaLabel}
            ctaHref={activeItem.offerPanel.ctaHref}
          />
        </div>
      ) : null}
    </div>
  );
}
