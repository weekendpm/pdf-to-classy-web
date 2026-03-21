import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const packages = [
  { name: "Entry", who: "Bride / Groom / Sister / Friend", offer: "Style Clarity Call (30 min)" },
  { name: "Mid-Ticket", who: "Single event guest", offer: "Single Event Styling" },
  { name: "Core", who: "Bride or Groom (3–4 events)", offer: "Wedding Core Styling" },
  { name: "Premium", who: "Bride + Groom + 2–4 Family", offer: "Family Wardrobe Styling" },
  { name: "Global", who: "NRI Families", offer: "NRI Virtual Wedding Styling" },
];

const PackagesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="packages" className="bg-maroon py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 lg:px-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-2 font-lato text-xs uppercase tracking-[0.3em] text-champagne/50">
          Offerings
        </p>
        <h2 className="mb-16 font-cormorant text-4xl font-light text-parchment md:text-5xl">
          <span className="italic">रूही</span> Packages
        </h2>

        {/* Client result images — two side by side */}
        <div className="mb-12 grid grid-cols-2 gap-3 md:gap-4">
          <div className="overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/image-4-4.jpg`}
              alt="Ruhi client in styled bridal look"
              className="w-full object-cover object-top"
              style={{ maxHeight: "380px" }}
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/image-4-5.png`}
              alt="Ruhi client in styled bridal look"
              className="w-full object-cover object-top"
              style={{ maxHeight: "380px" }}
            />
          </div>
        </div>

        {/* Table header */}
        <div className="hidden border-b border-champagne/30 pb-3 md:grid md:grid-cols-3 md:gap-4">
          <span className="font-lato text-xs uppercase tracking-[0.2em] text-champagne/50">
            Package
          </span>
          <span className="font-lato text-xs uppercase tracking-[0.2em] text-champagne/50">
            For
          </span>
          <span className="font-lato text-xs uppercase tracking-[0.2em] text-champagne/50">
            Offering
          </span>
        </div>

        {/* Rows */}
        {packages.map((p, i) => (
          <div
            key={i}
            className="border-b border-champagne/15 py-5 md:grid md:grid-cols-3 md:gap-4 md:items-baseline"
          >
            <h4 className="font-lato text-sm font-light tracking-wider text-champagne">
              {p.name}
            </h4>
            <p className="mt-1 font-cormorant text-base text-parchment/70 md:mt-0">
              {p.who}
            </p>
            <p className="mt-1 font-cormorant text-base italic text-parchment/50 md:mt-0">
              {p.offer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
