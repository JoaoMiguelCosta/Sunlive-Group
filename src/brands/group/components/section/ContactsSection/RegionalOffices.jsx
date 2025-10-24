import styles from "./RegionalOffices.module.css";
import useAccordion from "./hooks/useAccordion";

// importa os dados (flags e ícones estão dentro de contacts)
import { contacts } from "../../../config.jsx";

/**
 * RegionalOffices
 * Lê automaticamente os itens e ícones de brands/group/config.jsx
 * (contacts.regionalOffices + contacts.icons)
 */
export default function RegionalOffices() {
  const items = contacts?.regionalOffices || [];
  const Icons = contacts?.icons || {};

  const MailIcon = Icons.Mail || (() => null);
  const PhoneIcon = Icons.Phone || (() => null);

  const { isOpen, toggle } = useAccordion(items, { allowMultiple: true });

  if (!items.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={items.length}>
      {items.map((it) => {
        const open = isOpen(it.key);
        const telHref = (it.phone || "").replace(/\s+/g, "");
        const Flag = it.Flag || (() => null);

        return (
          <div key={it.key} role="listitem" className={styles.item}>
            <button
              type="button"
              className={styles.pill}
              onClick={() => toggle(it.key)}
              aria-expanded={open}
              aria-controls={`office-${it.key}`}
            >
              <Flag className={styles.flag} />
              <span className={styles.pillText}>{it.label}</span>
              <span className={styles.caret} aria-hidden>
                ▾
              </span>
            </button>

            {open && (
              <div
                id={`office-${it.key}`}
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
                  <MailIcon className={styles.icon} />
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
                  <PhoneIcon className={styles.icon} />
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
