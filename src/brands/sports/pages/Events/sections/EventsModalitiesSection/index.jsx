import styles from "./EventsModalitiesSection.module.css";

import EventsModalitiesHeader from "./EventsModalitiesHeader.jsx";
import EventsModalitiesGrid from "./EventsModalitiesGrid.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsModalitiesSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "events-featured-modalities";
  const titleId = data.title ? `${sectionId}-title` : undefined;
  const items = hasItems(data.items) ? data.items : [];

  const hasHeading =
    Boolean(data.eyebrow) || Boolean(data.title) || Boolean(data.description);

  if (!hasHeading && items.length === 0) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={
        !titleId ? data.ariaLabel || "Modalidades em destaque" : undefined
      }
    >
      <div className={styles.surface}>
        <div className={styles.ambientGlow} aria-hidden="true" />
        <div className={styles.ambientGlowSecondary} aria-hidden="true" />
        <div className={styles.surfaceNoise} aria-hidden="true" />

        {hasHeading ? (
          <EventsModalitiesHeader
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
            titleId={titleId}
          />
        ) : null}

        {items.length > 0 ? (
          <EventsModalitiesGrid
            items={items}
            sectionId={sectionId}
            ariaLabel={
              data.ariaLabel || data.title || "Modalidades em destaque"
            }
          />
        ) : null}
      </div>
    </section>
  );
}
