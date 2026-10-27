import { IconArrow } from "@/components/site/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-content flex-wrap items-center gap-16 px-6 pb-[72px] pt-24"
    >
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
        <p className="inline-flex items-center gap-2.5 self-start rounded-full border border-line py-1.5 pl-3 pr-4 text-sm font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          Taking on new projects in Milwaukee &amp; beyond
        </p>
        <p className="text-lg font-semibold text-accent">
          Hi there, I&apos;m Sajid Jaber
        </p>
        <h1 className="text-[clamp(2.4rem,5vw,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.5px] text-white">
          I build fast websites and AI automations that bring local businesses
          more customers.
        </h1>
        <p className="max-w-[600px] text-[19px]">
          Full-stack developer and founder of SJ IT LLC. I design, build and
          grow Next.js sites, local SEO and custom tools for small businesses
          across Milwaukee and Brookfield, WI.
        </p>
        <div className="flex flex-wrap gap-3.5 pt-2">
          <a href="#contact" className="btn-accent h-[52px] text-base">
            Book a Free Call
            <IconArrow className="h-[18px] w-[18px]" />
          </a>
          <a href="#work" className="btn-ghost h-[52px] text-base">
            See My Work
          </a>
        </div>
      </div>
      <div className="relative min-w-0 flex-[1_1_340px] pb-6 pl-6">
        <div
          className="absolute bottom-0 left-0 h-[70%] w-[70%] bg-accent"
          aria-hidden="true"
        />
        <div className="relative flex aspect-[4/5] items-center justify-center border border-line bg-canvas text-sm font-semibold">
          Photo coming soon
        </div>
      </div>
    </section>
  );
}
