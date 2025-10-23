// src/brands/group/components/section/PartnersSection/SectionLead.jsx
import styles from "./SectionLead.module.css";

export default function SectionLead({ id, title, subtitle }) {
  return (
    <header className={styles.lead} aria-labelledby={id}>
      <div className={styles.strip} aria-hidden="true" />
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
