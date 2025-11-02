import { Link } from "react-router-dom";
import type { ProjectCard as ProjectCardType } from "../../pages/projects/types";
import { SendHorizontal } from "lucide-react";

type Props = {
  project: ProjectCardType;
};

const isVideo = (src?: string) => !!src && /\.(webm|mp4|ogg)$/i.test(src);

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      to={`/${project.id}`}
      className="border overflow-hidden relative group transition-all duration-300 ease ring-gradient !rounded-xl cursor-pointer flex flex-col dock h-fit"
    >
      <div className="relative z-20 w-full h-full overflow-hidden group">
        <div className="overflow-hidden  relative transition-all duration-300">
          {/* Base image */}
          <div className="scale-112 w-full h-full transition-transform duration-500 ease-in-out md:group-hover:scale-100">
            {isVideo(project.cover) ? (
              <video
                src={project.cover}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-md transition-opacity duration-500 ease-in-out opacity-0 md:group-hover:opacity-100 z-10" />

          {project.coverHover && (
            <div className="z-20 absolute inset-0 transition-all duration-500 ease-in-out opacity-0 scale-[0.5] md:group-hover:opacity-100 md:group-hover:scale-[0.75]">
              {isVideo(project.coverHover) ? (
                <video
                  src={project.coverHover}
                  className="w-full h-full object-contain rounded-xl overflow-hidden"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={project.coverHover}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          )}
        </div>

        <div
          className="dock relative flex justify-between items-center p-4 md:p-6
            after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-[150px]
            after:-translate-x-1/2 after:rounded-full
            after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent)]
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_3px_8px_rgba(0,0,0,0.05)]
          "
        >
          <div className="pr-1">
            <h4 className="pb-1">{project.title}</h4>
            <p className="w-full text-sm tracking-wide font-normal text-greyscale-300 xl:text-base 2xl:text-md">
              {project.category}
            </p>
          </div>
          <div className="hidden md:block md:relative md:top-0 md:right-0 h-fit w-fit shadow-dockbtnShadow dark:shadow-dockbtnShadowDark rounded-full dock-btn group-hover:scale-[1.10] transition-transform duration-300 ease-out transform-gpu [will-change:transform] group-hover:-rotate-[20deg]">
            <SendHorizontal className="w-[16px] h-[16px] md:w-[17px] md:h-[17px]  text-greyscale-400 dark:text-white-100" />
          </div>
        </div>
      </div>
    </Link>
  );
}
