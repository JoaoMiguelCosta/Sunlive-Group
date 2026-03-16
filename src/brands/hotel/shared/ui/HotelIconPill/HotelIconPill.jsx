import styles from "./HotelIconPill.module.css";

/**
 * HotelIconPill
 *
 * Props:
 * - label: string
 * - Icon?: React component
 * - as?: "div" | "button" | "a"
 * - href?: string
 * - onClick?: fn
 * - active?: boolean
 * - size?: "sm" | "md"
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

  const iconContent = Icon ? (
    <span className={styles.iconCircle} aria-hidden="true">
      <Icon className={styles.icon} />
    </span>
  ) : null;

  const textContent = <span className={styles.text}>{label}</span>;

  if (Tag === "a") {
    return (
      <a {...commonProps} href={href || "#"}>
        {iconContent}
        {textContent}
      </a>
    );
  }

  if (Tag === "button") {
    return (
      <button {...commonProps} type="button" onClick={onClick}>
        {iconContent}
        {textContent}
      </button>
    );
  }

  return (
    <div {...commonProps}>
      {iconContent}
      {textContent}
    </div>
  );
}
