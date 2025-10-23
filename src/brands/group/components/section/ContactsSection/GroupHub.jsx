// src/brands/group/pages/section/ContactsSection/GroupHub.jsx
import styles from "./GroupHub.module.css";
import useDisclosure from "./hooks/useDisclosure";

/* Ícones (inline SVG) */
const Mail = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"
    />
  </svg>
);
const Phone = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.6 21.2 2.8 13.4 2.8 3.2 2.8 2.5 3.3 2 4 2h3.4c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2l-2.2 2.4Z"
    />
  </svg>
);

export default function GroupHub({ data }) {
  if (!data) return null;
  const { title, email, phone, defaultOpen = true } = data;
  const { isOpen, toggle } = useDisclosure(defaultOpen);

  const telHref = (phone || "").replace(/\s+/g, "");

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="grouphub-panel"
      >
        <span className={styles.pillText}>{title}</span>
        <span className={styles.caret} aria-hidden>
          ▾
        </span>
      </button>

      {isOpen && (
        <div
          id="grouphub-panel"
          className={styles.card}
          role="region"
          aria-label={`${title} contacts`}
        >
          <a
            href={email ? `mailto:${email}` : undefined}
            className={styles.row}
            aria-label={email ? `Email ${email}` : "Email not available"}
            tabIndex={0}
          >
            <Mail className={styles.icon} />
            <span className={email ? "" : styles.muted}>{email || "—"}</span>
          </a>

          <a
            href={phone ? `tel:${telHref}` : undefined}
            className={styles.row}
            aria-label={phone ? `Call ${phone}` : "Phone not available"}
            tabIndex={0}
          >
            <Phone className={styles.icon} />
            <span className={phone ? "" : styles.muted}>{phone || "—"}</span>
          </a>
        </div>
      )}
    </div>
  );
}
