import { type ComponentType } from "react";

type IconType = ComponentType<React.SVGProps<SVGSVGElement>>;

type Props = {
  href?: string;
  label: string;
  Icon?: IconType;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  theme?: "dark" | "light";
};

export function PrimaryButton({
  href,
  label,
  Icon,
  className = "",
  target,
  rel,
  theme,
}: Props) {
  const base = `button rounded-full ${className}`;

  const content = (
    <div className="flex justify-center items-center gap-2 px-5 py-3 relative overflow-hidden">
      {Icon ? (
        <Icon
          className="w-[18px] h-[18px] -translate-y-[.8px] dark:text-white-100"
          strokeWidth={2}
          fill="none"
        />
      ) : null}
      <span className="dark:text-white-100 font-normal tracking-[.3px]">
        {label}
      </span>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel={rel} className={base}>
      {content}
    </a>
  ) : (
    <button className={base} type="button">
      {content}
    </button>
  );
}
