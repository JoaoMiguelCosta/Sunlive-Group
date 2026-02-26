import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import BackButton from "../../../shared/ui/BackButton.jsx";

import { overview } from "../config/ConfigGroup.jsx";
import configGroupLogos from "../config/ConfigGroupLogos.jsx";

export default function LogosUtilityBar() {
  const socials = overview?.socials ?? [];
  const lang = overview?.lang ?? {
    current: "pt",
    options: [{ label: "PT", name: "Português", code: "pt" }],
  };

  return (
    <UtilityBar
      variant="logos-header"
      leftSlot={<BackButton {...configGroupLogos.backLink} />}
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Logos"
    />
  );
}
