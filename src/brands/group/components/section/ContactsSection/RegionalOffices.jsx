import styles from "./RegionalOffices.module.css";
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

/* Flags em SVG inline — minimalistas */
const MaltaFlag = (props) => (
  <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true" {...props}>
    <rect width="18" height="12" fill="#d00" x="9" />
    <rect width="9" height="12" fill="#fff" />
    <rect x="1.2" y="1.2" width="2.6" height="2.6" fill="#c0c0c0" rx=".2" />
    <rect x="2.05" y="1.2" width=".7" height="2.6" fill="#a00" />
    <rect x="1.2" y="2.05" width="2.6" height=".7" fill="#a00" />
  </svg>
);
const QatarFlag = (props) => (
  <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true" {...props}>
    <rect width="18" height="12" fill="#8d153a" />
    <polygon
      points="0,0 9,0 7,0.6 9,1.2 7,1.8 9,2.4 7,3 9,3.6 7,4.2 9,4.8 7,5.4 9,6 7,6.6 9,7.2 7,7.8 9,8.4 7,9 9,9.6 7,10.2 9,10.8 7,11.4 9,12 0,12"
      fill="#fff"
    />
  </svg>
);
const KuwaitFlag = (props) => (
  <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true" {...props}>
    <rect width="18" height="4" fill="#009e60" />
    <rect y="4" width="18" height="4" fill="#fff" />
    <rect y="8" width="18" height="4" fill="#ce1126" />
    <polygon points="0,0 5,3 5,9 0,12" fill="#000" />
  </svg>
);
const LebanonFlag = (props) => (
  <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true" {...props}>
    <rect width="18" height="12" fill="#fff" />
    <rect width="18" height="3" fill="#ce1126" />
    <rect y="9" width="18" height="3" fill="#ce1126" />
    <path
      d="M9 3.5l-2 2.4h1.2L7 7h1.2L7.8 8h2.4L11.8 7H13l-1.2-1.1H13L11 3.5H9z"
      fill="#007a3d"
    />
  </svg>
);
const IraqFlag = (props) => (
  <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true" {...props}>
    <rect width="18" height="12" fill="#fff" />
    <rect width="18" height="4" fill="#ce1126" />
    <rect y="8" width="18" height="4" fill="#000" />
    <rect x="5" y="5.2" width="8" height="1.6" fill="#007a3d" rx=".2" />
  </svg>
);

const FLAGS = {
  malta: MaltaFlag,
  qatar: QatarFlag,
  kuwait: KuwaitFlag,
  lebanon: LebanonFlag,
  iraq: IraqFlag,
};

export default function RegionalOffices({ items = [] }) {
  const { isOpen, toggle } = useAccordion(items, { allowMultiple: true });

  return (
    <div className={styles.grid} role="list" data-count={items.length}>
      {items.map((it) => {
        const open = isOpen(it.key);
        const telHref = (it.phone || "").replace(/\s+/g, "");
        const Flag = FLAGS[it.key] || (() => null);

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
