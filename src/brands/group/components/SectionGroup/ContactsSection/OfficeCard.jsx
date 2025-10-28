import styles from "./ContactsGrid.module.css";

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
      <a
        href={email ? `mailto:${email}` : undefined}
        className={styles.row}
        aria-label={email ? `Email ${email}` : "Email not available"}
        tabIndex={0}
      >
        <MailIcon className={styles.icon} />
        <span className={email ? "" : styles.muted}>{email || "—"}</span>
      </a>

      <a
        href={phone ? `tel:${telHref}` : undefined}
        className={styles.row}
        aria-label={phone ? `Call ${phone}` : "Phone not available"}
        tabIndex={0}
      >
        <PhoneIcon className={styles.icon} />
        <span className={phone ? "" : styles.muted}>{phone || "—"}</span>
      </a>
    </div>
  );
}
