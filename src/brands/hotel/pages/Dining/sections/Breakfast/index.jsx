import TitleBreakfast from "./TitleBreakfast.jsx";
import DescriptionBreakfast from "./DescriptionBreakfast.jsx";
import BreakfastShowcase from "./BreakfastShowcase.jsx";
import BreakfastFeatureGrid from "./BreakfastFeatureGrid.jsx";

import styles from "./Breakfast.module.css";

export default function BreakfastSection() {
  return (
    <section
      id="restaurant-breakfast"
      className={styles.section}
      aria-labelledby="restaurant-breakfast-title"
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleBreakfast />
          <DescriptionBreakfast />
        </div>

        <div className={styles.contentStack}>
          <BreakfastShowcase />
          <BreakfastFeatureGrid />
        </div>
      </div>
    </section>
  );
}
