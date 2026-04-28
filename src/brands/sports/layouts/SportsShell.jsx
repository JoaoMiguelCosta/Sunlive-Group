import { Outlet, useLocation } from "react-router-dom";

import SportsUtilityBar from "./SportsUtilityBar.jsx";
import SportsPageSwitcher from "./SportsPageSwitcher.jsx";
import BrandMasthead from "../shared/ui/BrandMasthead/index.jsx";
import FooterSports from "../components/FooterSports";

import sportsBrand, { SPORTS_BASE_PATH } from "../config/index.js";
import sportsLogo from "../assets/LogoSunliveSports/sports.png";

import styles from "./SportsShell.module.css";

function normalizePath(path) {
  if (typeof path !== "string") return "";

  if (path === "/") return path;

  return path.replace(/\/+$/, "");
}

export default function SportsShell() {
  const location = useLocation();

  const footerData = sportsBrand.sections?.footer;
  const header = sportsBrand?.header ?? {};
  const navItems = sportsBrand.nav?.primaryItems ?? [];

  const normalizedPathname = normalizePath(location.pathname);
  const normalizedSportsBasePath = normalizePath(SPORTS_BASE_PATH);

  const isSportsHome = normalizedPathname === normalizedSportsBasePath;

  const utilityBarProps = isSportsHome
    ? {
        backLink: header.backLink ?? null,
      }
    : {
        homeLink: {
          href: SPORTS_BASE_PATH,
          label: "Início Sunlive Sports",
        },
        pageSwitcher: <SportsPageSwitcher items={navItems} />,
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
