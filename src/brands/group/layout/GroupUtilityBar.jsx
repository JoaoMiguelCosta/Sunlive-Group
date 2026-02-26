import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import { overview } from "../config/ConfigGroup.jsx";

export default function GroupUtilityBar({ leftSlot = null }) {
  const socials = overview?.socials ?? [];
  const lang = overview?.lang ?? {
    current: "pt",
    options: [{ label: "PT", name: "Português", code: "pt" }],
  };

  return (
    <UtilityBar
      variant="group-header"
      leftSlot={leftSlot}
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Group"
    />
  );
}
