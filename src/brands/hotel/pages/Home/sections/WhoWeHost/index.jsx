import styles from "./WhoWeHost.module.css";

import hotelBrand from "../../../../config/index.js";
import WhoWeHostHeader from "./WhoWeHostHeader.jsx";
import WhoWeHostCards from "./WhoWeHostCards.jsx";

export default function WhoWeHostSection() {
  const section = hotelBrand?.pages?.home?.sections?.whoWeHost ?? null;
  if (!section) return null;

  const sectionId = section.id ?? "hotel-who-we-host";
  const titleId = `${sectionId}-title`;

  const backgroundImageSrc = section?.backgroundMedia?.imageSrc ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
    >
      {backgroundImageSrc ? (
        <div className={styles.mediaLayer} aria-hidden="true">
          <div className={styles.ambientMedia}>
            <img
              src={backgroundImageSrc}
              alt=""
              className={styles.ambientImage}
            />
          </div>

          <div className={styles.focusMedia}>
            <img
              src={backgroundImageSrc}
              alt=""
              className={styles.focusImage}
            />
          </div>
        </div>
      ) : null}

      <div className={styles.overlayLayer} aria-hidden="true" />

      <div className={styles.inner}>
        <WhoWeHostHeader label={section.headerLabel} titleId={titleId} />
        <WhoWeHostCards items={section.items ?? []} />
      </div>
    </section>
  );
}
