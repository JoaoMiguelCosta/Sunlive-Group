import { Link, useLocation } from "react-router-dom";

import useLocalSmoothAnchors from "../../../../shared/hooks/useLocalSmoothAnchors.js";

import styles from "./HotelDirectory.module.css";

function normalizePath(pathname) {
  if (!pathname) return "/";

  return pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
}

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isExternalHref(href = "") {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function isWebExternalHref(href = "") {
  return href.startsWith("http://") || href.startsWith("https://");
}

function scrollTopSmooth() {
  if (typeof window === "undefined") return;

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function getValidItems(items) {
  return Array.isArray(items)
    ? items.filter((item) => isValidText(item?.key) && isValidText(item?.label))
    : [];
}

function renderChip({ item, currentPath, handleAnchorClick }) {
  const href = String(item.href ?? "").trim();

  if (!isValidText(href)) return null;

  const variant = item.variant || "default";
  const external = isExternalHref(href);
  const webExternal = isWebExternalHref(href);
  const hasHash = href.includes("#");

  const hrefPath = normalizePath(href.split("#")[0]);
  const isSamePage = !external && !hasHash && hrefPath === currentPath;

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
        target={webExternal ? "_blank" : undefined}
        rel={webExternal ? "noreferrer" : undefined}
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
        if (!isSamePage) return;

        event.preventDefault();
        scrollTopSmooth();
      }}
    >
      {content}
    </Link>
  );
}

export default function HotelDirectory({ data }) {
  const { handleAnchorClick } = useLocalSmoothAnchors();
  const location = useLocation();

  if (!data) return null;

  const columns = Array.isArray(data.left?.columns) ? data.left.columns : [];
  const currentPath = normalizePath(location.pathname);

  const validColumns = columns
    .map((column) => ({
      ...column,
      items: getValidItems(column?.items),
    }))
    .filter((column) => isValidText(column?.title) || column.items.length > 0);

  if (validColumns.length === 0) return null;

  return (
    <nav
      className={styles.directory}
      aria-label="Links rápidos da Estalagem de Sangalhos"
    >
      {validColumns.map((column) => (
        <section
          key={column.key || column.title}
          className={styles.block}
          aria-label={column.title}
        >
          {isValidText(column.title) ? (
            <h3 className={styles.blockTitle}>{column.title}</h3>
          ) : null}

          {column.items.length > 0 ? (
            <div className={styles.chipsGrid}>
              {column.items.map((item) =>
                renderChip({
                  item,
                  currentPath,
                  handleAnchorClick,
                }),
              )}
            </div>
          ) : null}
        </section>
      ))}
    </nav>
  );
}
