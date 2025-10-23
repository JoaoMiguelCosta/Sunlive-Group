import styles from "./LinkDirectory.module.css";

/**
 * Props: data = {
 *   left: {
 *     title: string,
 *     columns: [{ key, items:[{ key, label, href, disabled? }] }, ...]
 *   },
 *   right: {
 *     title: string,
 *     items: [{ key, label, href, disabled? }]
 *   }
 * }
 */
export default function LinkDirectory({ data }) {
  if (!data) return null;

  const { left, right } = data;

  return (
    <section className={styles.sectionWrap} aria-label="Footer — Quick Links">
      <div className={styles.inner}>
        {/* Bloco Esquerdo: Contactos Sunlive Group */}
        <div className={styles.block}>
          {left?.title && (
            <div className={styles.blockTitle}>
              <span className={styles.badge}>{left.title}</span>
            </div>
          )}

          <div className={styles.gridLeft}>
            {(left?.columns || []).map((col) => (
              <div key={col.key} className={styles.col}>
                {(col.items || []).map(({ key, label, href, disabled }) => (
                  <a
                    key={key}
                    className={`${styles.pill} ${disabled ? styles.disabled : ""}`}
                    href={disabled ? undefined : href}
                    aria-disabled={disabled ? "true" : "false"}
                    tabIndex={disabled ? -1 : 0}
                  >
                    <span className={styles.pillLabel}>{label}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bloco Direito: Rede de Parceiros */}
        <div className={styles.block}>
          {right?.title && (
            <div className={styles.blockTitle}>
              <span className={styles.badge}>{right.title}</span>
            </div>
          )}

          <div className={styles.gridRight}>
            {(right?.items || []).map(({ key, label, href, disabled }) => (
              <a
                key={key}
                className={`${styles.pill} ${disabled ? styles.disabled : ""}`}
                href={disabled ? undefined : href}
                aria-disabled={disabled ? "true" : "false"}
                tabIndex={disabled ? -1 : 0}
              >
                <span className={styles.pillLabel}>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
