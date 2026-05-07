import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";
import styles from "./DescriptionWhyChooseUs.module.css";

export default function DescriptionWhyChooseUs({
  id,
  eyebrow = "",
  children,
  className = "",
}) {
  if (!children && !eyebrow) return null;

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

      {children ? (
        <HotelSectionDescription
          id={id}
          align="center"
          className={styles.description}
        >
          {children}
        </HotelSectionDescription>
      ) : null}
    </div>
  );
}
