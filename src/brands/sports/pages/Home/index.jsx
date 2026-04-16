import styles from "../../layouts/SportsPageLayout.module.css"
import GatewayGrid from "./sections/GatewayGrid.jsx";

export default function HomePageSports() {
  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-home"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Página Inicial"
      >
        <div className={styles.contentFlow}>
          <GatewayGrid />
        </div>
      </main>
    </div>
  );
}
