import type { AnchorHTMLAttributes, ReactNode } from "react";

type SecondaryButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  Icon?: React.ComponentType<{ className?: string }>;
  children?: ReactNode; // text like "View Live Website"
};

export default function SecondaryButton({
  Icon,
  children,
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <a
      {...props}
      className={[
        "button inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full w-fit",
        "bg-dark-600 dark:!bg-light-100",
        "[html:not(.dark)_&]:text-white-100 [html.dark_&]:text-dark-700 font-normal",
        "shadow-dockbtnShadow dark:shadow-dockbtnShadowDark",
        className,
      ].join(" ")}
    >
      {Icon ? (
        <Icon className="w-[18px] h-[18px] -translate-y-[.8px] [html:not(.dark)_&]:text-white-100 [html.dark_&]:text-dark-700" />
      ) : null}
      {children}
    </a>
  );
}
