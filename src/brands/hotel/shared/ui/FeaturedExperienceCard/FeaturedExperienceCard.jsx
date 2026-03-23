import styles from "./FeaturedExperienceCard.module.css";

/**
 * FeaturedExperienceCard (Hotel)
 *
 * Props:
 *  - title: string
 *  - description?: string
 *  - imageSrc?: string | null
 *  - imageAlt?: string | null
 *  - imagePosition?: string
 *  - icon?: ReactNode
 *  - variant?: "default" | "region"
 */
export default function FeaturedExperienceCard({
  title,
  description = "",
  imageSrc = null,
  imageAlt = null,
  imagePosition = "center center",
  icon = null,
  variant = "default",
}) {
  if (!title) return null;

  if (variant === "region") {
    return (
      <article className={[styles.card, styles.regionCard].join(" ")}>
        <div className={styles.regionHeader}>
          {icon ? <div className={styles.iconCircle}>{icon}</div> : null}
          <h3 className={styles.regionTitle}>{title}</h3>
        </div>

        {description ? (
          <div className={styles.regionBody}>
            <p className={styles.regionDescription}>{description}</p>
          </div>
        ) : null}
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className={styles.image}
            style={{ objectPosition: imagePosition }}
            loading="lazy"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderLabel}>Imagem brevemente</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </article>
  );
}
