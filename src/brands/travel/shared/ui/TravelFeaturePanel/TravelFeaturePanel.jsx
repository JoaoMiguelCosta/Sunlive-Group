import styles from "./TravelFeaturePanel.module.css";

export default function TravelFeaturePanel({
  eyebrow,
  title,
  description,
  supportingText,
  items = [],
  sectionKey,
  titleAs: TitleTag = "h2",
  itemTitleAs: ItemTitleTag = "h3",
}) {
  const safeItems = Array.isArray(items)
    ? items.filter((item) => item?.title)
    : [];

  const hasContent =
    eyebrow || title || description || supportingText || safeItems.length > 0;

  if (!hasContent) return null;

  const hasHeaderContent = eyebrow || title || description || supportingText;

  return (
    <div className={styles.root} data-section={sectionKey}>
      {hasHeaderContent ? (
        <div className={styles.header}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

          {title ? (
            <TitleTag className={styles.title}>{title}</TitleTag>
          ) : null}

          {description || supportingText ? (
            <div className={styles.descriptionGroup}>
              {description ? (
                <p className={styles.description}>{description}</p>
              ) : null}

              {supportingText ? (
                <p className={styles.description}>{supportingText}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {safeItems.length > 0 ? (
        <ul className={styles.items}>
          {safeItems.map((item) => (
            <li key={item.key ?? item.title} className={styles.item}>
              <ItemTitleTag className={styles.itemTitle}>
                {item.title}
              </ItemTitleTag>

              {item.description ? (
                <p className={styles.itemDescription}>{item.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
