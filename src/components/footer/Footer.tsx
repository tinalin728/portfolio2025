import { ContactCopy } from "./ContactCopy";
import { MousePointer2, Smile, MoveRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Footer() {
  const reduce = useReducedMotion();
  const isLg = useMediaQuery("(min-width: 1024px)");

  const animate = reduce
    ? { x: 0, y: 0 }
    : isLg
    ? { x: [0, -6], y: [0, -5] }
    : { x: 0, y: [0, -6] };

  return (
    <footer
      className="h-[62vh] relative lg:pt-10
        before:content-[''] before:absolute
        before:top-3 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-full
        before:pointer-events-none
        before:bg-[radial-gradient(circle,_rgba(120,120,120,.12)_1.3px,_transparent_1.3px)]
        dark:before:bg-[radial-gradient(circle,_rgba(255,255,255,.1)_1.3px,_transparent_1.3px)]

        before:bg-repeat
        before:[background-position:left_center]
        before:[background-size:9px_9px]
        before:[mask-image:radial-gradient(rgb(0,0,0),_transparent_70%)]
        before:opacity-90
        dark:before:opacity-90
    "
    >
      <div className="relative max-container  h-full overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-[34%] -translate-y-1/2 flex gap-2">
          <h2>Don't be shy</h2>
          <Smile className="text-dark-700 dark:text-white-100 w-4" />
        </div>
        <ContactCopy />
        <motion.div
          className="absolute -translate-y-1/2 bottom-[26%] lg:-translate-x-1/2 lg:bottom-[30%] lg:right-[37%] pointer-events-none flex gap-1 flex-col items-center justify-center"
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={animate}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            repeatDelay: 0,
          }}
          aria-hidden="true"
        >
          <MousePointer2
            strokeWidth="1.5"
            className="w-5 h-5 text-greyscale-300 rotate-[45deg] lg:rotate-[9deg] block"
          />
          <span className="text-[12.5px] uppercase tracking-[1px] block  text-greyscale-300">
            {" "}
            tap to copy
          </span>
        </motion.div>
      </div>
      <div className="border-t py-4 md:py-2">
        <div className="max-container flex flex-col-reverse justify-between gap-2 items-center relative lg:flex-row dark:text-greyscale-300 text-greyscale-400 text-center text-[12.5px] tracking-[1px] uppercase">
          <span className="">Built with React, TypeScript, TailwindCSS</span>
          <span className=" block lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 uppercase ">
            ©2025 Tina Lin.
          </span>

          <div className="flex gap-4">
            <a
              href="/assets/resume.pdf"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-greyscale-300 group hover:gap-[5px] hover:text-dark-700 dark:hover:text-white-100 transition-all duration-300 ease-out"
            >
              [
              <span className="text-[12.5px] tracking-[1px] uppercase">
                Resume
              </span>
              <MoveRight className="w-3 group-hover:rotate-[-15deg]" />]
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/tina-lin-000613b5/"
              className="flex items-center gap-1 text-greyscale-300 group hover:gap-[5px] hover:text-dark-700 dark:hover:text-white-100 transition-all duration-300 ease-out"
            >
              [
              <span className="text-[12.5px] tracking-[1px] uppercase">
                Linkedin
              </span>
              <MoveRight className="w-3 group-hover:rotate-[-15deg]" />]
            </a>
            <a
              href="https://github.com/tinalin728"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-greyscale-300 group hover:gap-[5px] hover:text-dark-700 dark:hover:text-white-100 transition-all duration-300 ease-out"
            >
              [
              <span className="text-[12.5px] tracking-[1px] uppercase">
                Github
              </span>
              <MoveRight className="w-3 group-hover:rotate-[-15deg]" />]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
