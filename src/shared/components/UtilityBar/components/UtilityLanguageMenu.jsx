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
        aria-haspopup="listbox"
        aria-expanded={isOpen}
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
        className={styles.langMenu}
        role="listbox"
        aria-label="Opções de idioma"
        hidden={!isOpen}
      >
        {options.map((option) => {
          const isSelected = selected.code === option.code;
          const isDisabled = !isActiveLanguage(option);

          return (
            <li
              key={option.code}
              role="option"
              aria-selected={isSelected}
              aria-disabled={isDisabled}
              data-disabled={isDisabled ? "true" : "false"}
            >
              <button
                type="button"
                className={styles.langItem}
                disabled={isDisabled}
                aria-disabled={isDisabled}
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
