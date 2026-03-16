import styles from "./HotelHighlightPill.module.css";

/**
 * HotelHighlightPill
 * Bloco premium reutilizável para frases de destaque.
 *
 * Props:
 * - children: conteúdo interno
 * - className?: classes extra
 * - as?: tag HTML opcional
 */
export default function HotelHighlightPill({
  children,
  className = "",
  as: Tag = "div",
}) {
  if (!children) return null;

  const classNames = [styles.wrap, className].filter(Boolean).join(" ");

  return (
    <Tag className={classNames}>
      <div className={styles.card}>
        <div className={styles.inner}>
          <p className={styles.text}>{children}</p>
        </div>
      </div>
    </Tag>
  );
}
