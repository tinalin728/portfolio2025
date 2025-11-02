import type { FC } from "react";

type TooltipProps = {
  id: string;
  label: string;
  bubbleClassName?: string;
  caretClassName?: string;
  tooltipWrapper?: string;
};

export const Tooltip: FC<TooltipProps> = ({
  id,
  label,
  bubbleClassName,
  caretClassName,
}) => (
  <div
    className={`absolute hidden lg:inline-block ${
      bubbleClassName ?? "left-1/2 -top-[2.4rem] translate-y-1 -translate-x-1/2"
    }`}
  >
    <div className="relative">
      <span
        id={id}
        role="tooltip"
        className="pointer-events-none mt-2 whitespace-nowrap font-normal rounded-md dark:bg-light-100 dark:text-dark-600 bg-dark-600 text-white-100 text-xs tracking-wide px-2 py-1 opacity-0 transition-opacity transition-transform duration-150 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0 z-10"
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute h-2 w-2 -translate-x-1/2 translate-y-[2px] rotate-45 bg-dark-600 dark:bg-light-100 opacity-0 transition-opacity transition-transform duration-150 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-[2px] z-0 ${
          caretClassName ?? "left-1/2 -bottom-[2px]"
        }`}
      />
    </div>
  </div>
);
