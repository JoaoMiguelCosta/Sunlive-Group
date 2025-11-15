// src/shared/ui/icons/Globe.jsx
export default function GlobeIcon({ size = 26, className = "", ...props }) {
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
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4.8" ry="10" />
      <path d="M2 12h20" />
      <path d="M12 2v20" />
    </svg>
  );
}
