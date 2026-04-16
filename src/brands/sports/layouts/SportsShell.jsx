import { Outlet, useLocation } from "react-router-dom";

import SportsUtilityBar from "./SportsUtilityBar.jsx";
import BrandMasthead from "../shared/ui/BrandMasthead/index.jsx";
import FooterSports from "../components/FooterSports";

import sportsBrand from "../config/index.js";
import sportsLogo from "../assets/LogoSunliveSports/sports.png";

import styles from "./SportsShell.module.css";

const SPORTS_BASE_PATH = "/sunlive-group/sports";

export default function SportsShell() {
  const location = useLocation();

  const footerData = sportsBrand.sections?.footer;
  const header = sportsBrand?.header ?? {};

  const isSportsHome =
    location.pathname === SPORTS_BASE_PATH ||
    location.pathname === `${SPORTS_BASE_PATH}/`;

  const utilityBarProps = isSportsHome
    ? {
        backLink: header.backLink ?? null,
      }
    : {
        homeLink: {
          href: SPORTS_BASE_PATH,
          label: "Início Sports",
        },
      };

  return (
    <div className={styles.shell} data-brand="sports" data-shell="sports">
      <div className={styles.headerContainer}>
        <SportsUtilityBar isHome={isSportsHome} {...utilityBarProps} />

        {isSportsHome ? (
          <BrandMasthead
            src={sportsLogo}
            alt="Sunlive Sports"
            logoAr={2.375}
            loading="eager"
          />
        ) : null}
      </div>

      <main className={styles.main} aria-label="Sunlive Sports — Conteúdo">
        <Outlet />
      </main>

      <FooterSports data={footerData} flushTop />
    </div>
  );
}
