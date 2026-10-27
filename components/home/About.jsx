import { background, tools } from "@/data/profile";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface">
      <div className="mx-auto flex max-w-content flex-wrap gap-16 px-6 py-[100px]">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-[18px]">
          <span className="accent-rule" aria-hidden="true" />
          <h2 className="section-title">About Me</h2>
          <p className="text-[17px]">
            I&apos;m a Milwaukee-area developer with a computer science degree
            from UW-Whitewater and more than seven years of freelance work. In
            2018 I founded SJ IT LLC to give local businesses the kind of
            website and tech support usually only big companies get.
          </p>
          <p className="text-[17px]">
            I also run a retail store in West Allis, so I know first-hand what
            it takes to get customers through the door. That&apos;s the lens I
            bring to every project.
          </p>
          <div className="flex flex-wrap gap-3.5 pt-2">
            <a href="#contact" className="btn-accent h-[50px] px-[26px] text-base shadow-none">
              Hire Me
            </a>
            <a
              href={site.resume}
              className="btn-ghost h-[50px] px-[26px] text-base"
              download
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-white">Background</h3>
            {background.map((item) => (
              <div
                key={item.label}
                className="flex flex-wrap justify-between gap-4 border-b border-line pb-3"
              >
                <span className="font-semibold text-white">{item.label}</span>
                {item.when ? <span>{item.when}</span> : null}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-white">Tools I Use</h3>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="bg-canvas px-3.5 py-1.5 text-sm font-semibold text-white"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
