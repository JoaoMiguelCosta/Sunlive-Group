// src/brands/sports/layouts/SportsShell.jsx
import { Outlet } from "react-router-dom";
import UtilityBar from "../../../shared/components/UtilityBar";
import BrandMasthead from "../../../shared/components/Sports/BrandMasthead/index.jsx";

import FooterSports from "../components/FooterSports";
import sportsBrand from "../configSports.jsx";
import { footer as groupFooter } from "../../group/ConfigGroup.jsx";
import { buildFooterData } from "../../../shared/utils/normalizeFooter.js";

import sportsLogo from "../assets/LogoSunliveSports/sports.png";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.jsx";

export default function SportsShell({ backLink }) {
  const footerRaw = sportsBrand.sections?.footer;
  const footerData = buildFooterData(footerRaw, groupFooter, "footer-sports");

  const socials = sportsBrand?.header?.socials ?? []; // já vêm com Icon via withSocialIcons
  const lang = sportsBrand?.header?.lang ?? LANG_DEFAULT;

  return (
    <div data-brand="sports">
      <UtilityBar
        variant="sports-header"
        backLink={backLink}
        socials={socials}
        lang={lang}
      />

      <BrandMasthead
        src={sportsLogo} // usa SEMPRE o asset local
        alt="Sunlive Sports"
        logoAr={2.375}
        loading="eager"
      />

      <main>
        <Outlet />
      </main>

      <FooterSports data={footerData} flushTop />
    </div>
  );
}
