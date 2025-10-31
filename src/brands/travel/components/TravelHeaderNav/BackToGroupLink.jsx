// src/brands/travel/components/TravelHeaderNav/BackToGroupLink.jsx
import BackButton from "../../../../shared/ui/BackButton.jsx";
import { LOGOS_BACKLINK } from "../../../../shared/config/BrandDefault.jsx";

export default function BackToGroupLink() {
  return <BackButton href={LOGOS_BACKLINK.href} label={LOGOS_BACKLINK.label} />;
}
