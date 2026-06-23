import ModalityOverviewCard from "./ModalityOverviewCard.jsx";
import { getValidItems, isValidText } from "./modalitiesOverviewSection.utils.js";
import styles from "./ModalitiesOverviewSection.module.css";

export default function ModalitiesOverviewSection({ data }) {
  if (!data) return null;

  const items = getValidItems(data.items);
  const intro = data.intro;

  if (!intro && items.length === 0) return null;

  const sectionId = data.id || "modalities-overview";
  const titleId = isValidText(intro?.title) ? `${sectionId}-title` : undefined;
  const leadId = isValidText(intro?.lead) ? `${sectionId}-lead` : undefined;

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={leadId}
      aria-label={!titleId ? data.ui?.ariaLabel : undefined}
    >
      <div className={styles.inner}>
        {intro ? (
          <header className={styles.header}>
            {isValidText(intro.eyebrow) ? (
              <p className={styles.eyebrow}>{intro.eyebrow}</p>
            ) : null}

            {isValidText(intro.title) ? (
              <h2 id={titleId} className={styles.title}>
                {intro.title}
              </h2>
            ) : null}

            {isValidText(intro.lead) ? (
              <p id={leadId} className={styles.lead}>
                {intro.lead}
              </p>
            ) : null}
          </header>
        ) : null}

        {items.length > 0 ? (
          <ul className={styles.grid} aria-label={data.ui?.listAriaLabel}>
            {items.map((item, index) => (
              <ModalityOverviewCard
                key={item.key}
                item={item}
                index={index}
                ui={data.ui}
              />
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
