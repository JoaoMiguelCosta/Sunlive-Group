import { useEffect, useId, useMemo, useState } from "react";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";
import { DisciplineGrid, GroupedList } from "./TechnicalMap.blocks.jsx";
import {
  DISCIPLINE_GRID_TYPE,
  GROUPED_LIST_TYPE,
  getBlockEntry,
  getBlocksSummary,
  isRenderableBlock,
} from "./TechnicalMap.utils.js";
import styles from "./TechnicalMap.module.css";

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
