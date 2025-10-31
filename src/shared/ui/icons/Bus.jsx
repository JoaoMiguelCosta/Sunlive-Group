export default function Bus({ className = "", size = 24, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9a2 2 0 0 1-2 2v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2H7v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a2 2 0 0 1-2-2V5Zm2 7h12V6H6v6Zm1.5 5A1.5 1.5 0 1 0 6 16.5 1.5 1.5 0 0 0 7.5 17Zm11 0A1.5 1.5 0 1 0 17 16.5 1.5 1.5 0 0 0 18.5 17Z"
      />
    </svg>
  );
}
