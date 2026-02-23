// src/brands/travel/components/ContactCTASection/QuoteRequestChecklist.jsx
import styles from "./QuoteRequestChecklist.module.css";
import travelBrand from "../../brand";

export default function QuoteRequestChecklist() {
  const checklist = travelBrand?.sections?.contactCTA?.checklist;
  if (!Array.isArray(checklist) || checklist.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <ul className={styles.list} role="list">
        {checklist.map(({ key, label }) => (
          <li key={key} className={styles.item}>
            <span className={styles.bullet} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
