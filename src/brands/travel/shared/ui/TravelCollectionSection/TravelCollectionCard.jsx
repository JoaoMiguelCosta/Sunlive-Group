import styles from "./TravelCollectionSection.module.css";

export default function TravelCollectionCard({ item }) {
  const { anchorId, title, description, image, meta, href } = item;

  const content = (
    <>
      <div className={styles.mediaWrap}>
        <img
          className={styles.media}
          src={image.src}
          alt={image.alt ?? title}
          loading="lazy"
          decoding="async"
          style={{
            objectPosition: image.position ?? "center",
          }}
        />

        <div className={styles.mediaOverlay} aria-hidden="true" />

        <h3 className={styles.cardTitle}>{title}</h3>
      </div>

      <div className={styles.cardBody}>
        {meta ? <p className={styles.meta}>{meta}</p> : null}

        <p className={styles.cardDescription}>{description}</p>
      </div>
    </>
  );

  return (
    <li id={anchorId} className={styles.item}>
      {href ? (
        <a
          className={`${styles.card} ${styles.cardLink}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <article className={styles.card}>{content}</article>
      )}
    </li>
  );
}
