// src/shared/components/Sports/SportsHighlightBand/SportsHighlightBand.jsx
import styles from "./SportsHighlightBand.module.css";

/**
 * SportsHighlightBand
 * Faixa/caixa destacada ao estilo Sports (bordo dourado + gradiente verde/noir).
 *
 * Props:
 * - as: elemento HTML (section | div | etc.) — default "section"
 * - id: opcional (para âncoras)
 * - align: "center" | "left" — alinhamento do conteúdo (default center)
 * - max: "lg" | "md" — largura máxima do conteúdo (default lg)
 * - children: conteúdo interno (texto, CTAButton, etc.)
 */
export default function SportsHighlightBand({
  as: Tag = "section",
  id,
  align = "center",
  max = "lg",
  children,
  ...rest
}) {
  const innerClasses = [
    styles.inner,
    align === "left" ? styles.alignLeft : styles.alignCenter,
    max === "md" ? styles.maxMd : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={styles.wrap} {...rest}>
      <div className={innerClasses}>{children}</div>
    </Tag>
  );
}
