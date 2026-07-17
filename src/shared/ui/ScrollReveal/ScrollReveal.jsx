import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion.js";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.js";

import styles from "./ScrollReveal.module.css";

const MAX_STAGGER_INDEX = 6;

function normalizeStaggerIndex(staggerIndex) {
  if (!Number.isFinite(staggerIndex)) {
    return 0;
  }

  return Math.min(Math.max(Math.trunc(staggerIndex), 0), MAX_STAGGER_INDEX);
}

/**
 * ScrollReveal — fundação global para efeitos de entrada no viewport.
 * Visível por defeito; só oculta o conteúdo depois de confirmar que
 * o JS está ativo, o IntersectionObserver está disponível e o
 * utilizador não prefere movimento reduzido.
 */
export default function ScrollReveal({
  as = "div",
  children,
  className = "",
  staggerIndex = 0,
  once = true,
  ...rest
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isIntersecting } = useIntersectionObserver({
    once,
    disabled: prefersReducedMotion,
  });

  const Tag = as;
  const stateClass = isIntersecting ? styles.visible : styles.hidden;
  const staggerClass = styles[`stagger${normalizeStaggerIndex(staggerIndex)}`];

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, stateClass, staggerClass, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
