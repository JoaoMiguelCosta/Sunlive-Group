import { resolveSportsIcon } from "../../../../config/core/iconKeyMap.js";
import { ICONS } from "../../../../config/core/resolvedVisuals.js";
import SportsAreasShowcase from "../../../../shared/ui/SportsAreasShowcase/index.jsx";
export default function ConsultancyAreasSection({ data }) {
  if (!data) return null;
  function resolveIcon(iconKey, className) {
    const IconComponent = resolveSportsIcon(ICONS, iconKey);
    return IconComponent ? <IconComponent className={className} /> : null;
  }
  return (
    <SportsAreasShowcase
      id={data.id}
      intro={data.intro}
      areas={data.items}
      ui={data.ui}
      resolveIcon={resolveIcon}
    />
  );
}
