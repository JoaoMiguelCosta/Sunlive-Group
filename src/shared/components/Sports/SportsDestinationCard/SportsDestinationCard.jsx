// src/shared/components/Sports/SportsDestinationCard/SportsDestinationCard.jsx
import styles from "./SportsDestinationCard.module.css";
import useAccordion from "../../../hooks/useAccordion.js";

/**
 * SportsDestinationCard — cartão para destinos de Turismo Desportivo
 *
 * Props:
 * - title: string
 * - description: string
 * - highlights: string[]
 * - image: string (URL da imagem)
 * - imageAlt: string
 * - defaultOpen: boolean
 */
export default function SportsDestinationCard({
  title,
  description,
  highlights = [],
  image,
  imageAlt = "",
  defaultOpen = false,
}) {
  if (!title && !description) return null;

  const hasHighlights = Array.isArray(highlights) && highlights.length > 0;

  // Acordeão para "Destaques Únicos" (igual ao usado em SportsLeisureCard)
  const { isOpen, toggle } = useAccordion(
    hasHighlights ? [{ key: "highlights", defaultOpen }] : [],
    { allowMultiple: true }
  );

  const isHighlightsOpen = hasHighlights ? isOpen("highlights") : false;

  const handleToggle = () => {
    if (!hasHighlights) return;
    toggle("highlights");
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

        {hasHighlights && (
          <div className={styles.highlightsBlock}>
            <button
              type="button"
              className={styles.highlightsToggle}
              onClick={handleToggle}
              aria-expanded={isHighlightsOpen}
            >
              <span className={styles.highlightsLabel}>Destaques únicos:</span>

              <span className={styles.highlightsIconPill}>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={styles.chevronIcon}
                  data-open={isHighlightsOpen ? "true" : "false"}
                >
                  <polyline
                    points="6 9 12 15 18 9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {isHighlightsOpen && (
              <ul className={styles.highlightsList}>
                {highlights.map((item) => (
                  <li key={item} className={styles.highlightItem}>
                    <span className={styles.starIconWrap} aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        className={styles.starIcon}
                        focusable="false"
                      >
                        <path d="M12 3.5l2.47 4.93 5.43.79-3.95 3.85.93 5.42L12 15.9l-4.88 2.59.93-5.42-3.95-3.85 5.43-.79L12 3.5z" />
                      </svg>
                    </span>
                    <span className={styles.highlightText}>{item}</span>
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
