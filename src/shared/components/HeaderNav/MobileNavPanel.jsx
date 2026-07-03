import { NavLink } from "react-router-dom";

import { useLangMenu } from "../../hooks/useLangMenu.js";
import useMenuGroup from "../../hooks/useMenuGroup.js";
import ChevronDownIcon from "../ChevronDownIcon.jsx";

import styles from "./MobileNavPanel.module.css";

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

function isHashOnly(href) {
  return typeof href === "string" && href.startsWith("#");
}

function MobileNavItem({ item, isOpen, onToggle, onAnchorClick }) {
  const hasSub = Array.isArray(item.submenu) && item.submenu.length > 0;
  const href = item.href || "#";

  if (!hasSub) {
    if (isHashOnly(href)) {
      return (
        <a
          href={href}
          className={styles.panelLink}
          onClick={(event) => onAnchorClick(event, href)}
        >
          {item.label}
        </a>
      );
    }

    return (
      <NavLink
        to={href}
        end
        className={({ isActive }) =>
          `${styles.panelLink}${isActive ? ` ${styles.panelLinkActive}` : ""}`
        }
        onClick={(event) => onAnchorClick(event, href)}
      >
        {item.label}
      </NavLink>
    );
  }

  const submenuId = `mobile-submenu-${item.key}`;

  return (
    <div className={styles.accordion} data-open={isOpen || undefined}>
      <div className={styles.accordionHead}>
        <NavLink
          to={href}
          className={({ isActive }) =>
            // Href só de hash (ex. Parceiros) resolve sempre para o
            // pathname atual — isActive seria permanentemente
            // verdadeiro. O destaque vem então só de hover/focus/
            // acordeão aberto (data-open no wrapper .accordion).
            `${styles.panelLink} ${styles.accordionTrigger}${isActive && !isHashOnly(href) ? ` ${styles.panelLinkActive}` : ""}`
          }
          aria-expanded={isOpen}
          aria-controls={submenuId}
          onClick={(event) => {
            event.preventDefault();
            onToggle(item.key);
          }}
        >
          {item.label}
        </NavLink>

        <button
          type="button"
          className={`${styles.accordionToggle}${isOpen ? ` ${styles.accordionToggleActive}` : ""}`}
          aria-label={`${isOpen ? "Fechar" : "Abrir"} submenu ${item.label}`}
          aria-expanded={isOpen}
          aria-controls={submenuId}
          onClick={() => onToggle(item.key)}
        >
          <ChevronDownIcon
            className={`${styles.accordionChevron}${isOpen ? ` ${styles.accordionChevronOpen}` : ""}`}
          />
        </button>
      </div>

      <ul id={submenuId} className={styles.accordionList} hidden={!isOpen}>
        {item.submenu.map((sub) => (
          <li key={sub.key}>
            <a
              href={sub.href}
              className={styles.accordionLink}
              onClick={(event) => onAnchorClick(event, sub.href)}
            >
              {sub.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MobileNavPanel({
  panelId,
  brands,
  activeBrandKey,
  navItems,
  socials = [],
  lang,
  panelRef,
  onClose,
  onCloseAndFocus,
  onAnchorClick,
}) {
  const { isOpen, toggle } = useMenuGroup();

  // Mobile language menu — separate instance and id from desktop
  const {
    ref: mobileLangRef,
    isOpen: mobileLangOpen,
    selected: mobileLangSelected,
    options: mobileLangOptions,
    toggle: toggleMobileLang,
    choose: chooseMobileLang,
  } = useLangMenu(lang);

  const hasMobileSocials = Array.isArray(socials) && socials.length > 0;
  const hasMobileLang = mobileLangOptions.length > 0;
  const mobileLangMenuId = `${panelId}-lang-menu`;

  return (
    <>
      <div
        className={styles.overlay}
        aria-hidden="true"
        onClick={onCloseAndFocus}
      />
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={styles.panel}
        ref={panelRef}
      >
        <div className={styles.panelHead}>
          <button
            type="button"
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
            {brands.map((b) => (
              <li key={b.key}>
                <NavLink
                  to={b.href}
                  end={b.end}
                  className={({ isActive }) =>
                    `${styles.panelLink}${isActive || b.key === activeBrandKey ? ` ${styles.panelLinkActive}` : ""}`
                  }
                  onClick={onClose}
                >
                  {b.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.panelDivider} aria-hidden="true" />

          {/* Navigation items — accordions quando têm submenu */}
          <ul className={styles.panelNavItems}>
            {navItems.map((item) => (
              <li key={item.key}>
                <MobileNavItem
                  item={item}
                  isOpen={isOpen(item.key)}
                  onToggle={toggle}
                  onAnchorClick={onAnchorClick}
                />
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
                      aria-controls={mobileLangMenuId}
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
                      id={mobileLangMenuId}
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
