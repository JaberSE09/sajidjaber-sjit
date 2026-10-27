import { stats } from "@/data/profile";

export default function Stats() {
  return (
    <section aria-label="At a glance" className="border-y border-line">
      <div className="mx-auto grid max-w-content grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="py-8 pr-6">
            <p className="text-[40px] font-extrabold leading-[1.1] text-white">
              {stat.value}
            </p>
            <p className="text-[15px]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
