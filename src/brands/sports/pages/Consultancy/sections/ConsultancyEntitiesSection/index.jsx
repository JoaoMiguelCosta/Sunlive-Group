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

function getTitleId(sectionId, hasTitle) {
  return isValidText(sectionId) && hasTitle ? `${sectionId}-title` : undefined;
}

function getLeadId(sectionId, hasLead) {
  return isValidText(sectionId) && hasLead ? `${sectionId}-lead` : undefined;
}

function getEntityNumber(entity, index) {
  return isValidText(entity?.number)
    ? entity.number
    : String(index + 1).padStart(2, "0");
}

function getEntityKey(entity, index) {
  return isValidText(entity?.key) ? entity.key : `entity-${index}`;
}

function EntityCard({ entity, index }) {
  const hasMeta = isValidText(entity.meta);
  const hasDescription = isValidText(entity.description);

  return (
    <li className={styles.entityItem}>
      <div className={styles.entityTopline}>
        <span className={styles.entityIndex} aria-hidden="true">
          {getEntityNumber(entity, index)}
        </span>

        {hasMeta ? (
          <span className={styles.entityMeta}>{entity.meta}</span>
        ) : null}
      </div>

      <h3 className={styles.entityTitle}>{entity.title}</h3>

      {hasDescription ? (
        <p className={styles.entityDescription}>{entity.description}</p>
      ) : null}
    </li>
  );
}

export default function ConsultancyEntitiesSection({ data }) {
  if (!data) return null;

  const entities = getValidEntities(data.items);

  if (entities.length === 0) return null;

  const intro = data.intro || {};
  const hasEyebrow = isValidText(intro.eyebrow);
  const hasTitle = isValidText(intro.title);
  const hasLead = isValidText(intro.lead);

  const titleId = getTitleId(data.id, hasTitle);
  const leadId = getLeadId(data.id, hasLead);

  const listAriaLabel = isValidText(data.ui?.listAriaLabel)
    ? data.ui.listAriaLabel
    : undefined;

  return (
    <section
      id={isValidText(data.id) ? data.id : undefined}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={leadId}
      aria-label={!titleId ? data.ui?.ariaLabel : undefined}
      data-layout={data.ui?.layout}
    >
      <div className={styles.shell}>
        <div className={styles.panel}>
          <span className={styles.edgeLine} aria-hidden="true" />
          <span className={styles.glow} aria-hidden="true" />

          {hasEyebrow || hasTitle || hasLead ? (
            <header className={styles.header}>
              {hasEyebrow ? (
                <p className={styles.eyebrow}>{intro.eyebrow}</p>
              ) : null}

              {hasTitle ? (
                <h2 id={titleId} className={styles.title}>
                  {intro.title}
                </h2>
              ) : null}

              {hasLead ? (
                <p id={leadId} className={styles.lead}>
                  {intro.lead}
                </p>
              ) : null}
            </header>
          ) : null}

          <ul className={styles.entitiesList} aria-label={listAriaLabel}>
            {entities.map((entity, index) => (
              <EntityCard
                key={getEntityKey(entity, index)}
                entity={entity}
                index={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
