import { TIMS_DETAIL, TIMS_SECTIONS } from "./const";
import { PROJECT_CARDS } from "../const";
import ProjectWrapper from "../../../components/project/ProjectWrapper";
import { Seo } from "../Seo";
import ProjectIntroWrapper from "../../../components/project/intro/ProjectIntroWrapper";
import ProjectIntro from "../../../components/project/intro/ProjectIntro";
import Sidebar from "../../../components/project/sidebar/Sidebar";
import SectionLayout from "../../../components/project/SectionLayout";
import banner from "../../../../public/assets/tims/banner.png";

export default function Tims() {
  const p = TIMS_DETAIL;
  const origin =
    import.meta.env.VITE_SITE_URL ??
    (typeof window !== "undefined" ? window.location.origin : "");

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
          sections={TIMS_SECTIONS}
          globe="prototype"
          mobileTitle="Tim Horton's Redesign"
          accent="#FF7B7B"
        />

        <div
          className="py-10 w-full h-full md:max-container relative z-10 
          before:content-[''] before:absolute before:inset-0 
          before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#E3E3E3_100%)]
          dark:before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#101010_100%)]"
        >
          <img
            src={banner}
            alt="Project banner"
            className="w-full h-full -translate-x-4 md:max-h-[700px] object-contain"
          />
        </div>

        <ProjectWrapper projects={PROJECT_CARDS} currentId={TIMS_DETAIL.id}>
          <SectionLayout id="overview" title="Overview" className="pt-[6rem]">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">The Challenge</p>
                <h3 className="mb-2">
                  Redeeming offers on the app was never as easy as ordering in
                  store.
                </h3>
                <p>
                  As a regular user of Tim Horton's app, I kept running into the
                  same struggles, especially when trying to redeem offers. It
                  felt more like a guessing game than a smooth process, with too
                  many taps, unclear feedback, and a lot of second guessing
                  along the way.
                </p>
              </div>

              <div id="solution">
                <p className="tagline mb-4">The Solutions</p>

                {TIMS_DETAIL.overview.final.map((s, i) => (
                  <div
                    key={i}
                    className={
                      i < TIMS_DETAIL.overview.final.length - 1
                        ? "mb-14 lg:mb-20"
                        : ""
                    }
                  >
                    <h3 className="mb-2 border-l-[3px] border-[#C8102E] pl-4">
                      {s.block.title}
                    </h3>
                    <p className="mb-4">{s.block.description}</p>

                    <div className="border dark:border-black p-4 md:p-8 rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark">
                      <div className="max-w-[90%] md:max-w-[70%] mx-auto flex gap-10">
                        <div className="flex gap-4">
                          {s.block.images?.map((m, i) => (
                            <div key={m.src ?? i}>
                              {m.type === "video" ? (
                                <video
                                  src={m.src}
                                  className="w-full scale-[1.02]"
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                />
                              ) : (
                                <img
                                  src={m.src}
                                  alt={m.alt ?? ""}
                                  className="rounded-xl w-full"
                                  loading="lazy"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionLayout>

          <hr className="divider" />
          <SectionLayout id="research" title="Research">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">The goal</p>
                <h3 className="mb-2">
                  To understand user behaviors - What works well, and where they
                  get stuck.
                </h3>
              </div>
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">Research methods</p>
                <h3 className="mb-2">Conducting surveys and user interviews</h3>
                <p className="mb-5 md:mb-10">
                  I surveyed 22 users and conducted 6 interviews to learn how
                  they interacted with the app. While most found ordering easy,
                  many struggled with offers - they weren’t sure which items
                  qualified, whether the discount applied, or how to fix
                  mistakes. These small moments of confusion added up, making
                  the experience feel frustrating and unclear.
                </p>

                <div className="grid md:grid-cols-2 gap-4 justify-center items-center md:gap-8">
                  {p.research.survey.map((q, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 md:gap-4 border dark:border-black p-2 rounded-lg bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark"
                    >
                      <img
                        src={q.image.src}
                        alt={q.image.alt}
                        className="p-[6px] border dark:border-black rounded-lg dark:bg-dark-400 shadow-block dark:shadow-blockDark"
                      />
                      <span className="italic leading-[1.3] text-[15px] md:text-base">
                        {q.quote}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <hr className="mb-14 md:mb-20" />
              <div className="mb-14 md:mb-20">
                <h3 className="mb-2">Heuristic Evaluation</h3>
                <p className="mb-5 md:mb-10">
                  Looking at the current flow, I identified 3 prioritized issues
                  that made redeeming offers more complicated than it needed to
                  be.
                </p>

                {TIMS_DETAIL.research.problems.map((b, i) => {
                  const isLast = i === TIMS_DETAIL.research.problems.length - 1;
                  return (
                    <div
                      key={i}
                      className={`border rounded-xl ${
                        i < TIMS_DETAIL.research.problems.length - 1
                          ? "mb-14 lg:mb-20"
                          : ""
                      }`}
                    >
                      <div className="p-4 md:p-8">
                        <div className="p-2 border dark:border-black rounded-md bg-light-300/80 dark:bg-dark-600  w-fit mb-2 shadow-block dark:shadow-blockDark">
                          <img
                            src={b.icon.src}
                            alt={b.icon.alt}
                            className="w-5"
                          />
                        </div>
                        <h4 className="py-2 dark:text-greyscale-50">
                          {b.title}
                        </h4>
                        <p
                          dangerouslySetInnerHTML={{ __html: b.description }}
                        />
                      </div>

                      <div className="border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-2 md:p-8 rounded-xl">
                        <div
                          className={`mx-auto flex gap-2 md:gap-4 ${
                            isLast
                              ? "max-w-full md:max-w-[80%]"
                              : "max-w-[90%] md:max-w-[70%]"
                          }`}
                        >
                          {b.images?.map((m, i) => (
                            <div key={i} className="flex-1">
                              {m.type === "video" ? (
                                <video
                                  src={m.src}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  controls={false}
                                />
                              ) : (
                                <img
                                  src={m.src}
                                  alt={m.alt}
                                  className="rounded-xl w-full"
                                  loading="lazy"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionLayout>
          <hr className="divider" />

          <SectionLayout id="design" title="Design">
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">Early design exploration</p>
              <h3 className="mb-2">
                Mapping opportunities with competitor analysis and user journey
                map
              </h3>
              <p>
                To shape the redesign direction, I began by studying competitors
                to identify common patterns and pain points. A persona and
                journey map were created to better understand the frustrations
                and needs of real users like Jane, a busy professional who
                values speed and clarity. These tools helped highlight where the
                current flow fell short and guided early design decisions
                focused on simplicity and ease.
              </p>

              <div className="my-10 border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-2 md:p-8 rounded-xl">
                <span className="block small-tagline mb-2 md:mb-4">
                  competitor analysis
                </span>
                <img
                  className="border bg-white-100 rounded-xl w-full max-w-[550px] mx-auto"
                  src={TIMS_DETAIL.design.competitor.src}
                  alt={TIMS_DETAIL.design.competitor.alt}
                />
              </div>
              <div className="border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-2 md:p-8 rounded-xl">
                <span className="block small-tagline mb-2 md:mb-4">
                  User Journey Map
                </span>

                <img
                  className="border bg-white-100 rounded-xl w-full max-w-[650px] mx-auto"
                  src={TIMS_DETAIL.design.journey.src}
                  alt={TIMS_DETAIL.design.journey.alt}
                />
              </div>
            </div>
            <hr className="mb-14 md:mb-20" />
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">Reimagining the flow</p>
              <h3 className="mb-2">Turning insights into structure</h3>
              <p className="mb-5 md:mb-10">
                I started by mapping two new user flows:{" "}
                <span className="italic dark:text-white-100">
                  Core offer flow{" "}
                </span>{" "}
                and
                <span className="italic dark:text-white-100">
                  {" "}
                  Offer conflict flow
                </span>
                .
                <br /> These flows guided the initial wireframes, helping
                simplify steps and clarify the UI.
              </p>

              {TIMS_DETAIL.design.flow.map((f, i) => {
                const isLast = i === TIMS_DETAIL.design.flow.length - 1;

                return (
                  <div
                    key={i}
                    className="border dark:border-black mb-5 md:mb-10 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-2 md:p-8 rounded-xl"
                  >
                    <span className="block small-tagline mb-2 md:mb-4">
                      {f.label}
                    </span>

                    <img
                      src={f.image.src}
                      alt={f.image.alt}
                      className={[
                        "border bg-white-100 rounded-xl mx-auto",
                        isLast
                          ? "max-w-[320px] w-full"
                          : "max-w-[650px] w-full",
                      ].join(" ")}
                    />
                  </div>
                );
              })}
            </div>
            <hr className="mb-14 md:mb-20" />
            <div className="mb-14 md:mb-20">
              <p className="tagline mb-4">First Draft</p>
              <h3 className="mb-2">Bringing experience to life</h3>
              <p className="mb-5 md:mb-10">
                I started with wireframes and a prototype, kept the overlay for
                the busy offer details screen, reorganized items into concise
                bullet points, and kept Tim Hortons’ color palette for brand
                consistency.
              </p>

              {TIMS_DETAIL.design.wireframes.map((f, i) => {
                return (
                  <div
                    key={i}
                    className="border dark:border-black mb-5 md:mb-10 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-2 md:p-8 rounded-xl"
                  >
                    <span className="block small-tagline mb-2 md:mb-4">
                      {f.label}
                    </span>

                    <img
                      src={f.image.src}
                      alt={f.image.alt}
                      className="border bg-white-100 rounded-lg md:rounded-xl mx-auto"
                    />
                  </div>
                );
              })}
            </div>
          </SectionLayout>
          <hr className="divider" />

          <SectionLayout id="iteration" title="Iteration">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">User testing</p>
                <h3 className="mb-2">Validating my ideas</h3>
                <p className="mb-5 md:mb-10">
                  To test the updated design, I ran usability testing with 4
                  participants who were asked to redeem a Farmer’s Breakfast
                  Wrap and a Classic Donut. The goal was to evaluate how well
                  the new flow worked without the “Activate” button, and to
                  uncover any points of confusion or friction.
                  <br />
                  <br />
                  The testing revealed that although the new flow felt smoother,
                  the offer details still lacked clarity. Some participants
                  struggled to understand what the offer included and how to
                  make their selections confidently.
                </p>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col justify-center items-center p-6 md:p-10  rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block border dark:border-black text-center dark:shadow-blockDark">
                    <h4 className="font-inter font-normal !text-green-600">
                      {" "}
                      75%{" "}
                    </h4>
                    <p className="text-sm mt-3 leading-[1.2]">
                      {" "}
                      Found process smoother
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center p-6 md:p-10  rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block border  dark:border-black text-center dark:shadow-blockDark">
                    <h4 className="font-inter font-normal !text-red-600">
                      {" "}
                      25%{" "}
                    </h4>
                    <p className="text-sm mt-3 leading-[1.2]">
                      {" "}
                      Found offer details unclear
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center p-6 md:p-10  rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block border  dark:border-black text-center dark:shadow-blockDark">
                    <h4 className="font-inter font-normal !text-red-600">
                      {" "}
                      25%{" "}
                    </h4>
                    <p className="text-sm mt-3  leading-[1.2]">
                      {" "}
                      Felt lost after adding items
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center p-6 md:p-10 rounded-xl bg-light-300/80 dark:bg-dark-700/50 shadow-block border  dark:border-black text-center dark:shadow-blockDark">
                    <h4 className="font-inter font-normal !text-red-600">
                      {" "}
                      50%{" "}
                    </h4>
                    <p className="text-sm mt-3 leading-[1.2]">
                      {" "}
                      Needed quick offer reference
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mb-14 md:mb-20" />
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">iteration</p>
                <h3 className="mb-2">Refining the experience</h3>
                <p className="mb-5 md:mb-10">
                  Based on the feedback, I revised the flow, rethinking how to
                  present offer details so users can scan key info, compare
                  options, and confirm choices with confidence.
                </p>
                <div className="border rounded-xl mb-5 md:mb-10">
                  <div className="p-4 md:p-8">
                    <p className="tagline mb-4">Before</p>
                    <h4 className="mb-2 dark:text-white-100">
                      Unclear Hierarchy and Dense Information
                    </h4>
                    <ul className="list-disc ml-4">
                      <li>Offer title buried in long blocks of text</li>
                      <li>Users had to toggle back and forth</li>
                      <li>
                        Poor grouping of offer info and menu detail screen
                      </li>
                    </ul>
                  </div>
                  <div className="border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-4 md:p-[5rem] rounded-xl">
                    <img
                      src={p.iteration.before.src}
                      alt={p.iteration.before.alt}
                    />
                  </div>
                </div>
                <div className="border rounded-xl">
                  <div className="p-4 md:p-8">
                    <p className="tagline mb-4">After</p>
                    <h4 className="mb-2 dark:text-white-100">
                      Improved Readability and Visual Grouping
                    </h4>
                    <ul className="list-disc ml-4">
                      <li>Separated screens for offer details</li>
                      <li>
                        Clear grouping in tabbed layout: Offer title, price, and
                        eligible items are clearly visible at a glance.
                      </li>
                      <li>Improved visual hierarchy for menu screen</li>
                    </ul>
                  </div>
                  <div className="border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-4 md:p-[5rem] rounded-xl">
                    <img
                      src={p.iteration.after.src}
                      alt={p.iteration.after.alt}
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="mb-14 md:mb-20" />
            <div id="prototype" className="section-gap">
              <p className="tagline mb-4">Final prototype</p>
              <h3 className="mb-2">Try it yourself!</h3>
              <div className="rounded-xl overflow-hidden border dark:border-black p-2 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark">
                <iframe
                  src="https://embed.figma.com/proto/b1qsKrJYgq3JSl2vzSoljY/UIUX-Tim-hortons?page-id=128%3A756&node-id=1256-6914&viewport=1095%2C-674%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1256%3A6914&show-proto-sidebar=1&embed-host=share"
                  allowFullScreen
                  className="w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-lg"
                ></iframe>
              </div>
            </div>
          </SectionLayout>
          <hr className="divider" />

          <SectionLayout id="reflection" title="Reflection">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">key takeaways</p>
                <h3 className="mb-2">What I learned</h3>
                <p className="mb-5 md:mb-10">
                  Through this project, I learned how small usability gaps can
                  add up to major friction in a user’s journey. Simplifying each
                  step and reducing unnecessary actions made the flow feel more
                  intuitive and efficient. User testing reinforced the value of
                  feedback — it revealed missing cues and unclear details that I
                  wouldn’t have caught alone. Iterating with real users helped
                  me design with more empathy and clarity. Even subtle UI
                  changes, like improved hierarchy and clearer labels, had a
                  noticeable impact on usability, showing that thoughtful
                  refinements can make a big difference without requiring a full
                  redesign.
                </p>
              </div>
            </div>
          </SectionLayout>
        </ProjectWrapper>
      </ProjectIntroWrapper>
    </>
  );
}
