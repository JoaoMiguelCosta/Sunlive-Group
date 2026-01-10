import styles from "./ForWhomProfilesGrid.module.css";
import hotelBrand from "../../../configHotel.jsx";

import useAccordion from "../../../../../shared/hooks/useAccordion.js";

import HotelProfileCard from "../../../../../shared/components/Hotel/HotelProfileCard/HotelProfileCard.jsx";
import HotelOfferPanel from "../../../../../shared/components/Hotel/HotelOfferPanel/HotelOfferPanel.jsx";

export default function ForWhomProfilesGrid() {
  const content = hotelBrand?.pages?.estadia?.sections?.forWhomProfiles ?? null;
  const cards = content?.items ?? [];
  if (!Array.isArray(cards) || cards.length === 0) return null;

  // useAccordion precisa de {key, defaultOpen?}
  const accordionItems = cards.map((c) => ({
    key: c.key,
    defaultOpen: c?.defaultOpen ?? false,
  }));

  const { isOpen, toggle } = useAccordion(accordionItems, {
    allowMultiple: true,
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {cards.map((c) => {
          const open = isOpen(c.key);

          return (
            <div key={c.key} className={styles.cardWrap}>
              <HotelProfileCard
                title={c.title}
                subtitle={c.subtitle}
                description={c.description}
                ctaLabel={c.ctaLabel || "Ver Detalhes"}
                onClick={() => toggle(c.key)} // ✅ botão “Ver Detalhes”
                detailsOpen={open} // ✅ para seta rodar (vamos preparar já)
                /* Icon={ICON_MAP[c.iconKey]} */ // ✅ depois
              />

              {open && c.details ? (
                <div className={styles.details}>
                  <HotelOfferPanel
                    title={c.details.title}
                    items={(c.details.items || []).map((it) => ({
                      id: it.id,
                      title: it.title,
                      description: it.description,
                      // Icon: ICON_MAP[it.iconKey]  // ✅ depois
                    }))}
                    highlightsTitle={c.details.highlightsTitle}
                    highlights={c.details.highlights}
                    ctaLabel={c.details.ctaLabel}
                    ctaHref={c.details.ctaHref}
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
