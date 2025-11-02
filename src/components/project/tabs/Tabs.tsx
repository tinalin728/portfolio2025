import React from "react";
import { useTabs } from "./useTab";
type TabsProps = {
  labels: readonly string[];
  contents: readonly React.ReactNode[]; // images or any node
  defaultIndex?: number;
};

export function Tabs({ labels, contents, defaultIndex = 0 }: TabsProps) {
  if (labels.length !== contents.length) {
    console.error("Tabs: labels and contents must have the same length");
  }

  const { active, isActive, select } = useTabs(defaultIndex);

  const baseBtn =
    "w-[110px] py-2 rounded-full uppercase tracking-[1px] text-[12.5px] font-normal transition";
  const activeBtn =
    "border text-white-100 dark:text-dark-700 bg-dark-700 dark:bg-light-100 shadow-dockbtnShadow dark:shadow-dockbtnShadowDark";
  const inactiveBtn =
    "text-greyscale-300 dark:text-white-100/70 hover:text-greyscale-400 dark:hover:text-white-100";

  return (
    <>
      <div
        role="tablist"
        aria-label="Tabs"
        className="flex p-[4px] w-fit mx-auto rounded-full border dark:border-black relative shadow-block dark:shadow-blockDark bg-light-200/80 dark:bg-dark-600"
      >
        {labels.map((label, i) => (
          <button
            key={label}
            role="tab"
            aria-selected={isActive(i)}
            tabIndex={isActive(i) ? 0 : -1}
            onClick={() => select(i)}
            className={`${baseBtn} ${isActive(i) ? activeBtn : inactiveBtn}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-[4rem] md:mt-10">{contents[active]}</div>
    </>
  );
}
