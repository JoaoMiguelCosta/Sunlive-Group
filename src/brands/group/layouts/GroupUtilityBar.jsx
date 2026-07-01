import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import overview from "../config/sections/home/overview.js";
import GroupHeaderNav from "./GroupHeaderNav.jsx";
import { LANG_FALLBACK } from "../config/core/language.js";

export default function GroupUtilityBar() {
  const socials = overview.socials ?? [];
  const lang = overview.lang ?? LANG_FALLBACK;

  return (
    <UtilityBar
      variant="group-header"
      centerSlot={<GroupHeaderNav socials={socials} lang={lang} />}
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Group"
    />
  );
}
