import styles from "./LeisureExperiencesIntro.module.css";

export default function LeisureExperiencesIntro({ intro, sectionId, titleId }) {
  if (!intro?.title && !intro?.lead) return null;

  const leadId = intro?.lead ? `${sectionId}-lead` : undefined;

  return (
    <header className={styles.header} aria-describedby={leadId}>
      {intro?.eyebrow ? (
        <p className={styles.eyebrow}>{intro.eyebrow}</p>
      ) : null}

      {intro?.title ? (
        <h2 id={titleId} className={styles.title}>
          {intro.title}
        </h2>
      ) : null}

      {intro?.lead ? (
        <p id={leadId} className={styles.lead}>
          {intro.lead}
        </p>
      ) : null}
    </header>
  );
}
