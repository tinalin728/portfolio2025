import type { ReactNode, ReactElement } from "react";
import { motion } from "framer-motion";

type ProjectIntroWrapperProps = { children: ReactNode };

export default function ProjectIntroWrapper({
  children,
}: ProjectIntroWrapperProps): ReactElement {
  return (
    <>
      <div
        className="relative z-10 h-full bg-light-300 dark:bg-dark-700 before:content-[''] before:absolute
        before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-full
        before:pointer-events-none
        before:bg-[radial-gradient(circle,_rgba(120,120,120,.12)_1.3px,_transparent_1.3px)]
        dark:before:bg-[radial-gradient(circle,_rgba(255,255,255,.1)_1.3px,_transparent_1.3px)]

        before:bg-repeat
        before:[background-position:left_center]
        before:[background-size:10px_10px]
        before:opacity-80
        dark:before:opacity-60
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
