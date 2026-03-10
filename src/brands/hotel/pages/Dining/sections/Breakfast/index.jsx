import TitleBreakfast from "./TitleBreakfast.jsx";
import DescriptionBreakfast from "./DescriptionBreakfast.jsx";
import BreakfastShowcase from "./BreakfastShowcase.jsx";
import BreakfastFeatureGrid from "./BreakfastFeatureGrid.jsx";

import styles from "./Breakfast.module.css";

export default function BreakfastSection() {
  return (
    <section id="restaurant-breakfast" className={styles.section}>
      <TitleBreakfast />
      <DescriptionBreakfast />
      <BreakfastShowcase />
      <BreakfastFeatureGrid />
    </section>
  );
}
