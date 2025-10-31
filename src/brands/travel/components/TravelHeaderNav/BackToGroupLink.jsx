// src/brands/travel/components/TravelHeaderNav/BackToGroupLink.jsx
import BackButton from "../../../../shared/ui/BackButton.jsx";
import { LOGOS_BACKLINK } from "../../../../shared/config/BrandDefault.jsx";

/**
 * BackToGroupLink — “Voltar Sunlive Group”
 * Props opcionais permitem override do href/label se precisares.
 */
export default function BackToGroupLink({
  href = LOGOS_BACKLINK?.href,
  label = LOGOS_BACKLINK?.label,
  ...rest
}) {
  if (!href) return null;
  return <BackButton href={href} label={label} {...rest} />;
}
