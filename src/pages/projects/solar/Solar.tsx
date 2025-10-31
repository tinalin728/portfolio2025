import { SOLAR_DETAIL, SOLAR_SECTIONS } from "./const";
import { PROJECT_CARDS } from "../const";
import ProjectIntro from "../../../components/project/intro/ProjectIntro";
import ProjectWrapper from "../../../components/project/ProjectWrapper";
import Sidebar from "../../../components/project/sidebar/Sidebar";
import SectionLayout from "../../../components/project/SectionLayout";
import ProjectIntroWrapper from "../../../components/project/intro/ProjectIntroWrapper";
import { PrimaryButton } from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import banner from "../../../../public/assets/solar/experience.webm";
import { Github, Globe } from "lucide-react";
import { Seo } from "../Seo";

export default function Solar() {
  const p = SOLAR_DETAIL;
  const origin =
    import.meta.env.VITE_SITE_URL ??
    (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <>
      <ProjectIntroWrapper>
        <Seo
          title={`${p.title} | Tina Lin`}
          description={
            p.intro?.subtitle ?? "Interactive 3D solar system for all ages."
          }
          url={`${origin}/${p.id}`}
          type="article"
        />

        <ProjectIntro {...p.intro} />
        <Sidebar
          sections={SOLAR_SECTIONS}
          globe="https://solarsystem.tinalin.ca/"
          mobileTitle="Solar System"
          accent="#00ffc3"
        />

        <div
          className="py-10 w-full h-full md:max-container relative
          before:content-[''] before:absolute before:inset-0 before:!z-0 
          before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#E3E3E3_100%)]
          dark:before:bg-[linear-gradient(180deg,_rgba(16,16,16,0)_40%,_#101010_100%)]"
        >
          <video
            src={banner}
            autoPlay
            loop
            playsInline
            muted
            className="w-full h-full relative !z-10"
          />
        </div>

        <ProjectWrapper projects={PROJECT_CARDS} currentId={SOLAR_DETAIL.id}>
          <SectionLayout id="features" title="Features" className="pt-[6rem]">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">Project Description</p>
                <h3 className="mb-2">Space Learning for All Ages</h3>
                <p className="mb-10">
                  Originally a side project, this piece became a small
                  experiment in making space learning accessible for my
                  4-year-old niece. I aimed to blend interactive 3D visuals with
                  smooth motion to make exploring the solar system feel simple,
                  intuitive, and enjoyable for any age.
                </p>
                <div className="flex gap-4">
                  <PrimaryButton
                    label="View Github"
                    href="https://github.com/tinalin728/solar-journey/"
                    Icon={Github}
                    target="_blank"
                    className="!inline-flex !w-auto flex-none shadow-dockbtnShadow dark:shadow-dockbtnShadowDark"
                    rel="noopener noreferrer"
                  />

                  <SecondaryButton
                    href="https://solarsystem.tinalin.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    Icon={Globe}
                  >
                    View Live Website
                  </SecondaryButton>
                </div>
              </div>

              <div>
                <p className="tagline mb-4">Key features</p>
                {p.features.map((f, i) => (
                  <div key={i} className="mb-20">
                    <h3 className="mb-2 border-l-[3px] border-[#00ffc3] pl-4">
                      {f.title}
                    </h3>
                    <p className="mb-4">{f.description}</p>
                    <div className="border bg-light-300/50 dark:bg-dark-600 shadow-block dark:!shadow-blockDark p-2 rounded-xl">
                      <video
                        src={f.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionLayout>
          <hr className="divider" />
          <SectionLayout id="reflection" title="Reflection">
            <div className="section-gap">
              <div className="mb-14 md:mb-20">
                <p className="tagline mb-4">key takeaways</p>
                <h3 className="mb-2">What I learned</h3>
                <p className="mb-8">
                  This project was one of the most fun and creatively fulfilling
                  experiences I’ve had. I really enjoyed exploring UI design
                  through a unique lens, blending space themes with interactive
                  visuals. It pushed me to think beyond functionality and focus
                  on crafting an experience that feels immersive and
                  educational.
                </p>
              </div>
            </div>
          </SectionLayout>
        </ProjectWrapper>
      </ProjectIntroWrapper>
    </>
  );
}
