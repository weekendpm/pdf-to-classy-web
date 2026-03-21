import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCtaSection = ({
  onOpenBrideForm,
}: {
  onOpenBrideForm: () => void;
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-maroon py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-cormorant text-4xl font-light text-parchment md:text-6xl lg:text-7xl text-balance">
          Come Join Hands
          <br />
          with <span className="italic">रूही</span>
        </h2>

        <p className="mt-6 font-lato text-xs uppercase tracking-[0.4em] text-champagne/50">
          Let's build this together
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onOpenBrideForm}
            className="w-full bg-champagne px-8 py-3 font-lato text-xs uppercase tracking-[0.25em] text-charcoal transition-all duration-200 hover:bg-champagne/90 active:scale-[0.97] sm:w-auto"
          >
            I'm a Bride
          </button>
          <a
            href="#collaborate"
            className="w-full border border-parchment/40 px-8 py-3 text-center font-lato text-xs uppercase tracking-[0.25em] text-parchment transition-all duration-200 hover:border-champagne hover:text-champagne active:scale-[0.97] sm:w-auto"
          >
            I'm a Vendor
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
