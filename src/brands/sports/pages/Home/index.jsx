// Sunlive Sports — HomePage completa (usa Home.module.css como layout)

import styles from "./Home.module.css";
import GatewayGrid from "./GatewayGrid.jsx";

export default function HomePageSports() {
  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main
        className={styles.inner}
        role="region"
        aria-label="Sunlive Sports — Home"
      >
        <div className={styles.sections}>
         
          <GatewayGrid />


        </div>
      </main>
    </div>
  );
}
