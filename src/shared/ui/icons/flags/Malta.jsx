export default function MaltaFlag(props) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      <rect x="12" y="0" width="12" height="16" fill="#d00" />
      <rect x="0" y="0" width="12" height="16" fill="#fff" />
      <rect x="2" y="2" width="4" height="4" fill="#c0c0c0" rx="0.4" />
      <rect x="3.4" y="2" width="1.2" height="4" fill="#a00" />
      <rect x="2" y="3.4" width="4" height="1.2" fill="#a00" />
    </svg>
  );
}
