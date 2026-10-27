"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { filters, projects } from "@/data/projects";
import { IconArrow } from "@/components/site/icons";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.cat === filter);

  return (
    <section id="work" className="scroll-mt-24 mx-auto max-w-content px-6 py-[100px]">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[560px] flex-col gap-3.5">
          <span className="accent-rule" aria-hidden="true" />
          <h2 className="section-title">Selected Work</h2>
          <p className="text-[17px]">
            Real businesses, real results. Each project links to a case study:
            what it is and what I built.
          </p>
        </div>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((label) => {
            const selected = label === filter;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(label)}
                className={`h-11 px-[18px] text-sm font-bold ${
                  selected
                    ? "border border-accent bg-accent text-canvas"
                    : "border border-line-strong bg-transparent text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {visible.map((project) => (
          <article key={project.title} className="flex flex-col bg-surface">
            <Link
              href={`/work/${project.slug}`}
              aria-labelledby={`project-${project.slug}`}
              className="flex flex-grow flex-col text-inherit no-underline"
            >
              <div className="relative aspect-[16/10] bg-canvas">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-semibold">
                    Screenshot coming soon
                  </div>
                )}
              </div>
              <div className="flex flex-grow flex-col gap-3 px-[30px] pt-7">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-line-strong px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.6px] text-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <h3
                  id={`project-${project.slug}`}
                  className="text-2xl font-bold leading-snug text-white"
                >
                  {project.title}
                </h3>
                <p className="text-base">{project.blurb}</p>
              </div>
            </Link>
            <div className="mt-auto flex flex-wrap items-center gap-6 px-[30px] pb-8 pt-3">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex h-11 items-center gap-2 font-bold text-accent no-underline"
              >
                Read case study
                <IconArrow />
              </Link>
              {project.url ? (
                <a
                  href={project.url}
                  className="inline-flex h-11 items-center font-semibold text-white no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
