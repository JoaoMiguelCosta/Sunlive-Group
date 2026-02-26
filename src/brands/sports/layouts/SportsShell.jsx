import { Outlet, useLocation } from "react-router-dom";

import SportsUtilityBar from "./SportsUtilityBar.jsx";
import BrandMasthead from "../shared/ui/BrandMasthead/index.jsx";
import FooterSports from "../components/FooterSports";

import sportsBrand from "../brand/configSports.js";
import sportsLogo from "../assets/LogoSunliveSports/sports.png";

import styles from "./SportsShell.module.css";

const SPORTS_BASE_PATH = "/sunlive-group/sports";

export default function SportsShell() {
  const location = useLocation();

  // ✅ Footer vem COMPLETO do próprio brand (sem merges)
  const footerData = sportsBrand.sections?.footer;

  const isSportsHome =
    location.pathname === SPORTS_BASE_PATH ||
    location.pathname === `${SPORTS_BASE_PATH}/`;

  const backLink = isSportsHome
    ? { href: "/sunlive-group", label: "Voltar Sunlive Group" }
    : { href: SPORTS_BASE_PATH, label: "Voltar Menu Sunlive Sports" };

  return (
    <div className={styles.shell} data-brand="sports" data-shell="sports">
      <SportsUtilityBar backLink={backLink} />

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
