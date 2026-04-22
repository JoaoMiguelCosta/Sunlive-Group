import styles from "./EducationLevelsIntro.module.css";

export default function EducationLevelsIntro({ intro, titleId, leadId }) {
  if (!intro) return null;

  return (
    <header className={styles.intro} aria-describedby={leadId}>
      {intro.eyebrow ? (
        <span className={styles.eyebrow}>{intro.eyebrow}</span>
      ) : null}

      {intro.title ? (
        <h2 id={titleId} className={styles.title}>
          {intro.title}
        </h2>
      ) : null}

      {intro.lead ? (
        <p id={leadId} className={styles.lead}>
          {intro.lead}
        </p>
      ) : null}
    </header>
  );
}
