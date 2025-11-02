import { useEffect, useMemo } from "react";
import ProjectCard from "../project-cards/ProjectCard";
import type { ReactNode } from "react";
import type { ProjectCard as ProjectCardType } from "../../pages/projects/types";

type Props = {
  children: ReactNode;
  className?: string;
  projects: readonly ProjectCardType[];
  currentId: string;
};

export default function ProjectWrapper({
  children,
  className = "",
  projects,
  currentId,
}: Props) {
  const nextTwo = useMemo(() => {
    const n = projects.length;
    if (n === 0) return [];
    if (n === 1) return [projects[0]];
    const idx = projects.findIndex((p) => p.id === currentId);
    if (idx === -1) return [projects[0], projects[1]];
    return [projects[(idx + 1) % n], projects[(idx + 2) % n]];
  }, [projects, currentId]);

  useEffect(() => {
    console.log("[ProjectWrapper] currentId:", currentId);
    console.log(
      "[ProjectWrapper] list ids:",
      projects.map((p) => p.id)
    );
    console.log(
      "[ProjectWrapper] nextTwo ids:",
      nextTwo.map((p) => p.id)
    );
  }, [projects, currentId, nextTwo]);

  return (
    <div className="border-y dark:bg-dark-700 bg-light-300 relative z-10">
      <div
        className={`max-w-[78rem] mx-auto ${className} bg-light-300 dark:bg-dark-700`}
      >
        <div className=" dark:bg-dark-600/80 bg-light-200/80 md:px-6 lg:px-0">
          <div className="border-x">
            {children}
            <hr className="divider" />

            <div className="text-container flex justify-center items-center gap-4 md:gap-8 pb-10 md:pb-20">
              <hr className="w-full dark:bg-white-40" />
              <h2 className="tracking-[1px] text-greyscale-400 dark:text-greyscale-200 text-nowrap">
                View more work{" "}
              </h2>
              <hr className="w-full dark:bg-white-40" />
            </div>

            {nextTwo.length >= 2 && (
              <div className="grid md:grid-cols-2 gap-6 pb-12 md:pb-20 px-20">
                {nextTwo.slice(0, 2).map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
