import { Link } from "react-router-dom";
import { NAVBAR } from "../../navbar/const";
import { NavItemContent } from "../../navbar/NavItemContent";
import { useActiveSection, scrollToId } from "./useActiveSection";
import type { SectionLink } from "./useActiveSection";
import { Tooltip } from "../../buttons/Tooltip";
import { House, Globe } from "lucide-react";

type Props = {
  sections: readonly SectionLink[];
  globe?: string;
  mobileTitle?: string;
  accent?: string;
};

export default function Sidebar({
  sections,
  globe,
  mobileTitle,
  accent,
}: Props) {
  const activeId = useActiveSection(sections, 180);
  const TAIL = "#444444";

  return (
    <div className="w-full flex justify-center sticky top-3 z-[100]">
      <div
        className="ring-gradient dock p-2
       after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-[180px] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent)]
      "
      >
        <div className="flex items-center">
          <Link
            to="/"
            aria-describedby="tip-home"
            className="!p-[.9rem] button rounded-full group bg-light-200 dark:bg-dark-500 group transition-all duration-300 hover:scale-[1.05] relative shadow-dockbtnShadow dark:shadow-dockbtnShadowDark"
          >
            <House className="w-[20px] h-[20px] text-greyscale-400 dark:text-white-100" />
            <Tooltip
              id="tip-home"
              label="Home"
              bubbleClassName="-bottom-[70%] left-[22px] translate-y-1 -translate-x-1/2"
              caretClassName="left-[52%] -top-[2px] -translate-y-1/2"
            />
          </Link>

          <span
            aria-hidden
            className="h-7 w-px self-center dark:bg-dark-100 bg-light-400 ml-4"
          />

          <ul>
            <div className="w-full flex items-center max-[820px]:hidden">
              {sections.map(({ id, label }) => {
                const isActive = activeId === id;
                const itemClass = [NAVBAR.CLASSES.BASE].join(" ");
                return (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => scrollToId(id)}
                      className={itemClass}
                    >
                      <NavItemContent isActive={isActive} label={label} />
                    </button>
                  </li>
                );
              })}
            </div>

            <li className="hidden max-[820px]:inline-block mx-3 font-normal text-[17.5px] tracking-[.1px] text-dark-700">
              {mobileTitle}
            </li>
          </ul>

          <span
            aria-hidden
            className="h-6 w-px self-center dark:bg-dark-100 bg-light-400 mr-4"
          />

          {(() => {
            const id = globe?.replace(/^#/, "");
            const isHash = !!id && !!document.getElementById(id);
            const tip = isHash ? "Prototype" : "Live Website";

            return (
              <a
                href={isHash ? `#${id}` : globe}
                onClick={(e) => {
                  if (isHash && id) {
                    e.preventDefault();
                    scrollToId(id);
                  }
                }}
                target={isHash ? undefined : "_blank"}
                rel={isHash ? undefined : "noopener noreferrer"}
                aria-label={isHash ? "Jump to prototype" : "Open prototype"}
                aria-describedby="tip-globe"
                className="!p-[.9rem] button rounded-full group bg-light-200 dark:bg-dark-500 group transition-all duration-300 hover:scale-[1.05] relative shadow-dockbtnShadow dark:shadow-dockbtnShadowDark"
              >
                <Globe className="w-[20px] h-[20px] text-greyscale-400 dark:text-white-100" />
                <Tooltip
                  id="tip-globe"
                  label={tip}
                  bubbleClassName="-bottom-[70%] left-[22px] translate-y-1 -translate-x-1/2"
                  caretClassName="left-[52%] -top-[2px] -translate-y-1/2"
                />
              </a>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
