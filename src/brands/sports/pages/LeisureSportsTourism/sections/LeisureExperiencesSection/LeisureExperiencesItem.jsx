import styles from "./LeisureExperiencesItem.module.css";

import { getValidExperienceHighlights } from "./leisureExperiences.utils.js";

function formatPosition(value) {
  return String(value).padStart(2, "0");
}

export default function LeisureExperiencesItem({
  item,
  position = 1,
  onSelect,
  featurePanelId,
}) {
  if (!item) return null;

  const experiences = getValidExperienceHighlights(item.experiences, 2);
  const hasImage = Boolean(item.image?.src);
  const selectAriaLabel = item.ui?.selectAriaLabel || `Destacar ${item.title}`;

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.trigger}
        onClick={onSelect}
        aria-controls={featurePanelId}
        aria-label={selectAriaLabel}
      />

      <div className={styles.topRow}>
        {item.eyebrow ? (
          <span className={styles.badge}>{item.eyebrow}</span>
        ) : null}

        <span className={styles.counter} aria-hidden="true">
          {formatPosition(position)}
        </span>
      </div>

      <div
        className={styles.media}
        style={
          hasImage ? { backgroundImage: `url(${item.image.src})` } : undefined
        }
        role="img"
        aria-label={item.image?.alt || item.title}
      >
        <div className={styles.mediaOverlay} />
        <div className={styles.mediaGrid} />
      </div>

      <div className={styles.body}>
        <div className={styles.copy}>
          <h3 className={styles.title}>{item.title}</h3>

          {item.description ? (
            <p className={styles.description}>{item.description}</p>
          ) : null}
        </div>

        {experiences.length > 0 ? (
          <ul className={styles.list} aria-label={`Destaques de ${item.title}`}>
            {experiences.map((experience) => (
              <li key={experience} className={styles.listItem}>
                {experience}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
