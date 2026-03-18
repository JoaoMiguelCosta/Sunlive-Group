import styles from "./HotelHighlightBanner.module.css";

export default function HotelHighlightBanner({
  title,
  description,
  variant = "centered",
  leftIcon = null,
  rightIcon = null,
  iconsEnabled = false,
  className = "",
}) {
  if (!title && !description) return null;

  const classNames = [styles.banner, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <div className={styles.inner}>
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