import { Outlet } from "react-router-dom";

import HotelFooter from "../components/FooterHotel";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange.jsx";
import HotelHeaderNav from "./HotelHeaderNav/index.jsx";

import footerData from "../config/core/footer.js";

import styles from "./HotelShell.module.css";

export default function HotelShell() {
  return (
    <div className={styles.shell} data-brand="hotel" data-shell="hotel">
      <ScrollToTopOnRouteChange />

      <HotelHeaderNav />

      <main
        className={styles.main}
        aria-label="Estalagem de Sangalhos — Conteúdo"
      >
        <Outlet />
      </main>

      <HotelFooter data={footerData} flushTop />
    </div>
  );
}
