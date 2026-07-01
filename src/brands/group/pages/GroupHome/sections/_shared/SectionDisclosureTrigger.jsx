import styles from "./SectionDisclosureTrigger.module.css";
import ChevronDownIcon from "../../../../shared/components/ChevronDownIcon.jsx";

export default function SectionDisclosureTrigger({
  id,
  label,
  panelId,
  isOpen,
  onToggle,
}) {
  return (
    <h2 className={styles.heading}>
      <button
        id={id}
        className={styles.trigger}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={styles.label}>{label}</span>
        <ChevronDownIcon
          className={`${styles.caret}${isOpen ? ` ${styles.caretOpen}` : ""}`}
        />
      </button>
    </h2>
  );
}
