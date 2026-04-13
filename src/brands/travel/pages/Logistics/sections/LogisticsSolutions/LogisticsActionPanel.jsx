import TravelActionPanel from "../../../../shared/ui/TravelActionPanel/TravelActionPanel.jsx";

export default function LogisticsActionPanel({
  panel = null,
  cta = null,
  className = "",
}) {
  if (!panel && !cta) return null;

  return (
    <TravelActionPanel
      panel={panel}
      cta={cta}
      className={className}
      sectionKey="logistics-action-panel"
    />
  );
}
