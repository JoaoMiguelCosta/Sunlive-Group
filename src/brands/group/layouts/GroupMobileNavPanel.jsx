import { NavLink } from "react-router-dom";

import { useLangMenu } from "../../../shared/hooks/useLangMenu.js";

import { GROUP_NAV_BRANDS, GROUP_NAV_ANCHORS } from "../config/core/nav.js";
import { LANG_FALLBACK } from "../config/core/language.js";
import ChevronDownIcon from "../shared/components/ChevronDownIcon.jsx";

import styles from "./GroupHeaderNav.module.css";

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

export default function GroupMobileNavPanel({
  socials = [],
  lang,
  panelRef,
  onClose,
  onCloseAndFocus,
  onAnchorClick,
}) {
  // Mobile language menu — separate instance and id from desktop
  const {
    ref: mobileLangRef,
    isOpen: mobileLangOpen,
    selected: mobileLangSelected,
    options: mobileLangOptions,
    toggle: toggleMobileLang,
    choose: chooseMobileLang,
  } = useLangMenu(lang ?? LANG_FALLBACK);

  const hasMobileSocials = Array.isArray(socials) && socials.length > 0;
  const hasMobileLang = mobileLangOptions.length > 0;

  return (
    <>
      <div
        className={styles.overlay}
        aria-hidden="true"
        onClick={onCloseAndFocus}
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
            onClick={onCloseAndFocus}
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
                  onClick={onClose}
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
                  onClick={(e) => onAnchorClick(e, a.href)}
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
  );
}
