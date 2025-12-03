// src/shared/components/hotel/HotelHighlightPill.jsx
import styles from "./HotelHighlightPill.module.css";

/**
 * HotelHighlightPill
 * Card em forma de "pill" para frases de destaque
 * (Sport & Nature, citações, etc.)
 *
 * Uso:
 *  <HotelHighlightPill>
 *    O seu conceito <strong>"Sport & Nature"</strong> traduz o equilíbrio...
 *  </HotelHighlightPill>
 */
export default function HotelHighlightPill({ children, className = "" }) {
  if (!children) return null;

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}
