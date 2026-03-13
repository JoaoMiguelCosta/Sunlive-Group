import styles from "./HotelSectionDescription.module.css";

/**
 * HotelSectionDescription
 * Bloco reutilizável para descrição de secções.
 *
 * Props:
 * - as?: "p" | "div" | "span"
 * - align?: "center" | "left"
 * - className?: string
 * - children: conteúdo
 */
export default function HotelSectionDescription({
  as: Tag = "p",
  align = "center",
  className = "",
  children,
}) {
  if (!children) return null;

  const alignClass = styles[align] ?? styles.center;
  const classNames = [styles.wrap, alignClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <Tag className={styles.text}>{children}</Tag>
    </div>
  );
}
