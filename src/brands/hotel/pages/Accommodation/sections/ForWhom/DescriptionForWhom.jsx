import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionForWhom({ children }) {
  if (!children) return null;

  return (
    <HotelSectionDescription align="center">{children}</HotelSectionDescription>
  );
}
