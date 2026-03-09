// src/brands/hotel/components/Home/HotelHeroBanner/HotelHeroBanner.jsx
import hotelBrand from "../../../../config/index.js";
import CTAButton from "../../../../../../shared/ui/CTAButton/CTAButton.jsx";
import styles from "./HotelHeroBanner.module.css";

export default function HotelHeroBanner({ onContactClick }) {
  const section = hotelBrand?.pages?.home?.sections?.heroBanner ?? null;
  if (!section) return null;

  const logoSrc = section.logo?.src ?? "";
  const logoAlt = section.logo?.alt ?? "Estalagem de Sangalhos";
  const cta = section.cta ?? null;

  if (!cta?.href) return null;

  const handleClick = (event) => {
    if (!onContactClick) return;

    event.preventDefault();
    onContactClick();
  };

  return (
    <section className={styles.masthead}>
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          {logoSrc ? (
            <img src={logoSrc} alt={logoAlt} className={styles.logo} />
          ) : null}
        </div>

        <div className={styles.content}>
          <CTAButton
            cta={cta}
            icon={cta.iconKey ?? "phone"}
            variant="hotel"
            className={styles.cta}
            onClick={handleClick}
          />
        </div>
      </div>
    </section>
  );
}
