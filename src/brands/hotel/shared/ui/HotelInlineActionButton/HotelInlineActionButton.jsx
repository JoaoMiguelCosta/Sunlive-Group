import styles from "./HotelInlineActionButton.module.css";

function isExternalHref(href = "") {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function HotelInlineActionButton({
  href,
  label,
  ariaLabel,
  className = "",
  icon = true,
  ...restProps
}) {
  if (!href || !label) return null;

  const classNames = [styles.button, className].filter(Boolean).join(" ");
  const isExternal = isExternalHref(href);

  return (
    <a
      href={href}
      aria-label={ariaLabel || label}
      className={classNames}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      {...restProps}
    >
      <span className={styles.label}>{label}</span>

      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <path
              d="M7 4L13 10L7 16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : null}
    </a>
  );
}
