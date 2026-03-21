import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    num: "01",
    title: "We Start With You",
    body: "Your identity, your insecurities, your cultural story — we transform them into a cohesive wardrobe vision across every event.",
  },
  {
    num: "02",
    title: "We Own the Complexity",
    body: "Rare Indian handcrafts, indie designers, vendor coordination, timelines, fittings, budget control — so you never have to.",
  },
  {
    num: "03",
    title: "The Outcome",
    body: "You walk into Mehendi, Sangeet, and your wedding day as the most confident, most you version of yourself.",
  },
];

const MeetRuhiSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-maroon py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 lg:px-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-2 font-lato text-xs uppercase tracking-[0.3em] text-champagne/50">
          What we do
        </p>
        <h2 className="mb-16 font-cormorant text-4xl font-light text-parchment md:text-5xl lg:text-6xl">
          Meet <span className="italic">रूही</span>
        </h2>

        <div className="mb-16 grid gap-8 md:grid-cols-3 md:gap-6 items-start">
          {/* Ruhi portrait — tall */}
          <div className="overflow-hidden md:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}images/image-5-1.jpg`}
              alt="Ruhi — luxury Indian bridal stylist"
              className="w-full object-cover object-top"
              style={{ maxHeight: "560px" }}
            />
          </div>
          {/* Bride portrait — tall */}
          <div className="overflow-hidden md:col-span-1">
            <img
              src={`${import.meta.env.BASE_URL}images/image-4-2.jpg`}
              alt="Styled Indian bride"
              className="w-full object-cover object-top"
              style={{ maxHeight: "560px" }}
            />
          </div>
          {/* Stylist detail — stacked two smaller */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/image-5-2.jpeg`}
                alt="Ruhi styling a bride"
                className="w-full object-cover object-top"
                style={{ maxHeight: "270px" }}
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/image-4-3.jpg`}
                alt="Bridal styling detail"
                className="w-full object-cover object-center"
                style={{ maxHeight: "270px" }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-lato text-xs tracking-[0.2em] text-champagne/40">
                {p.num}
              </span>
              <div className="mb-4 mt-2 h-px w-12 bg-champagne/30" />
              <h3 className="mb-3 font-dm-serif text-xl text-parchment md:text-2xl">
                {p.title}
              </h3>
              <p className="font-lato text-sm font-light leading-relaxed text-parchment/60 text-pretty">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-champagne/20" />

        <p className="mt-8 text-center font-cormorant text-lg italic text-parchment/70 text-balance md:text-xl">
          "We architect how you show up — and eliminate the chaos behind it —
          <br className="hidden md:block" />
          on the most photographed days of your life."
        </p>
      </div>
    </section>
  );
};

export default MeetRuhiSection;
