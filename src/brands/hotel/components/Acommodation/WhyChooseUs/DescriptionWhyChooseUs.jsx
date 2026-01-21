import HotelSectionDescription from "../../../../../shared/components/Hotel/HotelSectionDescription/HotelSectionDescription.jsx";

export default function DescriptionWhyChooseUs({ children }) {
  if (!children) return null;

  return (
    <HotelSectionDescription align="center">{children}</HotelSectionDescription>
  );
}
