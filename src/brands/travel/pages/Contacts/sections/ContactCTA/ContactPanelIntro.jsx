import styles from "./ContactPanelIntro.module.css";

export default function ContactPanelIntro({ id, eyebrow, title, description }) {
  const hasContent = eyebrow || title || description;
  if (!hasContent) return null;

  return (
    <div className={styles.root}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

      {title ? (
        <h3 id={id} className={styles.title}>
          {title}
        </h3>
      ) : null}

      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
