import styles from "./ProgramSportCardHeader.module.css";

export default function ProgramSportCardHeader({
  item,
  itemKey,
  index,
  Icon,
  initial,
}) {
  if (!item) return null;

  return (
    <div className={styles.topRow}>
      <div className={styles.identity}>
        <span className={styles.iconBox} aria-hidden="true">
          {Icon ? (
            <Icon />
          ) : (
            <span className={styles.initialFallback}>{initial}</span>
          )}
        </span>

        <div className={styles.identityText}>
          {item.eyebrow ? (
            <p className={styles.eyebrow}>{item.eyebrow}</p>
          ) : null}

          {item.sport ? (
            <h3 id={`${itemKey}-title`} className={styles.title}>
              {item.sport}
            </h3>
          ) : null}
        </div>
      </div>

      <span className={styles.indexTag} aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
