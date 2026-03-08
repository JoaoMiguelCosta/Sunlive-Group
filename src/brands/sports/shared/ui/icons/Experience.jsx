// src/shared/ui/icons/ConsultingExperience.jsx
export default function ConsultingExperienceIcon(props) {
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
      {/* Balão de consultoria */}
      <path d="M6 7h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7l-3.5 3v-3H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />

      {/* Gráfico de barras (experiência / resultados) */}
      <path d="M9 14v-3" />
      <path d="M12 14v-4" />
      <path d="M15 14v-5" />
      <path d="M8 14h8" />
    </svg>
  );
}
