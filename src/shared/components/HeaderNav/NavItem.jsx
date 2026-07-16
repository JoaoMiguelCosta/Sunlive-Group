import { NavLink } from "react-router-dom";

import ChevronDownIcon from "../ChevronDownIcon.jsx";

import styles from "./HeaderNav.module.css";

function isHashOnly(href) {
  return typeof href === "string" && href.startsWith("#");
}

export default function NavItem({ item, isOpen, onToggle, onClose, onAnchorClick }) {
  const hasSub = Array.isArray(item.submenu) && item.submenu.length > 0;
  const hasPanel = typeof item.renderPanel === "function";
  // "capsule": o painel é renderizado pela HeaderNav (alinhado à
  // cápsula inteira), não aqui — este item só fornece o trigger.
  const rendersOwnPanel = hasPanel && item.panelPlacement !== "capsule";
  const hasDropdown = hasSub || hasPanel;
  const href = item.href || "#";

  if (!hasDropdown && isHashOnly(href)) {
    return (
      <a
        href={href}
        className={styles.navLink}
        onClick={(event) => {
          onClose?.();
          onAnchorClick?.(event, href);
        }}
      >
        {item.label}
      </a>
    );
  }

  const submenuId = hasDropdown ? `nav-submenu-${item.key}` : undefined;

  const handleMainClick = (event) => {
    if (hasDropdown) {
      event.preventDefault();
      onToggle(item.key);
      return;
    }

    onClose?.();
    onAnchorClick?.(event, href);
  };

  const handleToggleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onToggle(item.key);
  };

  return (
    <div
      className={styles.navItem}
      data-has-submenu={hasDropdown || undefined}
      data-open={isOpen || undefined}
    >
      <div className={styles.navItemRow}>
        <NavLink
          to={href}
          end={!hasDropdown}
          aria-expanded={hasDropdown ? isOpen : undefined}
          aria-haspopup={hasDropdown ? "menu" : undefined}
          aria-controls={hasDropdown ? submenuId : undefined}
          className={({ isActive }) =>
            [
              styles.navLink,
              hasDropdown ? styles.navLinkWithToggle : "",
              // Um href só de hash resolve sempre para o pathname
              // atual — o isActive do NavLink seria permanentemente
              // verdadeiro e não reflete nenhuma rota real. Para
              // esses triggers, o destaque vem só de hover/focus/
              // dropdown aberto (.navLinkOpen).
              isActive && !isHashOnly(href) ? styles.navLinkActive : "",
              isOpen ? styles.navLinkOpen : "",
            ]
              .filter(Boolean)
              .join(" ")
          }
          onClick={handleMainClick}
        >
          {item.label}
        </NavLink>

        {hasDropdown ? (
          <button
            type="button"
            className={`${styles.navToggle}${isOpen ? ` ${styles.navToggleActive}` : ""}`}
            aria-label={`${isOpen ? "Fechar" : "Abrir"} submenu ${item.label}`}
            aria-expanded={isOpen}
            aria-controls={submenuId}
            onClick={handleToggleClick}
          >
            <ChevronDownIcon
              className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ""}`}
            />
          </button>
        ) : null}
      </div>

      {hasSub ? (
        <ul id={submenuId} className={styles.submenu} role="menu" hidden={!isOpen}>
          {item.submenu.map((sub) => (
            <li key={sub.key} role="none">
              <a
                role="menuitem"
                href={sub.href}
                className={styles.subLink}
                onClick={(event) => {
                  onClose?.();
                  onAnchorClick?.(event, sub.href);
                }}
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {rendersOwnPanel ? (
        <div id={submenuId} className={styles.megaPanel} role="menu" hidden={!isOpen}>
          {item.renderPanel({
            isOpen,
            onNavigate: (event, targetHref) => {
              onClose?.();
              onAnchorClick?.(event, targetHref);
            },
          })}
        </div>
      ) : null}
    </div>
  );
}
