import styles from "./HotelSectionHeader.module.css";

/**
 * HotelSectionHeader
 * Título reutilizável para secções da brand Hotel.
 *
 * Props:
 * - id?: string
 * - label: string
 * - as?: "h2" | "h3" | "h4"
 * - align?: "center" | "left"
 * - className?: string
 */
export default function HotelSectionHeader({
  id,
  label,
  as: Tag = "h2",
  align = "center",
  className = "",
}) {
  if (!label) return null;

  const alignClass = styles[align] ?? styles.center;
  const classNames = [styles.wrap, alignClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <Tag id={id} className={styles.title}>
        {label}
      </Tag>
    </div>
  );
}
