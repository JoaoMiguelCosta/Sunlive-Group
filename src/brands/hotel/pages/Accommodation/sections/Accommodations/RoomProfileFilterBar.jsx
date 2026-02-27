import styles from "./RoomProfileFilterBar.module.css";

export default function RoomProfileFilterBar({
  label = "Filtrar por perfil",
  options = [],
  active = "all",
  onChange,
  className = "",
}) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.icon} aria-hidden="true">
            {/* funnel */}
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path
                d="M3 5h18l-7 8v5l-4 2v-7L3 5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.label}>{label} :</span>
        </div>

        <div className={styles.chips} role="tablist" aria-label={label}>
          {options.map((opt) => {
            const isActive = opt.id === active;
            return (
              <button
                key={opt.id}
                type="button"
                className={[styles.chip, isActive ? styles.active : ""].join(
                  " "
                )}
                onClick={() => onChange?.(opt.id)}
                role="tab"
                aria-selected={isActive}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
