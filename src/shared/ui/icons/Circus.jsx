// src/shared/ui/icons/CircusTentIcon.jsx
export default function CircusTentIcon({
  className = "",
  size = 24,
  strokeWidth = 1.75, // ajusta p/ +/− presença
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Mastro + bandeira */}
      <path d="M12 4v5" />
      <path d="M12 4l2.4.8L12 6" />

      {/* Telhado da tenda */}
      <path d="M4 11 8 7 12 9 16 7 20 11" />

      {/* Estrutura vertical */}
      <path d="M6 11v7" />
      <path d="M10 11v7" />
      <path d="M14 11v7" />
      <path d="M18 11v7" />

      {/* Base */}
      <path d="M4 18h16" />

      {/* Porta em arco */}
      <path d="M11 18v-3a1 1 0 0 1 2 0v3" />
    </svg>
  );
}
