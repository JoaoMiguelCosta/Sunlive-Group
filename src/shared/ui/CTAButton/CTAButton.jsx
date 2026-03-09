// src/shared/ui/CTAButton/CTAButton.jsx
import styles from "./CTAButton.module.css";

/* Hooks (rota certa a partir de shared/ui/CTAButton) */
import { useBlink } from "../../hooks/useBlink.js";
import useLocalSmoothAnchors from "../../hooks/useLocalSmoothAnchors.js";

/* Ícones (ajusta se o teu index/export for diferente) */
import { PhoneIcon } from "../icons";

/**
 * CTAButton (shared)
 *
 * Compatível com:
 *  - cta: { href, label, ariaLabel? }
 *
 * Também aceita props diretas:
 *  - href, label, ariaLabel
 *
 * Extras:
 *  - as: "a" | "button"                      // default: "a"
 *  - type: button type (se as="button")
 *  - Icon: React.FC (preferível)
 *  - icon: string (ex: "phone")              // alternativa rápida
 *  - blink?: boolean                         // default: true
 *  - compact?: "auto" | true | false         // default: "auto"
 *  - scrollOffset?: number                   // default: 72
 *  - variant?: "default" | "hero" | "sports" | "hotel"
 */
const ICON_MAP = {
  phone: PhoneIcon,
};

export default function CTAButton({
  // modo antigo
  cta,

  // modo novo (opcional)
  href: hrefProp,
  label: labelProp,
  ariaLabel: ariaLabelProp,

  className = "",
  blink = true,
  compact = "auto",

  // ícone
  Icon,
  icon,

  // navegação / scroll
  scrollOffset = 72,

  // render
  as = "a",
  type = "button",

  // visual
  variant = "hero",

  // resto
  onClick: onClickProp,
  children,
  ...rest
}) {
  const href = hrefProp ?? cta?.href;
  const label = labelProp ?? cta?.label ?? children;

  if (!href && as !== "button") return null;
  if (!label) return null;

  const ariaLabel = ariaLabelProp || cta?.ariaLabel || label || "Contactar";

  const IconComp =
    Icon ||
    (typeof icon === "string" && ICON_MAP[icon] ? ICON_MAP[icon] : null);

  const isExternal = typeof href === "string" && /^https?:\/\//i.test(href);

  const { on, bind } = useBlink({ cycleMs: 1800, disabled: !blink });

  const { isSamePageHash } = useLocalSmoothAnchors();

  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollToHashWithOffset = (hash) => {
    if (typeof window === "undefined" || !hash) return;

    const id = decodeURIComponent(hash.replace(/^#/, ""));
    const el =
      document.getElementById(id) ||
      (hash.startsWith("#") ? document.querySelector(hash) : null);

    if (!el) return;

    const rect = el.getBoundingClientRect();
    const targetY = rect.top + window.pageYOffset - Number(scrollOffset || 0);

    try {
      window.history.pushState({}, "", `#${id}`);
    } catch (_) {
      // noop
    }

    window.scrollTo({
      top: targetY,
      behavior: prefersReduce ? "auto" : "smooth",
    });
  };

  const handleClick = (event) => {
    if (typeof onClickProp === "function") onClickProp(event);
    if (event.defaultPrevented) return;

    if (as === "button") return;
    if (isExternal) return;

    if (typeof href === "string" && isSamePageHash(href)) {
      event.preventDefault();
      const url = new URL(href, window.location.href);
      scrollToHashWithOffset(url.hash || href);
    }
  };

  const classes = [styles.button];

  if (blink) classes.push(styles["button--blink"]);
  if (variant === "hero") classes.push(styles["button--hero"]);
  if (variant === "sports") classes.push(styles["button--sports"]);
  if (variant === "hotel") classes.push(styles["button--hotel"]);
  if (className) classes.push(className);

  const commonProps = {
    "aria-label": ariaLabel,
    className: classes.join(" "),
    "data-compact": compact,
    "data-on": on ? "true" : "false",
    onClick: handleClick,
    ...bind,
    ...rest,
  };

  const content = (
    <>
      <span className={styles.sheen} aria-hidden="true" />

      {IconComp ? (
        <IconComp className={styles.icon} aria-hidden="true" />
      ) : null}

      <span className={styles.label}>{label}</span>
    </>
  );

  if (as === "button") {
    return (
      <button type={type} {...commonProps}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      {...commonProps}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
