export default function LebanonFlag(props) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      <rect width="24" height="16" fill="#fff" />
      <rect y="0" width="24" height="4" fill="#ce1126" />
      <rect y="12" width="24" height="4" fill="#ce1126" />
      <path
        d="M12 4 L9 8 H11 L10 10 H12 L11 11 H13 L12 10 H14 L13 8 H15 L12 4 Z"
        fill="#007a3d"
      />
    </svg>
  );
}
