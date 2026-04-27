import styles from "./EventsOverviewSection.module.css";

import EventsOverviewIntro from "./EventsOverviewIntro.jsx";
import EventsOverviewEditorialPanel from "./EventsOverviewEditorialPanel.jsx";
import EventsOverviewCapabilities from "./EventsOverviewCapabilities.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsOverviewSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "events-overview";
  const titleId = data.sectionIntro?.title ? `${sectionId}-title` : undefined;

  const sectionIntro = data.sectionIntro ?? {};
  const editorialBlock = data.editorialBlock ?? {};
  const capabilityCards = data.capabilityCards ?? {};

  const editorialBody = hasItems(editorialBlock.body)
    ? editorialBlock.body
    : [];

  const capabilityItems = hasItems(capabilityCards.items)
    ? capabilityCards.items
    : [];

  const hasIntroContent =
    Boolean(sectionIntro.eyebrow) ||
    Boolean(sectionIntro.title) ||
    Boolean(sectionIntro.description);

  const hasEditorialPanel =
    Boolean(editorialBlock.lead) || editorialBody.length > 0;

  const hasIntro = hasIntroContent || hasEditorialPanel;
  const hasCapabilities = capabilityItems.length > 0;

  if (!hasIntro && !hasCapabilities) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={
        !titleId ? data.ariaLabel || "Visão geral dos eventos" : undefined
      }
    >
      <div className={styles.surface}>
        <div className={styles.ambientGlow} aria-hidden="true" />
        <div className={styles.ambientGlowSecondary} aria-hidden="true" />

        <div className={styles.topLayout}>
          {hasIntro ? (
            <header className={styles.editorialColumn}>
              {hasIntroContent ? (
                <EventsOverviewIntro data={sectionIntro} titleId={titleId} />
              ) : null}

              {hasEditorialPanel ? (
                <EventsOverviewEditorialPanel
                  lead={editorialBlock.lead}
                  body={editorialBody}
                />
              ) : null}
            </header>
          ) : null}

          {hasCapabilities ? (
            <aside className={styles.sideColumn}>
              <div className={styles.capabilityColumn}>
                <EventsOverviewCapabilities
                  items={capabilityItems}
                  ariaLabel={capabilityCards.ariaLabel}
                  sectionId={sectionId}
                />
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
