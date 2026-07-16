import { useLocation } from "react-router-dom";

import styles from "./SportsHeaderNav.module.css";
import UtilityBar from "../../../../shared/components/UtilityBar";
import BrandMasthead from "../../../../shared/components/BrandMasthead";
import HeaderNav from "../../../../shared/components/HeaderNav/HeaderNav.jsx";

import header from "../../config/core/header.js";
import { getSportsSectionNavItems } from "../../config/core/nav.js";
import { SPORTS_BASE_PATH } from "../../config/core/paths.js";
import { GROUP_NAV_BRANDS } from "../../../group/config/core/nav.js";

import sportsLogo from "../../assets/logo/sports.png";

export default function SportsHeaderNav() {
  const location = useLocation();

  const isSportsHome =
    location.pathname === SPORTS_BASE_PATH ||
    location.pathname === `${SPORTS_BASE_PATH}/`;

  const navItems = getSportsSectionNavItems(location.pathname);

  return (
    <header className={styles.wrap} data-brand="sports">
      <div className={styles.container}>
        <div className={styles.capsuleRow}>
          <div className={styles.capsule}>
            <UtilityBar
              variant="sports-header"
              ariaLabel="Header — Sunlive Sports"
              socials={header.socials}
              lang={header.lang}
              centerSlot={
                <HeaderNav
                  brands={GROUP_NAV_BRANDS}
                  activeBrandKey="sports"
                  navItems={navItems}
                  socials={header.socials}
                  lang={header.lang}
                  idPrefix="sports"
                  ariaLabel="Navegação — Sunlive Sports"
                />
              }
            />
          </div>
        </div>

        {isSportsHome ? (
          <BrandMasthead
            src={sportsLogo}
            alt="Sunlive Sports"
            logoAr={2.375}
            loading="eager"
            className={styles.masthead}
          />
        ) : null}
      </div>
    </header>
  );
}
