import styles from "./LeisureBenefitsGrid.module.css";

import LeisureBenefitsCard from "./LeisureBenefitsCard.jsx";

export default function LeisureBenefitsGrid({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <LeisureBenefitsCard key={item.key} item={item} />
      ))}
    </div>
  );
}
