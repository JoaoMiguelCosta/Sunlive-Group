import hotelBrand from "../../../../config/index.js";
import SustainabilityActionCard from "../../../../shared/ui/SustainabilityActionCard/SustainabilityActionCard.jsx";
import styles from "./FutureGoalsCards.module.css";

export default function FutureGoalsCards() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.futureGoals ?? null;

  const items = Array.isArray(section?.goalCards?.items)
    ? section.goalCards.items
    : [];

  if (!items.length) return null;

  return (
    <div className={styles.grid} role="list" aria-label="Objetivos futuros">
      {items.map((item) => (
        <div key={item.id} role="listitem" className={styles.item}>
          <SustainabilityActionCard
            title={item.title}
            description={item.description}
            icon={null}
            ariaLabel={item.title}
            className={styles.card}
          />
        </div>
      ))}
    </div>
  );
}
