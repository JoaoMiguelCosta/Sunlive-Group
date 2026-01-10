import styles from "./HotelIconPill.module.css";

/**
 * HotelIconPill (Performance Prestige)
 *
 * Props:
 * - label: string (texto do pill)
 * - Icon?: React component (ex: ICONS.BathIcon)
 * - as?: "div" | "button" | "a"  (default "div")
 * - href?: string (apenas quando as="a")
 * - onClick?: fn (apenas quando as="button")
 * - active?: boolean
 * - size?: "sm" | "md" (default "md")
 * - className?: string
 * - ariaLabel?: string
 */
export default function HotelIconPill({
  label,
  Icon,
  as: Tag = "div",
  href,
  onClick,
  active = false,
  size = "md",
  className = "",
  ariaLabel,
}) {
  if (!label) return null;

  const sizeClass = styles[size] ?? styles.md;

  const cls = [styles.pill, sizeClass, active ? styles.active : "", className]
    .filter(Boolean)
    .join(" ");

  const commonProps = {
    className: cls,
    "aria-label": ariaLabel || label,
  };

  if (Tag === "a") {
    return (
      <a {...commonProps} href={href || "#"}>
        {Icon ? <Icon className={styles.icon} aria-hidden="true" /> : null}
        <span className={styles.text}>{label}</span>
      </a>
    );
  }

  if (Tag === "button") {
    return (
      <button {...commonProps} type="button" onClick={onClick}>
        {Icon ? <Icon className={styles.icon} aria-hidden="true" /> : null}
        <span className={styles.text}>{label}</span>
      </button>
    );
  }

  return (
    <div {...commonProps}>
      {Icon ? <Icon className={styles.icon} aria-hidden="true" /> : null}
      <span className={styles.text}>{label}</span>
    </div>
  );
}
