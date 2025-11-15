// src/brands/sports/pages/SpecialisedServices/SpecialisedServicesClosingPanel.jsx
import SportsClosingPanel from "../../../../shared/components/Sports/SportsClosingPanel/SportsClosingPanel.jsx";

/**
 * Painel de fecho específico da página Serviços Especializados.
 * Lê os dados de `specialisedServices.closingPanel` no configSports.
 */
export default function SpecialisedServicesClosingPanel({ data }) {
  if (!data) return null;

  const panel = data.closingPanel;
  if (!panel) return null;

  return <SportsClosingPanel {...panel} />;
}
