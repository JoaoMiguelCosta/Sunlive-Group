import styles from "./BusinessUnits.module.css";
import useAccordion from "./hooks/useAccordion";

/* Ícones (inline SVG) */
const Mail = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"
    />
  </svg>
);
const Phone = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.6 21.2 2.8 13.4 2.8 3.2 2.8 2.5 3.3 2 4 2h3.4c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2.2 2.4Z"
    />
  </svg>
);

export default function BusinessUnits({ items = [] }) {
  // ordem desejada: 1ª linha: Travel, Sports, Hotel; 2ª linha: Commercial, International, Business
  const desiredOrder = [
    "travel",
    "sports",
    "hotel",
    "commercial",
    "international",
    "business",
  ];

  // Reordena mantendo apenas os que existem no array original
  const orderedItems = desiredOrder
    .map((key) => items.find((i) => i?.key === key))
    .filter(Boolean);

  const { isOpen, toggle } = useAccordion(orderedItems, {
    allowMultiple: true,
  });

  return (
    <div className={styles.grid} role="list">
      {orderedItems.map((it) => {
        const open = isOpen(it.key);
        const disabled = Boolean(it.disabled);
        const telHref = (it.phone || "").replace(/\s+/g, "");
        return (
          <div key={it.key} role="listitem" className={styles.item}>
            <button
              type="button"
              className={`${styles.pill} ${disabled ? styles.isDisabled : ""}`}
              onClick={() => !disabled && toggle(it.key)}
              aria-expanded={open}
              aria-controls={`bu-${it.key}`}
              disabled={disabled}
            >
              <span className={styles.pillText}>{it.label}</span>
              <span className={styles.caret} aria-hidden>
                ▾
              </span>
              {disabled && <span className={styles.badge}>Brevemente</span>}
            </button>

            {/* Desativados não mostram o cartão */}
            {!disabled && open && (
              <div
                id={`bu-${it.key}`}
                className={styles.card}
                role="region"
                aria-label={`${it.label} contacts`}
              >
                <a
                  href={it.email ? `mailto:${it.email}` : undefined}
                  className={styles.row}
                  aria-label={
                    it.email ? `Email ${it.email}` : "Email not available"
                  }
                  tabIndex={0}
                >
                  <Mail className={styles.icon} />
                  <span className={it.email ? "" : styles.muted}>
                    {it.email || "—"}
                  </span>
                </a>
                <a
                  href={it.phone ? `tel:${telHref}` : undefined}
                  className={styles.row}
                  aria-label={
                    it.phone ? `Call ${it.phone}` : "Phone not available"
                  }
                  tabIndex={0}
                >
                  <Phone className={styles.icon} />
                  <span className={it.phone ? "" : styles.muted}>
                    {it.phone || "—"}
                  </span>
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
