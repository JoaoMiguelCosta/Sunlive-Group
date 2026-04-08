import TravelActionPanel from "../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function InternationalExperiencePlanner({
  panel = {},
  cta = null,
}) {
  return (
    <TravelActionPanel
      panel={panel}
      cta={cta}
      sectionKey="international-experience-planner"
    />
  );
}
