import { useBlink } from "../../hooks/useBlink.js";
import useLocalSmoothAnchors from "../../hooks/useLocalSmoothAnchors.js";
import { MailIcon, PhoneIcon } from "../icons/index.js";

import { scrollToHashWithOffset } from "./CTAButton.helpers.js";
import styles from "./CTAButton.module.css";

const ICON_MAP = {
  phone: PhoneIcon,
  mail: MailIcon,
  email: MailIcon,
};

const VARIANT_CLASS_MAP = {
  default: "",
  hero: "button--hero",
  sports: "button--sports",
  hotel: "button--hotel",
  travel: "button--travel",
};

const VALID_TONES = new Set(["default", "strong", "soft"]);

export default function CTAButton({
  cta,
  href: hrefProp,
  label: labelProp,
  ariaLabel: ariaLabelProp,
  className = "",
  blink = true,
  compact = "auto",
  Icon,
  icon,
  scrollOffset = 72,
  as = "a",
  type = "button",
  variant = "hero",
  tone = "default",
  onClick: onClickProp,
  children,
  ...rest
}) {
  const href = hrefProp ?? cta?.href;
  const label = labelProp ?? cta?.label ?? children;

  const isButton = as === "button";
  const shouldRender = Boolean(label) && (isButton || Boolean(href));

  const { on, bind } = useBlink({
    cycleMs: 1800,
    disabled: !blink || !shouldRender,
  });

  const { isSamePageHash } = useLocalSmoothAnchors();

  if (!shouldRender) {
    return null;
  }

  const ariaLabel = ariaLabelProp || cta?.ariaLabel || label || "Contactar";

  const IconComponent =
    Icon ||
    (typeof icon === "string" && ICON_MAP[icon] ? ICON_MAP[icon] : null);

  const isExternal = typeof href === "string" && /^https?:\/\//i.test(href);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const resolvedTone = VALID_TONES.has(tone) ? tone : "default";

  const handleClick = (event) => {
    if (typeof onClickProp === "function") {
      onClickProp(event);
    }

    if (event.defaultPrevented || isButton || isExternal) {
      return;
    }

    if (typeof href === "string" && isSamePageHash(href)) {
      event.preventDefault();

      const url = new URL(href, window.location.href);

      scrollToHashWithOffset(url.hash || href, { scrollOffset, prefersReducedMotion });
    }
  };

  const variantClassKey = VARIANT_CLASS_MAP[variant] ?? "";

  const classNames = [
    styles.button,
    blink ? styles["button--blink"] : "",
    variantClassKey ? styles[variantClassKey] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const commonProps = {
    "aria-label": ariaLabel,
    className: classNames,
    "data-compact": compact,
    "data-on": on ? "true" : "false",
    "data-variant": variant,
    "data-tone": resolvedTone,
    onClick: handleClick,
    ...bind,
    ...rest,
  };

  const content = (
    <>
      <span className={styles.sheen} aria-hidden="true" />

      {IconComponent ? (
        <IconComponent className={styles.icon} aria-hidden="true" />
      ) : null}

      <span className={styles.label}>{label}</span>
    </>
  );

  if (isButton) {
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
