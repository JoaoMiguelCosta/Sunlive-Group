import styles from "./ContactsGrid.module.css";
import disclosureStyles from "./ContactDisclosure.module.css";

import OfficeCard from "./OfficeCard.jsx";
import ScrollReveal from "../../../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";

export default function OfficeItem({
  item,
  anchorId,
  isOpen,
  toggle,
  MailIcon,
  PhoneIcon,
  staggerIndex,
}) {
  const Flag = item.Flag || (() => null);
  const panelId = `office-${item.key}`;
  const telHref = (item.phone || "").replace(/\s+/g, "");
  const itemId = anchorId || `pais-${item.key}`;

  return (
    <ScrollReveal
      as="div"
      role="listitem"
      className={styles.item}
      id={itemId}
      staggerIndex={staggerIndex}
    >
      <button
        type="button"
        className={disclosureStyles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <Flag className={styles.flag} aria-hidden="true" />

        <span className={disclosureStyles.pillText}>{item.label}</span>

        <span className={disclosureStyles.caret} aria-hidden="true">
          ⌄
        </span>
      </button>

      {isOpen ? (
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
    </ScrollReveal>
  );
}
