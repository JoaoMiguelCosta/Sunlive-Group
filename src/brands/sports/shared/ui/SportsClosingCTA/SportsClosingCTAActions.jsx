import { Link } from "react-router-dom";
import styles from "./SportsClosingCTAActions.module.css";
import { resolveLinkType } from "./sportsClosingCTA.utils.js";

function SportsClosingCTAActionLink({ action, variant }) {
  const href = action?.href ?? "";
  const label = action?.label ?? "";

  if (!href || !label) return null;

  const linkType = resolveLinkType(href);
  const className = [
    styles.action,
    variant === "primary" ? styles.primaryAction : styles.secondaryAction,
  ]
    .filter(Boolean)
    .join(" ");

  const ariaLabel = action.ariaLabel || label;

  if (linkType === "external") {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  if (linkType === "special" || linkType === "hash") {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {label}
      </a>
    );
  }

  if (linkType === "internal") {
    return (
      <Link to={href} className={className} aria-label={ariaLabel}>
        {label}
      </Link>
    );
  }

  return (
    <span className={className} aria-label={ariaLabel}>
      {label}
    </span>
  );
}

export default function SportsClosingCTAActions({
  primaryAction,
  secondaryAction,
}) {
  return (
    <div className={styles.actions}>
      <SportsClosingCTAActionLink action={primaryAction} variant="primary" />

      <SportsClosingCTAActionLink
        action={secondaryAction}
        variant="secondary"
      />
    </div>
  );
}
