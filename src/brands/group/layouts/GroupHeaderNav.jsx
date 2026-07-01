import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import useDisclosure from "../../../shared/hooks/useDisclosure.js";
import { useOutsideClick } from "../../../shared/hooks/useOutsideClick.js";
import useSmartAnchorNav from "../../../shared/hooks/useSmartAnchorNav.js";

import { GROUP_NAV_BRANDS, GROUP_NAV_ANCHORS } from "../config/core/nav.js";
import { GROUP_BASE_PATH } from "../config/core/paths.js";
import ChevronDownIcon from "../shared/components/ChevronDownIcon.jsx";
import useGroupMobileNavigation from "./useGroupMobileNavigation.js";
import GroupMobileNavPanel from "./GroupMobileNavPanel.jsx";

import styles from "./GroupHeaderNav.module.css";

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

export default function GroupHeaderNav({ socials = [], lang }) {
  const dropdownRef = useRef(null);

  const {
    isOpen: dropdownOpen,
    toggle: toggleDropdown,
    close: closeDropdown,
  } = useDisclosure();

  const {
    panelOpen,
    togglePanel,
    closePanel,
    closePanelAndFocus,
    hamburgerRef,
    panelRef,
  } = useGroupMobileNavigation();

  useOutsideClick(dropdownRef, closeDropdown, dropdownOpen);

  const { handleSmartAnchorClick } = useSmartAnchorNav({
    targetPath: GROUP_BASE_PATH,
    offset: 24,
    closeOverlays: closePanel,
  });

  // Escape — closes the brand dropdown
  useEffect(() => {
    if (!dropdownOpen) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      closeDropdown();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dropdownOpen, closeDropdown]);

  return (
    <>
      <nav className={styles.nav} aria-label="Navegação principal">
        <div className={styles.inner}>
          {/* Brand dropdown — desktop */}
          <div className={styles.brand} ref={dropdownRef}>
            <button
              className={styles.brandBtn}
              aria-expanded={dropdownOpen}
              aria-controls="group-brand-menu"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              Sunlive Group
              <ChevronDownIcon
                className={`${styles.chevron}${dropdownOpen ? ` ${styles.chevronOpen}` : ""}`}
              />
            </button>

            {dropdownOpen && (
              <ul id="group-brand-menu" className={styles.brandMenu}>
                {GROUP_NAV_BRANDS.map((b) => (
                  <li key={b.key}>
                    <NavLink
                      to={b.href}
                      end={b.end}
                      className={({ isActive }) =>
                        `${styles.brandItem}${isActive ? ` ${styles.brandItemActive}` : ""}`
                      }
                      onClick={closeDropdown}
                    >
                      {b.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Anchor links — desktop */}
          {GROUP_NAV_ANCHORS.map((a) => (
            <a
              key={a.key}
              href={a.href}
              className={styles.anchorLink}
              onClick={(e) => {
                closeDropdown();
                handleSmartAnchorClick(e, a.href);
              }}
            >
              {a.label}
            </a>
          ))}

          {/* Hamburger — mobile only */}
          <button
            ref={hamburgerRef}
            className={styles.hamburger}
            aria-expanded={panelOpen}
            aria-controls="group-mobile-panel"
            aria-label="Abrir menu de navegação"
            onClick={togglePanel}
          >
            <MenuIcon className={styles.btnIcon} />
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {panelOpen && (
        <GroupMobileNavPanel
          socials={socials}
          lang={lang}
          panelRef={panelRef}
          onClose={closePanel}
          onCloseAndFocus={closePanelAndFocus}
          onAnchorClick={(e, href) => {
            closePanel();
            handleSmartAnchorClick(e, href);
          }}
        />
      )}
    </>
  );
}
