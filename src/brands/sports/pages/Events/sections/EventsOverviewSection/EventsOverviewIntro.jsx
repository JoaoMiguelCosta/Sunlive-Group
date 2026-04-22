import styles from "./EventsOverviewIntro.module.css";

export default function EventsOverviewIntro({ data, titleId }) {
  if (!data) return null;

  const hasContent =
    Boolean(data.eyebrow) || Boolean(data.title) || Boolean(data.description);

  if (!hasContent) return null;

  return (
    <div className={styles.editorialIntro}>
      {data.eyebrow ? <p className={styles.eyebrow}>{data.eyebrow}</p> : null}

      {data.title ? (
        <h2 id={titleId} className={styles.title}>
          {data.title}
        </h2>
      ) : null}

      {data.description ? (
        <p className={styles.description}>{data.description}</p>
      ) : null}
    </div>
  );
}
