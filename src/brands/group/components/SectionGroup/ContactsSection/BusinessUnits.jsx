// src/brands/group/components/SectionGroup/ContactsSection/BusinessUnits.jsx
import styles from "./ContactsGrid.module.css";
import useAccordion from "../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../../shared/hooks/useOpenFromHash.js";

// 👉 Ícones partilhados (sem SVG inline)
import {
  MailIcon as Mail,
  PhoneIcon as Phone,
} from "../../../../../shared/ui/icons/index.js";

export default function BusinessUnits({ items = [] }) {
  // Ordem desejada (mantém só os existentes)
  const desiredOrder = [
    "travel",
    "sports",
    "hotel",
    "commercial",
    "international",
    "business",
  ];

  const orderedItems = desiredOrder
    .map((key) => items.find((i) => i?.key === key))
    .filter(Boolean);

  const { isOpen, toggle } = useAccordion(orderedItems, {
    allowMultiple: true,
  });

  // Auto-abrir pelo hash #unit-<key> (e permitir fechar depois)
  useOpenFromHash({
    routePath: "/sunlive-group",
    regex: /^#unit-(.+)$/,
    items: orderedItems,
    isOpen,
    toggle,
  });

  return (
    <div className={styles.grid} role="list">
      {orderedItems.map((it) => {
        const open = isOpen(it.key);
        const telHref = (it.phone || "").replace(/\s+/g, "");

        return (
          <div
            key={it.key}
            role="listitem"
            className={styles.item}
            id={`unit-${it.key}`} // alvo do scroll
          >
            <button
              type="button"
              className={styles.pill}
              onClick={() => toggle(it.key)}
              aria-expanded={open}
              aria-controls={`bu-${it.key}`}
            >
              <span className={styles.pillText}>{it.label}</span>
              <span className={styles.caret} aria-hidden="true">
                ➜
              </span>
            </button>

            {open && (
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
