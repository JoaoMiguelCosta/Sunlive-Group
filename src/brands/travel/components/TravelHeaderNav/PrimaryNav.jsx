import { useRef, useState } from "react";
import { useOutsideClick } from "../../../../shared/hooks/useOutsideClick.js";
import useLocalSmoothAnchors from "../../../../shared/hooks/useLocalSmoothAnchors.js";
import travelBrand from "../../ConfigTravel.jsx";
import styles from "./PrimaryNav.module.css";

/** Submenu */
function Submenu({ items = [], onSelect, onAnchorClick }) {
  if (!items.length) return null;

  const handleSubClick = (e, href) => {
    onAnchorClick?.(e, href, onSelect); // se for hash local → smooth + fecha
  };

  return (
    <ul className={styles.submenu} role="menu">
      {items.map((sub) => (
        <li key={sub.key} role="none">
          <a
            role="menuitem"
            href={sub.href}
            className={styles.subLink}
            onClick={(e) => handleSubClick(e, sub.href)}
          >
            {sub.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Item */
function NavItem({ item, isOpen, onToggle, onClose, onAnchorClick, ChevIcon }) {
  const hasSub = Array.isArray(item.submenu) && item.submenu.length > 0;
  const href = item.href || "#";

  const handleClick = (e) => {
    if (hasSub) {
      e.preventDefault();
      onToggle(item.key);
      return;
    }
    onAnchorClick(e, href, onClose); // smooth se for hash local; fecha menus
  };

  return (
    <li
      className={styles.navItem}
      data-has-submenu={hasSub || undefined}
      data-open={isOpen || undefined}
    >
      <a href={href} className={styles.navLink} onClick={handleClick}>
        <span>{item.label}</span>
        {hasSub &&
          (ChevIcon ? (
            <ChevIcon className={styles.chev} aria-hidden="true" />
          ) : (
            <span className={styles.chev} aria-hidden="true">
              ▾
            </span>
          ))}
      </a>
      {hasSub && (
        <Submenu
          items={item.submenu}
          onSelect={onClose}
          onAnchorClick={onAnchorClick}
        />
      )}
    </li>
  );
}

/** PrimaryNav */
export default function PrimaryNav({ items = [] }) {
  const [openKey, setOpenKey] = useState(null);
  const navRef = useRef(null);

  // fecha dropdowns ao clicar fora
  useOutsideClick(navRef, () => setOpenKey(null), true);

  const { handleAnchorClick } = useLocalSmoothAnchors();
  if (!items.length) return null;

  const toggleItem = (key) => setOpenKey((prev) => (prev === key ? null : key));
  const closeAll = () => setOpenKey(null);

  // Ícone chevron vindo do config da brand
  const ChevIcon = travelBrand?.icons?.chevronDown || null;

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Navegação principal">
      <ul className={styles.navList}>
        {items.map((it) => (
          <NavItem
            key={it.key}
            item={it}
            isOpen={openKey === it.key}
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
