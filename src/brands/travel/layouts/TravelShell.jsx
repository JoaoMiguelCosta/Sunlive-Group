import styles from "./TravelShell.module.css";

export default function TravelShell({ children }) {
  return (
    <div className={styles.shell} data-brand="travel" data-shell="travel">
      {children}
    </div>
  );
}
