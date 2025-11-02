import { Linkedin, Github, Mail, FolderDown } from "lucide-react";
import { useDockWave } from "./useDockWave";
import { Tooltip } from "../../components/buttons/Tooltip";

export default function Dock() {
  const ref = useDockWave({ radius: 120, buttonSelector: ".dock-btn" });

  return (
    <div
      ref={ref}
      data-vars
      className="dock relative inline-flex items-center gap-3 py-2 px-2 w-fit mx-auto cursor-pointer overflow-visible rounded-full ring-gradient transition-[padding] duration-300 ease-out hover:pl-4 hover:pr-4 has-[.dock-btn:hover]:pl-4 has-[.dock-btn:hover]:pr-4 focus-within:pl-5 focus-within:pr-5 dark:after:content-[''] dark:after:absolute dark:after:left-1/2 dark:after:bottom-0 dark:after:h-px dark:after:w-[120px] dark:after:-translate-x-1/2 dark:after:rounded-full dark:after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent)] "
    >
      <a
        href="https://www.linkedin.com/in/tina-lin-000613b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-btn group"
      >
        <Linkedin
          className=" text-greyscale-400 dark:text-white-100 w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
          fill="currentColor"
          strokeWidth={0.5}
          aria-describedby="Linkedin"
        />
        <Tooltip id="Linkedin" label="Linkedin" />
      </a>

      <span
        aria-hidden
        className="h-5 w-px self-center dark:bg-dark-100 bg-light-400"
      />

      <a
        href="https://github.com/tinalin728"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-btn dock-blur group"
      >
        <Github
          className=" text-greyscale-400 dark:text-white-100 w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
          fill="currentColor"
          strokeWidth={0.5}
          aria-describedby="Github"
        />
        <Tooltip id="Github" label="Github" />
      </a>

      <span
        aria-hidden
        className="h-5 w-px self-center dark:bg-dark-100 bg-light-400"
      />

      <a href="mailto:contact@tinalin.ca" className="dock-btn group">
        <Mail
          className="text-greyscale-400 dark:text-white-100 w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
          strokeWidth={2}
          aria-describedby="Email"
        />
        <Tooltip id="Email" label="Email" />
      </a>
      <span
        aria-hidden
        className="h-5 w-px self-center dark:bg-dark-100 bg-light-400"
      />
      <a
        href="/assets/resume.pdf"
        aria-label="Resume"
        target="_blank"
        rel="noopener noreferrer"
        className="dock-btn group"
      >
        <FolderDown
          className="text-greyscale-400 dark:text-white-100 w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
          strokeWidth={2}
          aria-describedby="Resume"
        />
        <Tooltip id="Resume" label="Resume" />
      </a>
    </div>
  );
}
