// src/brands/hotel/components/HotelMasthead/HotelMasthead.jsx
import estalagemLogo from "../../../../assets/estalagem.png";
import styles from "./HotelHeroBanner.module.css";

// ícones e contactos partilhados
import {
  ICONS,
  BUSINESS_UNIT_CONTACTS_DEFAULT,
} from "../../../../../../shared/config/BrandDefault.jsx";

const PhoneIcon = ICONS.PhoneIcon;
const HOTEL_PHONE = BUSINESS_UNIT_CONTACTS_DEFAULT.hotel?.phone ?? "";

function normalizePhone(phone) {
  return phone ? phone.replace(/\s+/g, "") : "";
}

/**
 * HotelMasthead
 * Header visual da Estalagem de Sangalhos
 *
 * Props opcionais:
 *  - ctaLabel?: string          (texto do botão, default "Contactar")
 *  - onContactClick?: () => {}  (callback ao clicar no botão)
 */
export default function HotelHeroBanner({
  ctaLabel = "Contactar",
  onContactClick,
}) {
  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }

    if (HOTEL_PHONE) {
      window.location.href = `tel:${normalizePhone(HOTEL_PHONE)}`;
    }
  };

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
            onClick={handleClick}
            aria-label={
              HOTEL_PHONE
                ? `Contactar por telefone ${HOTEL_PHONE}`
                : "Contactar Estalagem de Sangalhos"
            }
          >
            <span className={styles.contactIcon} aria-hidden="true">
              <PhoneIcon size={18} />
            </span>
            <span>{ctaLabel}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
