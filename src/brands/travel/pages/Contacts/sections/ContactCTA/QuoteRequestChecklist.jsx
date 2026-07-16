import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import styles from "./QuoteRequestChecklist.module.css";

export default function QuoteRequestChecklist({
  checklist = [],
  ariaLabel = "Informação necessária para preparar uma proposta",
}) {
  if (!Array.isArray(checklist) || checklist.length === 0) return null;

  const validItems = checklist.filter((item) => item?.label);
  if (validItems.length === 0) return null;

  return (
    <ScrollReveal className={styles.wrap}>
      <ul className={styles.list} role="list" aria-label={ariaLabel}>
        {validItems.map(({ key, label }, index) => (
          <li key={key || `${label}-${index}`} className={styles.item}>
            <span className={styles.bullet} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
