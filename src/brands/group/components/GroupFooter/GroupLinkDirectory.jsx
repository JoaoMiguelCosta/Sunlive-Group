import PillLink from "../../../../shared/components/Footer/PillLink.jsx";
import {
  buildFlagMap,
  getFlagComp,
  modClassFor,
} from "../../../../shared/components/Footer/utils/flagHelpers.js";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";
import { GROUP_BASE_PATH } from "../../config/core/paths.js";

import styles from "./GroupLinkDirectory.module.css";

const DEFAULT_ANCHOR_OFFSET = 24;

const RETRY_DELAY_MS = 80;
const CROSS_PAGE_DELAY_MS = 650;

function renderPill({ item, onSmartClick, flagMap, styleClasses }) {
  if (!item?.key || !item?.label) {
    return null;
  }

  const { key, label, href, disabled } = item;
  const Flag = getFlagComp(flagMap, item);
  const modifierClass = modClassFor(styleClasses, key);

  return (
    <PillLink
      key={key}
      href={href}
      disabled={disabled}
      className={[
        styleClasses.pill,
        modifierClass,
        disabled ? styleClasses.disabled : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onSmartClick={onSmartClick}
    >
      <span className={styleClasses.pillContent}>
        {Flag ? (
          <span className={styleClasses.flagBox} aria-hidden="true">
            <Flag />
          </span>
        ) : null}

        <span className={styleClasses.pillLabel}>{label}</span>
      </span>
    </PillLink>
  );
}

export default function GroupLinkDirectory({ data }) {
  const { left, right, meta } = data ?? {};

  const anchors = meta?.anchors ?? {};

  const targetGroupPath = anchors.groupPath || GROUP_BASE_PATH;

  const offset =
    typeof anchors.offset === "number" ? anchors.offset : DEFAULT_ANCHOR_OFFSET;

  const { handleSmartAnchorClick: navigateWithinGroup } = useSmartAnchorNav({
    targetPath: targetGroupPath,
    offset,
    retryDelayMs: RETRY_DELAY_MS,
    crossPageDelayMs: CROSS_PAGE_DELAY_MS,
  });

  if (!data) {
    return null;
  }

  const regionalOffices = Array.isArray(meta?.regionalOffices)
    ? meta.regionalOffices
    : [];

  const flagMap = buildFlagMap(regionalOffices);

  const leftColumns = Array.isArray(left?.columns) ? left.columns : [];
  const rightItems = Array.isArray(right?.items) ? right.items : [];

  const hasLeft =
    Boolean(left?.title) ||
    leftColumns.some(
      (column) => Array.isArray(column?.items) && column.items.length > 0,
    );

  const hasRight = Boolean(right?.title) || rightItems.length > 0;

  if (!hasLeft && !hasRight) {
    return null;
  }

  return (
    <div
      className={styles.directory}
      aria-label={meta?.ariaLabel ?? "Footer — Links rápidos Sunlive Group"}
    >
      <div className={styles.inner}>
        {hasLeft ? (
          <div className={styles.block}>
            {left?.title ? (
              <h3 className={styles.blockTitle}>{left.title}</h3>
            ) : null}

            <div className={styles.leftGrid}>
              {leftColumns.map((column) => {
                const items = Array.isArray(column?.items) ? column.items : [];

                if (!items.length) {
                  return null;
                }

                return (
                  <div
                    key={column.key || column.title}
                    className={styles.column}
                  >
                    {items.map((item) =>
                      renderPill({
                        item,
                        onSmartClick: navigateWithinGroup,
                        flagMap,
                        styleClasses: styles,
                      }),
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {hasRight ? (
          <div className={styles.block}>
            {right?.title ? (
              <h3 className={styles.blockTitle}>{right.title}</h3>
            ) : null}

            {rightItems.length > 0 ? (
              <div className={styles.rightGrid}>
                {rightItems.map((item) =>
                  renderPill({
                    item,
                    onSmartClick: navigateWithinGroup,
                    flagMap,
                    styleClasses: styles,
                  }),
                )}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
