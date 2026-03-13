import styles from "./HotelInlineActionButton.module.css";

export default function HotelInlineActionButton({
  href,
  label,
  ariaLabel,
  className = "",
  icon = true,
}) {
  if (!href || !label) return null;

  const classNames = [styles.button, className].filter(Boolean).join(" ");

  return (
    <a href={href} aria-label={ariaLabel || label} className={classNames}>
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
