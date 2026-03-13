import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionStayPolicies({ children }) {
  if (!children) return null;

  return (
    <HotelSectionDescription align="center">{children}</HotelSectionDescription>
  );
}
