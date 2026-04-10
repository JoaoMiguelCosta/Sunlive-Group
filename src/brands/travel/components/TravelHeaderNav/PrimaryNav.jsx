import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { useOutsideClick } from "../../../../shared/hooks/useOutsideClick.js";
import useSmartAnchorNav from "../../../../shared/hooks/useSmartAnchorNav.js";
import travelBrand from "../../config/index.js";
import styles from "./PrimaryNav.module.css";

function Submenu({ items = [], onAnchorClick, onClose }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <ul className={styles.submenu} role="menu">
      {items.map((sub) => (
        <li key={sub.key} role="none">
          <a
            role="menuitem"
            href={sub.href}
            className={styles.subLink}
            onClick={(event) => onAnchorClick?.(event, sub.href, onClose)}
          >
            {sub.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavItem({ item, isOpen, onToggle, onClose, onAnchorClick, ChevIcon }) {
  const hasSub = Array.isArray(item.submenu) && item.submenu.length > 0;
  const href = item.href || "#";
  const submenuId = hasSub ? `submenu-${item.key}` : undefined;

  const handleMainClick = (event) => {
    if (hasSub) {
      event.preventDefault();
      onToggle(item.key);
      return;
    }

    onAnchorClick?.(event, href, onClose);
  };

  const handleToggleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onToggle(item.key);
  };

  return (
    <li
      className={styles.navItem}
      data-has-submenu={hasSub || undefined}
      data-open={isOpen || undefined}
    >
      <div className={styles.navItemRow}>
        <NavLink
          to={href}
          end={!hasSub}
          aria-expanded={hasSub ? isOpen : undefined}
          aria-haspopup={hasSub ? "menu" : undefined}
          aria-controls={hasSub ? submenuId : undefined}
          className={({ isActive }) =>
            [
              styles.navLink,
              hasSub ? styles.navLinkWithToggle : "",
              isActive ? styles.navLinkActive : "",
              isOpen ? styles.navLinkOpen : "",
            ]
              .filter(Boolean)
              .join(" ")
          }
          onClick={handleMainClick}
        >
          <span>{item.label}</span>
        </NavLink>

        {hasSub ? (
          <button
            type="button"
            className={`${styles.navToggle} ${
              isOpen ? styles.navToggleActive : ""
            }`}
            aria-label={`${isOpen ? "Fechar" : "Abrir"} submenu ${item.label}`}
            aria-expanded={isOpen}
            aria-controls={submenuId}
            onClick={handleToggleClick}
          >
            {ChevIcon ? (
              <ChevIcon className={styles.chev} aria-hidden="true" />
            ) : (
              <span className={styles.chev} aria-hidden="true">
                ▾
              </span>
            )}
          </button>
        ) : null}
      </div>

      {hasSub ? (
        <div id={submenuId}>
          <Submenu
            items={item.submenu}
            onAnchorClick={onAnchorClick}
            onClose={onClose}
          />
        </div>
      ) : null}
    </li>
  );
}

export default function PrimaryNav({ items = [] }) {
  const [openKey, setOpenKey] = useState(null);
  const navRef = useRef(null);

  const closeAll = () => setOpenKey(null);

  useOutsideClick(navRef, closeAll, true);

  const { handleSmartAnchorClick } = useSmartAnchorNav({
    offset: 72,
    closeOverlays: closeAll,
  });

  if (!Array.isArray(items) || items.length === 0) return null;

  const toggleItem = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const handleAnchorClick = (event, href, onDone) => {
    handleSmartAnchorClick?.(event, href);
    onDone?.();
  };

  const ChevIcon = travelBrand?.icons?.chevronDown || null;

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Navegação principal">
      <ul className={styles.navList}>
        {items.map((item) => (
          <NavItem
            key={item.key}
            item={item}
            isOpen={openKey === item.key}
            onToggle={toggleItem}
            onClose={closeAll}
            onAnchorClick={handleAnchorClick}
            ChevIcon={ChevIcon}
          />
        ))}
      </ul>
    </nav>
  );
}
