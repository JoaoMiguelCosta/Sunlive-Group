import UtilityBar from "../../../shared/components/UtilityBar";
import sportsBrand from "../config/index.js";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.js";

export default function SportsUtilityBar({
  backLink,
  homeLink,
  pageSwitcher = null,
  isHome = false,
}) {
  const socials = sportsBrand?.header?.socials ?? [];
  const lang = sportsBrand?.header?.lang ?? LANG_DEFAULT;

  return (
    <UtilityBar
      variant="sports-header"
      backLink={backLink}
      homeLink={homeLink}
      leftSlot={pageSwitcher}
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Sports"
      data-page={isHome ? "sports-home" : "sports-inner"}
    />
  );
}
