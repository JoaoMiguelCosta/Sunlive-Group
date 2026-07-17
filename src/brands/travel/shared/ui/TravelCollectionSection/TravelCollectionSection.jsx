import ScrollReveal from "../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import TravelCollectionCard from "./TravelCollectionCard.jsx";
import styles from "./TravelCollectionSection.module.css";

export default function TravelCollectionSection({
  eyebrow,
  title,
  description,
  items = [],
  sectionKey,
}) {
  const safeItems = Array.isArray(items) ? items : [];

  const hasContent = eyebrow || title || description || safeItems.length > 0;

  if (!hasContent) return null;

  return (
    <div className={styles.root} data-section={sectionKey}>
      <ScrollReveal as="header" className={styles.header}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

        {title ? <h2 className={styles.title}>{title}</h2> : null}

        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </ScrollReveal>

      {safeItems.length > 0 ? (
        <ul className={styles.grid}>
          {safeItems.map((item, index) => (
            <TravelCollectionCard
              key={item.key}
              item={item}
              staggerIndex={index}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
