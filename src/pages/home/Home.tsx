import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Pickaxe } from "lucide-react";
import { SpinningLogo } from "../../components/SpinningLogo";
import Dock from "./Dock";
import ProjectCard from "../../components/project-cards/ProjectCard";
import { PROJECT_CARDS } from "../projects/const";
import thumbnail from "../../../public/assets/homepage/thumbnail.jpg";
import bg from "../../../public/assets/homepage/lines.svg";
import { Link } from "react-router-dom";
import { Tooltip } from "../../components/buttons/Tooltip";
import { motion, useReducedMotion } from "framer-motion";
import { fadeIn, slideUp, stagger } from "./animations/variants";
import { useIsFirstMount } from "./animations/useIsFirstMount";
import placeholder from "../../../public/assets/homepage/mockup.jpg";

export default function Home() {
  const reduce = useReducedMotion();
  const firstMount = useIsFirstMount();
  const initialState = firstMount ? "hidden" : "visible";
  const [workReady, setWorkReady] = useState(false);
  const { pathname, search } = useLocation();
  const BASE_URL = "https://www.tinalin.ca";
  const canonical = `${BASE_URL}${pathname}${search || ""}`;

  return (
    <>
      <Helmet>
        <title>Tina Lin | UX/UI designer and web developer</title>
        <meta
          name="description"
          content="Portfolio, UX, UI, web development, case studies, selected work."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tina Lin" />
        <meta
          property="og:title"
          content="Tina Lin | UX UI designer and web developer"
        />
        <meta
          property="og:description"
          content="Selected UX UI work and web development projects."
        />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <section
        className="h-full pb-4 bg-light-300 dark:bg-dark-700 z-10 relative
        "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      >
        <motion.div
          initial={initialState}
          animate="visible"
          variants={fadeIn}
          transition={{ duration: reduce ? 0 : 0.5 }}
          className="h-full flex flex-col"
        >
          <motion.div
            variants={stagger}
            className="min-h-[72vh] h-full mt-[5.5rem] md:mt-[5rem] rounded-xl px-2 py-8 md:py-12 flex flex-col justify-evenly items-center"
          >
            <motion.div className="mb-10 flex flex-col items-center">
              <motion.div
                variants={slideUp}
                onAnimationComplete={() => setWorkReady(true)}
                className="flex gap-3 md:gap-4 items-center"
              >
                <Link
                  to="/about"
                  aria-describedby="tip-about"
                  className="relative group p-[3px] dark:bg-dark-700 bg-light-100 button rounded-lg shadow-dockbtnShadow dark:shadow-dockbtnShadowDark"
                >
                  <img
                    src={thumbnail}
                    alt="profile pic"
                    className="w-[50px] md:w-[65px] rounded-md"
                  />
                  <Tooltip
                    id="tip-about"
                    label="More about me"
                    bubbleClassName="-left-[95%] top-[25%] translate-y-1 -translate-x-1/2"
                    caretClassName="-right-[8px] top-[32%] -translate-y-1/2"
                  />
                </Link>

                <div>
                  <h1 className="text-[20px] md:text-[24px] font-thin dark:text-greyscale-100 text-greyscale-500">
                    Tina Lin
                  </h1>
                  <p className="italic dark:text-greyscale-300 text-greyscale-300 small">
                    / design and build
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideUp} className="relative px-2">
                <p className="display font-canela text-center mt-8 max-w-[800px] font-thin dark:text-greyscale-200 text-greyscale-300">
                  Designing
                  <span className="font-canela dark:text-white-100 text-greyscale-500">
                    {" "}
                    screens and experiences{" "}
                  </span>
                  that make your digital life
                  <span className="font-canela dark:text-white-100 text-greyscale-500">
                    {" "}
                    easier
                  </span>
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={slideUp} className="mx-auto">
              <Dock />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-y border-y-border-token dark:bg-dark-700 bg-light-300 z-10 relative md:px-10">
        <div className=" border-x dark:bg-dark-600/50 bg-light-200/80 py-10 max-container">
          <motion.div
            initial="hidden"
            animate={workReady ? "visible" : "hidden"}
          >
            <motion.div variants={slideUp} className="flex gap-2 items-center">
              <SpinningLogo
                className="block -translate-y-[2px]"
                imgClassName="w-8 h-8"
              />
              <h3>Selected Work</h3>
            </motion.div>

            <motion.div
              variants={slideUp}
              className="pt-5 pb-10 md:py-10 grid gap-8 lg:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10"
            >
              {PROJECT_CARDS.slice(0, 4).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}

              <div className="border overflow-hidden relative group transition-all duration-300 ease ring-gradient !rounded-xl cursor-pointer flex flex-col dock h-fit">
                <div className="relative z-20 w-full h-full overflow-hidden group">
                  <div
                    className="overflow-hidden  relative transition-all duration-300 bg-dark-600 dark:bg-dark-700
                  before:content-[''] before:z-0 before:absolute before:inset-0 before:pointer-events-none
              before:bg-[linear-gradient(to_right,rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.15)_1px,transparent_1px)]
              before:[background-size:40.5px_40.5px] 
              before:[background-position:0_25px,0_25px]

              after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:-z-0
              after:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(136,136,136,0)_0%,#101010_90%)]
                  "
                  >
                    <img
                      src={placeholder}
                      alt=""
                      className="w-full h-full object-cover opacity-0"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end justify-center gap-2 text-white-100">
                      <Pickaxe className="pickaxe-anim mb-[5px]" />
                      <span className="font-normal uppercase tracking-[1px] small">
                        stay tuned
                      </span>
                    </div>
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
                      <h4 className="pb-1  md:max-w-full">Work In Progress</h4>
                      <p className="w-full text-sm tracking-wide font-normal text-greyscale-300 xl:text-base 2xl:text-md">
                        coming soon!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
