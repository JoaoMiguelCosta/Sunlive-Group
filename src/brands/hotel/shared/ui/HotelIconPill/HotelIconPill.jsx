import styles from "./HotelIconPill.module.css";

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
  iconClassName = "",
  iconCircleClassName = "",
  ...restProps
}) {
  if (!label) return null;

  const sizeClass = styles[size] ?? styles.md;

  const classNames = [
    styles.pill,
    sizeClass,
    active ? styles.active : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconCircleClassNames = [styles.iconCircle, iconCircleClassName]
    .filter(Boolean)
    .join(" ");

  const iconClassNames = [styles.icon, iconClassName].filter(Boolean).join(" ");

  const commonProps = {
    className: classNames,
    "aria-label": ariaLabel || label,
    ...restProps,
  };

  const iconContent = Icon ? (
    <span className={iconCircleClassNames} aria-hidden="true">
      <Icon className={iconClassNames} />
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
