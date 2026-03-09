import styles from "./WhyChooseUs.module.css";

import TitleWhyChooseUs from "./TitleWhyChooseUs.jsx";
import DescriptionWhyChooseUs from "./DescriptionWhyChooseUs.jsx";
import WhyChooseUsGrid from "./WhyChooseUsGrid.jsx";

import hotelBrand from "../../../../config/index.js";

export default function WhyChooseUs() {
  const content = hotelBrand?.pages?.accommodation?.sections?.whyChoose ?? null;
  if (!content) return null;

  const items = Array.isArray(content.items) ? content.items : [];

  return (
    <section
      id={content.id}
      className={styles.section}
      aria-label={content.headerLabel || "Porquê escolher"}
    >
      <div className={styles.inner}>
        <TitleWhyChooseUs label={content.headerLabel} />
        <DescriptionWhyChooseUs>{content.subtitle}</DescriptionWhyChooseUs>
        <div className={styles.gridWrap}>
          <WhyChooseUsGrid items={items} />
        </div>
      </div>
    </section>
  );
}
