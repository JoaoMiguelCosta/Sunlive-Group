import styles from "./SportsLinkDirectory.module.css";
import useLocalSmoothAnchors from "../../../../shared/hooks/useLocalSmoothAnchors.js";

function isValidHref(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function renderChip(item, handleAnchorClick) {
  if (!item?.key || !item?.label) return null;

  const href = item.href;
  const variant = item.variant || "default";

  if (isValidHref(href)) {
    return (
      <a
        key={item.key}
        href={href}
        className={styles.chip}
        data-variant={variant}
        onClick={(event) => handleAnchorClick(event, href)}
      >
        <span className={styles.chipLabel}>{item.label}</span>
        <span className={styles.energyLine} aria-hidden="true" />
      </a>
    );
  }

  return (
    <span
      key={item.key}
      className={styles.chip}
      data-variant={variant}
    >
      <span className={styles.chipLabel}>{item.label}</span>
      <span className={styles.energyLine} aria-hidden="true" />
    </span>
  );
}

/**
 * Espera:
 * data.left.columns: [{ key, title, items:[{ key, label, href, variant? }] }]
 * data.partners.collaborators: { title, items:[{ key, label, href? }] }
 */
export default function SportsLinkDirectory({ data }) {
  const leftCols = data?.left?.columns ?? [];
  const collaborators = data?.partners?.collaborators ?? null;

  const hasLeftColumns = leftCols.some(
    (column) =>
      column?.title ||
      (Array.isArray(column?.items) && column.items.length > 0),
  );

  const hasCollaborators =
    collaborators?.title ||
    (Array.isArray(collaborators?.items) && collaborators.items.length > 0);

  const { handleAnchorClick } = useLocalSmoothAnchors();

  if (!hasLeftColumns && !hasCollaborators) return null;

  return (
    <div
      className={styles.directory}
      aria-label="Links rápidos e colaborações Sunlive Sports"
    >
      {hasLeftColumns &&
        leftCols.map((column) => {
          const items = Array.isArray(column?.items) ? column.items : [];
          if (!column?.title && items.length === 0) return null;

          return (
            <div key={column.key || column.title} className={styles.block}>
              {column.title ? (
                <h3 className={styles.blockTitle}>{column.title}</h3>
              ) : null}

              {items.length > 0 ? (
                <div className={styles.chipsGrid}>
                  {items.map((item) => renderChip(item, handleAnchorClick))}
                </div>
              ) : null}
            </div>
          );
        })}

      {hasCollaborators ? (
        <div className={styles.block}>
          {collaborators?.title ? (
            <h3 className={styles.blockTitle}>{collaborators.title}</h3>
          ) : null}

          {Array.isArray(collaborators?.items) &&
          collaborators.items.length > 0 ? (
            <div className={styles.chipsGrid}>
              {collaborators.items.map((item) =>
                renderChip(item, handleAnchorClick),
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
