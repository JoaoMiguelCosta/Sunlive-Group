import styles from "./HotelSectionDescription.module.css";

/**
 * HotelSectionDescription
 * Bloco reutilizável para a descrição logo abaixo de um título de secção.
 *
 * Props:
 *  - as?: "p" | "div" | "span"
 *  - align?: "center" | "left"
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
