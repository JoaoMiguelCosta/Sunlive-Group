// src/brands/hotel/components/HotelMasthead/HotelMasthead.jsx
import estalagemLogo from "..//assets/estalagem.png";
import styles from "./HotelMasthead.module.css";

/**
 * HotelMasthead
 * Header visual da Estalagem de Sangalhos
 *
 * Props opcionais:
 *  - ctaLabel?: string          (texto do botão, default "Contactar")
 *  - onContactClick?: () => {}  (callback ao clicar no botão)
 */
export default function HotelMasthead({
  ctaLabel = "Contactar",
  onContactClick,
}) {
  return (
    <header
      className={styles.masthead}
      data-variant="hotel-masthead"
      aria-label="Estalagem de Sangalhos — Cabeçalho"
    >
      <div className={styles.inner}>
        <div className={styles.logoWrap}>
          <img
            src={estalagemLogo}
            alt="Estalagem de Sangalhos — Sport & Nature Hotel"
            className={styles.logo}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.hotelNameBlock}>
            <p className={styles.hotelNamePrimary}>ESTALAGEM DE SANGALHOS</p>
            <p className={styles.hotelNameSecondary}>
              SPORT &amp; NATURE HOTEL
            </p>
            <p className={styles.hotelStars}>★★★</p>
          </div>

          <button
            type="button"
            className={styles.contactButton}
            onClick={onContactClick}
          >
            <span className={styles.contactIcon} aria-hidden="true">
              📞
            </span>
            <span>{ctaLabel}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
