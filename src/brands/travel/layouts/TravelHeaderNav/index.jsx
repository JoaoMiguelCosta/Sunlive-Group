import { useLocation } from "react-router-dom";

import styles from "./TravelHeaderNav.module.css";
import UtilityBar from "../../../../shared/components/UtilityBar";
import BrandMasthead from "../../../../shared/components/BrandMasthead";
import HeaderNav from "../../../../shared/components/HeaderNav/HeaderNav.jsx";
import HeaderShell from "./HeaderShell.jsx";

import header from "../../config/core/header.js";
import { TRAVEL_NAV } from "../../config/core/nav.js";
import { TRAVEL_BASE_PATH } from "../../config/core/paths.js";
import { GROUP_NAV_BRANDS } from "../../../group/config/core/nav.js";

const TRAVEL_NAV_ITEMS = [
  ...TRAVEL_NAV,
  {
    key: "contact",
    label: header.cta.label,
    href: header.cta.href,
  },
];

export default function TravelHeaderNav() {
  const location = useLocation();

  const isTravelHome =
    location.pathname === TRAVEL_BASE_PATH ||
    location.pathname === `${TRAVEL_BASE_PATH}/`;

  const utilityBarProps = isTravelHome
    ? {
        backLink: header.backLink,
      }
    : {
        homeLink: header.homeLink,
      };

  return (
    <HeaderShell className={styles.wrap} aria-label="Header — Sunlive Travel">
      <div className={styles.container}>
        <UtilityBar
          variant="travel-header"
          data-page={isTravelHome ? "travel-home" : "travel-inner"}
          ariaLabel="Header — Sunlive Travel"
          socials={header.socials}
          lang={header.lang}
          centerSlot={
            <HeaderNav
              brands={GROUP_NAV_BRANDS}
              activeBrandKey="travel"
              navItems={TRAVEL_NAV_ITEMS}
              socials={header.socials}
              lang={header.lang}
              idPrefix="travel"
              ariaLabel="Navegação — Sunlive Travel"
            />
          }
          {...utilityBarProps}
        />

        {isTravelHome ? (
          <BrandMasthead
            src={header.logo?.src}
            alt={header.logo?.alt ?? "Sunlive Travel"}
            logoAr={2.6}
            loading="eager"
            className={styles.masthead}
          />
        ) : null}
      </div>
    </HeaderShell>
  );
}
