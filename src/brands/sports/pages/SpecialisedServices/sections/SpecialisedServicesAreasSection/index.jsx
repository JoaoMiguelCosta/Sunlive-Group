import SportsAreasShowcase from "../../../../shared/ui/SportsAreasShowcase/index.jsx";

import sportsBrand, { resolveSportsIcon } from "../../../../config/index.js";

export default function AreasSection({ data }) {
  if (!data) return null;

  function resolveIcon(iconKey, className) {
    const IconComponent = resolveSportsIcon(sportsBrand.icons, iconKey);

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
