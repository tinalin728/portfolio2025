import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
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
                <p className="display font-canela text-center mt-8 max-w-[800px] font-thin">
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
