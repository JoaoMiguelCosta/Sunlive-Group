import { Outlet, useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar";

import HotelFooter from "../components/FooterHotel";
import HotelPrimaryNav from "./HotelPrimaryNav.jsx";

import hotelBrand, { HOTEL_BASE_PATH } from "../config";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.jsx";

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
    : { href: HOTEL_BASE_PATH, label: "Voltar Menu Hotel" };

  const homeLink = !isHotelHome
    ? { label: "Home Hotel", href: HOTEL_BASE_PATH }
    : undefined;

  return (
    <div className={styles.shell} data-brand="hotel" data-shell="hotel">
      <UtilityBar
        variant="hotel-header"
        backLink={backLink}
        homeLink={homeLink}
        socials={socials}
        lang={lang}
      />

      <HotelPrimaryNav />

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
