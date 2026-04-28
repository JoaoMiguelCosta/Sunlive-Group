import styles from "./LeisurePanelText.module.css";

export default function LeisurePanelText({ item, mode = "featured" }) {
  const hasContent = item.eyebrow || item.title || item.description;

  if (!hasContent) return null;

  return (
    <div className={styles.text} data-mode={mode}>
      {item.eyebrow ? <p className={styles.eyebrow}>{item.eyebrow}</p> : null}

      {item.title ? <h3 className={styles.title}>{item.title}</h3> : null}

      {item.description ? (
        <p className={styles.description}>{item.description}</p>
      ) : null}
    </div>
  );
}
