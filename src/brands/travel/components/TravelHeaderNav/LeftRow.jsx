// src/brands/travel/components/TravelHeaderNav/LeftRow.jsx
import styles from "./LeftRow.module.css";
import BackToGroupLink from "./BackToGroupLink.jsx";
import LogoLink from "./LogoLink.jsx";
import PrimaryNav from "./PrimaryNav.jsx";
import CTAButton from "./CTAButton.jsx";

export default function LeftRow({ logo, nav, cta }) {
  return (
    <div className={styles.leftRow}>
      <BackToGroupLink />
      <LogoLink logo={logo} />
      <PrimaryNav items={nav} />
      {cta?.label && <CTAButton cta={cta} />}
    </div>
  );
}
