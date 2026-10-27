import { site } from "@/data/site";
import ContactForm from "@/components/home/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-accent text-canvas">
      <div className="mx-auto flex max-w-content flex-wrap items-start gap-12 px-6 py-24">
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-[18px]">
          <h2 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-black leading-[1.08]">
            Have a project in mind? Let&apos;s talk.
          </h2>
          <p className="max-w-[520px] text-lg text-canvas">
            Tell me what you&apos;re working on. I reply within one business
            day, usually sooner.
          </p>
          <div className="flex flex-col gap-1.5 pt-2 text-[17px] font-bold">
            <a href={`mailto:${site.email}`} className="text-canvas no-underline">
              {site.email}
            </a>
            <a href={site.phoneHref} className="text-canvas no-underline">
              {site.phone}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
