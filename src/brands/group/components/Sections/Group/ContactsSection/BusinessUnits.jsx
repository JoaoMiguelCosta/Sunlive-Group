import styles from "./ContactsGrid.module.css";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

const BUSINESS_UNIT_ORDER = [
  "travel",
  "sports",
  "hotel",
  "commercial",
  "international",
  "business",
];

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidItem(item) {
  return item && typeof item === "object" && isValidText(item.key);
}

function getOrderedItems(items) {
  const validItems = Array.isArray(items) ? items.filter(isValidItem) : [];
  const orderedKeys = new Set(BUSINESS_UNIT_ORDER);

  const orderedItems = BUSINESS_UNIT_ORDER.map((key) =>
    validItems.find((item) => item.key === key),
  ).filter(Boolean);

  const remainingItems = validItems.filter(
    (item) => !orderedKeys.has(item.key),
  );

  return [...orderedItems, ...remainingItems];
}

function getTelHref(phone) {
  return isValidText(phone) ? phone.replace(/\s+/g, "") : "";
}

function ContactRow({ href, label, value, mutedLabel, Icon }) {
  const hasValue = isValidText(value);

  if (!hasValue) {
    return (
      <span className={styles.row} aria-label={mutedLabel} aria-disabled="true">
        <Icon className={styles.icon} width={20} height={20} />
        <span className={styles.muted}>—</span>
      </span>
    );
  }

  return (
    <a href={href} className={styles.row} aria-label={label}>
      <Icon className={styles.icon} width={20} height={20} />
      <span>{value}</span>
    </a>
  );
}

export default function BusinessUnits({ items = [] }) {
  const orderedItems = getOrderedItems(items);

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

  if (!orderedItems.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={orderedItems.length}>
      {orderedItems.map((item) => {
        const open = isOpen(item.key);
        const panelId = `bu-${item.key}`;
        const telHref = getTelHref(item.phone);

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
              aria-controls={panelId}
            >
              <span className={styles.pillText}>{item.label}</span>
              <span className={styles.caret} aria-hidden="true">
                ➜
              </span>
            </button>

            {open ? (
              <div
                id={panelId}
                className={styles.card}
                role="region"
                aria-label={`${item.label} contacts`}
              >
                <ContactRow
                  href={`mailto:${item.email}`}
                  label={`Email ${item.email}`}
                  mutedLabel="Email not available"
                  value={item.email}
                  Icon={MailIcon}
                />

                <ContactRow
                  href={`tel:${telHref}`}
                  label={`Call ${item.phone}`}
                  mutedLabel="Phone not available"
                  value={item.phone}
                  Icon={PhoneIcon}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
