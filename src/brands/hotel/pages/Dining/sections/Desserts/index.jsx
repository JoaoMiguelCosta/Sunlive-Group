import hotelBrand from "../../../../config/index.js";
import TitleDesserts from "./TitleDesserts.jsx";
import DescriptionDesserts from "./DescriptionDesserts.jsx";
import DessertsShowcase from "./DessertsShowcase.jsx";

import styles from "./Desserts.module.css";

export default function DessertsSection() {
  const section = hotelBrand?.pages?.dining?.sections?.desserts ?? null;

  if (!section) return null;

  const sectionId = section?.id ?? "restaurante-sobremesas";
  const titleId = `${sectionId}-title`;
  const introEyebrow = String(section?.introEyebrow ?? "").trim();

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          {introEyebrow ? (
            <p className={styles.eyebrow}>{introEyebrow}</p>
          ) : null}

          <TitleDesserts titleId={titleId} />
          <DescriptionDesserts />
        </div>

        <div className={styles.contentStack}>
          <DessertsShowcase />
        </div>
      </div>
    </section>
  );
}
