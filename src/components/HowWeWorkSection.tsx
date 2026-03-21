import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const flow = [
  { step: "01", title: "We align on fit" },
  { step: "02", title: "We feature your work" },
  { step: "03", title: "We create together" },
  { step: "04", title: "We grow together" },
];

const asks = [
  "Show up for our clients",
  "Co-create one content moment",
  "Tag and repost",
  "Be transparent about capacity",
];

const HowWeWorkSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-maroon py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 lg:px-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-2 font-lato text-xs uppercase tracking-[0.3em] text-champagne/50">
          Partnership
        </p>
        <h2 className="mb-16 font-cormorant text-4xl font-light text-parchment md:text-5xl">
          How We Work Together
        </h2>

        {/* 4-step flow */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
          {flow.map((f) => (
            <div key={f.step} className="text-center">
              <span className="font-lato text-xs tracking-[0.2em] text-champagne/40">
                Step {f.step}
              </span>
              <p className="mt-2 font-dm-serif text-base text-parchment md:text-lg">
                {f.title}
              </p>
            </div>
          ))}
        </div>

        {/* "We ask in return" card */}
        <div className="mx-auto max-w-2xl border border-champagne/30 bg-parchment/5 px-8 py-8 text-center">
          <p className="mb-4 font-lato text-xs uppercase tracking-[0.3em] text-champagne/60">
            We ask in return
          </p>
          <p className="font-cormorant text-lg text-parchment/80 leading-relaxed">
            {asks.join(" · ")}
          </p>
        </div>

        <p className="mt-8 text-center font-cormorant text-base italic text-parchment/50">
          Simple. No upfront fees. No exclusivity.
        </p>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
