import TravelActionPanel from "../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function DomesticJourneyPlanner({ panel = {}, cta = null }) {
  return (
    <TravelActionPanel
      panel={panel}
      cta={cta}
      sectionKey="domestic-journey-planner"
    />
  );
}
