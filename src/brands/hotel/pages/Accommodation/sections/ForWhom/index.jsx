import styles from "./ForWhom.module.css";

import TitleForWhom from "./TitleForWhom.jsx";
import DescriptionForWhom from "./DescriptionForWhom.jsx";
import ForWhomHero from "./ForWhomHero.jsx";
import ForWhomProfilesGrid from "./ForWhomProfilesGrid.jsx";

import hotelBrand from "../../../../config/index.js";

export default function ForWhom() {
  const content = hotelBrand?.pages?.accommodation?.sections?.forWhom ?? null;

  if (!content) return null;

  const sectionId = content.id ?? "accommodation-for-whom";
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
        <TitleForWhom id={titleId} label={content.headerLabel} />
        <DescriptionForWhom>{content.description}</DescriptionForWhom>

        <div className={styles.heroWrap}>
          <ForWhomHero />
        </div>

        <div className={styles.gridWrap}>
          <ForWhomProfilesGrid />
        </div>
      </div>
    </section>
  );
}
