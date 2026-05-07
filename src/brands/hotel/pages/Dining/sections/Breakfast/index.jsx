import hotelBrand from "../../../../config/index.js";
import TitleBreakfast from "./TitleBreakfast.jsx";

import BreakfastShowcase from "./BreakfastShowcase.jsx";

import styles from "./Breakfast.module.css";

export default function BreakfastSection() {
  const section = hotelBrand?.pages?.dining?.sections?.breakfast ?? null;
  if (!section) return null;

  const sectionId = section?.id ?? "restaurante-pequeno-almoco";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleBreakfast titleId={titleId} />
        </div>

        <div className={styles.contentStack}>
          <BreakfastShowcase />
        </div>
      </div>
    </section>
  );
}
