import { Outlet } from "react-router-dom";

import styles from "./TravelPageLayout.module.css";
import TravelShell from "./TravelShell.jsx";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange.jsx";

import TravelHeaderNav from "./TravelHeaderNav/index.jsx";
import TravelFooter from "../components/TravelFooter/index.jsx";

export default function TravelPageLayout() {
  return (
    <TravelShell>
      <ScrollToTopOnRouteChange />

      <div className={styles.layout}>
        <TravelHeaderNav />

        <div className={styles.main}>
          <Outlet />
        </div>

        <TravelFooter />
      </div>
    </TravelShell>
  );
}
