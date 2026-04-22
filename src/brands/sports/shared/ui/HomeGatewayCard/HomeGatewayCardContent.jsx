import styles from "./HomeGatewayCardContent.module.css";

function getDescriptionClassName(isFeatured) {
  return [styles.description, isFeatured ? styles.descriptionFeatured : ""]
    .filter(Boolean)
    .join(" ");
}

export default function HomeGatewayCardContent({
  item,
  label,
  isFeatured = false,
}) {
  const descriptionClassName = getDescriptionClassName(isFeatured);

  return (
    <span className={styles.content}>
      <span className={styles.topRow}>
        {item?.kicker ? (
          <span className={styles.kicker} aria-hidden="true">
            {item.kicker}
          </span>
        ) : (
          <span />
        )}

        <span className={styles.orb} aria-hidden="true" />
      </span>

      <span className={styles.mainBlock}>
        <span className={styles.label}>{label}</span>

        {item?.description ? (
          <span className={descriptionClassName} aria-hidden="true">
            {item.description}
          </span>
        ) : null}
      </span>

      {item?.meta ? (
        <span className={styles.meta} aria-hidden="true">
          {item.meta}
        </span>
      ) : null}
    </span>
  );
}
