import UtilityBarShared from "../../../../../shared/components//UtilityBar/index.jsx";
import { overview } from "../../../ConfigGroup.jsx";

export default function UtilityBar({ leftSlot = null }) {
  const {
    socials = [],
    lang = {
      current: "pt",
      options: [{ label: "PT", name: "Português", code: "pt" }],
    },
  } = overview ?? {};

  return (
    <UtilityBarShared
      leftSlot={leftSlot}
      socials={socials}
      lang={lang}
      ariaLabel="Barra utilitária"
    />
  );
}
