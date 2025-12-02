// src/brands/hotel/layouts/HotelPrimaryNavSubmenu.jsx
import submenuStyles from "./HotelPrimaryNavSubmenu.module.css";

export default function HotelPrimaryNavSubmenu({
  items,
  openId,
  hasOpen,
  submenuAnchorX,
  onAnchorClick,
}) {
  return (
    <div
      className={`${submenuStyles.submenuWrap} ${
        hasOpen ? submenuStyles.submenuVisible : ""
      }`}
      style={
        submenuAnchorX != null
          ? { "--submenu-anchor-x": `${submenuAnchorX}px` }
          : undefined
      }
    >
      <div className={submenuStyles.submenuInner}>
        {items.map((group) => (
          <section
            key={group.id}
            className={`${submenuStyles.columnCard} ${
              openId === group.id ? submenuStyles.columnCardActive : ""
            }`}
            aria-label={group.label}
            aria-hidden={openId !== group.id}
          >
            <ul className={submenuStyles.linkList}>
              {group.links.map((link) => (
                <li key={link.href} className={submenuStyles.linkItem}>
                  <a
                    href={link.href}
                    onClick={(e) => onAnchorClick?.(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
