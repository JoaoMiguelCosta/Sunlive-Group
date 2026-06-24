import styles from "./ContactsGrid.module.css";

import OfficeCard from "./OfficeCard.jsx";

export default function OfficeItem({
  item,
  anchorId,
  isOpen,
  toggle,
  MailIcon,
  PhoneIcon,
}) {
  const Flag = item.Flag || (() => null);
  const panelId = `office-${item.key}`;
  const telHref = (item.phone || "").replace(/\s+/g, "");
  const itemId = anchorId || `pais-${item.key}`;

  return (
    <div role="listitem" className={styles.item} id={itemId}>
      <button
        type="button"
        className={styles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <Flag className={styles.flag} aria-hidden="true" />

        <span className={styles.pillText}>{item.label}</span>

        <span className={styles.caret} aria-hidden="true">
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
    </div>
  );
}
