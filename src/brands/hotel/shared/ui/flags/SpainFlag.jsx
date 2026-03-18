export default function SpainFlagIcon({
  size = 26,
  className = "",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={[
        "flag-icon",
        "flag-icon-spain",
        "flag-spain",
        className,
      ].join(" ")}
      aria-hidden="true"
      {...props}
    >
      <rect x="0" y="80" width="512" height="352" rx="48" fill="#c4001d" />
      <rect x="0" y="145" width="512" height="222" fill="#ffbf00" />

      <g transform="translate(102 256)">
        <path
          d="M-20-58h40v94c0 26-18 46-40 46s-40-20-40-46v-94z"
          fill="#b00020"
        />
        <ellipse cx="-20" cy="-8" rx="28" ry="7" fill="none" stroke="#ffbf00" strokeWidth="4" />
        <path
          d="M-20-90c12 0 17-10 17-20 12 9 19 19 19 31 0 7-4 12-10 12h-52c-6 0-10-5-10-12 0-12 7-22 19-31 0 10 5 20 17 20z"
          fill="none"
          stroke="#b00020"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M-42-70h44M-42 48h44" stroke="#b00020" strokeWidth="4" />
        <path d="M-54-56v84M14-56v84" stroke="#b00020" strokeWidth="8" strokeLinecap="round" />
        <path d="M-60 60c8 8 16 8 24 0 8 8 16 8 24 0 8 8 16 8 24 0" fill="none" stroke="#b00020" strokeWidth="4" />
      </g>

      <path
        d="M0 112h512v40L0 112zm0 248h512v40L0 360z"
        fill="#d81b2d"
        opacity="0.22"
      />
      <path
        d="M0 80h70l335 352h-70z"
        fill="#ffffff"
        opacity="0.08"
      />
    </svg>
  );
}