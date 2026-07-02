import { useLocation } from "react-router-dom";

import UtilityBar from "../../../shared/components/UtilityBar/index.jsx";
import overview from "../config/sections/home/overview.js";
import { GROUP_BASE_PATH, GROUP_LOGOS_PATH } from "../config/core/paths.js";
import { LANG_FALLBACK } from "../config/core/language.js";
import { normalizePathname } from "../shared/utils/pathname.js";

export default function LogosUtilityBar() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);

  const socials = overview.socials ?? [];
  const lang = overview.lang ?? LANG_FALLBACK;

  const isLogosHome = pathname === GROUP_LOGOS_PATH;

  const utilityBarProps = isLogosHome
    ? {
        backLink: {
          href: GROUP_BASE_PATH,
          label: "Voltar Sunlive Group",
        },
      }
    : {
        homeLink: {
          href: GROUP_LOGOS_PATH,
          label: "Início Logos",
        },
      };

  return (
    <UtilityBar
      variant="logos-header"
      socials={socials}
      lang={lang}
      ariaLabel="Utility bar — Logos"
      data-page={isLogosHome ? "logos-home" : "logos-inner"}
      {...utilityBarProps}
    />
  );
}
