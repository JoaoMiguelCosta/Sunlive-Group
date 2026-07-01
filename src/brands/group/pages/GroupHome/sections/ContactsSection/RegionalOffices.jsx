import { useMemo } from "react";

import styles from "./ContactsGrid.module.css";

import OfficeItem from "./OfficeItem.jsx";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";
import { isValidText } from "../../../../shared/utils/contentGuards.js";

import { GROUP_CONTACTS } from "../../../../config/core/contacts.js";
import { GROUP_BASE_PATH } from "../../../../config/core/paths.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);
const REGIONAL_OFFICE_ANCHOR_PREFIX = "pais-";

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
  return item.slug;
}

function getOfficeAnchorId(item) {
  return item.anchorId;
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
    routePath: GROUP_BASE_PATH,
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
