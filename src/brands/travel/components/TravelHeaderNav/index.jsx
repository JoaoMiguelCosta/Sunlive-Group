import styles from "./TravelHeaderNav.module.css";
import UtilityBar from "../../../../shared/components/UtilityBar";
import BrandMasthead from "../../../../shared/components/BrandMasthead";
import HeaderShell from "./HeaderShell.jsx";

import PrimaryNav from "./PrimaryNav.jsx";
import CTAButton from "./CTAButton.jsx";
import travelBrand from "../../brand";

export default function TravelHeaderNav() {
  const { logo, nav = [], cta, socials, lang } = travelBrand;

  return (
    <HeaderShell className={styles.wrap} aria-label="Header — Sunlive Travel">
      <div className={styles.container}>
        <UtilityBar
          variant="travel-header"
          ariaLabel="Header — Sunlive Travel"
          backLink={{ href: "/sunlive-group", label: "Voltar Sunlive Group" }}
          socials={socials}
          lang={lang}
        />

        <BrandMasthead
          src={logo?.src}
          alt={logo?.alt ?? "Sunlive Travel"}
          logoAr={2.6}
          loading="eager"
          className={styles.masthead}
        />

        <div
          className={styles.primaryRow}
          aria-label="Navegação — Sunlive Travel"
        >
          <div className={styles.primaryInner}>
            <div className={styles.navSlot}>
              <PrimaryNav items={nav} />
            </div>

            <div className={styles.ctaSlot}>
              <CTAButton cta={cta} />
            </div>
          </div>
        </div>
      </div>
    </HeaderShell>
  );
}
