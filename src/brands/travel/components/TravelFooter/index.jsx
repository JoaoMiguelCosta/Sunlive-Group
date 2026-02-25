import Footer from "../../../../shared/components/Footer";
import TravelLinkDirectory from "./TravelLinkDirectory.jsx";

export default function TravelFooter({
  data,
  flushTop = false,
  variant = "default",
  ...rest
}) {
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
