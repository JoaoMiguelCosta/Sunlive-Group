import styles from "./WhyChooseUs.module.css";

import TitleWhyChooseUs from "./TitleWhyChooseUs.jsx";
import DescriptionWhyChooseUs from "./DescriptionWhyChooseUs.jsx";
import WhyChooseUsGrid from "./WhyChooseUsGrid.jsx";

import hotelBrand from "../../../../config/index.js";

export default function WhyChooseUs() {
  const content = hotelBrand?.pages?.accommodation?.sections?.whyChoose ?? null;

  if (!content) return null;

  const items = Array.isArray(content.items) ? content.items : [];
  const sectionId = content.id ?? "accommodation-why-choose-us";
  const titleId = `${sectionId}-title`;

  const backgroundImageSrc = content?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = content?.backgroundMedia?.imageAlt ?? "";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      {backgroundImageSrc ? (
        <div className={styles.mediaLayer} aria-hidden="true">
          <img
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            className={styles.backgroundImage}
          />
        </div>
      ) : null}

      <div className={styles.overlayLayer} aria-hidden="true" />

      <div className={styles.inner}>
        <TitleWhyChooseUs id={titleId} label={content.headerLabel} />

        <DescriptionWhyChooseUs eyebrow={content.introEyebrow}>
          {content.subtitle}
        </DescriptionWhyChooseUs>

        <div className={styles.gridWrap}>
          <WhyChooseUsGrid items={items} />
        </div>
      </div>
    </section>
  );
}
