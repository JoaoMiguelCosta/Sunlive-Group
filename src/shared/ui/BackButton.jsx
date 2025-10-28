import { memo } from "react";
import styles from "./BackButton.module.css";

/**
 * Botão reutilizável “Voltar”
 * - Usa <a> por defeito; se preferires react-router, troca externamente.
 */
function BackButton({ href = "/", label = "Voltar", className = "" }) {
  return (
    <a href={href} className={`${styles.button} ${className}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
        <path
          d="M14.7 6.3a1 1 0 0 1 0 1.4L10.41 12l4.3 4.3a1 1 0 1 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.41 0z"
          fill="currentColor"
        />
      </svg>
      <span className={styles.label}>{label}</span>
    </a>
  );
}

export default memo(BackButton);
