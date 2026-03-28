import styles from "./HotelHighlightBanner.module.css";

function resolveThemeClass(theme) {
  if (!theme) return "";

  const normalizedTheme = theme.charAt(0).toUpperCase() + theme.slice(1);

  return styles[`theme${normalizedTheme}`] ?? "";
}

export default function HotelHighlightBanner({
  title,
  description,
  eyebrow,
  variant = "centered",
  theme = "default",
  leftIcon = null,
  rightIcon = null,
  iconsEnabled = false,
  className = "",
}) {
  if (!title && !description && !eyebrow) return null;

  const classNames = [
    styles.banner,
    styles[variant],
    resolveThemeClass(theme),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <div className={styles.inner}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

        {title ? (
          <div className={styles.titleRow}>
            {iconsEnabled && leftIcon ? (
              <span className={styles.icon} aria-hidden="true">
                {leftIcon}
              </span>
            ) : null}

            <h2 className={styles.title}>{title}</h2>

            {iconsEnabled && rightIcon ? (
              <span className={styles.icon} aria-hidden="true">
                {rightIcon}
              </span>
            ) : null}
          </div>
        ) : null}

        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </div>
  );
}
