

import styles from "./HomePage.module.css";


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
      <main className={styles.inner} aria-label="Sunlive Sports — Training Camps">
        <div className={styles.sections}>
       
        </div>
      </main>

     
   
    </div>
  );
}
