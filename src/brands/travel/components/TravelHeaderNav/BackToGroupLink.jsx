import BackButton from "../../../../shared/ui/BackButton.jsx";
import travelBrand from "../../ConfigTravel.jsx";

/**
 * BackToGroupLink — “Voltar Sunlive Group”
 * Props opcionais permitem override do href/label se precisares.
 */
export default function BackToGroupLink({ href, label, ...rest }) {
  const cfg = travelBrand?.backLink ?? {
    href: "/sunlive-group",
    label: "Voltar Sunlive Group",
  };
  const finalHref = href ?? cfg.href;
  const finalLabel = label ?? cfg.label;

  if (!finalHref) return null;
  return <BackButton href={finalHref} label={finalLabel} {...rest} />;
}
