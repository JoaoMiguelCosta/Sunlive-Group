import styles from "./SectionHome.module.css";

/* Sub-blocos */
import UtilityHeaderBar from "./UtilityHeaderBar.jsx";
import BrandMasthead from "./BrandMasthead.jsx";
import GatewayGrid from "./GatewayGrid.jsx";

export default function SectionHome() {
  return (
    <section
      className={styles.section}
      data-brand="sports"
      aria-label="Home — Sunlive Sports"
    >
      <UtilityHeaderBar />
      <BrandMasthead />
      <GatewayGrid />
    </section>
  );
}
