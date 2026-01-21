import styles from "./WhyChooseUsGrid.module.css";

import WhyChooseCard from "../../../../../shared/components/Hotel/WhyChooseCard/WhyChooseCard.jsx"

export default function WhyChooseUsGrid({ items }) {
  const safeItems = Array.isArray(items) ? items : [];
  if (!safeItems.length) return null;

  return (
    <div className={styles.grid} role="list" aria-label="Vantagens">
      {safeItems.map((it) => (
        <div key={it.id} role="listitem">
          <WhyChooseCard
            title={it.title}
            description={it.description}
            icon={null} // iconKey ligas depois
            ariaLabel={it.title}
          />
        </div>
      ))}
    </div>
  );
}
