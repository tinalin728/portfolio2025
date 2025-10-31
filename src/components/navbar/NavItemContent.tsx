type Props = { isActive: boolean; label: string };

export function NavItemContent({ isActive, label }: Props) {
  return (
    <span className="relative flex items-center gap-1 group">
      {/* Dot */}
      <span className="block w-[2px]">
        <span
          className={
            isActive
              ? "block h-[8px] w-[8px] rounded-full transition-all duration-300 opacity-100 translate-x-[-4px] scale-100 [html:not(.dark)_&]:bg-dark-700 [html.dark_&]:bg-white-100 [html:not(.dark)_&]:shadow-[0_0_10px_rgba(0,0,0,0.4)] [html.dark_&]:shadow-[0_0_8px_rgba(255,254,234,0.9)]"
              : "block h-[8px] w-[8px] rounded-full transition-all duration-300 opacity-0 -translate-x-1 scale-0"
          }
        />
      </span>

      {/* Label */}
      <span
        className={
          isActive
            ? "transition-transform duration-300 font-normal translate-x-[6px] [html:not(.dark)_&]:text-dark-500 [html.dark_&]:text-white-100"
            : "transition-transform duration-300 font-normal translate-x-[-3px] text-greyscale-300 [html:not(.dark)_&]:group-hover:text-greyscale-400 [html.dark_&]:hover:text-greyscale-100"
        }
      >
        {label}
      </span>
    </span>
  );
}
