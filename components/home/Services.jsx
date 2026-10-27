import { services } from "@/data/profile";

function ServiceIcon({ index }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    className: "text-accent",
  };

  if (index === 0) {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="14" rx="1.5" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg {...common}>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="4" y="4" width="16" height="6" rx="1" />
      <rect x="4" y="14" width="16" height="6" rx="1" />
      <path d="M8 7h.01M8 17h.01" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-content px-6 py-[100px]">
        <div className="mb-12 flex max-w-[620px] flex-col gap-3.5">
          <span className="accent-rule" aria-hidden="true" />
          <h2 className="section-title">What I Can Do for You</h2>
          <p className="text-[17px]">
            Pick one piece or hand me the whole thing. Every project includes
            clear pricing up front and a real person to call afterward.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0.5 border-2 border-line bg-line sm:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="flex flex-col gap-3.5 bg-canvas px-[30px] py-9"
            >
              <ServiceIcon index={index} />
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
