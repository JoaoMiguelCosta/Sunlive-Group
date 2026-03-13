import styles from "./HotelSectionHeader.module.css";

/**
 * HotelSectionHeader
 * Título reutilizável para secções da Estalagem.
 *
 * Props:
 *  - id?: string
 *  - label: string
 *  - as?: "h2" | "h3" | "h4"
 *  - align?: "center" | "left"
 *  - className?: string
 */
export default function HotelSectionHeader({
  id,
  label,
  as: Tag = "h2",
  align = "center",
  className = "",
}) {
  const alignClass = styles[align] ?? "";
  const wrapClassName = [styles.wrap, alignClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div id={id} className={wrapClassName}>
      <Tag className={styles.title}>{label}</Tag>
    </div>
  );
}
