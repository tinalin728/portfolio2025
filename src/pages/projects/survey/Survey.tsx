import { useState } from "react";
import ProjectIntroWrapper from "../../../components/project/intro/ProjectIntroWrapper";
import ProjectIntro from "../../../components/project/intro/ProjectIntro";
import Sidebar from "../../../components/project/sidebar/Sidebar";
import ProjectWrapper from "../../../components/project/ProjectWrapper";
import SectionLayout from "../../../components/project/SectionLayout";
import { Seo } from "../Seo";
import { SURVEY_DETAIL, SURVEY_SECTIONS } from "./const";
import { PROJECT_CARDS } from "../const";

import wireframe from "../../../../public/assets/survey/wireframe.png";
import BCITSurvey from "../../../../public/assets/survey/bcit-survey.png";
import BWEmojis from "../../../../public/assets/survey/black-white-emojis.png";
import collapse from "../../../../public/assets/survey/collapse.webm";
import sections from "../../../../public/assets/survey/sections.webm";
import emojis from "../../../../public/assets/survey/emojis.webm";
import final from "../../../../public/assets/survey/final.webm";
import finalWireframe from "../../../../public/assets/survey/final-wireframe.png";

export default function Survey() {
  const p = SURVEY_DETAIL;
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (password === "aloha123") {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  if (!isUnlocked) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="p-8 ring-gradient dock !rounded-xl
     after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-[180px] after:-translate-x-1/2 after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent)]"
        >
          <h3 className="mb-6 text-center">Password Required</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUnlock();
            }}
            className="flex justify-between gap-6 border p-1 rounded-full bg-light-100/50 dark:bg-dark-500"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="pl-5 rounded-full w-full bg-inherit outline-none focus:outline-none"
            />
            <button
              className="button inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full w-fit text-dark-700 dark:text-white-100"
              type="submit"
            >
              Unlock
            </button>
          </form>
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">
              Wrong password. Please try again.
            </p>
          )}
        </div>
      </div>
    );
  }
  return (
    <>
      <ProjectIntroWrapper>
        <Seo
          title={`${p.title} | Tina Lin`}
          description={p.intro?.subtitle ?? "Mobile Survey Experience Design"}
          url={`${origin}/${p.id}`}
          type="article"
        />
        <ProjectIntro {...p.intro}></ProjectIntro>
        <Sidebar
          sections={SURVEY_SECTIONS}
          globe="prototype"
          mobileTitle="Mobile Survey Design"
        />
        <div
          className="py-10 w-full h-full md:max-container relative
          before:content-[''] before:absolute before:inset-0 before:z-0
          before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#E3E3E3_100%)]
          dark:before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#101010_100%)]"
        >
          <img
            src={p.intro.src}
            alt="Project banner"
            loading="lazy"
            className="w-full h-full rounded-xl max-w-[1200px] mx-auto z-10 relative"
          />
        </div>

        <ProjectWrapper projects={PROJECT_CARDS} currentId={p.id}>
          <SectionLayout id="overview" title="Overview" className="pt-[6rem]">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">About the company</p>
                <h3 className="mb-2">Simuhealth</h3>
                <p>
                  SimuHealth is a platform that helps healthcare organizations
                  run their simulation and training programs. It brings together
                  scheduling, equipment and room management, reporting, and
                  compliance into one system so simulation teams do not have to
                  juggle spreadsheets and emails.
                </p>
              </div>
            </div>
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">The brief</p>
                <h3 className="mb-2">Making surveys feel lighter on mobile</h3>
                <p>
                  As a media design and web development intern at SimuHealth, I
                  had the chance to explore and reimagine what a mobile survey
                  experience could look like for students who scan a QR code
                  after a simulation session. As this was an early-stage feature
                  ideation, instead of strict requirements, the brief was
                  intentionally open, giving me room to be creative in
                  reimagining how the survey could feel more intuitive on a
                  phone.
                </p>
              </div>
            </div>
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">The goals</p>
                <h3 className="mb-2">
                  How can we make students more likely to finish it without
                  frustration?
                </h3>
                <p>
                  To turn that open brief into concrete decisions, I set three
                  goals that would guide every screen and interaction.
                </p>
                <ol className="list-decimal ml-5">
                  <li>Make it feel doable</li>
                  <li>Keep cognitive load low.</li>
                  <li>Make actions effortless and safe</li>
                </ol>
              </div>
            </div>
          </SectionLayout>

          <hr className="divider" />

          <SectionLayout id="research" title="Research">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">empathy</p>
                <h3 className="mb-2">Understanding Users</h3>
                <p>
                  Picture this: You've just finished an intense simulation
                  session. Your mind is replaying what went right and wrong.
                  You're mentally exhausted. You scan the QR code and see this.
                </p>

                <div className="my-10 border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark rounded-xl">
                  <img src={BCITSurvey} alt="bcit survey" />
                </div>

                <p className="mb-4">
                  One long scroll. Question after question. "Do Not Agree,
                  Somewhat Agree, Strongly Agree, Not Applicable"—repeated
                  endlessly. The sheer amount of reading makes it feel like
                  work.
                </p>
                <p className="mb-4">
                  Would you finish it?{" "}
                  <span className="text-dark-700 dark:text-white-100">
                    {" "}
                    I wouldn't.
                  </span>
                </p>

                <p className="mb-4">
                  As a student, I rarely finished surveys—maybe 5 total. If it
                  felt tedious, I'd bail. And that was at my desk, not after an
                  intense training session.
                </p>

                <p>
                  The Fogg Behavior Model states that behavior happens when
                  motivation, ability, and a prompt converge. Students
                  post-simulation are exhausted. The prompt (QR code) exists,
                  but motivation is near zero. I couldn't change their
                  motivation, but I could control one thing:{" "}
                  <span className="italic text-dark-700 dark:text-white-100">
                    reducing cognitive load.{" "}
                  </span>{" "}
                  Less reading, less thinking, faster responses.
                </p>
              </div>
            </div>
          </SectionLayout>
          <hr className="divider" />

          <SectionLayout id="design" title="Design">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">first round explorations</p>
                <h3 className="mb-2">Ways I tried to lighten the load</h3>
                <p className="mb-4">
                  With the problem and goals in mind, I started experimenting
                  with how the existing questions could feel lighter on a phone.
                  I explored different question formats and interaction
                  patterns:
                </p>

                <div className="flex flex-col gap-6 mb-6">
                  {p.directions.map((d, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div>
                        <h5 className="mb-1 border-l-2 border-blue-500 pl-[14px]">
                          {d.title}
                        </h5>
                        <p className="pl-4">{d.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-8 rounded-xl relative overflow-hidden max-h-[600px]">
                  <div className="blur-[1.5px] opacity-70 -translate-y-20">
                    <img src={wireframe} alt="wireframes" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <video
                      className="w-[250px] rounded-lg shadow-lg"
                      src={collapse}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionLayout>
          <hr className="divider" />

          <SectionLayout id="iteration" title="Iteration">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">early mocks</p>
                <h3 className="mb-2">Design share and critique</h3>
                <p className="mb-4">
                  The design team got together for a casual design share.
                  Everyone brought early mocks, walked through their idea, and
                  we compared approaches.
                </p>
                <p className="mb-4">
                  One approach used a hub screen where users would tap into each
                  section, complete it, then return to select the next—clean,
                  but click-heavy. My design auto-collapsed answered questions
                  to reduce visual clutter, but the team pointed out it could be
                  distracting and made revising answers harder.
                </p>

                <p className="text-dark-700 dark:text-white-100 mb-4">
                  The reality? Some friction was unavoidable, no matter which
                  approach we chose.
                </p>

                <p>
                  I realized every extra click is a decision point where someone
                  might bail. The safest path forward wasn't clever
                  micro-interactions—it was reducing the number of decisions and
                  taps entirely. Keep the layout steady, keep interactions
                  obvious, and remove surprises.
                </p>
              </div>

              <hr className="mb-14 md:mb-20" />

              <div>
                <p className="tagline mb-4">Iteration</p>
                <h3 className="mb-2">Final design</h3>
                <p>My final approach focuses on stability and clarity:</p>

                <div className="grid gap-4 md:grid-cols-3 md:gap-6 my-10">
                  {p.approachCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={index}
                        className=" rounded-xl overflow-hidden border dark:border-black p-4 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark"
                      >
                        <div className="p-2 border dark:border-black rounded-md bg-light-300/80 dark:bg-dark-600 w-10 h-10 mb-3 shadow-block dark:shadow-blockDark">
                          <Icon className="w-5 text-greyscale-400 dark:text-white-100 mx-auto" />
                        </div>
                        <p className="mb-2 text-dark-700 dark:text-white-100">
                          {card.title}
                        </p>
                        <p>{card.description}</p>
                      </div>
                    );
                  })}
                </div>

                <p className="mb-10">
                  This keeps the interaction feeling human and responsive
                  without sacrificing ease of use. The change wasn't about
                  removing playfulness, but about removing unnecessary friction.
                </p>

                <div className="flex gap-6 mb-10 ">
                  <div className="w-fit rounded-xl overflow-hidden border dark:border-black p-4 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark">
                    <video
                      src={sections}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                      className="max-w-[450px] w-full mx-auto rounded-lg"
                    />
                  </div>
                  <div className="w-full rounded-xl overflow-hidden border dark:border-black p-2 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark flex justify-center items-center relative">
                    <div
                      className="absolute inset-0 blur-[3px] opacity-60  bg-cover bg-center bg-repeat scale-95"
                      style={{
                        backgroundImage: `url(${BWEmojis})`,
                      }}
                    />
                    <video
                      src={emojis}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                      className="max-w-[120px] mx-auto relative z-10"
                    />
                  </div>
                </div>

                <div className="border dark:border-black bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark p-10 rounded-xl relative overflow-hidden h-full mb-10">
                  <div
                    className="absolute inset-0 blur-[1.5px] opacity-70 bg-cover bg-center bg-repeat"
                    style={{ backgroundImage: `url(${finalWireframe})` }}
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="mx-auto relative z-1">
                    <video
                      src={final}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                    />
                  </div>
                </div>

                <div
                  id="prototype"
                  className="rounded-xl overflow-hidden border dark:border-black p-2 bg-light-300/80 dark:bg-dark-700/50 shadow-block dark:shadow-blockDark"
                >
                  <iframe
                    src="https://embed.figma.com/proto/gOZRNIVLPWs3hKnUtlTop1/survey?page-id=88%3A5169&node-id=88-5715&viewport=50%2C224%2C0.29&scaling=scale-down&content-scaling=fixed&starting-point-node-id=88%3A5715&embed-host=share"
                    allowFullScreen
                    className="w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </SectionLayout>
          <hr className="divider" />

          <SectionLayout id="reflection" title="Reflection">
            <div className="section-gap">
              <div className="mb-10">
                <h3 className="mb-2">What I learned</h3>
                <p className="mb-4">
                  This project taught me how small interaction changes can have
                  outsized impact on completion rates. I learned that reducing
                  cognitive load isn't just about making things "simpler"—it's
                  about understanding the user's mental state at a specific
                  moment. Students after a simulation are exhausted, and
                  designing for that context required me to think beyond just
                  usability principles.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="mb-2">What I'd do differently</h3>
                <p className="mb-4">
                  If I had more time, I would have tested the design with more
                  people other than the internal team. While the design
                  principles are sound, seeing how people interact with it in
                  the wild—tired, on their phones, in a hallway—would reveal
                  friction points I couldn't anticipate. I'd also explore more
                  progressive disclosure techniques. Could we use adaptive
                  questioning that skips irrelevant questions based on earlier
                  answers? These approaches might reduce completion time even
                  further.
                </p>
              </div>
            </div>
          </SectionLayout>
        </ProjectWrapper>
      </ProjectIntroWrapper>
    </>
  );
}
50;
