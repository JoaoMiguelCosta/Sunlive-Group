// src/shared/ui/icons/WorkflowIcon.jsx
export default function WorkflowIcon({ className = "", size = 24, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Nó de topo */}
      <rect x="10" y="3" width="4" height="4" rx="0.8" ry="0.8" />

      {/* Nós de baixo */}
      <rect x="4" y="16" width="4" height="4" rx="0.8" ry="0.8" />
      <rect x="16" y="16" width="4" height="4" rx="0.8" ry="0.8" />

      {/* Ligações */}
      <path d="M12 7v4m0 0-5 5m5-5 5 5" />
    </svg>
  );
}
