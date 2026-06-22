import styles from "./WhyChooseUs.module.css";

import TitleWhyChooseUs from "./TitleWhyChooseUs.jsx";
import DescriptionWhyChooseUs from "./DescriptionWhyChooseUs.jsx";
import WhyChooseUsGrid from "./WhyChooseUsGrid.jsx";

import whyChoose from "../../../../config/sections/accommodation/whyChoose.js";

export default function WhyChooseUs() {
  const content = whyChoose;

  if (!content) return null;

  const items = Array.isArray(content.items) ? content.items : [];
  const sectionId = content.id ?? "accommodation-why-choose-us";
  const titleId = `${sectionId}-title`;
  const descriptionId = content.subtitle
    ? `${sectionId}-description`
    : undefined;

  const backgroundImageSrc = content?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = content?.backgroundMedia?.imageAlt ?? "";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      {backgroundImageSrc ? (
        <div className={styles.mediaLayer} aria-hidden="true">
          <img
            src={backgroundImageSrc}
            alt={backgroundImageAlt}
            className={styles.backgroundImage}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      <div className={styles.overlayLayer} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.headerBlock}>
          <TitleWhyChooseUs id={titleId} label={content.headerLabel} />

          <DescriptionWhyChooseUs
            id={descriptionId}
            eyebrow={content.introEyebrow}
          >
            {content.subtitle}
          </DescriptionWhyChooseUs>
        </div>

        <div className={styles.gridWrap}>
          <WhyChooseUsGrid items={items} />
        </div>
      </div>
    </section>
  );
}
