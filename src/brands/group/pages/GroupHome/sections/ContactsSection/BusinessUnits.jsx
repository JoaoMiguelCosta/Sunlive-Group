import { useMemo } from "react";

import styles from "./ContactsGrid.module.css";
import disclosureStyles from "./ContactDisclosure.module.css";
import OfficeCard from "./OfficeCard.jsx";

import { isValidText } from "../../../../shared/utils/contentGuards.js";

import { GROUP_CONTACTS } from "../../../../config/core/contacts.js";
import { GROUP_BASE_PATH } from "../../../../config/core/paths.js";

import useContactsAccordionHash from "./useContactsAccordionHash.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

const BUSINESS_UNIT_ANCHOR_PREFIX = "unidade-";

const BUSINESS_UNIT_ORDER = [
  "travel",
  "sports",
  "hotel",
  "commercial",
  "international",
  "business",
];

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

export default function BusinessUnits({ items = [] }) {
  const orderedItems = useMemo(() => getOrderedItems(items), [items]);

  const { isOpen, toggle } = useContactsAccordionHash({
    items: orderedItems,
    prefix: BUSINESS_UNIT_ANCHOR_PREFIX,
    routePath: GROUP_BASE_PATH,
  });

  if (!orderedItems.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={orderedItems.length}>
      {orderedItems.map((item) => {
        const open = isOpen(item.key);
        const anchorId = item.anchorId;
        const panelId = `bu-${item.key}`;
        const telHref = getTelHref(item.phone);

        return (
          <div
            key={item.key}
            role="listitem"
            className={styles.item}
            id={anchorId}
          >
            <button
              type="button"
              className={disclosureStyles.pill}
              onClick={() => toggle(item.key)}
              aria-expanded={open}
              aria-controls={panelId}
            >
              <span className={disclosureStyles.pillText}>{item.label}</span>

              <span className={disclosureStyles.caret} aria-hidden="true">
                ⌄
              </span>
            </button>

            {open ? (
              <OfficeCard
                id={panelId}
                label={item.label}
                email={item.email}
                phone={item.phone}
                telHref={telHref}
                MailIcon={MailIcon}
                PhoneIcon={PhoneIcon}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
