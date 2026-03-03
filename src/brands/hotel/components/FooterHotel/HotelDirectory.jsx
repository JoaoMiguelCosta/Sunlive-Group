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

/**
 * Espera:
 * data.left.columns: [{ key, title, items:[{key,label,href,variant?}] }]
 * (para já não usamos partners no Hotel)
 */
export default function HotelDirectory({ data }) {
  if (!data) return null;

  const leftCols = data.left?.columns ?? [];
  const { handleAnchorClick } = useLocalSmoothAnchors();
  const location = useLocation();

  const currentPath = normalizePath(location.pathname);

  return (
    <section
      className={styles.wrap}
      aria-label="Links Rápidos — Estalagem de Sangalhos"
    >
      {leftCols.map((col) => (
        <div key={col.key} className={styles.block}>
          {col.title && <h3 className={styles.blockTitle}>{col.title}</h3>}

          <div className={styles.chipsGrid}>
            {(col.items ?? []).map((item) => {
              const href = String(item.href ?? "");
              const hasHash = href.includes("#");
              const external = isExternalHref(href);

              // compara só o path (sem hash)
              const hrefPath = normalizePath(href.split("#")[0]);
              const isSamePage =
                !external && !hasHash && hrefPath === currentPath;

              // ✅ Externos: mantém <a>
              if (external) {
                return (
                  <a
                    key={item.key}
                    href={href}
                    className={styles.chip}
                    data-variant={item.variant || "default"}
                  >
                    {item.label}
                  </a>
                );
              }

              // ✅ Hash: deixa o teu hook tratar (smooth + offset)
              if (hasHash) {
                return (
                  <a
                    key={item.key}
                    href={href}
                    className={styles.chip}
                    data-variant={item.variant || "default"}
                    onClick={(e) => handleAnchorClick(e, href)}
                  >
                    {item.label}
                  </a>
                );
              }

              // ✅ Internos sem hash: usa Link (SPA) + “same page scroll to top”
              return (
                <Link
                  key={item.key}
                  to={href}
                  className={styles.chip}
                  data-variant={item.variant || "default"}
                  onClick={(e) => {
                    if (isSamePage) {
                      e.preventDefault();
                      scrollTopSmooth();
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
