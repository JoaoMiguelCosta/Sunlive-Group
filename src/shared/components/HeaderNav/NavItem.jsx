import { NavLink } from "react-router-dom";

import ChevronDownIcon from "../ChevronDownIcon.jsx";

import styles from "./HeaderNav.module.css";

function isHashOnly(href) {
  return typeof href === "string" && href.startsWith("#");
}

export default function NavItem({ item, isOpen, onToggle, onClose, onAnchorClick }) {
  const hasSub = Array.isArray(item.submenu) && item.submenu.length > 0;
  const href = item.href || "#";

  if (!hasSub && isHashOnly(href)) {
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

  const submenuId = hasSub ? `nav-submenu-${item.key}` : undefined;

  const handleMainClick = (event) => {
    if (hasSub) {
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
          {item.label}
        </NavLink>

        {hasSub ? (
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
    </div>
  );
}
