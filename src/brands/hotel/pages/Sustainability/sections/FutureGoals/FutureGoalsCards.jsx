import hotelBrand from "../../../../config/index.js";
import WhyChooseCard from "../../../../shared/ui/WhyChooseCard/WhyChooseCard.jsx";
import styles from "./FutureGoalsCards.module.css";

export default function FutureGoalsCards() {
  const section =
    hotelBrand?.pages?.sustainability?.sections?.futureGoals ?? null;

  const items = section?.goalCards?.items ?? [];

  if (!items.length) return null;

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <WhyChooseCard
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
