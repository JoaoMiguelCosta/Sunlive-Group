import styles from "./TechnicalMap.module.css";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";

function DisciplineGrid({ block }) {
  const items = getValidArray(block?.items).filter((item) =>
    isValidText(item?.title),
  );

  if (items.length === 0) return null;

  return (
    <article className={styles.block}>
      {isValidText(block.heading) ? (
        <h4 className={styles.blockTitle}>{block.heading}</h4>
      ) : null}

      <ul className={styles.disciplineGrid}>
        {items.map((item) => (
          <li key={item.key || item.title} className={styles.disciplineCard}>
            <span className={styles.disciplineHeader}>
              <strong className={styles.disciplineTitle}>{item.title}</strong>

              {isValidText(item.titleEn) ? (
                <span className={styles.disciplineMeta}>{item.titleEn}</span>
              ) : null}
            </span>

            {isValidText(item.description) ? (
              <span className={styles.disciplineDescription}>
                {item.description}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  );
}

function GroupedList({ block }) {
  const groups = getValidArray(block?.groups).filter((group) =>
    isValidText(group?.title),
  );

  if (groups.length === 0) return null;

  return (
    <article className={styles.block}>
      {isValidText(block.heading) ? (
        <h4 className={styles.blockTitle}>{block.heading}</h4>
      ) : null}

      <div className={styles.groupGrid}>
        {groups.map((group) => (
          <div key={group.key || group.title} className={styles.groupCard}>
            <h5 className={styles.groupTitle}>{group.title}</h5>

            {getValidArray(group.items).length > 0 ? (
              <ul className={styles.groupList}>
                {group.items.map((item, index) => (
                  <li key={`${group.key || group.title}-${item}-${index}`}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {isValidText(group.note) ? (
              <p className={styles.groupNote}>{group.note}</p>
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}

export default function TechnicalMap({ technicalMap }) {
  const blocks = getValidArray(technicalMap?.blocks);

  if (
    !isValidText(technicalMap?.heading) &&
    !isValidText(technicalMap?.description) &&
    blocks.length === 0
  ) {
    return null;
  }

  return (
    <article
      className={styles.panel}
      aria-label={technicalMap?.heading || "Mapa técnico da modalidade"}
    >
      <div className={styles.panelHeader}>
        <span className={styles.panelKicker}>Mapa técnico</span>

        {isValidText(technicalMap.heading) ? (
          <h3 className={styles.panelTitle}>{technicalMap.heading}</h3>
        ) : null}

        {isValidText(technicalMap.description) ? (
          <p className={styles.panelLead}>{technicalMap.description}</p>
        ) : null}
      </div>

      {blocks.length > 0 ? (
        <div className={styles.blockStack}>
          {blocks.map((block) => {
            if (block.type === "discipline-grid") {
              return <DisciplineGrid key={block.key} block={block} />;
            }

            if (block.type === "grouped-list") {
              return <GroupedList key={block.key} block={block} />;
            }

            return null;
          })}
        </div>
      ) : null}
    </article>
  );
}
