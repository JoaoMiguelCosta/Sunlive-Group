import { Outlet } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar";

import HotelFooter from "../components/FooterHotel";
import HotelPrimaryNav from "./HotelPrimaryNav.jsx"; // 👈 NOVO
import HotelMasthead from "./HotelMasthead.jsx";

import hotelBrand from "../configHotel.jsx";
import { footer as groupFooter } from "../../group/ConfigGroup.jsx";
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.jsx";

import styles from "./HotelShell.module.css";

export default function HotelShell({ backLink }) {
  const footerRaw = hotelBrand.sections?.footer;
  const footerData = buildFooterData(footerRaw, groupFooter, "footer-hotel");

  // Socials para a UtilityBar (se não tiver header, vai buscar do footer)
  const socials =
    hotelBrand?.header?.socials ??
    hotelBrand?.footer?.infoHeader?.socials?.items ??
    [];

  const lang = hotelBrand?.header?.lang ?? hotelBrand?.lang ?? LANG_DEFAULT;

  return (
    <div className={styles.shell} data-brand="hotel" data-shell="hotel">
      <UtilityBar
        variant="hotel-header"
        backLink={backLink}
        socials={socials}
        lang={lang}
      />

      {/* Navegação principal do hotel */}
      <HotelPrimaryNav />

      {/* Brand masthead da Estalagem */}
      <HotelMasthead />

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
