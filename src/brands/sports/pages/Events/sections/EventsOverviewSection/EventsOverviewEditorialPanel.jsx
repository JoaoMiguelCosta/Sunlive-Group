import styles from "./EventsOverviewEditorialPanel.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function EventsOverviewEditorialPanel({ lead, body }) {
  const paragraphs = hasItems(body) ? body : [];
  const hasContent = Boolean(lead) || paragraphs.length > 0;

  if (!hasContent) return null;

  return (
    <div className={styles.editorialPanel}>
      {lead ? <p className={styles.editorialLead}>{lead}</p> : null}

      {paragraphs.length > 0 ? (
        <div className={styles.editorialBody}>
          {paragraphs.map((paragraph, index) => (
            <p key={`events-overview-editorial-${index}`}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
