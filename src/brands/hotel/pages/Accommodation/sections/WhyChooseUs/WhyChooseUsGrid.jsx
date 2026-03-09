import styles from "./WhyChooseUsGrid.module.css";

import WhyChooseCard from "../../../../shared/ui/WhyChooseCard/WhyChooseCard.jsx";

export default function WhyChooseUsGrid({ items }) {
  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) return null;

  return (
    <div className={styles.grid} role="list" aria-label="Vantagens">
      {safeItems.map((item) => (
        <div key={item.id} role="listitem" className={styles.item}>
          <WhyChooseCard
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
