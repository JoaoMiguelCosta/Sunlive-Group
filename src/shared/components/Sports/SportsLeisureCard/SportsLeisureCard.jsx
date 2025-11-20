// src/shared/components/Sports/SportsLeisureCard/SportsLeisureCard.jsx
import styles from "./SportsLeisureCard.module.css";
import useAccordion from "../../../hooks/useAccordion.js";

/**
 * SportsLeisureCard — cartão para Turismo Desportivo Lúdico
 *
 * Props:
 * - title: string
 * - description: string
 * - experiences: string[]
 * - image: string (URL da imagem)
 * - imageAlt: string
 * - defaultOpen: boolean
 */
export default function SportsLeisureCard({
  title,
  description,
  experiences = [],
  image,
  imageAlt = "",
  defaultOpen = false,
}) {
  if (!title && !description) return null;

  const hasExperiences = Array.isArray(experiences) && experiences.length > 0;

  const { isOpen, toggle } = useAccordion(
    hasExperiences ? [{ key: "experiences", defaultOpen }] : [],
    { allowMultiple: true }
  );

  const isExperiencesOpen = hasExperiences ? isOpen("experiences") : false;

  const handleToggle = () => {
    if (!hasExperiences) return;
    toggle("experiences");
  };

  return (
    <article className={styles.card}>
      <figure className={styles.mediaWrap}>
        {image ? (
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            className={styles.mediaImage}
          />
        ) : (
          <div className={styles.mediaPlaceholder}>
            <span>FOTO</span>
          </div>
        )}
      </figure>

      <header className={styles.headerBand}>
        <h3 className={styles.title}>{title}</h3>
      </header>

      <div className={styles.body}>
        {description && <p className={styles.description}>{description}</p>}

        {hasExperiences && (
          <div className={styles.experiencesBlock}>
            <button
              type="button"
              className={styles.experiencesToggle}
              onClick={handleToggle}
              aria-expanded={isExperiencesOpen}
            >
              <span className={styles.experiencesLabel}>
                Experiências incluídas:
              </span>

              <span className={styles.experiencesIconPill}>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.chevronIcon}
                  data-open={isExperiencesOpen ? "true" : "false"}
                >
                  <polyline
                    points="6 9 12 15 18 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {isExperiencesOpen && (
              <ul className={styles.experiencesList}>
                {experiences.map((item) => (
                  <li key={item} className={styles.experienceItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
