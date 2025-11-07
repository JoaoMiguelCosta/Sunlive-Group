import styles from "./CTAButton.module.css";

/* Hooks (rota certa a partir de shared/ui/CTAButton) */
import { useBlink } from "../hooks/useBlink.js";
import useLocalSmoothAnchors from "../hooks/useLocalSmoothAnchors.js";

/**
 * CTAButton (shared)
 * Props:
 *  - cta: { href:string, label:string, ariaLabel?:string }
 *  - className?: string
 *  - blink?: boolean                 // default: true
 *  - compact?: "auto" | true | false // default: "auto"
 *  - Icon?: React.FC                 // opcional (ícone à esquerda)
 *  - scrollOffset?: number           // default: 72 (desconto do header fixo)
 *  - variant?: "default" | "hero"    // default: "hero" (máximo destaque)
 */
export default function CTAButton({
  cta,
  className = "",
  blink = true,
  compact = "auto",
  Icon,
  scrollOffset = 72,
  variant = "hero",
}) {
  if (!cta?.href) return null;

  const href = cta.href;
  const isExternal = /^https?:\/\//i.test(href);
  const ariaLabel = cta.ariaLabel || cta.label || "Contactar";

  // Blink: 2s por ciclo (1s OFF + 1s ON)
 const { on, bind } = useBlink({ cycleMs: 1800, disabled: !blink });

  // Smooth anchors (mesma página)
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
    } catch (_) {}

    window.scrollTo({
      top: targetY,
      behavior: prefersReduce ? "auto" : "smooth",
    });
  };

  const onClick = (e) => {
    // deixa links externos navegarem normalmente
    if (isExternal) return;

    // mesma página com hash -> scroll suave com offset
    if (isSamePageHash(href)) {
      e.preventDefault();
      const url = new URL(href, window.location.href);
      scrollToHashWithOffset(url.hash || href);
    }
    // sem hash -> navegação normal
  };

  const classes = [styles.button];
  if (blink) classes.push(styles["button--blink"]);
  if (variant === "hero") classes.push(styles["button--hero"]);
  if (className) classes.push(className);

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={classes.join(" ")}
      data-compact={compact}
      data-on={on ? "true" : "false"}
      onClick={onClick}
      {...bind}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {Icon ? <Icon className={styles.icon} aria-hidden="true" /> : null}
      <span className={styles.label}>{cta.label}</span>
    </a>
  );
}
