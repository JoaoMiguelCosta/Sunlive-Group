import hotelBrand from "../../../../config/index.js";
import WhyChooseCard from "../../../../shared/ui/WhyChooseCard/WhyChooseCard.jsx";

import styles from "./CustomizedQuotesDetails.module.css";

export default function CustomizedQuotesDetails() {
  const cards =
    hotelBrand?.pages?.events?.sections?.customizedQuotes?.detailsCards ?? [];

  if (!cards.length) return null;

  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <WhyChooseCard
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
          ariaLabel={card.ariaLabel}
        />
      ))}
    </div>
  );
}
