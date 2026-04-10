import Footer from "../../../../shared/components/Footer";
import travelBrand from "../../config/index.js";
import TravelLinkDirectory from "./TravelLinkDirectory.jsx";

export default function TravelFooter({
  flushTop = false,
  variant = "default",
  ...rest
}) {
  const data = travelBrand?.footer ?? null;
  if (!data) return null;

  return (
    <Footer
      data={data}
      flushTop={flushTop}
      variant={variant}
      ariaLabel="Footer — Sunlive Travel"
      components={{ LinkDirectory: TravelLinkDirectory }}
      {...rest}
    />
  );
}
