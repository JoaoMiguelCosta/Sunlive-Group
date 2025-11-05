// src/brands/travel/components/ContactCTASection/QuoteRequestChecklist.jsx
import styles from "./QuoteRequestChecklist.module.css";
import travelBrand from "../../ConfigTravel.jsx";

export default function QuoteRequestChecklist() {
  const checklist = travelBrand?.sections?.contactCTA?.checklist;
  if (!checklist?.length) return null;

  return (
    <div className={styles.wrap}>
      <ul className={styles.list} role="list">
        {checklist.map((item) => (
          <li key={item.key} className={styles.item}>
            <span className={styles.bullet} aria-hidden="true" />
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
