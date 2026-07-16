import { useMemo } from "react";

import styles from "./ContactsGrid.module.css";

import OfficeItem from "./OfficeItem.jsx";

import { isValidText } from "../../../../shared/utils/contentGuards.js";

import { GROUP_CONTACTS } from "../../../../config/core/contacts.js";
import { GROUP_BASE_PATH } from "../../../../config/core/paths.js";

import useContactsAccordionHash from "./useContactsAccordionHash.js";

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

export default function RegionalOffices({ items = [] }) {
  const validItems = useMemo(() => getValidOffices(items), [items]);

  const { isOpen, toggle } = useContactsAccordionHash({
    items: validItems,
    prefix: REGIONAL_OFFICE_ANCHOR_PREFIX,
    routePath: GROUP_BASE_PATH,
  });

  if (!validItems.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={validItems.length}>
      {validItems.map((item, index) => (
        <OfficeItem
          key={item.key}
          item={item}
          anchorId={item.anchorId}
          isOpen={isOpen(item.key)}
          toggle={() => toggle(item.key)}
          MailIcon={MailIcon}
          PhoneIcon={PhoneIcon}
          staggerIndex={index}
        />
      ))}
    </div>
  );
}
