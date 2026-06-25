import dining from "../../../../config/pages/dining.js";
const breakfast = dining.sections.breakfast;
import TitleBreakfast from "./TitleBreakfast.jsx";
import BreakfastShowcase from "./BreakfastShowcase.jsx";

import styles from "./Breakfast.module.css";

export default function BreakfastSection() {
  const section = breakfast;

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
