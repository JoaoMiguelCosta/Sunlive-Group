import styles from "./PartnersGrid.module.css";
import useSmartAnchorNav from "../../../../../shared/hooks/useSmartAnchorNav.js";

export default function PartnersGrid({ items = [] }) {
  const { handleSmartAnchorClick: toLogos } = useSmartAnchorNav({
    targetPath: "/sunlive-group/logos",
    offset: 24,
  });

  return (
    <div className={styles.grid} role="list">
      {items.map((it) => {
        const disabled = it.disabled || !it.href;

        return (
          <a
            role="listitem"
            key={it.key}
            href={disabled ? undefined : it.href}
            className={`${styles.card} ${disabled ? styles.disabled : ""}`}
            aria-disabled={disabled ? "true" : "false"}
            tabIndex={disabled ? -1 : 0}
            onClick={disabled ? undefined : (e) => toLogos(e, it.href, false)}
          >
            <span className={styles.label}>{it.label}</span>
            {!disabled && (
              <span className={styles.arrow} aria-hidden="true">
                ➜
              </span>
            )}
            {disabled}
          </a>
        );
      })}
    </div>
  );
}
