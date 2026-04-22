import styles from "./EventsOperatingModelSummary.module.css";

export default function EventsOperatingModelSummary({ data }) {
  if (!data) return null;

  const hasContent =
    Boolean(data.title) ||
    Boolean(data.description) ||
    Boolean(data.conclusion) ||
    Boolean(data.note);

  if (!hasContent) return null;

  return (
    <div className={styles.summaryPanelInner}>
      {data.title ? (
        <p className={styles.summaryEyebrow}>{data.title}</p>
      ) : null}

      {data.description ? (
        <h2 className={styles.summaryLead}>{data.description}</h2>
      ) : null}

      {data.conclusion ? (
        <p className={styles.summaryConclusion}>{data.conclusion}</p>
      ) : null}

      {data.note ? <p className={styles.summaryNote}>{data.note}</p> : null}
    </div>
  );
}
