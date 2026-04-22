import styles from "./ProgramSportCardMedia.module.css";

export default function ProgramSportCardMedia({ item, className = "" }) {
  const hasImage = Boolean(item?.image?.src);

  return (
    <div
      className={[styles.mediaPanel, className].filter(Boolean).join(" ")}
      aria-hidden={hasImage ? undefined : "true"}
    >
      {hasImage ? (
        <figure className={styles.figure}>
          <img
            src={item.image.src}
            alt={item.image.alt || ""}
            className={styles.image}
            loading="lazy"
          />
          <span className={styles.mediaOverlay} />
          <span className={styles.mediaBadge}>{item.sport}</span>
        </figure>
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.placeholderGlow} />
          <span className={styles.placeholderSport}>{item?.sport}</span>
          <span className={styles.placeholderMeta}>{item?.focusLabel}</span>
        </div>
      )}
    </div>
  );
}
