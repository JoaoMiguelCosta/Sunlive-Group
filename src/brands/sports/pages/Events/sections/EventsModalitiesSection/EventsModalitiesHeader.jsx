import styles from "./EventsModalitiesHeader.module.css";

export default function EventsModalitiesHeader({
  eyebrow,
  title,
  description,
  titleId,
}) {
  const hasContent = Boolean(eyebrow) || Boolean(title) || Boolean(description);

  if (!hasContent) return null;

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
