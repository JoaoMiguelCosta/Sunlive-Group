import { useEffect, useId, useMemo, useState } from "react";

import styles from "./TechnicalMap.module.css";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";

const DISCIPLINE_GRID_TYPE = "discipline-grid";
const GROUPED_LIST_TYPE = "grouped-list";

function getValidDisciplineItems(items) {
  return getValidArray(items).filter((item) => isValidText(item?.title));
}

function getValidGroupItems(items) {
  return getValidArray(items).filter(isValidText);
}

function getValidGroups(groups) {
  return getValidArray(groups).filter((group) => isValidText(group?.title));
}

function getBlockKey(block, index) {
  if (isValidText(block?.key)) return block.key;
  if (isValidText(block?.heading)) return block.heading;

  return `technical-block-${index + 1}`;
}

function getDisciplineKey(item, index) {
  if (isValidText(item?.key)) return item.key;
  if (isValidText(item?.title)) return item.title;

  return `discipline-${index + 1}`;
}

function getGroupKey(group, index) {
  if (isValidText(group?.key)) return group.key;
  if (isValidText(group?.title)) return group.title;

  return `technical-group-${index + 1}`;
}

function getDomSafeId(value, fallback = "item") {
  const safeId = String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/gi, "-")
    .replace(/^-+|-+$/g, "");

  return safeId || fallback;
}

function getBlockEntry(block, index) {
  const key = getBlockKey(block, index);

  return {
    block,
    index,
    key,
    safeId: getDomSafeId(key, `technical-block-${index + 1}`),
  };
}

function isRenderableBlock(block) {
  if (!block || typeof block !== "object") return false;

  if (block.type === DISCIPLINE_GRID_TYPE) {
    return getValidDisciplineItems(block.items).length > 0;
  }

  if (block.type === GROUPED_LIST_TYPE) {
    return getValidGroups(block.groups).length > 0;
  }

  return false;
}

function getBlocksSummary(blocks) {
  return blocks
    .map((block) => block?.heading)
    .filter(isValidText)
    .join(" · ");
}

function ToggleIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.toggleIcon}>
      <path
        d="M5.5 7.75 10 12.25l4.5-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DisciplineGrid({ block }) {
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

function GroupedList({ block }) {
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

export default function TechnicalMap({ technicalMap }) {
  const reactId = useId();

  const blocks = useMemo(
    () => getValidArray(technicalMap?.blocks).filter(isRenderableBlock),
    [technicalMap],
  );

  const blockEntries = useMemo(
    () => blocks.map((block, index) => getBlockEntry(block, index)),
    [blocks],
  );

  const [isOpen, setIsOpen] = useState(
    () => technicalMap?.defaultOpen === true,
  );
  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    if (blockEntries.length === 0) {
      setActiveKey("");
      return;
    }

    setActiveKey((currentKey) => {
      const hasCurrentKey = blockEntries.some(
        (entry) => entry.key === currentKey,
      );

      return hasCurrentKey ? currentKey : blockEntries[0].key;
    });
  }, [blockEntries]);

  const hasEyebrow = isValidText(technicalMap?.eyebrow);
  const hasHeading = isValidText(technicalMap?.heading);
  const hasDescription = isValidText(technicalMap?.description);

  if (!hasEyebrow && !hasHeading && !hasDescription && blocks.length === 0) {
    return null;
  }

  const cleanReactId = reactId.replace(/:/g, "");
  const configuredId = isValidText(technicalMap?.id)
    ? technicalMap.id
    : undefined;

  const baseId = configuredId || `technical-map-${cleanReactId}`;
  const panelId = configuredId;
  const titleId = hasHeading ? `${baseId}-title` : undefined;
  const descriptionId = hasDescription ? `${baseId}-description` : undefined;
  const contentId = `${baseId}-content`;

  const fallbackAriaLabel =
    technicalMap?.heading || "Mapa técnico da modalidade";

  const activeEntry =
    blockEntries.find((entry) => entry.key === activeKey) || blockEntries[0];

  const activeBlock = activeEntry?.block;
  const blocksSummary = getBlocksSummary(blocks);

  const expandLabel = isValidText(technicalMap?.ui?.expandLabel)
    ? technicalMap.ui.expandLabel
    : "Ver Mapa Técnico";

  const collapseLabel = isValidText(technicalMap?.ui?.collapseLabel)
    ? technicalMap.ui.collapseLabel
    : "Ocultar Mapa Técnico";

  const toggleLabel = isOpen ? collapseLabel : expandLabel;

  const tabsAriaLabel = isValidText(technicalMap?.ui?.tabsAriaLabel)
    ? technicalMap.ui.tabsAriaLabel
    : "Navegação do mapa técnico";

  return (
    <article
      id={panelId}
      className={styles.panel}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-label={titleId ? undefined : fallbackAriaLabel}
      data-open={isOpen ? "true" : "false"}
    >
      <header className={styles.panelHeader}>
        <div className={styles.panelIntro}>
          {hasEyebrow ? (
            <span className={styles.panelKicker}>{technicalMap.eyebrow}</span>
          ) : null}

          {hasHeading ? (
            <h3 id={titleId} className={styles.panelTitle}>
              {technicalMap.heading}
            </h3>
          ) : null}

          {hasDescription ? (
            <p id={descriptionId} className={styles.panelLead}>
              {technicalMap.description}
            </p>
          ) : null}

          {isValidText(blocksSummary) ? (
            <p className={styles.panelMeta}>{blocksSummary}</p>
          ) : null}
        </div>

        {blocks.length > 0 ? (
          <button
            type="button"
            className={styles.toggleButton}
            aria-expanded={isOpen}
            aria-controls={contentId}
            onClick={() => setIsOpen((currentValue) => !currentValue)}
          >
            <span>{toggleLabel}</span>
            <ToggleIcon />
          </button>
        ) : null}
      </header>

      {isOpen && blocks.length > 0 ? (
        <div id={contentId} className={styles.content}>
          {blockEntries.length > 1 ? (
            <div
              className={styles.tabs}
              role="tablist"
              aria-label={tabsAriaLabel}
            >
              {blockEntries.map((entry) => {
                const isActive = entry.key === activeEntry?.key;

                return (
                  <button
                    key={entry.key}
                    type="button"
                    id={`${baseId}-${entry.safeId}-tab`}
                    className={styles.tabButton}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${baseId}-${entry.safeId}-panel`}
                    data-active={isActive ? "true" : "false"}
                    onClick={() => setActiveKey(entry.key)}
                  >
                    {entry.block.heading || `Bloco ${entry.index + 1}`}
                  </button>
                );
              })}
            </div>
          ) : null}

          {activeBlock ? (
            <div
              id={`${baseId}-${activeEntry.safeId}-panel`}
              className={styles.activePanel}
              role="tabpanel"
              aria-labelledby={
                blockEntries.length > 1
                  ? `${baseId}-${activeEntry.safeId}-tab`
                  : undefined
              }
            >
              {activeBlock.type === DISCIPLINE_GRID_TYPE ? (
                <DisciplineGrid block={activeBlock} />
              ) : null}

              {activeBlock.type === GROUPED_LIST_TYPE ? (
                <GroupedList block={activeBlock} />
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
