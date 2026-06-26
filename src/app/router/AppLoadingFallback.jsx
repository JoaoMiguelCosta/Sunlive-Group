import styles from "./AppLoadingFallback.module.css";

export default function AppLoadingFallback() {
  return (
    <div className={styles.root} role="status">
      <span className={styles.text}>A carregar…</span>
    </div>
  );
}
