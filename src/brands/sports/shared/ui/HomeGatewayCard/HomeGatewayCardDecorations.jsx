import styles from "./HomeGatewayCard.module.css";

export default function HomeGatewayCardDecorations() {
  return (
    <>
      <span className={styles.cornerGlow} aria-hidden="true" />
      <span className={styles.energyLine} aria-hidden="true" />
    </>
  );
}
