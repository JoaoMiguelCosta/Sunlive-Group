export default function BrazilFlag(props) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      {/* fundo verde */}
      <rect width="24" height="16" fill="#009B3A" />

      {/* losango amarelo */}
      <path d="M12 2 21 8 12 14 3 8 12 2Z" fill="#FFDF00" />

      {/* círculo azul */}
      <circle cx="12" cy="8" r="3.2" fill="#002776" />
    </svg>
  );
}
