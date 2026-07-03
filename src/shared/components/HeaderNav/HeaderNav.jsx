import { useRef } from "react";

import useMenuGroup from "../../hooks/useMenuGroup.js";
import { useOutsideClick } from "../../hooks/useOutsideClick.js";
import useSmartAnchorNav from "../../hooks/useSmartAnchorNav.js";
import useMobileNavigation from "../../hooks/useMobileNavigation.js";

import BrandSwitcher from "./BrandSwitcher.jsx";
import NavItem from "./NavItem.jsx";
import MobileNavPanel from "./MobileNavPanel.jsx";

import styles from "./HeaderNav.module.css";

function MenuIcon({ className }) {
  return (
    <svg
      viewBox="0 0 20 14"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M0 1h20M0 7h20M0 13h20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HeaderNav({
  brands,
  activeBrandKey,
  navItems,
  mobileNavItems,
  socials = [],
  lang,
  smartAnchorTargetPath,
  smartAnchorOffset,
  idPrefix,
  ariaLabel = "Navegação principal",
}) {
  const navRef = useRef(null);
  const { isOpen, toggle, close, openKey } = useMenuGroup();

  const {
    panelOpen,
    togglePanel,
    closePanel,
    closePanelAndFocus,
    hamburgerRef,
    panelRef,
  } = useMobileNavigation();

  useOutsideClick(navRef, close, Boolean(openKey));

  const { handleSmartAnchorClick } = useSmartAnchorNav({
    targetPath: smartAnchorTargetPath,
    offset: smartAnchorOffset ?? (smartAnchorTargetPath ? 24 : 72),
    closeOverlays: closePanel,
  });

  const brandMenuId = `${idPrefix}-brand-menu`;
  const mobilePanelId = `${idPrefix}-mobile-panel`;

  // Item cujo painel deve alinhar-se à cápsula inteira (não ao seu
  // próprio trigger, estreito) — ver panelPlacement em NavItem.jsx.
  const capsulePanelItem = navItems.find(
    (item) =>
      typeof item.renderPanel === "function" &&
      item.panelPlacement === "capsule",
  );

  return (
    <>
      <nav ref={navRef} className={styles.nav} aria-label={ariaLabel}>
        <div className={styles.inner}>
          <div className={styles.items}>
            <BrandSwitcher
              brands={brands}
              activeKey={activeBrandKey}
              menuId={brandMenuId}
              isOpen={isOpen("brand")}
              onToggle={() => toggle("brand")}
              onClose={close}
            />

            {navItems.map((item) => (
              <NavItem
                key={item.key}
                item={item}
                isOpen={isOpen(item.key)}
                onToggle={toggle}
                onClose={close}
                onAnchorClick={handleSmartAnchorClick}
              />
            ))}
          </div>

          <button
            type="button"
            ref={hamburgerRef}
            className={styles.hamburger}
            aria-expanded={panelOpen}
            aria-controls={mobilePanelId}
            aria-label="Abrir menu de navegação"
            onClick={togglePanel}
          >
            <MenuIcon className={styles.btnIcon} />
          </button>

          {capsulePanelItem ? (
            <div
              id={`nav-submenu-${capsulePanelItem.key}`}
              className={styles.megaPanelCapsule}
              role="menu"
              hidden={!isOpen(capsulePanelItem.key)}
            >
              {capsulePanelItem.renderPanel({
                isOpen: isOpen(capsulePanelItem.key),
                onNavigate: (event, targetHref) => {
                  close();
                  handleSmartAnchorClick(event, targetHref);
                },
              })}
            </div>
          ) : null}
        </div>
      </nav>

      {panelOpen ? (
        <MobileNavPanel
          panelId={mobilePanelId}
          brands={brands}
          activeBrandKey={activeBrandKey}
          navItems={mobileNavItems ?? navItems}
          socials={socials}
          lang={lang}
          panelRef={panelRef}
          onClose={closePanel}
          onCloseAndFocus={closePanelAndFocus}
          onAnchorClick={(event, href) => {
            closePanel();
            handleSmartAnchorClick(event, href);
          }}
        />
      ) : null}
    </>
  );
}
