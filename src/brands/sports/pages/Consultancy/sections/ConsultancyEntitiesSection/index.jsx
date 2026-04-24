import styles from "./ConsultancyEntitiesSection.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidEntities(items) {
  return Array.isArray(items)
    ? items.filter(
        (item) =>
          item &&
          typeof item === "object" &&
          isValidText(item.key) &&
          isValidText(item.title),
      )
    : [];
}

function getTitleId(sectionId) {
  return isValidText(sectionId) ? `${sectionId}-title` : undefined;
}

export default function ConsultancyEntitiesSection({ data }) {
  const entities = getValidEntities(data?.items);

  if (!data || entities.length === 0) return null;

  const titleId = data.intro?.title ? getTitleId(data.id) : undefined;

  return (
    <section
      id={data.id}
      className={styles.section}
      aria-labelledby={titleId}
      aria-label={titleId ? undefined : data.ui?.ariaLabel}
      data-layout={data.ui?.layout}
    >
      <div className={styles.shell}>
        <div className={styles.panel}>
          {data.intro ? (
            <header className={styles.header}>
              {isValidText(data.intro.eyebrow) ? (
                <p className={styles.eyebrow}>{data.intro.eyebrow}</p>
              ) : null}

              {isValidText(data.intro.title) ? (
                <h2 id={titleId} className={styles.title}>
                  {data.intro.title}
                </h2>
              ) : null}

              {isValidText(data.intro.lead) ? (
                <p className={styles.lead}>{data.intro.lead}</p>
              ) : null}
            </header>
          ) : null}

          <ul
            className={styles.entitiesList}
            aria-label={data.ui?.listAriaLabel}
          >
            {entities.map((entity, index) => (
              <li key={entity.key} className={styles.entityItem}>
                <span className={styles.entityIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.entityTitle}>{entity.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
