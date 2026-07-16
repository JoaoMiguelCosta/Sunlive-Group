import { NavLink } from "react-router-dom";

import ChevronDownIcon from "../ChevronDownIcon.jsx";

import styles from "./HeaderNav.module.css";

export default function BrandSwitcher({
  brands,
  activeKey,
  menuId,
  isOpen,
  onToggle,
  onClose,
  containerRef,
}) {
  const active = brands.find((b) => b.key === activeKey) ?? brands[0];

  if (!active) return null;

  return (
    <div className={styles.brand} ref={containerRef}>
      <button
        type="button"
        className={styles.brandBtn}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={onToggle}
      >
        {active.label}
        <ChevronDownIcon
          className={`${styles.chevron}${isOpen ? ` ${styles.chevronOpen}` : ""}`}
        />
      </button>

      {isOpen ? (
        <ul id={menuId} className={styles.brandMenu}>
          {brands.map((b) => (
            <li key={b.key}>
              <NavLink
                to={b.href}
                end={b.end}
                className={({ isActive }) =>
                  `${styles.brandItem}${isActive ? ` ${styles.brandItemActive}` : ""}`
                }
                onClick={onClose}
              >
                {b.label}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
