import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import navStyles from "./HotelPrimaryNav.module.css";
import HotelPrimaryNavSubmenu from "./HotelPrimaryNavSubmenu.jsx";

import { HOTEL_PRIMARY_NAV_ITEMS } from "../config/core/nav.js";

import { useOutsideClick } from "../../../shared/hooks/useOutsideClick.js";
import useSmartAnchorNav from "../../../shared/hooks/useSmartAnchorNav.js";

const NAV_ITEMS = HOTEL_PRIMARY_NAV_ITEMS;

export default function HotelPrimaryNav() {
  const [openId, setOpenId] = useState(null);
  const [submenuAnchorX, setSubmenuAnchorX] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);

  const navRootRef = useRef(null);
  const navInnerRef = useRef(null);

  const buttonRefs = useRef({});

  const closeAll = () => {
    setIsNavOpen(false);
    setOpenId(null);
  };

  useOutsideClick(navRootRef, closeAll, isNavOpen || !!openId);

  const { handleSmartAnchorClick } = useSmartAnchorNav({
    offset: 88,
    closeOverlays: closeAll,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 1180px)");
    const apply = () => setIsDrawer(Boolean(mq.matches));

    apply();

    if (mq.addEventListener) mq.addEventListener("change", apply);
    else mq.addListener(apply);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", apply);
      else mq.removeListener(apply);
    };
  }, []);

  const handleEnterItem = (id) => setOpenId(id);

  const handleToggleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleMouseLeave = () => {
    if (isDrawer) return;
    setOpenId(null);
  };

  const hasOpen = Boolean(openId);

  useEffect(() => {
    if (!openId || typeof window === "undefined") {
      setSubmenuAnchorX(null);
      return;
    }

    if (isDrawer) {
      setSubmenuAnchorX(null);
      return;
    }

    const btn = buttonRefs.current[openId];
    const wrap = navInnerRef.current;
    if (!btn || !wrap) {
      setSubmenuAnchorX(null);
      return;
    }

    const btnRect = btn.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();

    const centerInWrap = btnRect.left - wrapRect.left + btnRect.width / 2;
    setSubmenuAnchorX(centerInWrap);
  }, [openId, isDrawer]);

  const handlePrimaryNavClick = (e, to) => {
    if (typeof to === "string" && to.includes("#")) {
      handleSmartAnchorClick?.(e, to);
      return;
    }

    closeAll();
  };

  const handleDrawerSubLinkClick = (e, href) => {
    handleSmartAnchorClick?.(e, href);
  };

  return (
    <nav
      ref={navRootRef}
      className={navStyles.nav}
      aria-label="Navegação principal da Estalagem"
      onMouseLeave={handleMouseLeave}
    >
      <div className={navStyles.navInner} ref={navInnerRef}>
        <div className={navStyles.navTopRow}>
          <span className={navStyles.navTitle}>Explorar Estalagem</span>

          <button
            type="button"
            className={`${navStyles.burgerButton} ${
              isNavOpen ? navStyles.burgerButtonActive : ""
            }`}
            aria-label="Alternar menu de navegação"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className={navStyles.burgerBox}>
              <span className={navStyles.burgerLine} />
            </span>
          </button>
        </div>

        <div
          className={`${navStyles.navListWrap} ${
            isNavOpen ? navStyles.navListWrapOpen : ""
          }`}
        >
          <ul className={navStyles.navList}>
            {NAV_ITEMS.map((item) => {
              const isOpen = openId === item.id;

              return (
                <li
                  key={item.id}
                  className={`${navStyles.navListItem} ${
                    isOpen ? navStyles.navListItemActive : ""
                  }`}
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
                      onMouseEnter={() => !isDrawer && handleEnterItem(item.id)}
                      onFocus={() => handleEnterItem(item.id)}
                      onClick={(e) => handlePrimaryNavClick(e, item.to)}
                    >
                      <span>{item.label}</span>
                    </NavLink>

                    <button
                      type="button"
                      className={`${navStyles.navToggle} ${
                        isOpen ? navStyles.navToggleActive : ""
                      }`}
                      aria-label={`Abrir submenu ${item.label}`}
                      aria-expanded={isOpen}
                      onMouseEnter={() => !isDrawer && handleEnterItem(item.id)}
                      onFocus={() => handleEnterItem(item.id)}
                      onClick={() => handleToggleClick(item.id)}
                      ref={(el) => {
                        buttonRefs.current[item.id] = el;
                      }}
                    >
                      <span className={navStyles.chevron} aria-hidden="true" />
                    </button>
                  </div>

                  {isDrawer && (
                    <div
                      className={`${navStyles.drawerSubmenu} ${
                        isOpen ? navStyles.drawerSubmenuOpen : ""
                      }`}
                      aria-hidden={!isOpen}
                    >
                      <ul className={navStyles.drawerSubmenuList}>
                        {item.links.map((link) => (
                          <li
                            key={`${item.id}-${link.href}`}
                            className={navStyles.drawerSubmenuItem}
                          >
                            <a
                              href={link.href}
                              onClick={(e) =>
                                handleDrawerSubLinkClick(e, link.href)
                              }
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {!isDrawer && (
        <HotelPrimaryNavSubmenu
          items={NAV_ITEMS}
          openId={openId}
          hasOpen={hasOpen}
          submenuAnchorX={submenuAnchorX}
          onAnchorClick={handleSmartAnchorClick}
        />
      )}
    </nav>
  );
}
