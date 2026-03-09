import styles from "./ContactsGrid.module.css";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

export default function BusinessUnits({ items = [] }) {
  const desiredOrder = [
    "travel",
    "sports",
    "hotel",
    "commercial",
    "international",
    "business",
  ];

  const orderedItems = desiredOrder
    .map((key) => items.find((item) => item?.key === key))
    .filter(Boolean);

  const { isOpen, toggle } = useAccordion(orderedItems, {
    allowMultiple: true,
  });

  useOpenFromHash({
    routePath: "/sunlive-group",
    regex: /^#unit-(.+)$/,
    items: orderedItems,
    isOpen,
    toggle,
  });

  return (
    <div className={styles.grid} role="list">
      {orderedItems.map((item) => {
        const open = isOpen(item.key);
        const telHref = (item.phone || "").replace(/\s+/g, "");

        return (
          <div
            key={item.key}
            role="listitem"
            className={styles.item}
            id={`unit-${item.key}`}
          >
            <button
              type="button"
              className={styles.pill}
              onClick={() => toggle(item.key)}
              aria-expanded={open}
              aria-controls={`bu-${item.key}`}
            >
              <span className={styles.pillText}>{item.label}</span>
              <span className={styles.caret} aria-hidden="true">
                ➜
              </span>
            </button>

            {open && (
              <div
                id={`bu-${item.key}`}
                className={styles.card}
                role="region"
                aria-label={`${item.label} contacts`}
              >
                <a
                  href={item.email ? `mailto:${item.email}` : undefined}
                  className={styles.row}
                  aria-label={
                    item.email ? `Email ${item.email}` : "Email not available"
                  }
                  tabIndex={0}
                >
                  <MailIcon className={styles.icon} width={20} height={20} />
                  <span className={item.email ? "" : styles.muted}>
                    {item.email || "—"}
                  </span>
                </a>

                <a
                  href={item.phone ? `tel:${telHref}` : undefined}
                  className={styles.row}
                  aria-label={
                    item.phone ? `Call ${item.phone}` : "Phone not available"
                  }
                  tabIndex={0}
                >
                  <PhoneIcon className={styles.icon} width={20} height={20} />
                  <span className={item.phone ? "" : styles.muted}>
                    {item.phone || "—"}
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
