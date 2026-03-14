import hotelBrand from "../../../../config/index.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";
import styles from "./HowToParticipateCards.module.css";

export default function HowToParticipateCards() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.howToParticipate ?? null;

  const items = section?.participationCards?.items ?? [];

  if (!items.length) return null;

  return (
    <div className={styles.grid} aria-label="Formas de participar">
      {items.map((item) => (
        <SustainabilityActionCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={null}
          ariaLabel={item.title}
        />
      ))}
    </div>
  );
}
