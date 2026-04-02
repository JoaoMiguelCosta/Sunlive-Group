import hotelBrand from "../../../../config/index.js";
import TitleBarLounge from "./TitleBarLounge.jsx";
import BarLoungeShowcase from "./BarLoungeShowcase.jsx";

import styles from "./BarLounge.module.css";

export default function BarLoungeSection() {
  const section = hotelBrand?.pages?.dining?.sections?.barAndLounge ?? null;
  if (!section) return null;

  const sectionId = section?.id ?? "restaurant-bar-lounge";
  const titleId = `${sectionId}-title`;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleBarLounge titleId={titleId} />
        </div>

        <div className={styles.contentStack}>
          <BarLoungeShowcase />
        </div>
      </div>
    </section>
  );
}
