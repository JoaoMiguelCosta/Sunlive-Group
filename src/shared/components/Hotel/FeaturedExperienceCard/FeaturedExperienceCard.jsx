// src/shared/components/Hotel/FeaturedExperienceCard/FeaturedExperienceCard.jsx
import styles from "./FeaturedExperienceCard.module.css";

/**
 * FeaturedExperienceCard (Hotel)
 *
 * Props:
 *  - title: string (obrigatório)
 *  - description?: string
 *  - imageSrc?: string | null
 *  - imageAlt?: string | null
 */
export default function FeaturedExperienceCard({
  title,
  description = "",
  imageSrc = null,
  imageAlt = null,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderLabel}>Imagem brevemente</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.titleBar}>
          <h3 className={styles.title}>{title}</h3>
        </div>

        {description && <p className={styles.description}>{description}</p>}
      </div>
    </article>
  );
}
