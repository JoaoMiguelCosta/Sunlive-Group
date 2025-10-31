// src/brands/travel/components/TravelHeaderNav/HeaderShell.jsx
import styles from "./HeaderShell.module.css";

export default function HeaderShell({ className = "", children }) {
  const mergedClass = className ? `${styles.shell} ${className}` : styles.shell;

  return (
    <div
      className={mergedClass}
      data-theme="prestige-noir"
      data-brand="travel"
      role="banner"
    >
      {children}
    </div>
  );
}
