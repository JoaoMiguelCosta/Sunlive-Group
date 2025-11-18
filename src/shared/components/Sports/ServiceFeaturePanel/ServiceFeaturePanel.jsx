// src/shared/components/Sports/ServiceFeaturePanel/ServiceFeaturePanel.jsx
import styles from "./ServiceFeaturePanel.module.css";

/**
 * Painel de detalhe de serviço (Sports)
 * Uso típico: Logística, Consultoria, etc.
 *
 * Props:
 * - icon: ReactNode (opcional)
 * - title: string
 * - summary: string
 * - items: string[]
 * - tagLabel: string
 * - isOpen: boolean (para acordeão)
 * - onToggle: () => void (para acordeão)
 */
export default function ServiceFeaturePanel({
  icon = null,
  title,
  summary,
  items = [],
  tagLabel = "Inclui:",
  isOpen = false,
  onToggle,
  className = "",
  ...rest
}) {
  const cardClasses = [styles.card, className].filter(Boolean).join(" ");

  const handleToggle = () => {
    if (onToggle) onToggle();
  };

  return (
    <article
      className={cardClasses}
      data-brand="sports"
      aria-label={title}
      {...rest}
    >
      {/* Topo: ícone + título (sem seta aqui) */}
      <header className={styles.header}>
        <div className={styles.headerMain}>
          {icon && (
            <div className={styles.iconWrap} aria-hidden="true">
              {icon}
            </div>
          )}

          <h3 className={styles.title}>{title}</h3>
        </div>
      </header>

      {/* Faixa de resumo — sempre visível se existir */}
      {summary && (
        <div className={styles.summaryBand}>
          <p className={styles.summaryText}>{summary}</p>
        </div>
      )}

      {/* Corpo: linha "Inclui" + lista (lista é que abre/fecha) */}
      {(tagLabel || items.length > 0) && (
        <div className={styles.body}>
          {(tagLabel || onToggle) && (
            <div className={styles.tagRow}>
              {tagLabel && <p className={styles.tagLabel}>{tagLabel}</p>}

              {onToggle && (
                <button
                  type="button"
                  className={`${styles.toggleButton} ${
                    isOpen ? styles.open : ""
                  }`}
                  onClick={handleToggle}
                  aria-label={isOpen ? "Fechar detalhes" : "Abrir detalhes"}
                  aria-expanded={isOpen}
                >
                  <span className={styles.toggleIcon} />
                </button>
              )}
            </div>
          )}

          {items.length > 0 && (isOpen || !onToggle) && (
            <ul className={styles.list}>
              {items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span className={styles.itemText}>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}
