import styles from "./UtilityBar.module.css";
import { useLangMenu } from "../../hooks/useLangMenu.js";

export default function UtilityBar({
  variant,
  backLink,
  homeLink,
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

  const hasLeft = Boolean(backLink || homeLink || leftSlot);

  return (
    <aside
      className={styles.utilityBar}
      data-variant={variant || undefined}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
    >
      <div className={`${styles.inner} ${hasLeft ? styles.hasLeft : ""}`}>
        {hasLeft && (
          <div className={styles.left}>
            {backLink && (
              <a href={backLink.href} className={styles.backLink}>
                {backLink.Icon ? (
                  <backLink.Icon className={styles.backIcon} />
                ) : (
                  <svg
                    className={styles.backIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span className={styles.backText}>{backLink.label}</span>
              </a>
            )}

            {homeLink && (
              <a href={homeLink.href} className={styles.homeLink}>
                {homeLink.Icon ? (
                  <homeLink.Icon className={styles.homeIcon} />
                ) : (
                  <svg
                    className={styles.homeIcon}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 10.5L12 3l9 7.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 10v10h12V10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span className={styles.homeText}>{homeLink.label}</span>
              </a>
            )}

            {leftSlot}
          </div>
        )}

        <div className={styles.right}>
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

          <div className={styles.langWrap} ref={ref}>
            <button
              type="button"
              className={styles.langBtn}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-label="Select language"
              onClick={toggle}
              data-open={isOpen ? "true" : "false"}
            >
              <span className={styles.langText}>{selected.label}</span>
              <svg
                className={styles.chevron}
                viewBox="0 0 12 6"
                aria-hidden="true"
              >
                <path
                  d="M1 1 L6 5 L11 1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
