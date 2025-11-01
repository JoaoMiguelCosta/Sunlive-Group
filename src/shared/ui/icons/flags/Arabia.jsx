export default function SaudiArabiaFlag(props) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      {/* fundo verde */}
      <rect width="24" height="16" fill="#006C35" />

      {/* bloco branco a simular a shahada */}
      <rect
        x="3"
        y="4"
        width="18"
        height="3"
        rx="0.4"
        fill="#ffffff"
        opacity="0.95"
      />

      {/* “linhas” internas para dar ideia de caligrafia */}
      <rect x="4" y="5" width="3" height="1" fill="#006C35" />
      <rect x="8" y="5" width="2.6" height="1" fill="#006C35" />
      <rect x="11.5" y="5" width="2.2" height="1" fill="#006C35" />
      <rect x="14.5" y="5" width="2.8" height="1" fill="#006C35" />

      {/* espada */}
      <rect x="6" y="11" width="10" height="0.7" rx="0.35" fill="#ffffff" />
      <rect
        x="14.5"
        y="10.3"
        width="1.5"
        height="2.1"
        rx="0.3"
        fill="#ffffff"
      />
    </svg>
  );
}
