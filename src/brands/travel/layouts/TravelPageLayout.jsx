import { Outlet } from "react-router-dom";

import styles from "./TravelPageLayout.module.css";
import TravelShell from "./TravelShell.jsx";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange.jsx";

import TravelHeaderNav from "../components/TravelHeaderNav/index.jsx";
import TravelFooter from "../components/TravelFooter/index.jsx";

export default function TravelPageLayout() {
  return (
    <TravelShell>
      <ScrollToTopOnRouteChange />

      <div className={styles.layout}>
        <TravelHeaderNav />

        <main className={styles.main}>
          <Outlet />
        </main>

        <TravelFooter />
      </div>
    </TravelShell>
  );
}
