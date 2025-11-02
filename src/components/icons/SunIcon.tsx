export function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 23"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <path
        d="M11 15.5c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4Z"
        fill="#FFBB00"
      />
      <path
        d="M11 1.5V3.5M11 19.5V21.5M3.93 4.43L5.34 5.84M16.66 17.16L18.07 18.57M1 11.5H3M19 11.5H21M5.34 17.16L3.93 18.57M18.07 4.43L16.66 5.84M15 11.5c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4Z"
        stroke="#FFBB00"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
