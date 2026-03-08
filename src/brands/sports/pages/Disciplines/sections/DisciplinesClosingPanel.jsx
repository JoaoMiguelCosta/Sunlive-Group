import SportsClosingPanel from "../../../shared/ui/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Modalidades.
 * Lê os dados de `disciplines.closingPanel` no configSports.
 */
export default function DisciplinesClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
