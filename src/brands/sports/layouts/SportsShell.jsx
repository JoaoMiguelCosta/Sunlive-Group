import { Outlet } from "react-router-dom";

import FooterSports from "../components/FooterSports";

import footer from "../config/core/footer.js";

import SportsHeaderNav from "./SportsHeaderNav/index.jsx";

import styles from "./SportsShell.module.css";

export default function SportsShell() {
  const footerData = footer ?? null;

  return (
    <div className={styles.shell} data-brand="sports" data-shell="sports">
      <SportsHeaderNav />

      <div className={styles.main}>
        <Outlet />
      </div>

      <FooterSports data={footerData} flushTop />
    </div>
  );
}
