import styles from "./SectionHome.module.css";


import GatewayGrid from "./GatewayGrid.jsx";

export default function SectionHome() {
  return (
    <section
      className={styles.section}
      data-brand="sports"
      aria-label="Home — Sunlive Sports"
    >
       <GatewayGrid />
    </section>
  );
}
