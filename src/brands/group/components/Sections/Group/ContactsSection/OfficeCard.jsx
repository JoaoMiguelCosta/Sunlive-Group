import styles from "./ContactsGrid.module.css";

function isValidText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function ContactRow({ href, label, value, mutedLabel, Icon }) {
  const hasValue = isValidText(value);

  if (!hasValue) {
    return (
      <span className={styles.row} aria-label={mutedLabel} aria-disabled="true">
        <Icon className={styles.icon} width={20} height={20} />
        <span className={styles.muted}>—</span>
      </span>
    );
  }

  return (
    <a href={href} className={styles.row} aria-label={label}>
      <Icon className={styles.icon} width={20} height={20} />
      <span>{value}</span>
    </a>
  );
}

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
