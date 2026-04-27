import styles from "./SportsFeatureCardFooter.module.css";

import {
  BookIcon,
  ExternalArrowIcon,
  FacebookIcon,
  InstagramIcon,
} from "./SportsFeatureCard.icons.jsx";

const ACTION_ICON_MAP = {
  external: ExternalArrowIcon,
  book: BookIcon,
};

const SOCIAL_ICON_MAP = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

function getExternalAttributes(isExternal) {
  if (!isExternal) return {};

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}

function ActionButton({ action }) {
  const Icon = ACTION_ICON_MAP[action.icon];
  const variantClass =
    action.variant === "primary" ? styles.ctaPrimary : styles.ctaSecondary;

  return (
    <a
      className={`${styles.ctaButton} ${variantClass}`}
      href={action.href}
      aria-label={action.ariaLabel}
      {...getExternalAttributes(action.external)}
    >
      <span>{action.label}</span>
      {Icon ? <Icon className={styles.ctaIcon} /> : null}
    </a>
  );
}

function SocialLink({ social }) {
  const Icon = SOCIAL_ICON_MAP[social.icon];

  if (!Icon) return null;

  return (
    <a
      className={styles.socialLink}
      href={social.href}
      title={social.label}
      aria-label={social.ariaLabel || social.label}
      {...getExternalAttributes(social.external)}
    >
      <Icon className={styles.socialIcon} />
    </a>
  );
}

export default function SportsFeatureCardFooter({
  actions = [],
  socials = [],
}) {
  if (!actions.length && !socials.length) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.actions}>
        {actions.map((action) => (
          <ActionButton key={action.key || action.href} action={action} />
        ))}

        {socials.map((social) => (
          <SocialLink key={social.key || social.href} social={social} />
        ))}
      </div>
    </footer>
  );
}
