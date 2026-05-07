import styles from "./RoomProfileFilterBar.module.css";

export default function RoomProfileFilterBar({
  label = "Filtrar por quarto",
  ariaLabel = "Filtro por tipologia de quarto",
  options = [],
  active = "all",
  onChange,
  className = "",
}) {
  if (!options.length) return null;

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path
                d="M3 5h18l-7 8v5l-4 2v-7L3 5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span className={styles.label}>{label}:</span>
        </div>

        <div className={styles.chipsScroller}>
          <div className={styles.chips} role="group" aria-label={ariaLabel}>
            {options.map((option) => {
              const isActive = option.id === active;

              return (
                <button
                  key={option.id}
                  type="button"
                  className={[styles.chip, isActive ? styles.active : ""]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    if (!isActive) onChange?.(option.id);
                  }}
                  aria-pressed={isActive}
                >
                  <span className={styles.chipLabel}>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
