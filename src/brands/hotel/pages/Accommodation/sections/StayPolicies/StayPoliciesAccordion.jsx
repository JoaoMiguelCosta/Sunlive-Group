import styles from "./StayPoliciesAccordion.module.css";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import { ICONS, resolveHotelIcon } from "../../../../config/index.js";

function Chevron({ open }) {
  return (
    <span
      className={[styles.chevron, open ? styles.chevronOpen : ""].join(" ")}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          d="M7 10l5 5 5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function StayPoliciesAccordion({
  items = [],
  allowMultiple = false,
}) {
  const safeItems = Array.isArray(items) ? items : [];

  const accordionItems = safeItems.map((item) => ({
    key: item.key,
    defaultOpen: item?.defaultOpen ?? false,
  }));

  const { isOpen, toggle } = useAccordion(accordionItems, { allowMultiple });

  if (!safeItems.length) return null;

  return (
    <div className={styles.accordion}>
      {safeItems.map((item) => {
        const open = isOpen(item.key);
        const panelId = `${item.key}-panel`;
        const triggerId = `${item.key}-trigger`;
        const Icon = resolveHotelIcon(ICONS, item.iconKey);

        return (
          <div
            key={item.key}
            className={[styles.item, open ? styles.itemOpen : ""]
              .filter(Boolean)
              .join(" ")}
          >
            <button
              id={triggerId}
              type="button"
              className={styles.trigger}
              onClick={() => toggle(item.key)}
              aria-expanded={open}
              aria-controls={panelId}
            >
              <span className={styles.triggerLeft}>
                {Icon ? (
                  <span className={styles.iconCircle} aria-hidden="true">
                    <Icon className={styles.icon} />
                  </span>
                ) : null}

                <span className={styles.title}>{item.title}</span>
              </span>

              <Chevron open={open} />
            </button>

            <div
              id={panelId}
              className={[
                styles.panel,
                open ? styles.panelOpen : styles.panelClosed,
              ].join(" ")}
              role="region"
              aria-labelledby={triggerId}
            >
              <div className={styles.panelInner}>
                <p className={styles.body}>{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
