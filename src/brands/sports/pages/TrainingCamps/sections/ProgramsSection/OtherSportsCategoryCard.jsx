import styles from "./OtherSportsCategoryCard.module.css";

export default function OtherSportsCategoryCard({ category, index = 0 }) {
  if (!category) return null;

  const items = Array.isArray(category.items) ? category.items : [];
  if (!items.length) return null;

  return (
    <div
      className={styles.categoryCard}
      style={{ "--category-delay": `${index * 60}ms` }}
    >
      {category.label ? (
        <h4 className={styles.categoryTitle}>{category.label}</h4>
      ) : null}

      <div className={styles.chips}>
        {items.map((item) => (
          <span key={item} className={styles.chip}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
