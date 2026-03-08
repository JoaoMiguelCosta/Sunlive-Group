export default function Package({ className = "", size = 24, ...props }) {
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
        d="M3 7 12 2l9 5v10l-9 5-9-5V7Zm9-3.2L6.2 7 12 10.2 17.8 7 12 3.8ZM5 8.2v6.9l6 3.3v-6.9L5 8.2Zm14 0-6 3.3v6.9l6-3.3V8.2Z"
      />
    </svg>
  );
}
