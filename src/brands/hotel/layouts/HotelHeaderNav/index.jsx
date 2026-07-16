import { useLocation } from "react-router-dom";

import styles from "./HotelHeaderNav.module.css";
import UtilityBar from "../../../../shared/components/UtilityBar";
import HeaderNav from "../../../../shared/components/HeaderNav/HeaderNav.jsx";
import NavPanelGrid from "../../../../shared/components/HeaderNav/NavPanelGrid.jsx";

import header from "../../config/core/header.js";
import { HOTEL_NAV_SECTIONS, getHotelActiveSection } from "../../config/core/nav.js";
import { HOTEL_BASE_PATH } from "../../config/core/paths.js";
import { GROUP_NAV_BRANDS } from "../../../group/config/core/nav.js";

export default function HotelHeaderNav() {
  const location = useLocation();

  const activeSection = getHotelActiveSection(location.pathname);

  const navItems = [
    {
      key: "hotel-nav",
      label: activeSection ? activeSection.label : "Explorar o Hotel",
      href: activeSection ? activeSection.href : HOTEL_BASE_PATH,
      panelPlacement: "capsule",
      renderPanel: ({ onNavigate }) => (
        <NavPanelGrid
          sections={HOTEL_NAV_SECTIONS}
          activeKey={activeSection?.key ?? null}
          onNavigate={onNavigate}
        />
      ),
    },
  ];

  return (
    <header className={styles.wrap} data-brand="hotel">
      <div className={styles.container}>
        <div className={styles.capsuleRow}>
          <div className={styles.capsule}>
            <UtilityBar
              variant="hotel-header"
              ariaLabel="Header — Our Home"
              socials={header.socials}
              lang={header.lang}
              centerSlot={
                <HeaderNav
                  brands={GROUP_NAV_BRANDS}
                  activeBrandKey="hotel"
                  navItems={navItems}
                  mobileNavItems={HOTEL_NAV_SECTIONS}
                  socials={header.socials}
                  lang={header.lang}
                  idPrefix="hotel"
                  ariaLabel="Navegação — Our Home"
                />
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}
