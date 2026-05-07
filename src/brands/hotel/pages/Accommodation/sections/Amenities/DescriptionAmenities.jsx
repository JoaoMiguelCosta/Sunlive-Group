import HotelSectionDescription from "../../../../shared/ui/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionAmenities({ id, children, className = "" }) {
  if (!children) return null;

  return (
    <HotelSectionDescription id={id} align="center" className={className}>
      {children}
    </HotelSectionDescription>
  );
}
