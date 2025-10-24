import styles from "./LinkDirectory.module.css";
import { contacts } from "../../../brands/group/config.jsx";

/**
 * LinkDirectory — lista de atalhos (unidades/países + parceiros).
 * Espera um objeto `data` com a forma de `linkDirectory` do config.
 *
 * A coluna da esquerda pode mostrar bandeiras (mapeadas em contacts.regionalOffices).
 */
export default function LinkDirectory({ data }) {
  if (!data) return null;

  const { left, right } = data;

  // ---- Mapa key/label -> Componente de Flag (opcional, só para o bloco esquerdo)
  const flagMap = new Map(
    (contacts?.regionalOffices || [])
      .map((o) => {
        const byKey = [o.key?.toLowerCase(), o.Flag];
        const byLabel = [o.label?.toLowerCase(), o.Flag];
        return [byKey, byLabel];
      })
      .flat()
  );

  const getFlagComp = (item) => {
    const k = item?.key?.toLowerCase?.();
    const l = item?.label?.toLowerCase?.();
    return flagMap.get(k) || flagMap.get(l) || null;
  };

  // Classe modificadora por país (ex.: "pill--malta")
  const modClassFor = (key) => {
    const k = key?.toLowerCase?.();
    return (k && styles[`pill--${k}`]) || "";
  };

  return (
    <section className={styles.sectionWrap} aria-label="Footer — Quick Links">
      <div className={styles.inner}>
        {/* -------- Bloco Esquerdo: Contactos -------- */}
        <div className={styles.block}>
          {left?.title && (
            <h3 className={`${styles.sectionTitle} ${styles.sectionTitleLeft}`}>
              {left.title}
            </h3>
          )}

          <div className={styles.gridLeft}>
            {(left?.columns || []).map((col) => (
              <div key={col.key} className={styles.col}>
                {(col.items || []).map((item) => {
                  const { key, label, href, disabled } = item;
                  const Flag = getFlagComp(item);
                  const mod = modClassFor(key);

                  return (
                    <a
                      key={key}
                      className={`${styles.pill} ${mod} ${disabled ? styles.disabled : ""}`}
                      href={disabled ? undefined : href}
                      aria-disabled={disabled ? "true" : "false"}
                      tabIndex={disabled ? -1 : 0}
                    >
                      <span className={styles.pillContent}>
                        {Flag && (
                          <span className={styles.flagBox}>
                            <Flag />
                          </span>
                        )}
                        <span className={styles.pillLabel}>{label}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* -------- Bloco Direito: Rede de Parceiros -------- */}
        <div className={styles.block}>
          {right?.title && (
            <h3
              className={`${styles.sectionTitle} ${styles.sectionTitleRight}`}
            >
              {right.title}
            </h3>
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
                <span className={styles.pillContent}>
                  <span className={styles.pillLabel}>{label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
