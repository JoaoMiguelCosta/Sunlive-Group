// src/brands/hotel/layouts/HotelPrimaryNav.jsx
import { useState, useRef, useEffect } from "react";
import navStyles from "./HotelPrimaryNav.module.css";
import HotelPrimaryNavSubmenu from "./HotelPrimaryNavSubmenu.jsx";
import { HOTEL_PRIMARY_NAV_ITEMS } from "../configHotel.jsx";

// hooks partilhados
import { useOutsideClick } from "../../../shared/hooks/useOutsideClick.js";
import useSmartAnchorNav from "../../../shared/hooks/useSmartAnchorNav.js";

const NAV_ITEMS = HOTEL_PRIMARY_NAV_ITEMS;

export default function HotelPrimaryNavHamburger() {
  const [openId, setOpenId] = useState(null);
  const [submenuAnchorX, setSubmenuAnchorX] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRootRef = useRef(null); // para outside-click
  const navInnerRef = useRef(null);
  const buttonRefs = useRef({});

  const closeAll = () => {
    setIsNavOpen(false);
    setOpenId(null);
  };

  // fecha nav/submenu ao clicar fora
  useOutsideClick(navRootRef, closeAll, isNavOpen || !!openId);

  // navegação inteligente para anchors
  const { handleSmartAnchorClick } = useSmartAnchorNav({
    // quando tiveres header fixo, afina este offset
    offset: 88,
    closeOverlays: closeAll,
  });

  const handleEnterItem = (id) => {
    setOpenId(id);
  };

  const handleToggleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleMouseLeave = () => {
    setOpenId(null);
  };

  const hasOpen = Boolean(openId);

  // Calcula a posição horizontal do botão ativo (todas as larguras desktop)
  useEffect(() => {
    if (!openId || typeof window === "undefined") {
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
  }, [openId]);

  return (
    <nav
      ref={navRootRef}
      className={navStyles.nav}
      aria-label="Navegação principal da Estalagem"
      onMouseLeave={handleMouseLeave}
    >
      <div className={navStyles.navInner} ref={navInnerRef}>
        {/* Barra topo (só aparece em mobile) */}
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
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={`${navStyles.navListItem} ${
                  openId === item.id ? navStyles.navListItemActive : ""
                }`}
              >
                <button
                  type="button"
                  className={`${navStyles.navButton} ${
                    openId === item.id ? navStyles.navButtonActive : ""
                  }`}
                  onMouseEnter={() => handleEnterItem(item.id)}
                  onClick={() => handleToggleClick(item.id)}
                  ref={(el) => {
                    buttonRefs.current[item.id] = el;
                  }}
                >
                  <span>{item.label}</span>
                  <span className={navStyles.chevron} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Submenu separado */}
      <HotelPrimaryNavSubmenu
        items={NAV_ITEMS}
        openId={openId}
        hasOpen={hasOpen}
        submenuAnchorX={submenuAnchorX}
        onAnchorClick={handleSmartAnchorClick}
      />
    </nav>
  );
}
