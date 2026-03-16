// src/shared/ui/icons/Bolt.jsx
export default function BoltIcon({ size = 26, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="#e4bf07"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={["lucide", "lucide-bolt-icon", "lucide-bolt", className].join(
        " ",
      )}
      aria-hidden="true"
      {...props}
    >
      <path d="M13 2L5 13h5l-1 9 8-11h-5l1-9z" />
    </svg>
  );
}
