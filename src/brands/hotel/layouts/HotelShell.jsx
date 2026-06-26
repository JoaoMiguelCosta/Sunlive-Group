import { Outlet, useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar";

import HotelFooter from "../components/FooterHotel";
import HotelPrimaryNav from "./HotelPrimaryNav.jsx";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange.jsx";

import footerData from "../config/core/footer.js";
import header from "../config/core/header.js";
import { HOTEL_BASE_PATH } from "../config/core/paths.js";
import { LANG_DEFAULT } from "../../../shared/config/index.js";

import styles from "./HotelShell.module.css";

export default function HotelShell() {
  const location = useLocation();

  const socials =
    header?.socials ??
    footerData?.infoHeader?.socials?.items ??
    [];

  const lang = header?.lang ?? LANG_DEFAULT;

  const isHotelHome =
    location.pathname === HOTEL_BASE_PATH ||
    location.pathname === `${HOTEL_BASE_PATH}/`;

  const utilityBarProps = isHotelHome
    ? { backLink: header.backLink }
    : { homeLink: { href: HOTEL_BASE_PATH, label: "Início Estalagem" } };

  return (
    <div className={styles.shell} data-brand="hotel" data-shell="hotel">
      <ScrollToTopOnRouteChange />

      <div className={styles.headerContainer}>
        <UtilityBar
          variant="hotel-header"
          data-page={isHotelHome ? "hotel-home" : "hotel-inner"}
          socials={socials}
          lang={lang}
          ariaLabel="Utility bar — Hotel"
          {...utilityBarProps}
        />

        <div className={styles.navWrap}>
          <HotelPrimaryNav />
        </div>
      </div>

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
