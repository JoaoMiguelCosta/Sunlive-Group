import Footer from "../../../../shared/components/Footer";
import SportsLinkDirectory from "./SportsLinkDirectory.jsx";

export default function SportsFooter({
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
      ariaLabel="Footer — Sunlive Sports"
      components={{ LinkDirectory: SportsLinkDirectory }}
      {...rest}
    />
  );
}
