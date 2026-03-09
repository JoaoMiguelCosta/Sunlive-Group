import styles from "./ContactsGrid.module.css";
import OfficeItem from "./OfficeItem.jsx";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../shared/hooks/useOpenFromHash.js";

import { GROUP_CONTACTS } from "../../../../config/index.js";

const MailIcon = GROUP_CONTACTS?.icons?.Mail || (() => null);
const PhoneIcon = GROUP_CONTACTS?.icons?.Phone || (() => null);

export default function RegionalOffices({ items = [] }) {
  const { isOpen, toggle } = useAccordion(items, { allowMultiple: true });

  useOpenFromHash({
    routePath: "/sunlive-group",
    regex: /^#country-(.+)$/,
    items,
    isOpen,
    toggle,
  });

  if (!items.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={items.length}>
      {items.map((item) => (
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
