const ACTIVE_LANG_CODE = "pt";

function isActiveLanguage(option) {
  return option?.code === ACTIVE_LANG_CODE;
}

export default function UtilityLanguageMenu({
  containerRef,
  isOpen,
  selected,
  options,
  onToggle,
  onChoose,
  styles,
}) {
  function handleChoose(option) {
    if (!isActiveLanguage(option)) return;
    onChoose(option);
  }

  return (
    <div className={styles.langWrap} ref={containerRef}>
      <button
        type="button"
        className={styles.langBtn}
        aria-expanded={isOpen}
        aria-controls="lang-menu"
        aria-label="Selecionar idioma"
        onClick={onToggle}
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
        id="lang-menu"
        className={styles.langMenu}
        hidden={!isOpen}
      >
        {options.map((option) => {
          const isSelected = selected.code === option.code;
          const isDisabled = !isActiveLanguage(option);

          return (
            <li key={option.code}>
              <button
                type="button"
                className={styles.langItem}
                disabled={isDisabled}
                aria-current={isSelected ? "true" : undefined}
                onClick={() => handleChoose(option)}
              >
                <span className={styles.langItemLabel}>{option.label}</span>

                <span
                  className={styles.langItemName}
                  dir={option.dir === "rtl" ? "rtl" : "ltr"}
                >
                  {option.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
