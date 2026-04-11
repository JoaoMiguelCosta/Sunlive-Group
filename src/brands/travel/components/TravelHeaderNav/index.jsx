import { useLocation } from "react-router-dom";

import styles from "./TravelHeaderNav.module.css";
import UtilityBar from "../../../../shared/components/UtilityBar";
import BrandMasthead from "../../../../shared/components/BrandMasthead";
import HeaderShell from "./HeaderShell.jsx";

import PrimaryNav from "./PrimaryNav.jsx";
import CTAButton from "../../../../shared/ui/CTAButton/CTAButton.jsx";
import travelBrand from "../../config/index.js";
import { TRAVEL_BASE_PATH } from "../../config/core/paths.js";

export default function TravelHeaderNav() {
  const location = useLocation();

  const header = travelBrand?.header ?? {};
  const navItems = travelBrand?.nav?.primaryItems ?? [];

  const isTravelHome =
    location.pathname === TRAVEL_BASE_PATH ||
    location.pathname === `${TRAVEL_BASE_PATH}/`;

  return (
    <HeaderShell className={styles.wrap} aria-label="Header — Sunlive Travel">
      <div className={styles.container}>
        <UtilityBar
          variant="travel-header"
          data-page={isTravelHome ? "travel-home" : "travel-inner"}
          ariaLabel="Header — Sunlive Travel"
          backLink={isTravelHome ? header.backLink : null}
          homeLink={!isTravelHome ? header.homeLink : null}
          socials={header.socials}
          lang={header.lang}
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

        <div
          className={styles.primaryRow}
          aria-label="Navegação — Sunlive Travel"
        >
          <div className={styles.primaryInner}>
            <div className={styles.navSlot}>
              <PrimaryNav items={navItems} />
            </div>

            {header.cta ? (
              <div className={styles.ctaSlot}>
                <CTAButton cta={header.cta} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
