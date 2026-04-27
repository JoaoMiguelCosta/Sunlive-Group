import styles from "./SportsAreasSelectorList.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function SportsAreasSelectorList({
  areas = [],
  activeKey,
  onSelect,
  resolveIcon,
  ariaLabel,
  kicker,
  title,
}) {
  if (!hasItems(areas)) return null;

  return (
    <nav className={styles.selector} aria-label={ariaLabel}>
      {(kicker || title) && (
        <div className={styles.selectorHeader}>
          {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
          {title ? <h3 className={styles.heading}>{title}</h3> : null}
        </div>
      )}

      <ul className={styles.list}>
        {areas.map((area) => {
          const isActive = area.key === activeKey;
          const icon = resolveIcon ? resolveIcon(area.iconKey) : null;

          return (
            <li key={area.key} className={styles.item}>
              <button
                type="button"
                className={styles.trigger}
                data-active={isActive ? "true" : "false"}
                aria-pressed={isActive}
                onClick={() => onSelect(area.key)}
              >
                <span className={styles.triggerInner}>
                  {icon ? (
                    <span className={styles.iconWrap} aria-hidden="true">
                      {icon}
                    </span>
                  ) : null}

                  <span className={styles.textWrap}>
                    <span className={styles.title}>
                      {area.navLabel || area.title}
                    </span>

                    {area.eyebrow ? (
                      <span className={styles.eyebrow}>{area.eyebrow}</span>
                    ) : null}
                  </span>
                </span>

                <span className={styles.statusDot} aria-hidden="true" />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
