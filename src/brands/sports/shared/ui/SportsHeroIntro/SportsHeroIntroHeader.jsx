import styles from "./SportsHeroIntroHeader.module.css";

export default function SportsHeroIntroHeader({
  eyebrow,
  secondaryLine,
  title,
  description,
  supportingText,
}) {
  return (
    <div className={styles.header}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

      {secondaryLine ? (
        <p className={styles.secondaryLine}>{secondaryLine}</p>
      ) : null}

      {title ? <h1 className={styles.title}>{title}</h1> : null}

      {description ? <p className={styles.description}>{description}</p> : null}

      {supportingText ? (
        <p className={styles.supportingText}>{supportingText}</p>
      ) : null}
    </div>
  );
}
