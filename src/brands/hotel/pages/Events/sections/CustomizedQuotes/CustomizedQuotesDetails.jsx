import { useMemo } from "react";

import hotelBrand, { resolveHotelIcon } from "../../../../config/index.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

import styles from "./CustomizedQuotesDetails.module.css";

export default function CustomizedQuotesDetails() {
  const rawCards =
    hotelBrand?.pages?.events?.sections?.customizedQuotes?.detailsCards ?? [];

  const cards = useMemo(() => {
    return rawCards.map((card) => {
      const ResolvedIcon = card?.icon
        ? resolveHotelIcon(hotelBrand?.icons, card.icon)
        : null;

      return {
        ...card,
        resolvedIcon: ResolvedIcon ? <ResolvedIcon /> : null,
      };
    });
  }, [rawCards]);

  if (!cards.length) return null;

  return (
    <div
      className={styles.grid}
      aria-label="Detalhes de orçamentos personalizados"
    >
      {cards.map((card) => (
        <SustainabilityActionCard
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.resolvedIcon}
          ariaLabel={card.ariaLabel ?? card.title}
        />
      ))}
    </div>
  );
}