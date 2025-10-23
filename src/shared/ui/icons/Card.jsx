export default function CardIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="3"
        y="5.5"
        width="18"
        height="13"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="3"
        y="9.5"
        width="18"
        height="3"
        fill="currentColor"
        opacity=".25"
      />
    </svg>
  );
}
