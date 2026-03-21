import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    title: "Identity, Not Inventory",
    desc: "We begin with who you are — not what's trending. Your story shapes every outfit decision.",
  },
  {
    title: "Cohesive Wardrobe System",
    desc: "A unified vision across Mehendi, Sangeet, Haldi, and the big day — no clashing, no repeats.",
  },
  {
    title: "Unlock Hidden Supply",
    desc: "Access indie designers, heritage weavers, and ateliers you'd never find on Instagram.",
  },
  {
    title: "Execution Orchestration",
    desc: "Timelines, fittings, vendor coordination, alterations — we handle the operational chaos.",
  },
  {
    title: "You, Calm & Confident",
    desc: "Walk into every event knowing you look and feel exactly like yourself — elevated.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="bg-parchment py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 lg:px-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-2 font-lato text-xs uppercase tracking-[0.3em] text-maroon/50">
          Our method
        </p>
        <h2 className="mb-16 font-cormorant text-4xl font-light text-maroon md:text-5xl">
          The <span className="italic">रूही</span> Approach
        </h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Dotted connector line */}
          <div className="relative mx-auto mb-8 flex max-w-4xl items-start justify-between">
            <div className="absolute left-[10%] right-[10%] top-4 h-px border-t border-dashed border-champagne/60" />
            {steps.map((s, i) => (
              <div key={i} className="relative flex w-1/5 flex-col items-center text-center px-2">
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-champagne bg-parchment font-lato text-xs font-normal text-maroon">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-4 font-dm-serif text-sm text-maroon leading-snug">
                  {s.title}
                </h4>
                <p className="mt-2 font-lato text-xs font-light leading-relaxed text-charcoal/60 text-pretty">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="space-y-8 md:hidden">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-champagne font-lato text-xs text-maroon">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-px border-l border-dashed border-champagne/50" />
                )}
              </div>
              <div className="pb-4">
                <h4 className="font-dm-serif text-base text-maroon">{s.title}</h4>
                <p className="mt-1 font-lato text-sm font-light text-charcoal/60 text-pretty">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
