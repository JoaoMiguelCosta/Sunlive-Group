// src/brands/sports/pages/HomePage.jsx
import styles from "./HomePage.module.css";
import SectionHome from "../components/SectionHome";
import FooterSports from "../components/FooterSports";
import sportsBrand from "../configSports.jsx";
import { footer as groupFooter } from "../../group/ConfigGroup.jsx";
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

export default function HomePage() {
  const rawFooter = sportsBrand.sections?.footer;
  const footerData = buildFooterData(rawFooter, groupFooter, "footer-sports");

  return (
    <main
      data-brand="sports"
      className={styles.page}
      aria-label="Sunlive Sports — Home"
    >
      <SectionHome />
      <FooterSports data={footerData} flushTop />
    </main>
  );
}
