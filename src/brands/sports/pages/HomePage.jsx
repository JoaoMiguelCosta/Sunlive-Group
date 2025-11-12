// Sunlive Sports — Página principal (alinhada ao layout “Performance Prestige”)

import styles from "./HomePage.module.css";

import SectionHome from "../components/SectionHome";
import FooterSports from "../components/FooterSports";

import sportsBrand from "../configSports.jsx";
import { footer as groupFooter } from "../../group/ConfigGroup.jsx";

// Normalizador partilhado do footer
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

export default function HomePage() {
  const rawFooter = sportsBrand.sections?.footer;
  const footerData = buildFooterData(rawFooter, groupFooter, "footer-sports");

  return (
    <div className={styles.pageWrap} data-brand="sports">
      <main className={styles.inner} aria-label="Sunlive Sports — Home">
        <div className={styles.sections}>
          <SectionHome />
        </div>
      </main>

      {/* Footer colado ao bloco anterior */}
      <FooterSports data={footerData} flushTop />
    </div>
  );
}
