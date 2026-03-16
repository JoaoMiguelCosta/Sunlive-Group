// src/brands/hotel/shared/ui/icons/Thermal.jsx
export default function ThermalIcon({ size = 26, className = "", ...props }) {
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
        "lucide-thermal-icon",
        "lucide-thermal",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <path d="M7 6c-1 1-.7 2.2.1 3.2.7.9.9 1.9.1 2.8" />
      <path d="M12 4.5c-1 1.1-.7 2.4.1 3.5.8 1 .9 2 .1 3" />
      <path d="M17 6c-1 1-.7 2.2.1 3.2.7.9.9 1.9.1 2.8" />
      <path d="M5 16c1.6 1.4 3.9 2 7 2s5.4-.6 7-2" />
      <path d="M4 19c1.9 1.6 4.6 2.5 8 2.5s6.1-.9 8-2.5" />
    </svg>
  );
}
