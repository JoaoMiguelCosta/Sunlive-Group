import events from "../../../../config/pages/events.js";
const customizedQuotes = events.sections.customizedQuotes;

import TitleCustomizedQuotes from "./TitleCustomizedQuotes.jsx";
import DescriptionCustomizedQuotes from "./DescriptionCustomizedQuotes.jsx";
import CustomizedQuotesDetails from "./CustomizedQuotesDetails.jsx";
import CustomizedQuotesActions from "./CustomizedQuotesActions.jsx";

import styles from "./CustomizedQuotes.module.css";

export default function CustomizedQuotesSection() {
  const section = customizedQuotes;

  if (!section) return null;

  const sectionId = section.id ?? "customized-quotes";
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
            loading="lazy"
            decoding="async"
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
