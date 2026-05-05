import styles from "./LeisureBenefitsGrid.module.css";

import LeisureBenefitsCard from "./LeisureBenefitsCard.jsx";

export default function LeisureBenefitsGrid({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className={styles.grid} role="list">
      {items.map((item, index) => (
        <LeisureBenefitsCard
          key={item.key || `benefit-${index + 1}`}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
}
