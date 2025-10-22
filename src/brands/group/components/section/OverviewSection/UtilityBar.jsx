import styles from "./UtilityBar.module.css";
import { overview } from "../../../config";
import { useLangMenu } from "./hooks/useLangMenu.js";

export default function UtilityBar() {
  const {
    socials = [],
    lang = {
      current: "pt",
      options: [{ label: "PT", name: "Português", code: "pt" }],
    },
  } = overview ?? {};

  const { ref, isOpen, selected, options, toggle, choose, close } =
    useLangMenu(lang);

  function onKeyDown(e) {
    if (e.key === "Escape") close();
  }

  return (
    <aside
      className={styles.utilityBar}
      aria-label="Barra utilitária"
      onKeyDown={onKeyDown}
    >
      <div className={styles.inner}>
        <div className={styles.right}>
          {/* Ícones sociais */}
          <nav className={styles.socials} aria-label="Redes sociais">
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

          {/* Idioma */}
          <div className={styles.langWrap} ref={ref}>
            <button
              type="button"
              className={styles.langBtn}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-label="Selecionar idioma"
              onClick={toggle}
            >
              <span className={styles.langText}>{selected.label}</span>
              <svg
                className={styles.chevron}
                viewBox="0 0 12 6"
                xmlns="http://www.w3.org/2000/svg"
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

            {/* Menu de idiomas (mostra/oculta via hidden) */}
            <ul
              className={styles.langMenu}
              role="listbox"
              aria-label="Opções de idioma"
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
