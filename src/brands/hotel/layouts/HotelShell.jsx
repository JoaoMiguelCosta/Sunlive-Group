import { Outlet, useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar";

import HotelFooter from "../components/FooterHotel";
import HotelPrimaryNav from "./HotelPrimaryNav.jsx";
import HotelBrandLogo from "./HotelBrandLogo.jsx";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange.jsx";

import hotelBrand, { HOTEL_BASE_PATH } from "../config/index.js";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.js";

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

  const backLink = isHotelHome
    ? { href: "/sunlive-group", label: "Voltar Sunlive Group" }
    : null;

  const homeLink = !isHotelHome
    ? { label: "Início Hotel", href: HOTEL_BASE_PATH }
    : undefined;

  return (
    <div className={styles.shell} data-brand="hotel" data-shell="hotel">
      <ScrollToTopOnRouteChange />

      <UtilityBar
        variant="hotel-header"
        data-page={isHotelHome ? "hotel-home" : "hotel-inner"}
        backLink={backLink}
        homeLink={homeLink}
        leftSlot={<HotelBrandLogo />}
        socials={socials}
        lang={lang}
      />

      <div className={styles.navWrap}>
        <HotelPrimaryNav />
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
