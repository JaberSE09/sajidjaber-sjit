import { processSteps } from "@/data/profile";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 mx-auto max-w-content px-6 py-[100px]">
      <div className="mb-12 flex flex-col gap-3.5">
        <span className="accent-rule" aria-hidden="true" />
        <h2 className="section-title">How We&apos;ll Work Together</h2>
      </div>
      <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li key={step.number} className="flex flex-col gap-3">
            <span className="text-sm font-bold tracking-[0.08em] text-accent">
              {step.number}
            </span>
            <h3 className="text-xl font-bold text-white">{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
