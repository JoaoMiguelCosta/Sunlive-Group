import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import { groupHomePage } from "../config/pages/index.js";

const LANG_FALLBACK = {
  current: "pt",
  options: [{ label: "PT", name: "Português", code: "pt" }],
};

export default function GroupUtilityBar() {
  const overview = groupHomePage?.sections?.overview;

  const socials = overview?.socials ?? [];
  const lang = overview?.lang ?? LANG_FALLBACK;

  return (
    <UtilityBar
      variant="group-header"
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Group"
    />
  );
}
