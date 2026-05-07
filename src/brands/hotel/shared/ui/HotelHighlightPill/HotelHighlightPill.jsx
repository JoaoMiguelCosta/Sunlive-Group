import styles from "./HotelHighlightPill.module.css";

export default function HotelHighlightPill({
  children,
  className = "",
  cardClassName = "",
  innerClassName = "",
  textClassName = "",
  as: Tag = "div",
}) {
  if (!children) return null;

  const wrapClassNames = [styles.wrap, className].filter(Boolean).join(" ");
  const cardClassNames = [styles.card, cardClassName].filter(Boolean).join(" ");
  const innerClassNames = [styles.inner, innerClassName]
    .filter(Boolean)
    .join(" ");
  const textClassNames = [styles.text, textClassName].filter(Boolean).join(" ");

  return (
    <Tag className={wrapClassNames}>
      <div className={cardClassNames}>
        <div className={innerClassNames}>
          <p className={textClassNames}>{children}</p>
        </div>
      </div>
    </Tag>
  );
}
