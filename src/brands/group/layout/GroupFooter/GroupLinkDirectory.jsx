import styles from "./GroupLinkDirectory.module.css";
import PillLink from "../../../../shared/components/Footer/PillLink.jsx";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";
import {
  buildFlagMap,
  getFlagComp,
  modClassFor,
} from "../../../../shared/components/Footer/utils/flagHelpers.js";

function renderPill({ item, onSmartClick, flagMap, styles }) {
  if (!item?.key || !item?.label) return null;

  const { key, label, href, disabled } = item;
  const Flag = getFlagComp(flagMap, item);
  const mod = modClassFor(styles, key);

  return (
    <PillLink
      key={key}
      href={href}
      disabled={disabled}
      className={[styles.pill, mod, disabled ? styles.disabled : ""]
        .filter(Boolean)
        .join(" ")}
      onSmartClick={onSmartClick}
    >
      <span className={styles.pillContent}>
        {Flag ? (
          <span className={styles.flagBox} aria-hidden="true">
            <Flag />
          </span>
        ) : null}

        <span className={styles.pillLabel}>{label}</span>
      </span>
    </PillLink>
  );
}

export default function GroupLinkDirectory({ data }) {
  if (!data) return null;

  const { left, right, meta } = data;

  const anchors = meta?.anchors ?? {};
  const targetGroupPath = anchors.groupPath || "/sunlive-group";
  const targetLogosPath = anchors.logosPath || "/sunlive-group/logos";
  const offset = typeof anchors.offset === "number" ? anchors.offset : 24;

  const { handleSmartAnchorClick: toLogos } = useSmartAnchorNav({
    targetPath: targetLogosPath,
    offset,
  });

  const { handleSmartAnchorClick: toGroup } = useSmartAnchorNav({
    targetPath: targetGroupPath,
    offset,
  });

  const regionalOffices = Array.isArray(meta?.regionalOffices)
    ? meta.regionalOffices
    : [];
  const flagMap = buildFlagMap(regionalOffices);

  const leftColumns = Array.isArray(left?.columns) ? left.columns : [];
  const rightItems = Array.isArray(right?.items) ? right.items : [];

  const hasLeft =
    Boolean(left?.title) ||
    leftColumns.some(
      (col) => Array.isArray(col?.items) && col.items.length > 0,
    );

  const hasRight = Boolean(right?.title) || rightItems.length > 0;

  if (!hasLeft && !hasRight) return null;

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
              {leftColumns.map((col) => {
                const items = Array.isArray(col?.items) ? col.items : [];
                if (items.length === 0) return null;

                const onSmartClick =
                  col?.key === "countries" || col?.key === "units"
                    ? toGroup
                    : undefined;

                return (
                  <div key={col.key || col.title} className={styles.column}>
                    {items.map((item) =>
                      renderPill({
                        item,
                        onSmartClick,
                        flagMap,
                        styles,
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
                    onSmartClick: toLogos,
                    flagMap,
                    styles,
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
