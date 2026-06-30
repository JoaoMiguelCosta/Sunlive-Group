import styles from "./ContactRow.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export default function ContactRow({ href, label, value, mutedLabel, Icon }) {
  const hasValue = isValidText(value);

  if (!hasValue) {
    return (
      <span className={styles.row} aria-label={mutedLabel} aria-disabled="true">
        <Icon className={styles.icon} width={20} height={20} />
        <span className={styles.muted}>—</span>
      </span>
    );
  }

  return (
    <a href={href} className={styles.row} aria-label={label}>
      <Icon className={styles.icon} width={20} height={20} />
      <span>{value}</span>
    </a>
  );
}
