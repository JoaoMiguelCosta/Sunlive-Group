import { Link } from "react-router-dom";

import styles from "./ModalityActions.module.css";

import {
  getBookByKey,
  getValidArray,
  isExternalHref,
  isValidText,
  shouldUseNativeAnchor,
} from "./modalityDetailUtils.js";

function BaseLink({
  href,
  ariaLabel,
  className,
  children,
  openInNewTab = false,
}) {
  if (!isValidText(href)) return null;

  if (shouldUseNativeAnchor(href)) {
    return (
      <a
        className={className}
        href={href}
        aria-label={ariaLabel}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={href} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

function ExternalArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.inlineIcon}>
      <path
        d="M6 14 14 6M8 6h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={styles.inlineIcon}>
      <path
        d="M6 4.75A2.75 2.75 0 0 1 8.75 2h5.5A1.75 1.75 0 0 1 16 3.75v10.5A1.75 1.75 0 0 1 14.25 16h-5.5A2.75 2.75 0 0 0 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 4.75v13.5M6 18H4.75A1.75 1.75 0 0 1 3 16.25v-9.5A1.75 1.75 0 0 1 4.75 5H6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
      <path
        d="M13.3 20v-7h2.4l.4-2.9h-2.8V8.35c0-.84.24-1.4 1.45-1.4H16V4.35c-.22-.03-.98-.1-1.86-.1-1.84 0-3.1 1.12-3.1 3.18v2.67H8.5V13h2.54v7h2.26Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PrimaryActionLink({
  href,
  label,
  ariaLabel,
  variant = "secondary",
  icon = null,
  openInNewTab = false,
}) {
  if (!isValidText(href) || !isValidText(label)) return null;

  const className =
    variant === "primary" ? styles.actionButtonPrimary : styles.actionButton;

  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel || label}
      className={className}
      openInNewTab={openInNewTab}
    >
      <span className={styles.actionLabel}>{label}</span>

      {icon ? <span className={styles.actionIconWrap}>{icon}</span> : null}
    </BaseLink>
  );
}

function BookActionLink({ bookKey, label = "Abrir Book" }) {
  const book = getBookByKey(bookKey);

  if (!book) return null;

  return (
    <PrimaryActionLink
      href={book.href}
      label={label}
      ariaLabel={`Abrir book ${book.label || label}`}
      variant="primary"
      icon={<BookIcon />}
      openInNewTab
    />
  );
}

function SocialActionLink({ href, network, title }) {
  if (!isValidText(href) || !isValidText(network)) return null;

  const isInstagram = network === "instagram";
  const labelBase = isValidText(title) ? title : "projeto";
  const ariaLabel = isInstagram
    ? `Abrir Instagram de ${labelBase}`
    : `Abrir Facebook de ${labelBase}`;

  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      className={styles.socialButton}
      openInNewTab
    >
      {isInstagram ? <InstagramIcon /> : <FacebookIcon />}
    </BaseLink>
  );
}

export default function ModalityActions({
  websiteHref,
  websiteLabel,
  websiteAriaLabel,
  bookKey,
  bookLabel,
  instagramHref,
  facebookHref,
  title,
  links = [],
}) {
  const customLinks = getValidArray(links).filter(
    (link) => isValidText(link?.href) && isValidText(link?.label),
  );

  const hasWebsite = isValidText(websiteHref);
  const hasBook = isValidText(bookKey);
  const hasInstagram = isValidText(instagramHref);
  const hasFacebook = isValidText(facebookHref);

  if (
    customLinks.length === 0 &&
    !hasWebsite &&
    !hasBook &&
    !hasInstagram &&
    !hasFacebook
  ) {
    return null;
  }

  return (
    <div className={styles.actionRow}>
      <div className={styles.mainActions}>
        {customLinks.map((link) => (
          <PrimaryActionLink
            key={`${link.label}-${link.href}`}
            href={link.href}
            label={link.label}
            ariaLabel={link.ariaLabel}
            variant={link.variant || "secondary"}
            icon={link.icon === "external" ? <ExternalArrowIcon /> : null}
            openInNewTab={link.openInNewTab ?? isExternalHref(link.href)}
          />
        ))}

        {hasWebsite ? (
          <PrimaryActionLink
            href={websiteHref}
            label={websiteLabel || "Ver mais"}
            ariaLabel={websiteAriaLabel || `Ver mais sobre ${title}`}
            variant="secondary"
            icon={<ExternalArrowIcon />}
            openInNewTab={isExternalHref(websiteHref)}
          />
        ) : null}

        {hasBook ? (
          <BookActionLink bookKey={bookKey} label={bookLabel || "Abrir Book"} />
        ) : null}
      </div>

      {hasInstagram || hasFacebook ? (
        <div className={styles.socialActions}>
          {hasInstagram ? (
            <SocialActionLink
              href={instagramHref}
              network="instagram"
              title={title}
            />
          ) : null}

          {hasFacebook ? (
            <SocialActionLink
              href={facebookHref}
              network="facebook"
              title={title}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
