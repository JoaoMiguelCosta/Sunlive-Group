import styles from "./StayPoliciesAccordion.module.css";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";

function Chevron({ open }) {
  return (
    <span className={[styles.chev, open ? styles.chevOpen : ""].join(" ")}>
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M6 9l6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
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
  const { isOpen, toggle } = useAccordion(safeItems, { allowMultiple });

  if (safeItems.length === 0) return null;

  return (
    <div className={styles.accordion}>
      {safeItems.map((item) => {
        const compact = item.variant === "compact";
        const open = compact ? true : isOpen(item.key);

        return (
          <div
            key={item.key}
            className={[
              styles.item,
              open ? styles.itemOpen : "",
              compact ? styles.itemCompact : "",
            ].join(" ")}
          >
            <button
              type="button"
              className={styles.trigger}
              onClick={compact ? undefined : () => toggle(item.key)}
              aria-expanded={open}
              aria-controls={`${item.key}-panel`}
              disabled={compact}
            >
              <span className={styles.left}>
                <span className={styles.iconSlot} aria-hidden="true" />
                <span className={styles.title}>{item.title}</span>
              </span>

              {compact ? null : <Chevron open={open} />}
            </button>

            <div
              id={`${item.key}-panel`}
              className={[
                styles.panel,
                open ? styles.panelOpen : styles.panelClosed,
                compact ? styles.panelCompact : "",
              ].join(" ")}
              role="region"
              aria-label={item.title}
            >
              <div className={styles.panelInner}>
                {compact ? (
                  <ul className={styles.compactList}>
                    <li className={styles.compactItem}>{item.body}</li>
                  </ul>
                ) : (
                  <p className={styles.body}>{item.body}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
