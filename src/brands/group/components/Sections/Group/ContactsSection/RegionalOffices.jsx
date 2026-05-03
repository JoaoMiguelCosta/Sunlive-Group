import styles from "./ContactsGrid.module.css";

import OfficeItem from "./OfficeItem.jsx";

import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

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

export default function RegionalOffices({ items = [] }) {
  const validItems = getValidOffices(items);

  const { isOpen, toggle } = useAccordion(validItems, {
    allowMultiple: true,
  });

  useOpenFromHash({
    routePath: "/sunlive-group",
    regex: /^#country-(.+)$/,
    items: validItems,
    isOpen,
    toggle,
  });

  if (!validItems.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={validItems.length}>
      {validItems.map((item) => (
        <OfficeItem
          key={item.key}
          item={item}
          isOpen={isOpen(item.key)}
          toggle={() => toggle(item.key)}
          MailIcon={MailIcon}
          PhoneIcon={PhoneIcon}
        />
      ))}
    </div>
  );
}
