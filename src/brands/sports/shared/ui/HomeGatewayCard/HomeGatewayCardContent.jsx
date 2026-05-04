import styles from "./HomeGatewayCardContent.module.css";

function getContentClassName(isCta) {
  return [styles.content, isCta ? styles.contentCta : ""]
    .filter(Boolean)
    .join(" ");
}

function getDescriptionClassName(isFeatured, isCta) {
  return [
    styles.description,
    isFeatured ? styles.descriptionFeatured : "",
    isCta ? styles.descriptionCta : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function HomeGatewayCardContent({
  item,
  label,
  isFeatured = false,
  isCta = false,
}) {
  const contentClassName = getContentClassName(isCta);
  const descriptionClassName = getDescriptionClassName(isFeatured, isCta);

  return (
    <span className={contentClassName}>
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
