import { Link } from "react-router-dom";

import styles from "./ModalityActions.module.css";

import { getValidArray, isValidText } from "./modalityDetailUtils.js";

function isExternalHref(href) {
  return /^(https?:)?\/\//i.test(href);
}

function isHashHref(href) {
  return typeof href === "string" && href.startsWith("#");
}

function resolveBookHref(bookKey) {
  if (!isValidText(bookKey)) return "";

  if (
    isExternalHref(bookKey) ||
    bookKey.startsWith("/") ||
    bookKey.startsWith("#")
  ) {
    return bookKey;
  }

  return `/book/${bookKey}`;
}

function getValidLinks(links) {
  return getValidArray(links).filter(
    (link) => isValidText(link?.href) && isValidText(link?.label),
  );
}

function ArrowUpRightIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.25 13.75 13.75 6.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 6.25h6.25v6.25"
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
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 4.75h6.25A1.75 1.75 0 0 1 14 6.5v8.75H7.75A1.75 1.75 0 0 0 6 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 4.75A1.75 1.75 0 0 0 4.25 6.5v8.75A1.75 1.75 0 0 1 6 17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 15.25h1.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.25 20v-7h2.35l.4-3h-2.75V8.2c0-.87.24-1.46 1.49-1.46H16.1V4.05c-.24-.03-1.06-.1-2.01-.1-1.99 0-3.34 1.21-3.34 3.45V10H8.5v3h2.25v7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BaseActionLink({
  href,
  ariaLabel,
  className,
  children,
  title,
  newTab = false,
}) {
  if (!isValidText(href)) return null;

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        aria-label={ariaLabel || title}
        title={title}
        className={className}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer noopener" : undefined}
      >
        {children}
      </a>
    );
  }

  if (isHashHref(href)) {
    return (
      <a
        href={href}
        aria-label={ariaLabel || title}
        title={title}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      aria-label={ariaLabel || title}
      title={title}
      className={className}
    >
      {children}
    </Link>
  );
}

function SecondaryActionButton({
  href,
  label,
  ariaLabel,
  title,
  newTab = false,
}) {
  if (!isValidText(href) || !isValidText(label)) return null;

  return (
    <BaseActionLink
      href={href}
      ariaLabel={ariaLabel}
      title={title || label}
      className={styles.actionButton}
      newTab={newTab}
    >
      <span className={styles.actionLabel}>{label}</span>
      <span className={styles.actionIconWrap} aria-hidden="true">
        <ArrowUpRightIcon className={styles.inlineIcon} />
      </span>
    </BaseActionLink>
  );
}

function PrimaryActionButton({
  href,
  label,
  ariaLabel,
  title,
  newTab = false,
}) {
  if (!isValidText(href) || !isValidText(label)) return null;

  return (
    <BaseActionLink
      href={href}
      ariaLabel={ariaLabel}
      title={title || label}
      className={styles.actionButtonPrimary}
      newTab={newTab}
    >
      <span className={styles.actionLabel}>{label}</span>
      <span className={styles.actionIconWrap} aria-hidden="true">
        <BookIcon className={styles.inlineIcon} />
      </span>
    </BaseActionLink>
  );
}

function SocialActionButton({
  href,
  ariaLabel,
  title,
  icon: Icon,
  newTab = true,
}) {
  if (!isValidText(href) || !Icon) return null;

  return (
    <BaseActionLink
      href={href}
      ariaLabel={ariaLabel}
      title={title}
      className={styles.socialButton}
      newTab={newTab}
    >
      <Icon className={styles.socialIcon} />
    </BaseActionLink>
  );
}

export default function ModalityActions({
  title,
  websiteHref,
  websiteLabel,
  websiteAriaLabel,
  bookKey,
  bookLabel,
  instagramHref,
  facebookHref,
  links,
}) {
  const validLinks = getValidLinks(links);
  const resolvedBookHref = resolveBookHref(bookKey);

  const hasWebsiteAction = isValidText(websiteHref);
  const hasBookAction = isValidText(resolvedBookHref);
  const hasSocialActions =
    isValidText(instagramHref) || isValidText(facebookHref);
  const hasCustomLinks = validLinks.length > 0;

  if (
    !hasWebsiteAction &&
    !hasBookAction &&
    !hasSocialActions &&
    !hasCustomLinks
  ) {
    return null;
  }

  const fallbackWebsiteLabel = "Ver mais";
  const fallbackBookLabel = "Abrir Book";
  const baseTitle = isValidText(title) ? title : "projeto";

  return (
    <div className={styles.actionRow}>
      <div className={styles.mainActions}>
        {hasWebsiteAction ? (
          <SecondaryActionButton
            href={websiteHref}
            label={
              isValidText(websiteLabel) ? websiteLabel : fallbackWebsiteLabel
            }
            ariaLabel={
              isValidText(websiteAriaLabel)
                ? websiteAriaLabel
                : `Abrir página de ${baseTitle}`
            }
            title={
              isValidText(websiteLabel) ? websiteLabel : fallbackWebsiteLabel
            }
            newTab={isExternalHref(websiteHref)}
          />
        ) : null}

        {hasBookAction ? (
          <PrimaryActionButton
            href={resolvedBookHref}
            label={isValidText(bookLabel) ? bookLabel : fallbackBookLabel}
            ariaLabel={`Abrir book de ${baseTitle}`}
            title={isValidText(bookLabel) ? bookLabel : fallbackBookLabel}
            newTab={isExternalHref(resolvedBookHref)}
          />
        ) : null}

        {hasCustomLinks
          ? validLinks.map((link, index) => {
              const key = isValidText(link.key)
                ? link.key
                : `${link.label}-${link.href}-${index}`;

              const variant =
                link.variant === "primary" ? "primary" : "default";

              if (variant === "primary") {
                return (
                  <PrimaryActionButton
                    key={key}
                    href={link.href}
                    label={link.label}
                    ariaLabel={link.ariaLabel}
                    title={link.label}
                    newTab={
                      typeof link.newTab === "boolean"
                        ? link.newTab
                        : isExternalHref(link.href)
                    }
                  />
                );
              }

              return (
                <SecondaryActionButton
                  key={key}
                  href={link.href}
                  label={link.label}
                  ariaLabel={link.ariaLabel}
                  title={link.label}
                  newTab={
                    typeof link.newTab === "boolean"
                      ? link.newTab
                      : isExternalHref(link.href)
                  }
                />
              );
            })
          : null}
      </div>

      {hasSocialActions ? (
        <div className={styles.socialActions}>
          {isValidText(instagramHref) ? (
            <SocialActionButton
              href={instagramHref}
              ariaLabel={`Abrir Instagram de ${baseTitle}`}
              title="Instagram"
              icon={InstagramIcon}
            />
          ) : null}

          {isValidText(facebookHref) ? (
            <SocialActionButton
              href={facebookHref}
              ariaLabel={`Abrir Facebook de ${baseTitle}`}
              title="Facebook"
              icon={FacebookIcon}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
