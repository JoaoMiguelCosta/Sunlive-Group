import styles from "./ForWhomProfilesGrid.module.css";
import hotelBrand from "../../../../config/index.js";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

import HotelProfileCard from "../../../../shared/ui/HotelProfileCard/HotelProfileCard.jsx";
import HotelOfferPanel from "../../../../shared/ui/HotelOfferPanel/HotelOfferPanel.jsx";

export default function ForWhomProfilesGrid() {
  const content =
    hotelBrand?.pages?.accommodation?.sections?.forWhomProfiles ?? null;
  const cards = content?.items ?? [];

  if (!Array.isArray(cards) || cards.length === 0) return null;

  const accordionItems = cards.map((card) => ({
    key: card.key,
    defaultOpen: card?.defaultOpen ?? false,
  }));

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {cards.map((card) => {
          const open = isOpen(card.key);

          return (
            <div key={card.key} className={styles.cardWrap}>
              <HotelProfileCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                ctaLabel={card.ctaLabel || "Ver Detalhes"}
                onClick={() => toggle(card.key)}
                detailsOpen={open}
              />

              {open && card.details ? (
                <div className={styles.details}>
                  <HotelOfferPanel
                    title={card.details.title}
                    items={(card.details.items || []).map((item) => ({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                    }))}
                    highlightsTitle={card.details.highlightsTitle}
                    highlights={card.details.highlights}
                    ctaLabel={card.details.ctaLabel}
                    ctaHref={card.details.ctaHref}
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
