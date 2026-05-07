import { Outlet, useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar";

import HotelFooter from "../components/FooterHotel";
import HotelPrimaryNav from "./HotelPrimaryNav.jsx";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange.jsx";

import hotelBrand, { HOTEL_BASE_PATH } from "../config/index.js";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.js";

import "../theme.css";
import styles from "./HotelShell.module.css";

export default function HotelShell() {
  const location = useLocation();

  const footerData = hotelBrand.sections?.footer;

  const socials =
    hotelBrand?.header?.socials ??
    hotelBrand?.sections?.footer?.infoHeader?.socials?.items ??
    [];

  const lang = hotelBrand?.header?.lang ?? hotelBrand?.lang ?? LANG_DEFAULT;

  const isHotelHome =
    location.pathname === HOTEL_BASE_PATH ||
    location.pathname === `${HOTEL_BASE_PATH}/`;

  const utilityBarProps = isHotelHome
    ? {
        backLink: {
          href: "/sunlive-group",
          label: "Voltar Sunlive Group",
        },
      }
    : {
        homeLink: {
          href: HOTEL_BASE_PATH,
          label: "Início Estalagem",
        },
      };

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
