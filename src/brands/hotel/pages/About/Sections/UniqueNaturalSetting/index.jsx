import hotelBrand from "../../../../config/index.js";
import HotelHighlightPill from "../../../../shared/ui/HotelHighlightPill/HotelHighlightPill.jsx";
import styles from "./UniqueNaturalSetting.module.css";

export default function UniqueNaturalSetting() {
  const section =
    hotelBrand?.pages?.about?.sections?.uniqueNaturalSetting ?? null;

  const pillText = section?.highlightPill?.text ?? "";

  if (!section || !pillText) return null;

  const sectionId = section.id ?? "sobre-envolvente-natural";

  return (
    <section
      id={sectionId}
      className={styles.section}
      aria-label="Envolvente natural da Estalagem"
    >
      <div className={styles.inner}>
        <HotelHighlightPill className={styles.closingPill}>
          {pillText}
        </HotelHighlightPill>
      </div>
    </section>
  );
}
