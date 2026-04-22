import styles from "./EventsOperatingModelHeader.module.css";

export default function EventsOperatingModelHeader({ data, titleId }) {
  if (!data) return null;

  const hasContent = Boolean(data.eyebrow) || Boolean(data.title);

  if (!hasContent) return null;

  return (
    <header className={styles.header}>
      {data.eyebrow ? <p className={styles.eyebrow}>{data.eyebrow}</p> : null}

      {data.title ? (
        <h2 id={titleId} className={styles.title}>
          {data.title}
        </h2>
      ) : null}
    </header>
  );
}
