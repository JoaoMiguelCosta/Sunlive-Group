import UtilityBar from "../../../shared/components/UtilityBar";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.js";

import header from "../config/core/header.js";

export default function SportsUtilityBar({
  backLink,
  homeLink,
  pageSwitcher = null,
  isHome = false,
}) {
  const socials = header?.socials ?? [];
  const lang = header?.lang ?? LANG_DEFAULT;

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
