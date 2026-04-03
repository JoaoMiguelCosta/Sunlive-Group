import styles from "./HotelRoomCard.module.css";

export default function HotelRoomCard({
  id,
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  imageComingSoonLabel = "Imagem disponível em breve",
}) {
  const imageLabel = imageAlt || title || "Imagem do quarto";

  return (
    <article className={styles.card} aria-labelledby={`${id}-title`}>
      <div className={styles.mediaWrap}>
        {badge ? (
          <span className={styles.badge} aria-label={`Categoria: ${badge}`}>
            {badge}
          </span>
        ) : null}

        {imageSrc ? (
          <img
            className={styles.image}
            src={imageSrc}
            alt={imageLabel}
            loading="lazy"
          />
        ) : (
          <div
            className={styles.imageFallback}
            role="img"
            aria-label={imageComingSoonLabel}
          >
            <span>{imageComingSoonLabel}</span>
          </div>
        )}
      </div>

      <div className={styles.titleBand}>
        <h3 id={`${id}-title`} className={styles.title}>
          {title}
        </h3>
      </div>

      {description ? <p className={styles.description}>{description}</p> : null}
    </article>
  );
}
