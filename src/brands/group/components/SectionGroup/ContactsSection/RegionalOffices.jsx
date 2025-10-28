import styles from "./ContactsGrid.module.css";
import useAccordion from "./hooks/useAccordion";
import { contacts } from "../../../ConfigGroup.jsx";
import OfficeItem from "./OfficeItem.jsx";
import useOpenFromHash from "./hooks/useOpenFromHash";

export default function RegionalOffices() {
  const items = contacts?.regionalOffices || [];
  const Icons = contacts?.icons || {};
  const MailIcon = Icons.Mail || (() => null);
  const PhoneIcon = Icons.Phone || (() => null);

  const { isOpen, toggle } = useAccordion(items, { allowMultiple: true });

  // Abre automaticamente o país do hash (só 1x por hash)
  useOpenFromHash({
    routePath: "/sunlive-group",
    regex: /^#country-(.+)$/, // "#country-malta" → key="malta"
    items,
    isOpen,
    toggle,
  });

  if (!items.length) return null;

  return (
    <div className={styles.grid} role="list" data-count={items.length}>
      {items.map((it) => (
        <OfficeItem
          key={it.key}
          item={it}
          isOpen={isOpen(it.key)}
          toggle={() => toggle(it.key)}
          MailIcon={MailIcon}
          PhoneIcon={PhoneIcon}
        />
      ))}
    </div>
  );
}
