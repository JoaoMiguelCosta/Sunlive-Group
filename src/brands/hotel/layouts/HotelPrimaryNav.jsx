import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { useOutsideClick } from "../../../shared/hooks/useOutsideClick.js";
import useSmartAnchorNav from "../../../shared/hooks/useSmartAnchorNav.js";

import { HOTEL_PRIMARY_NAV_ITEMS } from "../config/core/nav.js";
import HotelPrimaryNavSubmenu from "./HotelPrimaryNavSubmenu.jsx";
import { getHotelNavLinks } from "./hotelNavUtils.js";

import navStyles from "./HotelPrimaryNav.module.css";

const SUBMENU_CLOSE_DELAY = 180;
const NAV_LIST_ID = "hotel-primary-nav-list";

export default function HotelPrimaryNav() {
  const [openId, setOpenId] = useState(null);
  const [submenuAnchorX, setSubmenuAnchorX] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);

  const navRootRef = useRef(null);
  const navInnerRef = useRef(null);
  const buttonRefs = useRef({});
  const closeTimerRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeAll = () => {
    clearCloseTimer();
    setIsNavOpen(false);
    setOpenId(null);
  };

  const scheduleCloseAll = () => {
    if (isDrawer) return;

    clearCloseTimer();

    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      setOpenId(null);
    }, SUBMENU_CLOSE_DELAY);
  };

  useOutsideClick(navRootRef, closeAll, isNavOpen || Boolean(openId));

  const { handleSmartAnchorClick } = useSmartAnchorNav({
    offset: 88,
    closeOverlays: closeAll,
  });

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isNavOpen && !openId) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;

      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;

      if (isNavOpen) {
        setIsNavOpen(false);
        setOpenId(null);
        burgerButtonRef.current?.focus();
      } else if (openId) {
        const trigger = buttonRefs.current[openId];
        setOpenId(null);
        trigger?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isNavOpen, openId]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mq = window.matchMedia("(max-width: 1180px)");
    const applyDrawerState = () => setIsDrawer(Boolean(mq.matches));

    applyDrawerState();

    if (mq.addEventListener) mq.addEventListener("change", applyDrawerState);
    else mq.addListener(applyDrawerState);

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", applyDrawerState);
      } else {
        mq.removeListener(applyDrawerState);
      }
    };
  }, []);

  useEffect(() => {
    if (!openId || typeof window === "undefined" || isDrawer) {
      setSubmenuAnchorX(null);
      return;
    }

    const button = buttonRefs.current[openId];
    const navInner = navInnerRef.current;

    if (!button || !navInner) {
      setSubmenuAnchorX(null);
      return;
    }

    const buttonRect = button.getBoundingClientRect();
    const navInnerRect = navInner.getBoundingClientRect();

    const centerInNav =
      buttonRect.left - navInnerRect.left + buttonRect.width / 2;

    setSubmenuAnchorX(centerInNav);
  }, [openId, isDrawer]);

  const handleEnterItem = (id, hasLinks) => {
    clearCloseTimer();

    if (!hasLinks) return;

    setOpenId(id);
  };

  const handleToggleClick = (id) => {
    clearCloseTimer();
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  const handleMouseEnter = () => {
    if (isDrawer) return;

    clearCloseTimer();
  };

  const handleMouseLeave = () => {
    if (isDrawer) return;

    scheduleCloseAll();
  };

  const handlePrimaryNavClick = (event, to) => {
    if (typeof to === "string" && to.includes("#")) {
      handleSmartAnchorClick?.(event, to);
      return;
    }

    closeAll();
  };

  const handleDrawerSubLinkClick = (event, href) => {
    handleSmartAnchorClick?.(event, href);
    closeAll();
  };

  const hasOpen = Boolean(openId);

  return (
    <nav
      ref={navRootRef}
      className={navStyles.nav}
      aria-label="Navegação principal da Estalagem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={navStyles.navInner} ref={navInnerRef}>
        <div className={navStyles.navTopRow}>
          <span className={navStyles.navTitle}>Explorar Estalagem</span>

          <button
            type="button"
            className={[
              navStyles.burgerButton,
              isNavOpen ? navStyles.burgerButtonActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={
              isNavOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
            }
            aria-expanded={isNavOpen}
            aria-controls={NAV_LIST_ID}
            ref={burgerButtonRef}
            onClick={() => setIsNavOpen((currentState) => !currentState)}
          >
            <span className={navStyles.burgerBox} aria-hidden="true">
              <span className={navStyles.burgerLine} />
            </span>
          </button>
        </div>

        <div
          id={NAV_LIST_ID}
          className={[
            navStyles.navListWrap,
            isNavOpen ? navStyles.navListWrapOpen : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden={isDrawer && !isNavOpen}
        >
          <ul className={navStyles.navList}>
            {HOTEL_PRIMARY_NAV_ITEMS.map((item) => {
              const links = getHotelNavLinks(item);
              const hasLinks = links.length > 0;
              const isOpen = openId === item.id;

              return (
                <li
                  key={item.id}
                  className={[
                    navStyles.navListItem,
                    isOpen ? navStyles.navListItemActive : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={navStyles.navItemRow}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          navStyles.navButton,
                          navStyles.navLink,
                          isActive ? navStyles.navLinkActive : "",
                          isOpen ? navStyles.navButtonActive : "",
                        ]
                          .filter(Boolean)
                          .join(" ")
                      }
                      onMouseEnter={() => {
                        if (!isDrawer) handleEnterItem(item.id, hasLinks);
                      }}
                      onFocus={() => {
                        if (!isDrawer || isNavOpen) {
                          handleEnterItem(item.id, hasLinks);
                        }
                      }}
                      onClick={(event) => handlePrimaryNavClick(event, item.to)}
                    >
                      <span>{item.label}</span>
                    </NavLink>

                    {hasLinks ? (
                      <button
                        type="button"
                        className={[
                          navStyles.navToggle,
                          isOpen ? navStyles.navToggleActive : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        aria-label={
                          isOpen
                            ? `Fechar submenu ${item.label}`
                            : `Abrir submenu ${item.label}`
                        }
                        aria-expanded={isOpen}
                        onMouseEnter={() => {
                          if (!isDrawer) handleEnterItem(item.id, hasLinks);
                        }}
                        onFocus={() => {
                          if (!isDrawer || isNavOpen) {
                            handleEnterItem(item.id, hasLinks);
                          }
                        }}
                        onClick={() => handleToggleClick(item.id)}
                        ref={(element) => {
                          buttonRefs.current[item.id] = element;
                        }}
                      >
                        <span
                          className={navStyles.chevron}
                          aria-hidden="true"
                        />
                      </button>
                    ) : null}
                  </div>

                  {isDrawer && hasLinks ? (
                    <div
                      className={[
                        navStyles.drawerSubmenu,
                        isOpen ? navStyles.drawerSubmenuOpen : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-hidden={!isOpen}
                    >
                      <ul className={navStyles.drawerSubmenuList}>
                        {links.map((link) => (
                          <li
                            key={`${item.id}-${link.href}`}
                            className={navStyles.drawerSubmenuItem}
                          >
                            <a
                              href={link.href}
                              onClick={(event) =>
                                handleDrawerSubLinkClick(event, link.href)
                              }
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {!isDrawer ? (
        <HotelPrimaryNavSubmenu
          items={HOTEL_PRIMARY_NAV_ITEMS}
          openId={openId}
          hasOpen={hasOpen}
          submenuAnchorX={submenuAnchorX}
          onAnchorClick={handleSmartAnchorClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ) : null}
    </nav>
  );
}
