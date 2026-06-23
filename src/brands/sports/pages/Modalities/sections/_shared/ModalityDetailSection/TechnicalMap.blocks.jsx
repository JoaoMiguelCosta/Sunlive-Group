import { isValidText } from "./modalityDetailUtils.js";
import {
  getDisciplineKey,
  getGroupKey,
  getValidDisciplineItems,
  getValidGroupItems,
  getValidGroups,
} from "./TechnicalMap.utils.js";
import styles from "./TechnicalMap.module.css";

export function DisciplineGrid({ block }) {
  const items = getValidDisciplineItems(block?.items);

  if (items.length === 0) return null;

  const hasHeading = isValidText(block.heading);
  const gridAriaLabel = hasHeading
    ? block.heading
    : "Disciplinas técnicas da modalidade";

  return (
    <article className={styles.block}>
      {hasHeading ? (
        <header className={styles.blockHeader}>
          <h4 className={styles.blockTitle}>{block.heading}</h4>
        </header>
      ) : null}

      <ul className={styles.disciplineGrid} aria-label={gridAriaLabel}>
        {items.map((item, index) => (
          <li
            key={getDisciplineKey(item, index)}
            className={styles.disciplineCard}
          >
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

export function GroupedList({ block }) {
  const groups = getValidGroups(block?.groups);

  if (groups.length === 0) return null;

  const hasHeading = isValidText(block.heading);
  const gridAriaLabel = hasHeading
    ? block.heading
    : "Subdisciplinas técnicas da modalidade";

  return (
    <article className={styles.block}>
      {hasHeading ? (
        <header className={styles.blockHeader}>
          <h4 className={styles.blockTitle}>{block.heading}</h4>
        </header>
      ) : null}

      <div className={styles.groupGrid} role="list" aria-label={gridAriaLabel}>
        {groups.map((group, index) => {
          const groupItems = getValidGroupItems(group.items);
          const hasNote = isValidText(group.note);
          const groupKey = getGroupKey(group, index);

          return (
            <article
              key={groupKey}
              className={styles.groupCard}
              role="listitem"
            >
              <h5 className={styles.groupTitle}>{group.title}</h5>

              {groupItems.length > 0 ? (
                <ul className={styles.groupList}>
                  {groupItems.map((item, itemIndex) => (
                    <li key={`${groupKey}-${item}-${itemIndex}`}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {hasNote ? (
                <p className={styles.groupNote}>{group.note}</p>
              ) : null}
            </article>
          );
        })}
      </div>
    </article>
  );
}
