import styles from "./QuoteRequestChecklist.module.css";
import travelBrand from "../../config/index.js";

export default function QuoteRequestChecklist() {
  const checklist = travelBrand?.sections?.contactCTA?.checklist ?? [];
  if (!Array.isArray(checklist) || checklist.length === 0) return null;

  const validItems = checklist.filter((item) => item?.label);

  if (validItems.length === 0) return null;

  return (
    <div className={styles.wrap}>
      <ul className={styles.list} role="list">
        {validItems.map(({ key, label }, index) => (
          <li key={key || `${label}-${index}`} className={styles.item}>
            <span className={styles.bullet} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
