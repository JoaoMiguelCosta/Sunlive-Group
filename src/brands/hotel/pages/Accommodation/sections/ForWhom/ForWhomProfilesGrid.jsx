import { useMemo, useState } from "react";

import styles from "./ForWhomProfilesGrid.module.css";
import hotelBrand from "../../../../config/index.js";

import HotelProfileCard from "../../../../shared/ui/HotelProfileCard/HotelProfileCard.jsx";
import HotelOfferPanel from "../../../../shared/ui/HotelOfferPanel/HotelOfferPanel.jsx";

function DetailsPanel({ card, className = "" }) {
  if (!card?.details) return null;

  return (
    <div className={[styles.detailsRow, className].filter(Boolean).join(" ")}>
      <HotelOfferPanel
        title={card.details.title}
        items={(card.details.items || []).map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          Icon: item.Icon,
        }))}
        highlightsTitle={card.details.highlightsTitle}
        highlights={card.details.highlights}
        ctaLabel={card.details.ctaLabel}
        ctaHref={card.details.ctaHref}
        className={styles.offerPanel}
      />
    </div>
  );
}

export default function ForWhomProfilesGrid() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.forWhomProfiles ?? null;

  const cards = Array.isArray(content?.items) ? content.items : [];

  const [openKey, setOpenKey] = useState(
    cards.find((card) => card?.defaultOpen)?.key ?? null,
  );

  const firstRow = useMemo(() => cards.slice(0, 3), [cards]);
  const secondRow = useMemo(() => cards.slice(3, 5), [cards]);
  const remaining = useMemo(() => cards.slice(5), [cards]);

  const firstRowKeys = useMemo(
    () => firstRow.map((card) => card.key),
    [firstRow],
  );
  const secondRowKeys = useMemo(
    () => secondRow.map((card) => card.key),
    [secondRow],
  );

  const openCard = cards.find((card) => card.key === openKey) ?? null;

  const topRowOpenCard =
    openCard && firstRowKeys.includes(openCard.key) ? openCard : null;

  const bottomRowOpenCard =
    openCard && secondRowKeys.includes(openCard.key) ? openCard : null;

  function handleToggle(cardKey) {
    setOpenKey((prev) => (prev === cardKey ? null : cardKey));
  }

  if (!cards.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {firstRow.map((card) => {
          const isOpen = openKey === card.key;

          return (
            <div key={card.key} className={styles.cardCell}>
              <HotelProfileCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                ctaLabel={card.ctaLabel || "Ver detalhes"}
                onClick={() => handleToggle(card.key)}
                detailsOpen={isOpen}
              />
            </div>
          );
        })}

        {topRowOpenCard ? (
          <DetailsPanel card={topRowOpenCard} className={styles.topDetails} />
        ) : null}

        {secondRow.map((card, index) => {
          const isOpen = openKey === card.key;

          return (
            <div
              key={card.key}
              className={[
                styles.cardCell,
                styles.bottomCard,
                index === 0 ? styles.bottomCardLeft : styles.bottomCardRight,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <HotelProfileCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                ctaLabel={card.ctaLabel || "Ver detalhes"}
                onClick={() => handleToggle(card.key)}
                detailsOpen={isOpen}
              />
            </div>
          );
        })}

        {bottomRowOpenCard ? (
          <DetailsPanel
            card={bottomRowOpenCard}
            className={styles.bottomDetails}
          />
        ) : null}

        {remaining.map((card) => {
          const isOpen = openKey === card.key;

          return (
            <div key={card.key} className={styles.cardCell}>
              <HotelProfileCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                ctaLabel={card.ctaLabel || "Ver detalhes"}
                onClick={() => handleToggle(card.key)}
                detailsOpen={isOpen}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
