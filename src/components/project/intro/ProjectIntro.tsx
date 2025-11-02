import type { Intro } from "../../../pages/projects/types";

type Props = Intro & {
  buttonLink?: string;
  button?: string;
  icon?: React.ReactNode;
  iconSize?: number | string;
};

export default function ProjectIntro({
  title,
  subtitle,
  timeline,
  role,
  tools,
}: Props) {
  return (
    <section className="max-container mx-auto overflow-hidden pt-14 md:pt-[4rem] relative z-10 mb-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center">
          <p className="mb-6 md:mb-10 tagline">{subtitle}</p>
          <h1 className="project-title mb-6 max-w-[800px] text-center">
            {title}
          </h1>
        </div>
        <div className="flex flex-col justify-center md:items-center md:py-4 gap-8 md:gap-[4rem] md:flex-row lg:gap-[8rem]">
          <div className="border-l border-greyscale-200 dark:border-white-40 pl-4">
            <p className="uppercase tracking-[.8px] text-sm">Tools</p>
            <p className="text-dark-600 dark:text-white-100">{tools}</p>
          </div>

          <div className="border-l border-greyscale-200 dark:border-white-40 pl-4 ">
            <p className="uppercase tracking-[.8px] text-sm">Role</p>
            <p className="text-dark-600 dark:text-white-100">{role}</p>
          </div>

          <div className="border-l border-greyscale-200 dark:border-white-40 pl-4 ">
            <p className="uppercase tracking-[.8px] text-sm">Timeline</p>
            <p className="text-dark-600 dark:text-white-100">{timeline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
