// src/shared/ui/icons/Medal.jsx
export default function MedalIcon({ size = 26, className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
      stroke="#e4bf07"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* fitas */}
      <path d="M6 3h5l1 3 1-3h5l-4 6H10L6 3z" />
      {/* medalha preenchida a dourado */}
      <circle cx="12" cy="16.5" r="5" fill="#e4bf07" />
      {/* contorno da medalha */}
      <circle cx="12" cy="16.5" r="5" fill="none" />
      {/* estrela gravada */}
      <path d="M12 14.6l.8 1.6 1.8.26-1.3 1.27.31 1.82-1.61-.85-1.61.85.31-1.82L9.4 16.46l1.8-.26z" />
    </svg>
  );
}
