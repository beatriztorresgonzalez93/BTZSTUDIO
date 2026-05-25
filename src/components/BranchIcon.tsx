export function BranchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M8 16C12 10 18 6 28 8C22 4 24 2 32 4C28 8 34 12 42 10C38 14 44 18 52 16"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M48 16C54 8 62 4 72 6C66 2 70 0 78 2C74 6 80 10 88 8"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M84 16C90 10 96 8 104 10C100 6 108 4 112 6"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <ellipse cx="28" cy="7" rx="3" ry="5" stroke="currentColor" strokeWidth="0.6" transform="rotate(-20 28 7)" />
      <ellipse cx="52" cy="9" rx="2.5" ry="4" stroke="currentColor" strokeWidth="0.6" transform="rotate(15 52 9)" />
      <ellipse cx="72" cy="5" rx="3" ry="5" stroke="currentColor" strokeWidth="0.6" transform="rotate(-10 72 5)" />
      <ellipse cx="96" cy="9" rx="2.5" ry="4" stroke="currentColor" strokeWidth="0.6" transform="rotate(20 96 9)" />
    </svg>
  );
}
