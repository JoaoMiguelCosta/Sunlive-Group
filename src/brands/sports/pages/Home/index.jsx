import styles from "../../layouts/SportsPageLayout.module.css";
import GatewayGrid from "./sections/GatewayGrid.jsx";
import sportsBrand from "../../config/index.js";

export default function HomePageSports() {
  const menuSection = sportsBrand.pages?.home?.sections?.menu;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-home"
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Página Inicial"
      >
        <div className={styles.contentFlow}>
          <GatewayGrid data={menuSection} />
        </div>
      </main>
    </div>
  );
}
