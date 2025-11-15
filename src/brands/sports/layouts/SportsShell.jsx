// src/brands/sports/layouts/SportsShell.jsx
import { Outlet } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar";
import BrandMasthead from "../../../shared/components/Sports/BrandMasthead";
import FooterSports from "../components/FooterSports";

import sportsBrand from "../configSports.jsx";
import { footer as groupFooter } from "../../group/ConfigGroup.jsx";
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

import sportsLogo from "../assets/LogoSunliveSports/sports.png";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.jsx";

import styles from "./SportsShell.module.css";

export default function SportsShell({ backLink }) {
  const footerRaw = sportsBrand.sections?.footer;
  const footerData = buildFooterData(footerRaw, groupFooter, "footer-sports");

  const socials = sportsBrand?.header?.socials ?? [];
  const lang = sportsBrand?.header?.lang ?? LANG_DEFAULT;

  return (
    <div className={styles.shell} data-brand="sports" data-shell="sports">
      <UtilityBar
        variant="sports-header"
        backLink={backLink}
        socials={socials}
        lang={lang}
      />

      <BrandMasthead
        src={sportsLogo}
        alt="Sunlive Sports"
        logoAr={2.375}
        loading="eager"
      />

      <main className={styles.main} aria-label="Sunlive Sports — Conteúdo">
        <Outlet />
      </main>

      <FooterSports data={footerData} flushTop />
    </div>
  );
}
