export default function PortugalFlag(props) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      {/* fundo base — metade verde, metade vermelha */}
      <rect width="24" height="16" fill="#D00000" />
      <rect width="9.6" height="16" fill="#006600" />

      {/* circulo amarelo (armilar simplificada) */}
      <circle cx="9.6" cy="8" r="3.6" fill="#F6C800" />

      {/* círculo branco interior (escudo) */}
      <circle cx="9.6" cy="8" r="2.4" fill="#FFFFFF" />

      {/* escudo vermelho simplificado */}
      <rect x="8.5" y="6.1" width="2.2" height="3.8" rx="0.4" fill="#C00000" />

      {/* “quinas” azuis estilizadas */}
      <rect x="9.0" y="6.5" width="0.4" height="0.6" fill="#0044AA" />
      <rect x="9.8" y="6.5" width="0.4" height="0.6" fill="#0044AA" />
      <rect x="9.0" y="7.3" width="0.4" height="0.6" fill="#0044AA" />
      <rect x="9.8" y="7.3" width="0.4" height="0.6" fill="#0044AA" />
      <rect x="9.4" y="8.1" width="0.4" height="0.6" fill="#0044AA" />
    </svg>
  );
}
