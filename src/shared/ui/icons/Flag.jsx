// src/shared/ui/icons/Flag.jsx
export default function FlagIcon(props) {
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
      {/* Mastro */}
      <path d="M6 4v16" />

      {/* Contorno da bandeira */}
      <path d="M6 5h11v7H6z" />

      {/* Linhas internas para padrão xadrez */}
      <path d="M11.5 5v7" />
      <path d="M6 8.5h11" />
    </svg>
  );
}
