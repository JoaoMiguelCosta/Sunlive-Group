import contacts from "../../../../config/sections/information/contacts.js";
import HotelSectionHeader from "../../../../shared/ui/HotelSectionHeader/HotelSectionHeader.jsx";

export default function TitleContacts({ titleId }) {
  const section = contacts;

  if (!section?.headerLabel) return null;

  return (
    <HotelSectionHeader
      id={titleId}
      label={section.headerLabel}
      align="center"
      as="h2"
    />
  );
}
