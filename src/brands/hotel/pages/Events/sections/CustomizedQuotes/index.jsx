import hotelBrand from "../../../../config/index.js";

import TitleCustomizedQuotes from "./TitleCustomizedQuotes.jsx";
import DescriptionCustomizedQuotes from "./DescriptionCustomizedQuotes.jsx";
import CustomizedQuotesDetails from "./CustomizedQuotesDetails.jsx";
import CustomizedQuotesActions from "./CustomizedQuotesActions.jsx";

import styles from "./CustomizedQuotes.module.css";

export default function CustomizedQuotesSection() {
  const section = hotelBrand?.pages?.events?.sections?.customizedQuotes ?? null;

  const sectionId = "events-quotes";
  const titleId = `${sectionId}-title`;

  const backgroundImageSrc = section?.backgroundMedia?.imageSrc ?? null;
  const backgroundImageAlt = section?.backgroundMedia?.imageAlt ?? "";

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

      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.introBlock}>
          <TitleCustomizedQuotes titleId={titleId} />
          <DescriptionCustomizedQuotes />
        </div>

        <div className={styles.contentStack}>
          <CustomizedQuotesDetails />
          <CustomizedQuotesActions />
        </div>
      </div>
    </section>
  );
}
