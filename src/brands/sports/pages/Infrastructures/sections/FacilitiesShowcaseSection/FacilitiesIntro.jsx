import styles from "./FacilitiesIntro.module.css";

export default function FacilitiesIntro({
  eyebrow,
  title,
  titleId,
  description,
}) {
  return (
    <header className={styles.header}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

      {title ? (
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
      ) : null}

      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
