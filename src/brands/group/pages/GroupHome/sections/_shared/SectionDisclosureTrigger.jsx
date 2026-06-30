import styles from "./SectionDisclosureTrigger.module.css";

function ChevronDown({ className }) {
  return (
    <svg
      viewBox="0 0 10 6"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

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
        <ChevronDown
          className={`${styles.caret}${isOpen ? ` ${styles.caretOpen}` : ""}`}
        />
      </button>
    </h2>
  );
}
