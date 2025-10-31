// src/brands/travel/components/TravelHeaderNav/LeftRow.jsx
import styles from "./LeftRow.module.css";
import BackToGroupLink from "./BackToGroupLink.jsx";
import LogoLink from "./LogoLink.jsx";
import PrimaryNav from "./PrimaryNav.jsx";
import CTAButton from "./CTAButton.jsx";

export default function LeftRow({ logo, nav = [], cta }) {
  return (
    <div className={styles.leftRow}>
      {/* Coluna fixa à ESQUERDA */}
      <div className={styles.back}>
        <BackToGroupLink />
      </div>

      {/* Grupo CENTRAL (logo + nav + CTA) */}
      <div className={styles.center}>
        <LogoLink logo={logo} />
        <PrimaryNav items={nav} />
        <CTAButton cta={cta} />
      </div>
    </div>
  );
}
