import type React from "react";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  scrollMtClass?: string;
  useContainer?: boolean;
};

export default function SectionLayout({
  id,
  title,
  children,
  className,
  scrollMtClass = "scroll-mt-[100px]",
  useContainer = true,
}: Props) {
  const containerClass = useContainer ? "text-container" : "";

  return (
    <section
      id={id}
      className={`${containerClass} ${scrollMtClass} ${className ?? ""}`}
    >
      <div className="flex justify-center items-center gap-4 md:gap-8 mb-10 md:mb-20">
        <hr className="w-full dark:bg-white-40" />
        <h2 className="tracking-[1px] text-greyscale-400 dark:text-greyscale-200 text-nowrap">
          {title}
        </h2>
        <hr className="w-full dark:bg-white-40" />
      </div>

      {children}
    </section>
  );
}
