import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import useDisclosure from "../../../shared/hooks/useDisclosure.js";
import { useLangMenu } from "../../../shared/hooks/useLangMenu.js";
import { useOutsideClick } from "../../../shared/hooks/useOutsideClick.js";
import useSmartAnchorNav from "../../../shared/hooks/useSmartAnchorNav.js";

import { GROUP_NAV_BRANDS, GROUP_NAV_ANCHORS } from "../config/core/nav.js";
import { GROUP_BASE_PATH } from "../config/core/paths.js";
import { LANG_FALLBACK } from "../config/core/language.js";
import ChevronDownIcon from "../shared/components/ChevronDownIcon.jsx";

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

function XIcon({ className }) {
  return (
    <svg
      viewBox="0 0 14 14"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M1 1l12 12M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GroupHeaderNav({ socials = [], lang }) {
  const dropdownRef = useRef(null);
  const hamburgerRef = useRef(null);
  const panelRef = useRef(null);

  const {
    isOpen: dropdownOpen,
    toggle: toggleDropdown,
    close: closeDropdown,
  } = useDisclosure();

  const {
    isOpen: panelOpen,
    toggle: togglePanel,
    close: closePanel,
  } = useDisclosure();

  // Mobile language menu — separate instance and id from desktop
  const {
    ref: mobileLangRef,
    isOpen: mobileLangOpen,
    selected: mobileLangSelected,
    options: mobileLangOptions,
    toggle: toggleMobileLang,
    choose: chooseMobileLang,
    close: closeMobileLang,
  } = useLangMenu(lang ?? LANG_FALLBACK);

  useOutsideClick(dropdownRef, closeDropdown, dropdownOpen);

  const { handleSmartAnchorClick } = useSmartAnchorNav({
    targetPath: GROUP_BASE_PATH,
    offset: 24,
    closeOverlays: closePanel,
  });

  // Reset mobile lang when panel closes
  useEffect(() => {
    if (!panelOpen) closeMobileLang();
  }, [panelOpen, closeMobileLang]);

  // Escape — closes dropdown or mobile panel
  useEffect(() => {
    if (!dropdownOpen && !panelOpen) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (dropdownOpen) closeDropdown();
      if (panelOpen) {
        closePanel();
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dropdownOpen, panelOpen, closeDropdown, closePanel]);

  // Scroll lock while panel is open
  useEffect(() => {
    if (!panelOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [panelOpen]);

  // Move focus to first item when panel opens
  useEffect(() => {
    if (!panelOpen) return;
    const first = panelRef.current?.querySelector(
      "a[href], button:not([disabled])"
    );
    first?.focus();
  }, [panelOpen]);

  // Focus trap inside panel
  useEffect(() => {
    if (!panelOpen) return;
    const onTab = (e) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const nodes = Array.from(
        panel.querySelectorAll("a[href], button:not([disabled])")
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [panelOpen]);

  function closePanelAndFocus() {
    closePanel();
    hamburgerRef.current?.focus();
  }

  const hasMobileSocials = Array.isArray(socials) && socials.length > 0;
  const hasMobileLang = mobileLangOptions.length > 0;

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
        <>
          <div
            className={styles.overlay}
            aria-hidden="true"
            onClick={closePanelAndFocus}
          />
          <div
            id="group-mobile-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className={styles.panel}
            ref={panelRef}
          >
            <div className={styles.panelHead}>
              <button
                className={styles.closeBtn}
                aria-label="Fechar menu de navegação"
                onClick={closePanelAndFocus}
              >
                <XIcon className={styles.btnIcon} />
              </button>
            </div>

            <div className={styles.panelBody}>
              {/* Brand links — lista directa, sem dropdown aninhado */}
              <ul className={styles.panelBrands}>
                {GROUP_NAV_BRANDS.map((b) => (
                  <li key={b.key}>
                    <NavLink
                      to={b.href}
                      end={b.end}
                      className={({ isActive }) =>
                        `${styles.panelLink}${isActive ? ` ${styles.panelLinkActive}` : ""}`
                      }
                      onClick={closePanel}
                    >
                      {b.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className={styles.panelDivider} aria-hidden="true" />

              {/* Anchor links */}
              <ul className={styles.panelAnchors}>
                {GROUP_NAV_ANCHORS.map((a) => (
                  <li key={a.key}>
                    <a
                      href={a.href}
                      className={styles.panelLink}
                      onClick={(e) => {
                        closePanel();
                        handleSmartAnchorClick(e, a.href);
                      }}
                    >
                      {a.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social + lang — pinned to bottom of drawer */}
              {(hasMobileSocials || hasMobileLang) && (
                <div className={styles.panelUtil}>
                  {hasMobileSocials && (
                    <div className={styles.panelUtilGroup}>
                      <p className={styles.panelUtilLabel}>Redes sociais</p>
                      <div className={styles.panelUtilSocials}>
                        {socials.map(({ key, href, label, Icon }) =>
                          href && label && Icon ? (
                            <a
                              key={key || label}
                              href={href}
                              aria-label={label}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.panelSocialBtn}
                              title={label}
                            >
                              <Icon
                                className={styles.panelSocialIcon}
                                decorative
                              />
                            </a>
                          ) : null
                        )}
                      </div>
                    </div>
                  )}

                  {hasMobileLang && (
                    <div className={styles.panelUtilGroup}>
                      <p className={styles.panelUtilLabel}>Idioma</p>
                      <div
                        className={styles.panelLangWrap}
                        ref={mobileLangRef}
                      >
                        <button
                          type="button"
                          className={styles.panelLangBtn}
                          aria-expanded={mobileLangOpen}
                          aria-haspopup="listbox"
                          aria-controls="group-mobile-lang-menu"
                          aria-label="Selecionar idioma"
                          data-open={mobileLangOpen ? "true" : "false"}
                          onClick={toggleMobileLang}
                        >
                          <span className={styles.panelLangText}>
                            {mobileLangSelected.label}
                          </span>
                          <ChevronDownIcon
                            className={`${styles.panelLangChevron}${
                              mobileLangOpen
                                ? ` ${styles.panelLangChevronOpen}`
                                : ""
                            }`}
                          />
                        </button>

                        <ul
                          id="group-mobile-lang-menu"
                          role="listbox"
                          className={styles.panelLangMenu}
                          hidden={!mobileLangOpen}
                        >
                          {mobileLangOptions.map((opt) => {
                            const isSelected =
                              mobileLangSelected.code === opt.code;
                            return (
                              <li
                                key={opt.code}
                                role="option"
                                aria-selected={isSelected}
                              >
                                <button
                                  type="button"
                                  className={styles.panelLangItem}
                                  onClick={() => chooseMobileLang(opt)}
                                  disabled={opt.code !== "pt"}
                                >
                                  <span className={styles.panelLangItemLabel}>
                                    {opt.label}
                                  </span>
                                  <span className={styles.panelLangItemName}>
                                    {opt.name}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
