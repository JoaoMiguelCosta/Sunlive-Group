import styles from "./SectionLead.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export default function SectionLead({ id, title, subtitle }) {
  if (!isValidText(title)) return null;

  return (
    <header className={styles.lead}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>

      {isValidText(subtitle) ? (
        <p className={styles.subtitle}>{subtitle}</p>
      ) : null}
    </header>
  );
}
