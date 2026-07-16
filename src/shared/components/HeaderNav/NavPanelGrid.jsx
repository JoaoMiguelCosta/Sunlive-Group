import styles from "./NavPanelGrid.module.css";

/**
 * NavPanelGrid — grelha genérica de secções para um painel de
 * navegação "mega-menu" (trigger único + um só painel partilhado).
 * Puramente orientada a dados: cada secção é { key, label, href,
 * submenu? }, igual ao shape já consumido por NavItem/MobileNavPanel.
 */
export default function NavPanelGrid({ sections = [], activeKey = null, onNavigate }) {
  if (!Array.isArray(sections) || sections.length === 0) return null;

  return (
    <div className={styles.grid}>
      {sections.map((section) => {
        const links = Array.isArray(section.submenu) ? section.submenu : [];
        const isActive = section.key === activeKey;

        return (
          <div key={section.key} className={styles.column}>
            <a
              href={section.href}
              className={styles.columnTitle}
              data-active={isActive || undefined}
              onClick={(event) => onNavigate?.(event, section.href)}
            >
              {section.label}
            </a>

            {links.length > 0 ? (
              <ul className={styles.columnList}>
                {links.map((link) => (
                  <li key={link.key}>
                    <a
                      href={link.href}
                      className={styles.columnLink}
                      onClick={(event) => onNavigate?.(event, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
