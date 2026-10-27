import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseHeader from "@/components/site/CaseHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { IconArrow } from "@/components/site/icons";
import { getCaseStudies, getProject } from "@/data/projects";

export function generateStaticParams() {
  return getCaseStudies().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Work — Sajid Jaber" };
  }

  return {
    title: `${project.caseTitle} — Sajid Jaber`,
    description: project.blurb,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getProject(project.nextSlug);
  const details = [
    { label: "Client", value: project.client },
    { label: "My Role", value: project.role },
    { label: "Stack", value: project.stack.filter(Boolean).join(", ") },
  ].filter((detail) => detail.value);
  const hasDetails = details.length > 0 || Boolean(project.url);

  return (
    <>
      <CaseHeader />
      <main id="main-content">
        <section className="mx-auto flex max-w-content flex-col gap-[22px] px-6 pb-12 pt-20">
          <p className="flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.08em] text-accent">
            <span>Case Study</span>
            <span className="text-muted">{project.kicker}</span>
          </p>
          <h1 className="max-w-[820px] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.08] text-white">
            {project.caseTitle}
          </h1>
          <p className="max-w-[720px] text-lg">{project.blurb}</p>
        </section>

        <section className="mx-auto flex max-w-content flex-col gap-10 px-6 pb-4">
          <div className="max-w-[720px]">
            <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">
              What it is
            </h2>
            <p className="mt-3 text-lg">{project.whatItIs}</p>
          </div>
          {project.built.length > 0 ? (
            <div className="max-w-[720px]">
              <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-accent">
                What I built
              </h2>
              <ul className="mt-3 flex list-disc flex-col gap-3 pl-5">
                {project.built.map((item) => (
                  <li key={item} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>

        {hasDetails ? (
          <section
            aria-label="Project details"
            className="mx-auto max-w-content px-6"
          >
            <dl className="grid grid-cols-1 border-y border-line sm:grid-cols-2 lg:grid-cols-4">
              {details.map((detail) => (
                <div key={detail.label} className="py-6 pr-6">
                  <dt className="text-xs font-bold uppercase tracking-[0.08em] text-muted">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-white">{detail.value}</dd>
                </div>
              ))}
              {project.url ? (
                <div className="py-6 pr-6">
                  <dt className="text-xs font-bold uppercase tracking-[0.08em] text-muted">
                    Live Site
                  </dt>
                  <dd className="mt-1 font-semibold">
                    <a
                      href={project.url}
                      className="text-accent no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </section>
        ) : null}

        {project.image ? (
          <section className="mx-auto max-w-content px-6 pt-12">
            <div className="relative aspect-video bg-surface">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1200px) 1152px, 100vw"
                priority
              />
            </div>
          </section>
        ) : null}

        {nextProject ? (
          <section className="mx-auto max-w-content px-6 py-24">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-wrap items-center justify-between gap-4 border border-line bg-surface px-8 py-8 no-underline"
            >
              <span>
                <span className="block text-sm font-bold uppercase tracking-[0.08em] text-muted">
                  Next Project
                </span>
                <span className="mt-1 block text-2xl font-bold text-white">
                  {nextProject.title}
                </span>
              </span>
              <IconArrow className="h-6 w-6 text-accent" />
            </Link>
          </section>
        ) : null}
      </main>
      <SiteFooter variant="case" />
    </>
  );
}
