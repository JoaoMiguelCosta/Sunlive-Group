import { Outlet, useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar";

import HotelFooter from "../components/FooterHotel";
import HotelPrimaryNav from "./HotelPrimaryNav.jsx";

import hotelBrand, { HOTEL_BASE_PATH } from "../configHotel.jsx";
import { footer as groupFooter } from "../../group/ConfigGroup.jsx";
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.jsx";

import styles from "./HotelShell.module.css";

export default function HotelShell({ backLink }) {
  const location = useLocation();

  const footerRaw = hotelBrand.sections?.footer;
  const footerData = buildFooterData(footerRaw, groupFooter, "footer-hotel");

  const socials =
    hotelBrand?.header?.socials ??
    hotelBrand?.footer?.infoHeader?.socials?.items ??
    [];

  const lang = hotelBrand?.header?.lang ?? hotelBrand?.lang ?? LANG_DEFAULT;

  // ✅ Não mostrar em /sunlive-group/hotel (nem com / no fim)
  const isHotelHome =
    location.pathname === HOTEL_BASE_PATH ||
    location.pathname === `${HOTEL_BASE_PATH}/`;

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
