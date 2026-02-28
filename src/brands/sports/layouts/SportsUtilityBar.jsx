import UtilityBar from "../../../shared/components/UtilityBar";
import sportsBrand from "../config/index.js";
import { LANG_DEFAULT } from "../../../shared/config/BrandDefault.jsx";

export default function SportsUtilityBar({ backLink }) {
  const socials = sportsBrand?.header?.socials ?? [];
  const lang = sportsBrand?.header?.lang ?? LANG_DEFAULT;

  return (
    <UtilityBar
      variant="sports-header"
      backLink={backLink}
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Sports"
    />
  );
}
