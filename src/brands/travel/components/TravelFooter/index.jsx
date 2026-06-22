import Footer from "../../../../shared/components/Footer";
import footer from "../../config/core/footer.js";
import TravelLinkDirectory from "./TravelLinkDirectory.jsx";

export default function TravelFooter({
  flushTop = false,
  variant = "default",
  ...rest
}) {
  const data = footer;
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
