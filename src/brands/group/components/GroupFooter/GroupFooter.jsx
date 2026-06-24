import Footer from "../../../../shared/components/Footer";
import GroupLinkDirectory from "./GroupLinkDirectory.jsx";

export default function GroupFooter({
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
      ariaLabel="Footer — Sunlive Group"
      components={{ LinkDirectory: GroupLinkDirectory }}
      {...rest}
    />
  );
}


