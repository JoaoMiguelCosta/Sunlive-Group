import styles from "./ContactsGrid.module.css";
import OfficeItem from "./OfficeItem.jsx";
import useAccordion from "../../../../../../shared/hooks/useAccordion.js";
import useOpenFromHash from "../../../../../../shared/hooks/useOpenFromHash.js";

// ✅ Novo: Ícones vindos do novo config (pages/home.js)
import { groupHomePage } from "../../../../config/pages/home.js";

export default function RegionalOffices({ items = [] }) {
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

  const groupContacts = groupHomePage?.contacts;

  // Ícones do config (fallbacks seguros)
  const MailIcon = groupContacts?.icons?.Mail || (() => null);
  const PhoneIcon = groupContacts?.icons?.Phone || (() => null);

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
