import styles from "./UtilityBar.module.css";
import { useLangMenu } from "../../hooks/useLangMenu.js";
import UtilityLanguageMenu from "./components/UtilityLanguageMenu.jsx";

const LANG_FALLBACK = {
  current: "pt",
  options: [{ label: "PT", name: "Português", code: "pt" }],
};

function DefaultBackIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DefaultHomeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
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
  );
}

function UtilityLink({ link, type }) {
  if (!link?.href || !link?.label) return null;

  const isHome = type === "home";
  const LinkIcon = link.Icon ?? null;
  const linkClassName = isHome ? styles.homeLink : styles.backLink;
  const iconClassName = isHome ? styles.homeIcon : styles.backIcon;
  const textClassName = isHome ? styles.homeText : styles.backText;

  return (
    <a
      href={link.href}
      className={linkClassName}
      aria-label={link.ariaLabel || link.label}
    >
      {LinkIcon ? (
        <LinkIcon className={iconClassName} />
      ) : isHome ? (
        <DefaultHomeIcon className={iconClassName} />
      ) : (
        <DefaultBackIcon className={iconClassName} />
      )}

      <span className={textClassName}>{link.label}</span>
    </a>
  );
}

export default function UtilityBar({
  variant,
  backLink = null,
  homeLink = null,
  leftSlot = null,
  centerSlot = null,
  socials = [],
  lang = LANG_FALLBACK,
  ariaLabel = "Utility bar",
  ...rest
}) {
  const normalizedLang = lang ?? LANG_FALLBACK;

  const { ref: langContainerRef, isOpen, selected, options, toggle, choose, close } =
    useLangMenu(normalizedLang);

  const hasLeft = Boolean(backLink || homeLink || leftSlot);
  const hasCenter = Boolean(centerSlot);
  const hasSocials = Array.isArray(socials) && socials.length > 0;
  const hasRight = hasSocials || Boolean(selected);

  function handleKeyDown(event) {
    if (event.key === "Escape") close();
  }

  return (
    <aside
      className={styles.utilityBar}
      data-variant={variant || undefined}
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div
        className={[
          styles.inner,
          hasLeft ? styles.hasLeft : "",
          hasCenter ? styles.hasCenter : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {hasLeft ? (
          <div className={styles.left}>
            <UtilityLink link={backLink} type="back" />
            <UtilityLink link={homeLink} type="home" />
            {leftSlot}
          </div>
        ) : null}

        {hasCenter ? <div className={styles.center}>{centerSlot}</div> : null}

        {hasRight ? (
          <div className={styles.right}>
            {hasSocials ? (
              <nav className={styles.socials} aria-label="Redes sociais">
                {socials.map(({ key, href, label, Icon }) => {
                  if (!href || !label || !Icon) return null;

                  return (
                    <a
                      key={key || `${label}-${href}`}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      title={label}
                    >
                      <Icon className={styles.socialIcon} decorative />
                    </a>
                  );
                })}
              </nav>
            ) : null}

            <UtilityLanguageMenu
              containerRef={langContainerRef}
              isOpen={isOpen}
              selected={selected}
              options={options}
              onToggle={toggle}
              onChoose={choose}
              styles={styles}
            />
          </div>
        ) : null}
      </div>
    </aside>
  );
}
