import styles from "./WhoWeHost.module.css";

import hotelBrand from "../../../../config/index.js";
import WhoWeHostCards from "./WhoWeHostCards.jsx";

export default function WhoWeHostSection() {
  const section = hotelBrand?.pages?.home?.sections?.whoWeHost ?? null;
  if (!section) return null;

  const sectionId = section.id ?? "hotel-who-we-host";
  const titleId = `${sectionId}-title`;
  const descriptionId = `${sectionId}-description`;

  const backgroundImageSrc = section?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = section?.backgroundMedia?.imageAlt ?? "";

  const headerLabel = section?.headerLabel ?? "";
  const headerTitle = section?.header?.title ?? "";
  const headerDescription = section?.header?.description ?? "";

  const introPanel = section?.introPanel ?? null;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={headerDescription ? descriptionId : undefined}
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
      <div className={styles.frameGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.sectionHeader}>
          {headerLabel ? (
            <p className={styles.sectionLabel}>{headerLabel}</p>
          ) : null}

          {headerTitle ? (
            <h2 id={titleId} className={styles.sectionTitle}>
              {headerTitle}
            </h2>
          ) : null}

          {headerDescription ? (
            <p id={descriptionId} className={styles.sectionDescription}>
              {headerDescription}
            </p>
          ) : null}
        </header>

        <div className={styles.contentGrid}>
          {introPanel ? (
            <aside className={styles.introPanel}>
              {introPanel.eyebrow ? (
                <p className={styles.introEyebrow}>{introPanel.eyebrow}</p>
              ) : null}

              {introPanel.title ? (
                <h3 className={styles.introTitle}>{introPanel.title}</h3>
              ) : null}

              {introPanel.description ? (
                <p className={styles.introDescription}>
                  {introPanel.description}
                </p>
              ) : null}

              {introPanel.highlight ? (
                <div className={styles.introHighlight}>
                  <p>{introPanel.highlight}</p>
                </div>
              ) : null}
            </aside>
          ) : null}

          <WhoWeHostCards items={section.items ?? []} />
        </div>
      </div>
    </section>
  );
}
