import styles from "./GroupHub.module.css";
import useDisclosure from "../../../../../../shared/hooks/useDisclosure.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

// ✅ Novo: contacts vêm do novo config (pages/home.js)
import { groupHomePage } from "../../../../config/pages/home.js";

export default function GroupHub({ data }) {
  if (!data) return null;

  const { title, email, phone, defaultOpen = false } = data;
  const { isOpen, toggle } = useDisclosure(defaultOpen);
  const telHref = (phone || "").replace(/\s+/g, "");

  // Abre automaticamente quando o hash for #unit-<key> (ex.: #unit-group)
  useOpenFromHash({
    routePath: "/sunlive-group",
    regex: /^#unit-(.+)$/, // "#unit-group" → key="group"
    items: [{ key: "group" }],
    isOpen: (key) => key === "group" && isOpen,
    toggle: (key) => {
      if (key === "group" && !isOpen) toggle();
    },
  });

  // Ícones do config (fallbacks seguros para não quebrar a UI)
  const Mail = groupHomePage?.contacts?.icons?.Mail || (() => null);
  const Phone = groupHomePage?.contacts?.icons?.Phone || (() => null);

  return (
    <div className={styles.wrap} id="unit-group">
      <button
        type="button"
        className={styles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="grouphub-panel"
      >
        <span className={styles.pillText}>{title}</span>
        <span className={styles.caret} aria-hidden="true">
          ➜
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
            <Mail className={styles.icon} width={20} height={20} />
            <span className={email ? "" : styles.muted}>{email || "—"}</span>
          </a>

          <a
            href={phone ? `tel:${telHref}` : undefined}
            className={styles.row}
            aria-label={phone ? `Call ${phone}` : "Phone not available"}
            tabIndex={0}
          >
            <Phone className={styles.icon} width={20} height={20} />
            <span className={phone ? "" : styles.muted}>{phone || "—"}</span>
          </a>
        </div>
      )}
    </div>
  );
}
