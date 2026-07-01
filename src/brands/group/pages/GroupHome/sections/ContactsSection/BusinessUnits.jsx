import { useMemo } from "react";

import styles from "./ContactsGrid.module.css";
import disclosureStyles from "./ContactDisclosure.module.css";
import OfficeCard from "./OfficeCard.jsx";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";
import { isValidText } from "../../../../shared/utils/contentGuards.js";

import { GROUP_CONTACTS } from "../../../../config/core/contacts.js";
import { GROUP_BASE_PATH } from "../../../../config/core/paths.js";

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

function getItemSlug(item) {
  return item.slug;
}

function getAnchorId(item) {
  return item.anchorId;
}

function getHashKey(item) {
  const anchorId = getAnchorId(item);

  if (anchorId.startsWith(BUSINESS_UNIT_ANCHOR_PREFIX)) {
    return anchorId.slice(BUSINESS_UNIT_ANCHOR_PREFIX.length);
  }

  return getItemSlug(item);
}

function getItemByHashKey(items, hashKey) {
  if (!isValidText(hashKey)) return null;

  return (
    items.find((item) => getHashKey(item) === hashKey) ||
    items.find((item) => getItemSlug(item) === hashKey) ||
    null
  );
}

export default function BusinessUnits({ items = [] }) {
  const orderedItems = useMemo(() => getOrderedItems(items), [items]);

  const hashItems = useMemo(
    () =>
      orderedItems.map((item) => ({
        ...item,
        key: getHashKey(item),
      })),
    [orderedItems],
  );

  const { isOpen, toggle } = useAccordion(orderedItems, {
    allowMultiple: true,
  });

  useOpenFromHash({
    routePath: GROUP_BASE_PATH,
    regex: /^#unidade-(.+)$/,
    items: hashItems,
    isOpen: (hashKey) => {
      const item = getItemByHashKey(orderedItems, hashKey);

      return item ? isOpen(item.key) : false;
    },
    toggle: (hashKey) => {
      const item = getItemByHashKey(orderedItems, hashKey);

      if (item) toggle(item.key);
    },
  });

  if (!orderedItems.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={orderedItems.length}>
      {orderedItems.map((item) => {
        const open = isOpen(item.key);
        const anchorId = getAnchorId(item);
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
