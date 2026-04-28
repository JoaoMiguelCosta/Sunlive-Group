import styles from "./LeisureShowcaseIntro.module.css";

export default function LeisureShowcaseIntro({ intro, titleId }) {
  const hasIntro = intro?.eyebrow || intro?.title || intro?.lead;

  if (!hasIntro) return null;

  return (
    <header className={styles.intro}>
      <div className={styles.introCopy}>
        {intro.eyebrow ? (
          <p className={styles.eyebrow}>{intro.eyebrow}</p>
        ) : null}

        {intro.title ? (
          <h2 id={titleId} className={styles.title}>
            {intro.title}
          </h2>
        ) : null}
      </div>

      {intro.lead ? <p className={styles.lead}>{intro.lead}</p> : null}
    </header>
  );
}
