import styles from "./ServiceAreaSelectorList.module.css";

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

export default function ServiceAreaSelectorList({
  areas = [],
  activeKey,
  onSelect,
  resolveIcon,
}) {
  if (!hasItems(areas)) return null;

  return (
    <nav
      className={styles.selector}
      aria-label="Lista de áreas de especialização"
    >
      <div className={styles.selectorHeader}>
        <p className={styles.kicker}>Áreas</p>
        <h3 className={styles.heading}>Selecionar especialidade</h3>
      </div>

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
