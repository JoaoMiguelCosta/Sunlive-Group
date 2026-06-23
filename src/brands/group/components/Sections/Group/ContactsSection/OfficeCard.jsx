import styles from "./ContactsGrid.module.css";
import ContactRow from "./ContactRow.jsx";

export default function OfficeCard({
  id,
  label,
  email,
  phone,
  telHref,
  MailIcon,
  PhoneIcon,
}) {
  return (
    <div
      id={id}
      className={styles.card}
      role="region"
      aria-label={`${label} contacts`}
    >
      <ContactRow
        href={`mailto:${email}`}
        label={`Email ${email}`}
        mutedLabel="Email not available"
        value={email}
        Icon={MailIcon}
      />

      <ContactRow
        href={`tel:${telHref}`}
        label={`Call ${phone}`}
        mutedLabel="Phone not available"
        value={phone}
        Icon={PhoneIcon}
      />
    </div>
  );
}
