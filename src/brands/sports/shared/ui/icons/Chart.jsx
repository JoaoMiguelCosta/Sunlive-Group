// src/shared/ui/icons/Chart.jsx
export default function ChartIcon(props) {
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
      {/* eixo X */}
      <path d="M4 18.5h16" />
      {/* eixo Y */}
      <path d="M5.5 6v12.5" />

      {/* barras */}
      <rect x="7.5" y="11" width="2.4" height="5.5" rx="0.6" />
      <rect x="11.3" y="8.5" width="2.4" height="8" rx="0.6" />
      <rect x="15.1" y="10" width="2.4" height="6.5" rx="0.6" />
    </svg>
  );
}
