import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Seo } from "../projects/Seo";
import { SpinningLogo } from "../../components/SpinningLogo";
import profile from "../../../public/assets/about/profile.jpg";
import iceland from "../../../public/assets/about/iceland.png";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { Tooltip } from "../../components/buttons/Tooltip";
import { ABOUT_META, EXPERIENCES, TOOLS } from "./const";
import { FolderDown } from "lucide-react";

export default function About() {
  const { pathname } = useLocation();

  const origin =
    import.meta.env.VITE_SITE_URL ??
    (typeof window !== "undefined" ? window.location.origin : "");
  const url = `${origin}${pathname}`;
  const imageAbs = ABOUT_META.image.startsWith("http")
    ? ABOUT_META.image
    : `${origin}${ABOUT_META.image}`;

  return (
    <>
      <Seo
        title={`${ABOUT_META.title} | Tina Lin | UX/UI Designer and Web Developer`}
        description={ABOUT_META.description}
        url={url}
        image={imageAbs}
        type="profile"
      />
      <section className="relative z-10 bg-light-300 dark:bg-dark-700 mt-[8rem] pb-[6rem]  flex flex-col justify-between h-full md:overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 27 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          style={{ willChange: "transform, opacity" }}
          className="max-container h-full flex mb-5 flex-col-reverse gap-[2rem] justify-center items-center lg:flex-row lg:items-stretch lg:gap-10 xl:justify-around xl:items-stretch relative 
        "
        >
          <div className=" flex-1 relative z-20 flex flex-col justify-center lg:self-stretch">
            <p className="tagline mb-5">About me</p>
            <h3>Hello Again!</h3>

            <p className="mb-5 fade-item"></p>

            <h1 className="about font-inter font-light mb-4">
              I’m Tina, a Vancouver-based UX/UI and web designer who enjoys
              coding.
            </h1>
            <p className="mb-4">
              My path to design was not a straight line. With a background in
              Linguistics and Early Childhood Education, I began as a preschool
              teacher, where I learned patience, storytelling, and how to create
              experiences that spark curiosity. As I worked with children who
              used AAC devices, I saw how powerful design and technology can be
              by giving people a voice. I followed that curiosity to BCIT’s New
              Media Design and Web Development program.
            </p>

            <p>
              I enjoy working across design and code, from information
              architecture and design systems to responsive front-end builds. I
              believe design should simplify life and add a little joy.
            </p>

            <div className="pt-20">
              <p className="tagline mb-4">My Tool Stack</p>

              <div className="flex gap-4 md:gap-6 flex-wrap border dark:border-black rounded-xl bg-light-200/80 dark:bg-dark-600/50 shadow-block dark:shadow-blockDark p-4 md:p-6 backdrop-blur-[5px]">
                {TOOLS.map((tool, i) => (
                  <div
                    key={tool.alt ?? i}
                    className="group relative p-2 border w-fit rounded-lg bg-light-100/80 dark:bg-dark-400/50 flex justify-center items-center cursor-pointer"
                    tabIndex={0}
                    aria-describedby={`tip-${i}`}
                  >
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="w-11 h-11 object-contain"
                    />
                    <Tooltip id={`tip-${i}`} label={tool.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 pb-10">
            <div
              className="flex justify-center items-center pl-6 relative lg:pl-0 lg:sticky lg:top-[150px] w-full lg:translate-x-10 lg:py-[5rem] lg:self-stretch 
              before:content-[''] before:z-0 before:absolute before:inset-0 before:pointer-events-none
              before:bg-[linear-gradient(to_right,rgba(68,68,68,.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(68,68,68,.2)_1px,transparent_1px)]
              dark:before:bg-[linear-gradient(to_right,rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)]
              before:[background-size:55px_55px] 
              before:[background-position:0_25px,0_25px]

              after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:-z-0
              after:bg-[radial-gradient(55%_55%_at_50%_60%,rgba(136,136,136,0)_0%,#e3e3e3_100%)]
              dark:after:bg-[radial-gradient(55%_50%_at_50%_60%,rgba(136,136,136,0)_0%,#101010_100%)]
            "
            >
              <motion.div
                initial={{ x: 20, y: 0, rotate: 0 }}
                animate={{ x: -14, y: 6, rotate: -8 }}
                transition={{ type: "spring", stiffness: 180, damping: 30 }}
                style={{ willChange: "transform" }}
                className="relative z-20 w-[160px] h-[200px] md:w-[220px] md:h-[250px]"
              >
                <div className="p-2 shadow-md  bg-white md:translate-y-10 bg-white-100 dark:bg-greyscale-100">
                  <img
                    src={profile}
                    alt="profile"
                    loading="lazy"
                    className="object-cover object-left-top h-full w-full"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -80, y: 0, rotate: 0 }}
                animate={{ x: -25, y: 0, rotate: 10 }}
                transition={{ type: "spring", stiffness: 180, damping: 30 }}
                style={{ willChange: "transform" }}
                className="relative z-20"
              >
                <div className="relative w-[160px] h-[200px] md:w-[220px] md:h-[250px] bg-white-100 dark:bg-greyscale-100  z-10">
                  <img
                    src={iceland}
                    alt="iceland"
                    loading="lazy"
                    className="absolute inset-0 p-2 w-full h-full object-cover object-left-bottom"
                  />
                </div>
              </motion.div>

              <SpinningLogo
                className="z-30 absolute bottom-[-25%] right-[0%] lg:right-[18%] lg:bottom-[5%]"
                imgClassName="w-10"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pb-[6rem] md:pb-[8rem] relative z-10 bg-light-300 dark:bg-dark-700 border-b">
        <div className="max-container">
          <p className="tagline mb-4">My path</p>
          <div className="px-6 md:px-20 pt-10 bg-light-200/80 dark:bg-dark-600/50 shadow-block dark:shadow-blockDark border rounded-xl dark:border-black ">
            <div className="pb-4 md:pb-10 flex flex-col gap-4 justify-between md:flex-row md:items-center border-b">
              <h3 className="tracking-[1px]">Experience</h3>
              <PrimaryButton
                label="View Resume"
                href="/assets/resume.pdf"
                aria-label="Resume"
                Icon={FolderDown}
                className="w-fit"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>

            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row py-4 md:py-10 border-b last:border-0"
              >
                <p className="basis-[20%] w-fit text-greyscale-300 mb-4 md:mb-0">
                  {exp.time}
                </p>

                <div className="basis-[80%]">
                  <p className="font-medium text-dark-700 dark:text-white-100 mb-1">
                    {exp.company}
                  </p>

                  <p className="mb-2 text-[16px] text-greyscale-100 dark:text-light-200">
                    {exp.role}
                  </p>
                  <ul className="mt-2 text-left ml-4">
                    {exp.content.map((b, i) => (
                      <li key={i} className="list-disc text-[16px]">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
