import styles from "./HotelDirectory.module.css";
import useLocalSmoothAnchors from "../../../../shared/hooks/useLocalSmoothAnchors.js";
import { Link, useLocation } from "react-router-dom";

function normalizePath(pathname) {
  if (!pathname) return "/";
  return pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
}

function isExternalHref(href = "") {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function scrollTopSmooth() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function isValidHref(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function renderChip({ item, currentPath, handleAnchorClick }) {
  if (!item?.key || !item?.label) return null;

  const href = String(item.href ?? "");
  const variant = item.variant || "default";
  const external = isExternalHref(href);
  const hasHash = href.includes("#");
  const hrefPath = normalizePath(href.split("#")[0]);
  const isSamePage =
    isValidHref(href) && !external && !hasHash && hrefPath === currentPath;

  const content = (
    <>
      <span className={styles.chipLabel}>{item.label}</span>
      <span className={styles.energyLine} aria-hidden="true" />
    </>
  );

  if (external) {
    return (
      <a
        key={item.key}
        href={href}
        className={styles.chip}
        data-variant={variant}
      >
        {content}
      </a>
    );
  }

  if (hasHash) {
    return (
      <a
        key={item.key}
        href={href}
        className={styles.chip}
        data-variant={variant}
        onClick={(event) => handleAnchorClick(event, href)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      key={item.key}
      to={href}
      className={styles.chip}
      data-variant={variant}
      onClick={(event) => {
        if (isSamePage) {
          event.preventDefault();
          scrollTopSmooth();
        }
      }}
    >
      {content}
    </Link>
  );
}

export default function HotelDirectory({ data }) {
  if (!data) return null;

  const leftCols = data.left?.columns ?? [];
  const { handleAnchorClick } = useLocalSmoothAnchors();
  const location = useLocation();

  const currentPath = normalizePath(location.pathname);

  const hasColumns = leftCols.some(
    (column) =>
      column?.title ||
      (Array.isArray(column?.items) && column.items.length > 0),
  );

  if (!hasColumns) return null;

  return (
    <div
      className={styles.directory}
      aria-label="Links Rápidos — Estalagem de Sangalhos"
    >
      {leftCols.map((col) => {
        const items = Array.isArray(col?.items) ? col.items : [];
        if (!col?.title && items.length === 0) return null;

        return (
          <div key={col.key || col.title} className={styles.block}>
            {col.title ? (
              <h3 className={styles.blockTitle}>{col.title}</h3>
            ) : null}

            {items.length > 0 ? (
              <div className={styles.chipsGrid}>
                {items.map((item) =>
                  renderChip({
                    item,
                    currentPath,
                    handleAnchorClick,
                  }),
                )}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
