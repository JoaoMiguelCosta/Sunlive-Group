import HeaderNav from "../../../shared/components/HeaderNav/HeaderNav.jsx";

import { GROUP_NAV_BRANDS, GROUP_NAV_ANCHORS } from "../config/core/nav.js";
import { GROUP_BASE_PATH } from "../config/core/paths.js";

export default function GroupHeaderNav({ socials = [], lang }) {
  return (
    <HeaderNav
      brands={GROUP_NAV_BRANDS}
      activeBrandKey="group"
      navItems={GROUP_NAV_ANCHORS}
      socials={socials}
      lang={lang}
      smartAnchorTargetPath={GROUP_BASE_PATH}
      idPrefix="group"
      ariaLabel="Navegação principal"
    />
  );
}
