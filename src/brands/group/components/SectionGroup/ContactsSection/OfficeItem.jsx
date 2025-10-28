import styles from "./ContactsGrid.module.css";
import OfficeCard from "./OfficeCard.jsx";

export default function OfficeItem({
  item,
  isOpen,
  toggle,
  MailIcon,
  PhoneIcon,
}) {
  const Flag = item.Flag || (() => null);
  const telHref = (item.phone || "").replace(/\s+/g, "");

  return (
    <div role="listitem" className={styles.item} id={`country-${item.key}`}>
      <button
        type="button"
        className={styles.pill}
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`office-${item.key}`}
      >
        <Flag className={styles.flag} />
        <span className={styles.pillText}>{item.label}</span>
        <span className={styles.caret} aria-hidden>
          ➜
        </span>
      </button>

      {isOpen && (
        <OfficeCard
          id={`office-${item.key}`}
          label={item.label}
          email={item.email}
          phone={item.phone}
          telHref={telHref}
          MailIcon={MailIcon}
          PhoneIcon={PhoneIcon}
        />
      )}
    </div>
  );
}
