// src/shared/components/Sports/ValuePillsBar/ValuePillsBar.jsx
import styles from "./ValuePillsBar.module.css";

/**
 * Barra de "pills" de valor / benefícios.
 *
 * Props:
 * - items: Array<{
 *     key: string;
 *     label: string;
 *     Icon?: React.ComponentType<any>;
 *   }>
 * - align?: "left" | "center" | "right" (default: "center")
 */
export default function ValuePillsBar({ items = [], align = "center" }) {
  if (!items.length) return null;

  const justifyClass =
    align === "left"
      ? styles.alignLeft
      : align === "right"
        ? styles.alignRight
        : styles.alignCenter;

  return (
    <section
      className={styles.wrap}
      aria-label="Pilares de valor — Training Camps Sunlive Sports"
    >
      <div className={`${styles.inner} ${justifyClass}`}>
        {items.map(({ key, label, Icon }) => (
          <div key={key} className={styles.pill}>
            {Icon && (
              <span className={styles.iconCircle}>
                <Icon aria-hidden="true" />
              </span>
            )}
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
