import styles from "./ModalitiesOtherSportsSection.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function getValidGroups(groups) {
  return Array.isArray(groups)
    ? groups.filter(
        (group) =>
          group &&
          typeof group === "object" &&
          isValidText(group.key) &&
          isValidText(group.title) &&
          Array.isArray(group.items) &&
          group.items.some(isValidText),
      )
    : [];
}

function getValidGroupItems(items) {
  return Array.isArray(items) ? items.filter(isValidText) : [];
}

function OtherSportsGroup({ group, sectionId }) {
  const items = getValidGroupItems(group.items);

  if (items.length === 0) return null;

  const groupTitleId = `${sectionId}-${group.key}-title`;

  return (
    <li className={styles.group}>
      <div className={styles.groupHeader}>
        <span className={styles.groupMarker} aria-hidden="true" />

        <h3 id={groupTitleId} className={styles.groupTitle}>
          {group.title}
        </h3>
      </div>

      <ul className={styles.tags} aria-labelledby={groupTitleId}>
        {items.map((item) => (
          <li key={`${group.key}-${item}`} className={styles.tag}>
            <span className={styles.tagDot} aria-hidden="true" />
            <span className={styles.tagText}>{item}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function ModalitiesOtherSportsSection({ data }) {
  if (!data) return null;

  const intro = data.intro;
  const groups = getValidGroups(data.groups);

  if (!intro && groups.length === 0) return null;

  const titleId = isValidText(intro?.title) ? `${data.id}-title` : undefined;
  const leadId = isValidText(intro?.lead) ? `${data.id}-lead` : undefined;
  const groupsAriaLabel = isValidText(data.ui?.groupsAriaLabel)
    ? data.ui.groupsAriaLabel
    : undefined;

  return (
    <section
      id={data.id}
      className={styles.section}
      aria-labelledby={titleId}
      aria-describedby={leadId}
      aria-label={!titleId ? data.ui?.ariaLabel : undefined}
    >
      <div className={styles.inner}>
        <div className={styles.surface}>
          <span className={styles.edgeLine} aria-hidden="true" />
          <span className={styles.glow} aria-hidden="true" />

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

          {groups.length > 0 ? (
            <ul className={styles.groups} aria-label={groupsAriaLabel}>
              {groups.map((group) => (
                <OtherSportsGroup
                  key={group.key}
                  group={group}
                  sectionId={data.id}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
