import useInView from "../../../../shared/hooks/useInView.js";

import OtherSportsCategoryCard from "./OtherSportsCategoryCard.jsx";

import styles from "./OtherSportsPanel.module.css";

export default function OtherSportsPanel({ data }) {
  const categories = Array.isArray(data?.categories) ? data.categories : [];

  const { ref, inView } = useInView({
    threshold: 0.12,
    once: true,
    enabled: Boolean(data) && categories.length > 0,
  });

  if (!data || categories.length === 0) {
    return null;
  }

  const titleId = data.title ? "training-camps-other-sports-title" : undefined;

  const panelClassName = [
    styles.panel,
    styles.reveal,
    inView ? styles.isVisible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={panelClassName} aria-labelledby={titleId}>
      <div className={styles.header}>
        {data.eyebrow ? <p className={styles.eyebrow}>{data.eyebrow}</p> : null}

        {data.title ? (
          <h3 id={titleId} className={styles.title}>
            {data.title}
          </h3>
        ) : null}

        {data.description ? (
          <p className={styles.description}>{data.description}</p>
        ) : null}
      </div>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <OtherSportsCategoryCard
            key={category.key || category.label || index}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
