import { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "../../../../shared/hooks/useOutsideClick.js";
import useLocalSmoothAnchors from "../../../../shared/hooks/useLocalSmoothAnchors.js";
import travelBrand from "../../config/index.js";
import styles from "./PrimaryNav.module.css";

function Submenu({ id, items = [], onSelect, onAnchorClick }) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const handleSubClick = (event, href) => {
    onAnchorClick?.(event, href, onSelect);
  };

  return (
    <ul id={id} className={styles.submenu} role="menu">
      {items.map((subItem, index) => {
        const key = subItem?.key ?? `${subItem?.label ?? "submenu"}-${index}`;

        return (
          <li key={key} role="none">
            <a
              role="menuitem"
              href={subItem.href}
              className={styles.subLink}
              onClick={(event) => handleSubClick(event, subItem.href)}
            >
              {subItem.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function NavItem({
  item,
  isOpen,
  onToggle,
  onClose,
  onAnchorClick,
  ChevIcon,
  submenuId,
}) {
  const hasSubmenu = Array.isArray(item?.submenu) && item.submenu.length > 0;
  const href = item?.href ?? "#";

  const handleLinkClick = (event) => {
    onAnchorClick(event, href, onClose);
  };

  const handleToggleClick = () => {
    onToggle(item.key);
  };

  return (
    <li
      className={styles.navItem}
      data-has-submenu={hasSubmenu || undefined}
      data-open={isOpen || undefined}
    >
      {hasSubmenu ? (
        <>
          <button
            type="button"
            className={styles.navButton}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            aria-controls={submenuId}
            onClick={handleToggleClick}
          >
            <span>{item.label}</span>

            {ChevIcon ? (
              <ChevIcon className={styles.chev} aria-hidden="true" />
            ) : (
              <span className={styles.chev} aria-hidden="true">
                ▾
              </span>
            )}
          </button>

          <Submenu
            id={submenuId}
            items={item.submenu}
            onSelect={onClose}
            onAnchorClick={onAnchorClick}
          />
        </>
      ) : (
        <a href={href} className={styles.navLink} onClick={handleLinkClick}>
          <span>{item.label}</span>
        </a>
      )}
    </li>
  );
}

export default function PrimaryNav({ items = [] }) {
  const [openKey, setOpenKey] = useState(null);
  const navRef = useRef(null);
  const navId = useId();

  useOutsideClick(navRef, () => setOpenKey(null), true);

  const { handleAnchorClick } = useLocalSmoothAnchors();
  const ChevIcon = travelBrand?.icons?.chevronDown ?? null;

  useEffect(() => {
    if (!openKey) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenKey(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openKey]);

  if (!Array.isArray(items) || items.length === 0) return null;

  const toggleItem = (key) => {
    setOpenKey((previousKey) => (previousKey === key ? null : key));
  };

  const closeAll = () => setOpenKey(null);

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Navegação principal">
      <ul className={styles.navList}>
        {items.map((item, index) => {
          const itemKey = item?.key ?? `${item?.label ?? "nav-item"}-${index}`;
          const submenuId = `${navId}-${itemKey}-submenu`;

          return (
            <NavItem
              key={itemKey}
              item={item}
              isOpen={openKey === itemKey}
              onToggle={toggleItem}
              onClose={closeAll}
              onAnchorClick={handleAnchorClick}
              ChevIcon={ChevIcon}
              submenuId={submenuId}
            />
          );
        })}
      </ul>
    </nav>
  );
}
