import styles from "./HotelSectionShell.module.css";

export default function HotelSectionShell({
  children,
  className = "",
  contentClassName = "",
}) {
  const shellClassName = [styles.shell, className].filter(Boolean).join(" ");
  const innerClassName = [styles.inner, contentClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={shellClassName}>
      <div className={innerClassName}>{children}</div>
    </div>
  );
}
