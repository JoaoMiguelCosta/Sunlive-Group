import styles from "./HotelDirectory.module.css";
import useLocalSmoothAnchors from "../../../../shared/hooks/useLocalSmoothAnchors.js"

/**
 * Espera:
 * data.left.columns: [{ key, title, items:[{key,label,href,variant?}] }]
 * (para já não usamos partners no Hotel)
 */
export default function HotelDirectory({ data }) {
  if (!data) return null;

  const leftCols = data.left?.columns ?? [];
  const { handleAnchorClick } = useLocalSmoothAnchors();

  return (
    <section
      className={styles.wrap}
      aria-label="Links Rápidos — Estalagem de Sangalhos"
    >
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
    </section>
  );
}
