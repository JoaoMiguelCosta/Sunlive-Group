// src/brands/hotel/shared/ui/icons/AirVent.jsx
export default function AirVentIcon({ size = 26, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[
        "lucide",
        "lucide-air-vent-icon",
        "lucide-air-vent",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
    </svg>
  );
}
