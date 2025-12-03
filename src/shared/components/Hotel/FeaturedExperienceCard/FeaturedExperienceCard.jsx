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
 *  - icon?: ReactNode           // ⬅ NOVO (para cards da região)
 *  - variant?: "default" | "region"  // ⬅ NOVO
 */
export default function FeaturedExperienceCard({
  title,
  description = "",
  imageSrc = null,
  imageAlt = null,
  icon = null,
  variant = "default",
}) {
  if (!title) return null;

  // === NOVO LAYOUT: cards da Região da Bairrada ===
  if (variant === "region") {
    return (
      <article className={`${styles.card} ${styles.regionCard}`}>
        <div className={styles.regionHeader}>
          {icon && <div className={styles.iconCircle}>{icon}</div>}
          <h3 className={styles.regionTitle}>{title}</h3>
        </div>

        {description && (
          <div className={styles.regionBody}>
            <p className={styles.regionDescription}>{description}</p>
          </div>
        )}
      </article>
    );
  }

  // === LAYOUT ANTIGO (mantido como estava) ===
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
