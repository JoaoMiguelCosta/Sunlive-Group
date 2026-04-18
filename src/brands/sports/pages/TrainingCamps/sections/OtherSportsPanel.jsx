import styles from "./OtherSportsPanel.module.css";
import useInView from "../../../shared/hooks/useInView.js";

export default function OtherSportsPanel({ data }) {
  if (!data) return null;

  const categories = Array.isArray(data.categories) ? data.categories : [];
  const { ref, inView } = useInView({
    threshold: 0.12,
    once: true,
  });

  if (!categories.length) return null;

  return (
    <div
      ref={ref}
      className={`${styles.panel} ${styles.reveal} ${
        inView ? styles.isVisible : ""
      }`}
      aria-labelledby="training-camps-other-sports-title"
    >
      <div className={styles.header}>
        {data.eyebrow ? <p className={styles.eyebrow}>{data.eyebrow}</p> : null}

        {data.title ? (
          <h3 id="training-camps-other-sports-title" className={styles.title}>
            {data.title}
          </h3>
        ) : null}

        {data.description ? (
          <p className={styles.description}>{data.description}</p>
        ) : null}
      </div>

      <div className={styles.grid}>
        {categories.map((category, index) => {
          const items = Array.isArray(category.items) ? category.items : [];
          if (!items.length) return null;

          return (
            <div
              key={category.key || category.label}
              className={styles.categoryCard}
              style={{ "--category-delay": `${index * 60}ms` }}
            >
              {category.label ? (
                <h4 className={styles.categoryTitle}>{category.label}</h4>
              ) : null}

              <div className={styles.chips}>
                {items.map((item) => (
                  <span key={item} className={styles.chip} tabIndex={0}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
