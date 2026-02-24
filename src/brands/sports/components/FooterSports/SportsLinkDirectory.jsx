// src/shared/components/FooterSports/SportsLinkDirectory.jsx (ou caminho real)
import styles from "./SportsLinkDirectory.module.css";
import useLocalSmoothAnchors from "../../../../shared/hooks/useLocalSmoothAnchors.js"; // ajusta o path

/**
 * Espera:
 * data.left.columns: [{ key, title, items:[{key,label,href,variant?}] }]
 * data.partners.collaborators: { title, items:[{key,label,href?}] }
 */
export default function SportsLinkDirectory({ data }) {
  if (!data) return null;

  const leftCols = data.left?.columns ?? [];
  const collaborators = data.partners?.collaborators ?? null;

  const { handleAnchorClick } = useLocalSmoothAnchors();

  return (
    <section
      className={styles.wrap}
      aria-label="Links Rápidos e Colaborações — Sunlive Sports"
    >
      {/* Links Rápidos */}
      {leftCols.map((col) => (
        <div key={col.key} className={styles.block}>
          {col.title && <h3 className={styles.blockTitle}>{col.title}</h3>}
          <div className={styles.chipsGrid}>
            {(col.items ?? []).map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={styles.chip}
                data-variant={item.variant || "default"}
                onClick={(e) => handleAnchorClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Colaboramos com */}
      {collaborators && (
        <div className={styles.block}>
          {collaborators.title && (
            <h3 className={styles.blockTitle}>{collaborators.title}</h3>
          )}
          <div className={styles.chipsGrid}>
            {(collaborators.items ?? []).map((it) =>
              it.href ? (
                <a
                  key={it.key}
                  href={it.href}
                  className={styles.chip}
                  onClick={(e) => handleAnchorClick(e, it.href)}
                >
                  {it.label}
                </a>
              ) : (
                <span key={it.key} className={styles.chip} role="link">
                  {it.label}
                </span>
              ),
            )}
          </div>
        </div>
      )}
    </section>
  );
}
