// src/shared/components/hotel/HotelSectionDescription.jsx
import styles from "./HotelSectionDescription.module.css";

/**
 * HotelSectionDescription
 * Bloco reutilizável para a descrição logo abaixo de um título de secção.
 *
 * Uso:
 *  <HotelSectionDescription>
 *    Quartos e suítes confortáveis, equipados para diferentes perfis de hóspedes...
 *  </HotelSectionDescription>
 *
 * Props:
 *  - as?: "p" | "div" | "span"   (por defeito "p")
 *  - align?: "center" | "left"   (por defeito "center")
 *  - className?: string
 */
export default function HotelSectionDescription({
  as: Tag = "p",
  align = "center",
  className = "",
  children,
}) {
  if (!children) return null;

  const alignClass = styles[align] ?? "";
  const wrapClassName = [styles.wrap, alignClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClassName}>
      <Tag className={styles.text}>{children}</Tag>
    </div>
  );
}
