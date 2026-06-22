import eventsCelebrations from "../../../../config/sections/events/eventsCelebrations.js";

import TitleEventsCelebrations from "./TitleEventsCelebrations.jsx";
import DescriptionEventsCelebrations from "./DescriptionEventsCelebrations.jsx";
import EventsCelebrationsBanner from "./EventsCelebrationsBanner.jsx";
import EventsTypes from "./EventsTypes.jsx";

import styles from "./EventsCelebrations.module.css";

export default function EventsCelebrationsSection() {
  const section = eventsCelebrations;

  if (!section) return null;

  const sectionId = section.id ?? "eventos-celebracoes";
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
          <TitleEventsCelebrations titleId={titleId} />
          <DescriptionEventsCelebrations />
        </div>

        <div className={styles.contentStack}>
          <EventsCelebrationsBanner />
          <EventsTypes />
        </div>
      </div>
    </section>
  );
}
