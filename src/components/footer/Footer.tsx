import { ContactCopy } from "./ContactCopy";
import { MousePointer2, Smile } from "lucide-react";
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
      className="h-[62vh] relative pt-10
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
          className="absolute -translate-y-1/2 bottom-[22%] lg:-translate-x-1/2 lg:bottom-[30%] lg:right-[37%] pointer-events-none flex gap-1 flex-col items-center justify-center"
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
          <MousePointer2 className="w-5 h-5 text-greyscale-300 rotate-[45deg] lg:rotate-[9deg] block" />
          <span className="text-[12.5px] uppercase tracking-[1px] block  text-greyscale-300">
            {" "}
            tap to copy
          </span>
        </motion.div>
      </div>
      <div className="border-t py-3">
        <div className="max-container flex flex-col-reverse justify-between gap-4 items-center relative lg:flex-row">
          <span className="small">
            Built with React | TypeScript | TailwindCSS
          </span>
          <span className="small block lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
            ©2025 Tina Lin.
          </span>

          <div className="flex gap-10">
            <span className="small">Linkedin </span>
            <span className="small">Github </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
