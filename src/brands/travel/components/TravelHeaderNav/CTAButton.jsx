// src/brands/travel/components/TravelHeaderNav/CTAButton.jsx
import CTA from "../../../../shared/ui/CTAButton";

export default function CTAButton({
  cta,
  className = "",
  blink = true,
  compact = "auto",
  Icon, // opcional
}) {
  if (!cta?.href) return null;

  return (
    <CTA
      cta={cta}
      className={className}
      blink={blink}
      compact={compact}
      Icon={Icon}
    />
  );
}
