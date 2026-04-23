import styles from "./LeisureExperiencesFeature.module.css";

import { getValidExperienceHighlights } from "./leisureExperiences.utils.js";

function formatPosition(value) {
  return String(value).padStart(2, "0");
}

export default function LeisureExperiencesFeature({
  item,
  panelId,
  position = 1,
  totalItems = 1,
}) {
  if (!item) return null;

  const experiences = getValidExperienceHighlights(item.experiences);
  const hasImage = Boolean(item.image?.src);
  const positionLabel = formatPosition(position);
  const totalLabel = formatPosition(totalItems);

  return (
    <article id={panelId} className={styles.card} aria-live="polite">
      <div className={styles.shell}>
        <div className={styles.contentPanel}>
          <div className={styles.headerRow}>
            <div className={styles.identityBlock}>
              {item.eyebrow ? (
                <span className={styles.badge}>{item.eyebrow}</span>
              ) : null}

              <h3 className={styles.title}>{item.title}</h3>
            </div>

            <div className={styles.counter} aria-hidden="true">
              <span className={styles.counterValue}>{positionLabel}</span>
              <span className={styles.counterTotal}>/{totalLabel}</span>
            </div>
          </div>

          {item.description ? (
            <div className={styles.descriptionBlock}>
              <p className={styles.description}>{item.description}</p>
            </div>
          ) : null}

          {experiences.length > 0 ? (
            <div className={styles.highlights}>
              <ul
                className={styles.list}
                aria-label={`Destaques de ${item.title}`}
              >
                {experiences.map((experience) => (
                  <li key={experience} className={styles.listItem}>
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className={styles.visualPanel}>
          <div
            className={styles.visualMedia}
            style={
              hasImage
                ? { backgroundImage: `url(${item.image.src})` }
                : undefined
            }
            role="img"
            aria-label={item.image?.alt || item.title}
          >
            <div className={styles.visualOverlay} />
            <div className={styles.visualGrid} />

            <div className={styles.visualContent}>
              {item.eyebrow ? (
                <span className={styles.visualBadge}>{item.eyebrow}</span>
              ) : null}

              <strong className={styles.visualTitle}>{item.title}</strong>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
