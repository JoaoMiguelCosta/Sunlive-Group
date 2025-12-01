import FooterGroup from "../../../../shared/components/FooterGroup";
import HotelDirectory from "./HotelDirectory.jsx";

export default function HotelFooter({
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
      footerAccent="#E6C893" // champanhe-quente (Hotel)
      components={{ LinkDirectory: HotelDirectory }} // bloco do meio
      {...rest}
    />
  );
}
