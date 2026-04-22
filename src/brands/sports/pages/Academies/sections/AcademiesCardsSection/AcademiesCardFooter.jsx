import styles from "./AcademiesCardFooter.module.css";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.5A3.25 3.25 0 0 0 4.5 7.75v8.5A3.25 3.25 0 0 0 7.75 19.5h8.5a3.25 3.25 0 0 0 3.25-3.25v-8.5A3.25 3.25 0 0 0 16.25 4.5h-8.5Zm8.9 1.15a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M13.25 21v-7.52h2.53l.38-2.93h-2.91V8.68c0-.85.24-1.43 1.45-1.43H16.3V4.63a19.7 19.7 0 0 0-2.33-.12c-2.3 0-3.88 1.4-3.88 3.98v2.06H7.5v2.93h2.59V21h3.16Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ExternalArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M6.75 4.5h8.8a2.95 2.95 0 0 1 2.95 2.95v10.8a.75.75 0 0 1-.75.75h-9.5a2.75 2.75 0 0 0 0-5.5h8.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 4.5A2.25 2.25 0 0 0 4.5 6.75v10a2.25 2.25 0 0 0 2.25 2.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({ href, label, children }) {
  if (!href) return null;

  return (
    <a
      className={styles.socialLink}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  );
}

function CTAButton({ href, label, variant = "secondary", icon = null }) {
  if (!href || !label) return null;

  const variantClass =
    variant === "primary" ? styles.ctaPrimary : styles.ctaSecondary;

  return (
    <a
      className={`${styles.ctaButton} ${variantClass}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>{label}</span>
      {icon}
    </a>
  );
}

export default function AcademiesCardFooter({
  moreHref,
  moreLabel,
  bookHref,
  bookLabel,
  instagramHref,
  instagramLabel = "Instagram",
  facebookHref,
  facebookLabel = "Facebook",
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.actions}>
        <CTAButton
          href={moreHref}
          label={moreLabel}
          variant="secondary"
          icon={<ExternalArrowIcon className={styles.ctaIcon} />}
        />

        <CTAButton
          href={bookHref}
          label={bookLabel}
          variant="primary"
          icon={<BookIcon className={styles.ctaIcon} />}
        />

        <SocialLink href={instagramHref} label={instagramLabel}>
          <InstagramIcon className={styles.socialIcon} />
        </SocialLink>

        <SocialLink href={facebookHref} label={facebookLabel}>
          <FacebookIcon className={styles.socialIcon} />
        </SocialLink>
      </div>
    </footer>
  );
}
