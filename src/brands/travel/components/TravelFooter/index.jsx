// src/brands/travel/components/TravelFooter/index.jsx
import FooterGroup from "../../../../shared/components/FooterGroup";
import TravelLinkDirectory from "./TravelLinkDirectory.jsx";

export default function TravelFooter({
  data,
  flushTop = false,
  variant = "default",
  ...rest
}) {
  if (!data) return null;

  return (
    <FooterGroup
      data={data}
      flushTop={flushTop}
      variant={variant}
      footerAccent="#2EA7E0" // 👈 acento Travel
      components={{ LinkDirectory: TravelLinkDirectory }} // 👈 override
      {...rest}
    />
  );
}
