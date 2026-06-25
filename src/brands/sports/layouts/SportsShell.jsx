import { Outlet, useLocation } from "react-router-dom";

import BrandMasthead from "../../../shared/components/BrandMasthead";
import FooterSports from "../components/FooterSports";

import footer from "../config/core/footer.js";
import header from "../config/core/header.js";
import { SPORTS_BASE_PATH } from "../config/core/paths.js";
import { SPORTS_PRIMARY_NAV_ITEMS } from "../config/core/nav.js";

import sportsLogo from "../assets/logo/sports.png";

import SportsPageSwitcher from "./SportsPageSwitcher.jsx";
import SportsUtilityBar from "./SportsUtilityBar.jsx";

import styles from "./SportsShell.module.css";

function normalizePath(path) {
  if (typeof path !== "string") return "";

  if (path === "/") return path;

  return path.replace(/\/+$/, "");
}

export default function SportsShell() {
  const location = useLocation();

  const headerData = header ?? {};
  const footerData = footer ?? null;

  const navItems = Array.isArray(SPORTS_PRIMARY_NAV_ITEMS)
    ? SPORTS_PRIMARY_NAV_ITEMS
    : [];

  const normalizedPathname = normalizePath(location.pathname);
  const normalizedSportsBasePath = normalizePath(SPORTS_BASE_PATH);

  const isSportsHome = normalizedPathname === normalizedSportsBasePath;

  const utilityBarProps = isSportsHome
    ? {
        backLink: headerData.backLink ?? null,
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

      <div className={styles.main}>
        <Outlet />
      </div>

      <FooterSports data={footerData} flushTop />
    </div>
  );
}
