import FooterGroup from "../../../../shared/components/FooterGroup";
import SportsLinkDirectory from "./SportsLinkDirectory.jsx";

export default function SportsFooter({
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
      footerAccent="#2EC27E" // acento Sports
      components={{ LinkDirectory: SportsLinkDirectory }} // override do bloco do meio
      {...rest}
    />
  );
}
