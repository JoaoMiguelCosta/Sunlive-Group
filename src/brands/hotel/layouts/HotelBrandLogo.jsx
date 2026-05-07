import { Link } from "react-router-dom";

import { HOTEL_BASE_PATH } from "../config/index.js";
import hotelLogo from "../assets/estalagem.png";

import styles from "./HotelBrandLogo.module.css";

export default function HotelBrandLogo() {
  return (
    <Link
      to={HOTEL_BASE_PATH}
      className={styles.logoLink}
      aria-label="Ir para a página inicial da Estalagem de Sangalhos"
    >
      <img
        src={hotelLogo}
        alt="Estalagem de Sangalhos - Sport & Nature Hotel"
        className={styles.logoImage}
        loading="eager"
        decoding="async"
        draggable="false"
      />
    </Link>
  );
}
