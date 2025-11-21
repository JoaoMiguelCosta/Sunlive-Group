// src/shared/ui/icons/PhysicalTherapy.jsx
export default function PhysicalTherapyIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Paciente deitado (cabeça) — maior e um pouco mais acima */}
      <circle cx="7.2" cy="9.2" r="1.7" />

      {/* Tronco/pernas sobre a maca — linha mais longa */}
      <path d="M8.8 9.8L13.6 11.4L16.6 13" />

      {/* Maca — mais larga e ligeiramente mais alta */}
      <path d="M4.5 13H19.5" />
      <path d="M6.5 13V17.2" />
      <path d="M17.5 13V17.2" />

      {/* Cruz médica (saúde / terapia) — também ligeiramente maior */}
      <path d="M18.2 6.5v3" />
      <path d="M16.7 8h3" />
    </svg>
  );
}
