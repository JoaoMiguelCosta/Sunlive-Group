import styles from "./EventsOperatingModelSection.module.css";

import EventsOperatingModelSummary from "./EventsOperatingModelSummary.jsx";
import EventsOperatingModelHeader from "./EventsOperatingModelHeader.jsx";
import EventsOperatingModelGrid from "./EventsOperatingModelGrid.jsx";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsOperatingModelSection({ data }) {
  if (!data) return null;

  const sectionId = data.id || "events-operating-model";
  const titleId = data.operatingModel?.title ? `${sectionId}-title` : undefined;

  const operatingModel = data.operatingModel ?? {};
  const summaryPanel = data.summaryPanel ?? {};
  const points = hasItems(operatingModel.points) ? operatingModel.points : [];

  const hasOperatingHeader =
    Boolean(operatingModel.eyebrow) || Boolean(operatingModel.title);

  const hasOperating = hasOperatingHeader || points.length > 0;

  const hasSummary =
    Boolean(summaryPanel.title) ||
    Boolean(summaryPanel.description) ||
    Boolean(summaryPanel.conclusion) ||
    Boolean(summaryPanel.note);

  if (!hasOperating && !hasSummary) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={
        !titleId
          ? data.ariaLabel || "Modelo operacional dos eventos"
          : undefined
      }
    >
      <div className={styles.surface}>
        <div className={styles.ambientGlow} aria-hidden="true" />

        <div className={styles.layout}>
          {hasSummary ? (
            <aside className={styles.summaryPanel}>
              <EventsOperatingModelSummary data={summaryPanel} />
            </aside>
          ) : null}

          {hasOperating ? (
            <div className={styles.operatingBlock}>
              {hasOperatingHeader ? (
                <EventsOperatingModelHeader
                  data={operatingModel}
                  titleId={titleId}
                />
              ) : null}

              {points.length > 0 ? (
                <EventsOperatingModelGrid
                  items={points}
                  ariaLabel={operatingModel.ariaLabel}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
