import TravelActionPanel from "../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function PartnerHotelsPlanningPanel({ panel = {}, cta = null }) {
  return (
    <TravelActionPanel
      panel={panel}
      cta={cta}
      sectionKey="partner-hotels-planning-panel"
    />
  );
}
