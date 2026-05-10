import { useMemo } from "react";

import styles from "./ContactsGrid.module.css";

import OfficeItem from "./OfficeItem.jsx";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

const GROUP_ROUTE_PATH = "/sunlive-group";
const REGIONAL_OFFICE_ANCHOR_PREFIX = "pais-";
const HASH_OPEN_DELAY = 220;
const HASH_SCROLL_OFFSET = 24;

const REGIONAL_OFFICE_SLUGS_PT = {
  malta: "malta",
  qatar: "catar",
  kuwait: "kuwait",
  lebanon: "libano",
  iraq: "iraque",
};

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidOffice(item) {
  return (
    item &&
    typeof item === "object" &&
    isValidText(item.key) &&
    isValidText(item.label)
  );
}

function getValidOffices(items) {
  return Array.isArray(items) ? items.filter(isValidOffice) : [];
}

function getOfficeSlug(item) {
  if (isValidText(item?.slug)) return item.slug;

  return REGIONAL_OFFICE_SLUGS_PT[item.key] ?? item.key;
}

function getOfficeAnchorId(item) {
  if (isValidText(item?.anchorId)) return item.anchorId;

  return `${REGIONAL_OFFICE_ANCHOR_PREFIX}${getOfficeSlug(item)}`;
}

function getOfficeHashKey(item) {
  const anchorId = getOfficeAnchorId(item);

  if (anchorId.startsWith(REGIONAL_OFFICE_ANCHOR_PREFIX)) {
    return anchorId.slice(REGIONAL_OFFICE_ANCHOR_PREFIX.length);
  }

  return getOfficeSlug(item);
}

function getOfficeByHashKey(items, hashKey) {
  if (!isValidText(hashKey)) return null;

  return (
    items.find((item) => getOfficeHashKey(item) === hashKey) ||
    items.find((item) => getOfficeSlug(item) === hashKey) ||
    null
  );
}

export default function RegionalOffices({ items = [] }) {
  const validItems = useMemo(() => getValidOffices(items), [items]);

  const hashItems = useMemo(
    () =>
      validItems.map((item) => ({
        ...item,
        key: getOfficeHashKey(item),
      })),
    [validItems],
  );

  const { isOpen, toggle } = useAccordion(validItems, {
    allowMultiple: true,
  });

  useOpenFromHash({
    routePath: GROUP_ROUTE_PATH,
    regex: /^#pais-(.+)$/,
    items: hashItems,
    isOpen: (hashKey) => {
      const item = getOfficeByHashKey(validItems, hashKey);

      return item ? isOpen(item.key) : false;
    },
    toggle: (hashKey) => {
      const item = getOfficeByHashKey(validItems, hashKey);

      if (item) toggle(item.key);
    },
    delay: HASH_OPEN_DELAY,
    offset: HASH_SCROLL_OFFSET,
  });

  if (!validItems.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={validItems.length}>
      {validItems.map((item) => (
        <OfficeItem
          key={item.key}
          item={item}
          anchorId={getOfficeAnchorId(item)}
          isOpen={isOpen(item.key)}
          toggle={() => toggle(item.key)}
          MailIcon={MailIcon}
          PhoneIcon={PhoneIcon}
        />
      ))}
    </div>
  );
}
