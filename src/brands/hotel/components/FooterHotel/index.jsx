import Footer from "../../../../shared/components/Footer";
import HotelDirectory from "./HotelDirectory.jsx";

export default function HotelFooter({
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
      ariaLabel="Footer — Estalagem de Sangalhos"
      components={{ LinkDirectory: HotelDirectory }}
      {...rest}
    />
  );
}
