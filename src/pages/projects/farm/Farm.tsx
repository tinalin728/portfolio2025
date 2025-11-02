import { useRef } from "react";
import { PROJECT_CARDS } from "../const";
import { Seo } from "../Seo";
import { FARM_DETAIL, FARM_SECTIONS } from "./const";
import ProjectWrapper from "../../../components/project/ProjectWrapper";
import ProjectIntro from "../../../components/project/intro/ProjectIntro";
import { PrimaryButton } from "../../../components/buttons/PrimaryButton";
import { Tooltip } from "../../../components/buttons/Tooltip";
import Sidebar from "../../../components/project/sidebar/Sidebar";
import SectionLayout from "../../../components/project/SectionLayout";
import { Tabs } from "../../../components/project/tabs/Tabs";
import ProjectIntroWrapper from "../../../components/project/intro/ProjectIntroWrapper";
import { Globe } from "lucide-react";
import { usePaletteLoop } from "./usePaletteLoop";
import homepage from "../../../../public/assets/farm/home.png";
import animal from "../../../../public/assets/farm/animal.png";
import before from "../../../../public/assets/farm/before.png";
import after from "../../../../public/assets/farm/after.png";
import schoolafter from "../../../../public/assets/farm/school-after.png";
import schoolbefore from "../../../../public/assets/farm/school-before.png";
import form from "../../../../public/assets/farm/form.png";
import sitemap from "../../../../public/assets/farm/sitemap.png";
import sitemapbefore from "../../../../public/assets/farm/before-sitemap.png";
import newpages from "../../../../public/assets/farm/newpages.png";
import needs from "../../../../public/assets/farm/needs.png";

export default function Farm() {
  const p = FARM_DETAIL;
  const origin =
    import.meta.env.VITE_SITE_URL ??
    (typeof window !== "undefined" ? window.location.origin : "");

  const wrapRef = useRef<HTMLDivElement>(null);
  usePaletteLoop(wrapRef, {
    revealSec: 0.8,
    pauseSec: 1.8,
  });

  return (
    <>
      <ProjectIntroWrapper>
        <Seo
          title={`${p.title} | Tina Lin`}
          description={p.intro?.subtitle ?? "Tim Horton's App Redesign"}
          url={`${origin}/${p.id}`}
          type="article"
        />
        <ProjectIntro {...p.intro} />
        <Sidebar
          sections={FARM_SECTIONS}
          globe="https://stableharvestfarm.com/"
          mobileTitle="Stable Harvest Farm"
          accent="#FF7B7B"
        />

        <div
          className="pt-6 md:pt-0 w-full h-full md:max-container  overflow-hidden group relative z-10 
          before:content-[''] before:absolute before:inset-0 
          before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#E3E3E3_100%)]
          dark:before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#101010_100%)]"
        >
          <div className=" max-w-[95%] mx-auto lg:max-w-[80%] flex gap-2 justify-center">
            <div>
              <img
                src={homepage}
                alt="homepage"
                className="flex-1 translate-x-10 translate-y-[1rem] md:translate-y-[6rem] z-10 relative rotate-[-5deg] shadow-lg group-hover:translate-y-[5rem] group-hover:rotate-[-6deg] transition-transform duration-300 ease-in-out"
              />
            </div>
            <div>
              <img
                src={animal}
                alt="animal"
                className="flex-1 -translate-x-10 translate-y-[2rem] md:-translate-x-5  md:translate-y-[150px] z-0 relative rotate-[5deg] group-hover:translate-y-[130px] group-hover:rotate-[6deg] transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>

        <ProjectWrapper projects={PROJECT_CARDS} currentId={FARM_DETAIL.id}>
          <SectionLayout id="overview" title="Overview" className="pt-[6rem]">
            <div className="text-container mb-14 md:mb-20">
              <p className="tagline mb-4">About the company</p>
              <h3 className="mb-2">Stable Harvest Farm</h3>
              <p className="mb-10">
                Stable Harvest Farm is a non-profit educational farm in Langley,
                BC. The organization connects people to sustainable agriculture
                through hands-on learning, community programs, and food
                donations. All produce grown on the farm is donated to local
                food programs and community partners that support families
                across the region.
              </p>
              <PrimaryButton
                label="View Live Website"
                href="https://stableharvestfarm.com/"
                Icon={Globe}
                target="_blank"
                className="!inline-flex !w-auto flex-none shadow-dockbtnShadow dark:shadow-dockbtnShadowDark"
                rel="noopener noreferrer"
              />
            </div>

            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">The Impact</p>
              <h3 className="mb-2">Measured improvements</h3>
              <p className="mb-10">
                The redesign made the site clearer and easier to navigate.
                Visitors now spend more time on pages, explore more sections per
                visit, and interact with content more often. The results below
                compare the two months after launch with the two months before
                launch in Google Analytics.
              </p>
              <p className="mt-10 mb-4 small-tagline mx-auto">
                Data as of Oct. 29, 2026
              </p>
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
                {FARM_DETAIL.impact.map((m) => (
                  <div
                    key={m.id}
                    tabIndex={0}
                    className="group relative overflow-visible         
                 flex flex-col justify-center items-center cursor-pointer
                 p-6 lg::p-10 rounded-xl border dark:border-black bg-light-300/80 dark:bg-dark-700/50
                 shadow-block  text-center dark:shadow-blockDark min-h-[150px]"
                    aria-describedby={`impact-${m.id}`}
                  >
                    <div className="flex gap-2">
                      <h4 className="font-inter font-normal dark:text-white-100 !text-green-600">
                        {m.display}
                      </h4>
                    </div>
                    <p className="text-sm mt-3 leading-[1.2] max-w-[120px]">
                      {m.label}
                    </p>
                    <Tooltip
                      id={`impact-${m.id}`}
                      label={`${m.before} → ${m.after}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">The challenge</p>
              <h3 className="mb-2">Content and navigation overhaul</h3>
              <p>
                The site lacked clear structure and consistency, with scattered,
                redundant content that was hard to scan. As programs expanded
                and community impact grew, the farm needed a modern, scalable
                website that serves multiple audiences.
              </p>
            </div>

            <div className="">
              <p className="tagline mb-4">the solutions</p>
            </div>

            {FARM_DETAIL.features.map((f, i) => (
              <div key={i} className="mb-14 md:mb-20">
                <div className="text-container ">
                  <h3 className="mb-2 border-l-[3px] border-[#C14A2B] pl-4">
                    {f.title}
                  </h3>
                  <p className="mb-4">{f.description}</p>
                </div>

                <div className="border dark:border-black rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark overflow-hidden">
                  <img
                    src={f.images.src}
                    alt={f.images.alt}
                    className="translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 "
                  />
                </div>
              </div>
            ))}
          </SectionLayout>
          <hr className="divider" />
          <SectionLayout id="research" title="Research" className="">
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">Finding issues</p>
              <h3 className="mb-2">Website audit</h3>
              <p className="mb-4 md:mb-10">
                The redesign began with weekly discussions with the Executive
                Director and the Educational Leader, understanding what their
                needs were and discussing major issues with the existing issues.
                Besides updating new content, the ultimate main goal was to
                attract more visitors to the farm, especially schools.
              </p>

              <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                {p.problems.map((p, i) => (
                  <div
                    key={i}
                    className="p-6 border dark:border-black rounded-xl flex flex-col items-start justify-start bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark"
                  >
                    <div className="flex items-center justify-between gap-2 w-full pb-4">
                      <h4 className="">{p.title}</h4>

                      <div className="p-2 border dark:border-black rounded-md bg-light-200/50 dark:bg-dark-600 w-fit shadow-block dark:shadow-blockDark">
                        <img
                          src={p.image.src}
                          alt={p.image.alt}
                          className="w-5"
                        />
                      </div>
                    </div>
                    <p className="pt-4 border-t">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">Defining users</p>
              <h3 className="mb-2">Understanding needs across audiences</h3>
              <p className="mb-4 md:mb-10">
                Through conversations with the Executive Director, Education
                Lead, and feedback from parents/teachers, I identified three
                core expectations for the website.
              </p>
              <div className="border dark:dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-4 md:p-10 rounded-xl">
                <img
                  src={needs}
                  alt="user needs"
                  className="mx-auto lg:max-w-[80%]"
                />
              </div>
            </div>
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">redesign goals</p>
              <h3 className="mb-2">Project Direction</h3>
              <p className="mb-4">
                As the farm shifts to increasing school field trips, the
                redesign{" "}
                <span className="text-dark-700 dark:text-white-100 italic">
                  prioritizes educators.
                </span>{" "}
                Layout, navigation, and content focus on a clear educational
                purpose, making field trip details easy to understand while
                keeping visitor info accessible.
              </p>
              <ol className="space-y-6 list-decimal ml-6 marker:text-dark-700 dark:marker:text-white-100 marker:font-normal">
                <li>
                  <p className="font-normal text-dark-700 dark:text-white-100">
                    Make <span className="italic">Education</span> stand out
                  </p>
                  <ul className="mt-1 space-y-1 text-sm list-disc">
                    <li>
                      Give Education its own tab, differentiating it from
                      general info
                    </li>
                    <li>
                      Clear field trip info, what students learn, how to request
                      a booking, what to expect
                    </li>
                    <li>
                      How we are different from other farms and how we support
                      learning
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="font-normal text-dark-700 dark:text-white-100">
                    Solutions for controlled booking{" "}
                  </p>
                  <ul className="mt-1 space-y-1 text-sm list-disc">
                    <li>Booking via request form, not Calendly</li>
                  </ul>
                </li>
                <li>
                  <p className="font-normal text-dark-700 dark:text-white-100">
                    Keep visitor info clear and secondary
                  </p>
                  <ul className="mt-1 space-y-1 text-sm list-disc">
                    <li>
                      Showcase the farm itself, animals, gardens, and learning
                      stations, this stays accurate year round.
                    </li>
                    <li>
                      List confirmed activities on the Events page, add seasonal
                      events as they are scheduled.{" "}
                    </li>
                    <li>
                      Avoid static program pages until programs are finalized,
                      link from Events to details when ready.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </SectionLayout>
          <hr className="divider" />
          <SectionLayout id="design" title="Design" className="">
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">sitemap</p>
              <h3 className="mb-2">Restructured information architecture</h3>
              <p className="mb-4 md:mb-10">
                With goals and gaps defined, I restructured the sitemap to
                simplify navigation and organize content by audience needs.
                Using a content grouping exercise, I then finalized six main
                sections,
                <span className="text-dark-700 dark:text-white-100 italic">
                  {" "}
                  Education, On the farm, Events, About, Get Involved, and
                  Contact
                </span>
                , creating a structure that clearly reflects the farm’s programs
                and community focus.
              </p>
              <div className="border dark:dark:border-black rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark overflow-hidden p-4 md:p-10">
                <Tabs
                  labels={["Before", "Improved"]}
                  contents={[
                    <img
                      src={sitemapbefore}
                      alt="sitemap before"
                      className="rounded-xl overflow-hidden max-w-[82%] mx-auto"
                    />,
                    <img
                      src={sitemap}
                      alt="sitemap after"
                      className="rounded-xl overflow-hidden"
                    />,
                  ]}
                  defaultIndex={1}
                />
              </div>
            </div>
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">visual direction</p>
              <h3 className="mb-2">Redefined visual style and components </h3>
              <p className="mb-4 md:mb-10">
                The refreshed design balances professionalism with warmth. A
                simplified color palette, clear typography, and consistent UI
                components create a calm, educational tone that reflects the
                farm’s mission. Friendly illustrations and icons make the site
                feel welcoming and easy to navigate.
              </p>
              <div
                ref={wrapRef}
                className="border dark:dark:border-black rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark overflow-hidden p-4 md:p-10"
              >
                <div className="grid grid-cols-2 justify-items-center place-items-center w-fit mx-auto">
                  {p.palette.map((s, i) => (
                    <div
                      key={i}
                      className={`w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative overflow-hidden bg-[${s.hex}]`}
                    >
                      <div
                        className="absolute inset-0 origin-top js-fill"
                        style={{ backgroundColor: s.hex }}
                      >
                        <div
                          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center ${s.text}`}
                        >
                          <span className="text-nowrap">{s.name}</span>
                          <span>{s.hex}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">Deliverables</p>
              <h3 className="mb-2">Clear design for optimal user experience</h3>
              <p className="mb-4 md:mb-10">
                I organized content into clear sections with clean design. We
                used friendly language and clear headings for quick reading.
                Subtle animations and visual cues keep the style consistent
                across pages, professional, and calming.
              </p>

              <div className="border dark:dark:border-black px-4 pt-4 md:px-10 md:py-10 rounded-xl max-h-[800px] md:max-h-[720px] overflow-hidden relative mb-4 md:mb-10 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark">
                <Tabs
                  labels={["Before", "Improved"]}
                  contents={[
                    <img src={before} alt="homepage before" />,
                    <img src={after} alt="homepage after" />,
                  ]}
                  defaultIndex={1} // start on After
                />
                <p className="small-tagline absolute top-20 md:top-[6rem] md:right-10">
                  homepage
                </p>
              </div>
              <div className="border dark:dark:border-black p-4 md:p-10 rounded-xl overflow-hidden relative mb-4 md:mb-10 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark">
                <p className="small-tagline mb-4">video preview integration</p>
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full rounded-lg md:rounded-xl"
                  >
                    <source
                      src="/assets/farm/education-preview.webm"
                      type="video/webm"
                    />
                  </video>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] bg-white-100/40 flex justify-center items-center rounded-full">
                    <p className="text-white-100 text-xl tracking-[1px] font-medium">
                      PLAY
                    </p>
                  </div>
                </div>
              </div>

              <div className="border dark:dark:border-black p-4 md:p-10 rounded-xl max-h-[800px] md:max-h-[720px] overflow-hidden relative mb-4 md:mb-10 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark">
                <Tabs
                  labels={["Before", "Improved"]}
                  contents={[
                    <img src={schoolbefore} alt="school visit page before" />,
                    <img src={schoolafter} alt="school visit page after" />,
                  ]}
                  defaultIndex={1} // start on After
                />
                <p className="small-tagline absolute top-20 md:top-[6rem] md:right-10">
                  School visit page
                </p>
              </div>

              <div className="border dark:dark:border-black pt-4 px-4 md:pt-10 md:px-10 rounded-xl overflow-hidden relative mb-4 md:mb-10 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark">
                <p className="small-tagline mb-4">
                  Form design for controlled booking
                </p>
                <div className="relative">
                  <img src={form} alt="form design" className="" />
                </div>
              </div>
              <div className="border dark:dark:border-black pt-4 px-4 md:pt-10 md:px-10 rounded-xl overflow-hidden relative mb-4 md:mb-10 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:!shadow-blockDark">
                <p className="ml-6 small-tagline mb-4">updated content</p>
                <div className="relative">
                  <img src={newpages} alt="form design" />
                </div>
              </div>
            </div>
          </SectionLayout>
          <hr className="divider" />

          <SectionLayout id="reflection" title="Reflection" className="">
            <div className="mb-14 md:mb-20">
              <h3 className="mb-2">Lessons learned from real world project</h3>
              <p className="mb-4 md:mb-10">
                This project taught me to stay flexible, focus on users and
                business results, and lead with evidence. I did not agree with
                every decision, and that was useful. It pushed me to look beyond
                the user perspective and consider the business side with equal
                weight. It also reminded me that clear communication is
                essential for aligning expectations, explaining tradeoffs, and
                moving decisions forward.
              </p>
            </div>
          </SectionLayout>
        </ProjectWrapper>
      </ProjectIntroWrapper>
    </>
  );
}
