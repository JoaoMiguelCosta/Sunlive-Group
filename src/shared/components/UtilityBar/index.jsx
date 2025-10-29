import styles from "./UtilityBar.module.css";
import { useLangMenu } from "../../hooks/useLangMenu.js";

/**
 * UtilityBar (shared)
 * Props:
 * - leftSlot?: ReactNode
 * - socials?: Array<{ key:string, href:string, label:string, Icon:React.FC }>
 * - lang?: { current:string, options:Array<{label:string,name:string,code:string,dir?:"rtl"|"ltr"}> }
 * - ariaLabel?: string
 */
export default function UtilityBar({
  leftSlot = null,
  socials = [],
  lang = {
    current: "pt",
    options: [{ label: "PT", name: "Português", code: "pt" }],
  },
  ariaLabel = "Utility bar",
}) {
  const { ref, isOpen, selected, options, toggle, choose, close } =
    useLangMenu(lang);

  function onKeyDown(e) {
    if (e.key === "Escape") close();
  }

  return (
    <aside
      className={styles.utilityBar}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      <div className={`${styles.inner} ${leftSlot ? styles.hasLeft : ""}`}>
        {leftSlot && <div className={styles.left}>{leftSlot}</div>}

        <div className={styles.right}>
          {/* Redes sociais */}
          {!!socials.length && (
            <nav className={styles.socials} aria-label="Social networks">
              {socials.map(({ key, href, label, Icon }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={label}
                >
                  <Icon className={styles.socialIcon} decorative />
                </a>
              ))}
            </nav>
          )}

          {/* Idiomas */}
          <div className={styles.langWrap} ref={ref}>
            <button
              type="button"
              className={styles.langBtn}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-label="Select language"
              onClick={toggle}
            >
              <span className={styles.langText}>{selected.label}</span>
              <svg
                className={styles.chevron}
                viewBox="0 0 12 6"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M1 1l5 4 5-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </button>

            <ul
              className={styles.langMenu}
              role="listbox"
              aria-label="Language options"
              hidden={!isOpen}
            >
              {options.map((opt) => (
                <li
                  key={opt.code}
                  role="option"
                  aria-selected={selected.code === opt.code}
                >
                  <button
                    type="button"
                    className={styles.langItem}
                    onClick={() => choose(opt)}
                  >
                    <span className={styles.langItemLabel}>{opt.label}</span>
                    <span
                      className={styles.langItemName}
                      dir={opt.dir === "rtl" ? "rtl" : "ltr"}
                    >
                      {opt.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
