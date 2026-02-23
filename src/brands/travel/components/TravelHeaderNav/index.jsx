import styles from "./TravelHeaderNav.module.css";
import UtilityBar from "../../../../shared/components/UtilityBar";
import HeaderShell from "./HeaderShell.jsx";
import LeftRow from "./LeftRow.jsx";
import travelBrand from "../../brand";

export default function TravelHeaderNav() {
  const { logo, nav = [], cta, socials, lang } = travelBrand;

  return (
    <HeaderShell
      as="header"
      className={styles.wrap}
      role="banner"
      aria-label="Header — Sunlive Travel"
    >
      <div className={styles.container}>
        <UtilityBar
          variant="travel-header"
          ariaLabel="Header — Sunlive Travel"
          leftSlot={<LeftRow logo={logo} nav={nav} cta={cta} />}
          socials={socials}
          lang={lang}
        />
      </div>
    </HeaderShell>
  );
}
