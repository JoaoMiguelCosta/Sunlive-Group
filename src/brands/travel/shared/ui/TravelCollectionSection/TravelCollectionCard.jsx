import ScrollReveal from "../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import styles from "./TravelCollectionSection.module.css";

export default function TravelCollectionCard({ item, staggerIndex = 0 }) {
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
    <ScrollReveal
      as="li"
      id={anchorId}
      className={styles.item}
      staggerIndex={staggerIndex}
    >
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
    </ScrollReveal>
  );
}
