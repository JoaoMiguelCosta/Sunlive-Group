import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import BackButton from "../../../shared/ui/BackButton/BackButton.jsx";

import { groupLogosPage, groupHomePage } from "../config/pages/index.js";

export default function LogosUtilityBar() {
  const overview = groupHomePage?.sections?.overview;

  const socials = overview?.socials ?? [];
  const lang = overview?.lang ?? {
    current: "pt",
    options: [{ label: "PT", name: "Português", code: "pt" }],
  };

  return (
    <UtilityBar
      variant="logos-header"
      leftSlot={<BackButton {...groupLogosPage.backLink} />}
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Logos"
    />
  );
}


