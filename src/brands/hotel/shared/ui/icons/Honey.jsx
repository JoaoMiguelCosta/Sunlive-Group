export default function HoneyIcon({ size = 26, className = "", ...props }) {
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
      className={["lucide", "lucide-honey-icon", "lucide-honey", className].join(
        " ",
      )}
      aria-hidden="true"
      {...props}
    >
      <path d="M8 4h8" />
      <path d="M9 4v2" />
      <path d="M15 4v2" />
      <path d="M7 8.5A2.5 2.5 0 0 1 9.5 6h5A2.5 2.5 0 0 1 17 8.5V10H7Z" />
      <path d="M7 10h10v8a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3z" />
      <path d="M7 14c1 .7 2 .7 3 0s2-.7 3 0 2 .7 3 0 2-.7 3 0" />
      <path d="M12 11.5c0 1-1.2 1.7-1.2 2.7A1.2 1.2 0 0 0 12 15.4a1.2 1.2 0 0 0 1.2-1.2c0-1-1.2-1.7-1.2-2.7Z" />
    </svg>
  );
}