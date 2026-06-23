import home from "../../config/pages/home.js";

import styles from "../../layouts/SportsPageLayout.module.css";

import GatewayGrid from "./sections/GatewayGrid.jsx";

export default function HomePageSports() {
  const menuSection = home.sections?.menu;

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        id="sports-home"
        className={styles.inner}
        aria-label="Sunlive Sports — Página Inicial"
      >
        <div className={styles.contentFlow}>
          <GatewayGrid data={menuSection} />
        </div>
      </main>
    </div>
  );
}

