import hotelBrand from "../../../../config/index.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";

import styles from "./CustomizedQuotesDetails.module.css";

export default function CustomizedQuotesDetails() {
  const cards =
    hotelBrand?.pages?.events?.sections?.customizedQuotes?.detailsCards ?? [];

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
          icon={card.icon ?? null}
          ariaLabel={card.ariaLabel ?? card.title}
        />
      ))}
    </div>
  );
}
