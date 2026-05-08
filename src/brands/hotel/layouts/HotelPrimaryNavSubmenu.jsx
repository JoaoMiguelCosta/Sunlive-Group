import submenuStyles from "./HotelPrimaryNavSubmenu.module.css";

function getValidLinks(group) {
  return Array.isArray(group?.links) ? group.links : [];
}

export default function HotelPrimaryNavSubmenu({
  items,
  openId,
  hasOpen,
  submenuAnchorX,
  onAnchorClick,
  onMouseEnter,
  onMouseLeave,
}) {
  const activeGroup = Array.isArray(items)
    ? items.find((item) => item.id === openId)
    : null;

  const activeLinks = getValidLinks(activeGroup);
  const isVisible = Boolean(hasOpen && activeGroup && activeLinks.length > 0);

  return (
    <div
      className={[
        submenuStyles.submenuWrap,
        isVisible ? submenuStyles.submenuVisible : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        submenuAnchorX != null
          ? { "--submenu-anchor-x": `${submenuAnchorX}px` }
          : undefined
      }
      aria-hidden={!isVisible}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={submenuStyles.submenuInner}>
        {activeGroup ? (
          <section
            className={[
              submenuStyles.columnCard,
              isVisible ? submenuStyles.columnCardActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={activeGroup.label}
          >
            <ul className={submenuStyles.linkList}>
              {activeLinks.map((link) => (
                <li
                  key={`${activeGroup.id}-${link.href}`}
                  className={submenuStyles.linkItem}
                >
                  <a
                    href={link.href}
                    onClick={(event) => onAnchorClick?.(event, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
