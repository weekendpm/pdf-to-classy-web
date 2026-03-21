import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="bg-parchment py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 lg:px-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-4 font-lato text-xs uppercase tracking-[0.3em] text-maroon/50">
          The moment that defines us
        </p>

        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Left — stat + couple image */}
          <div className="md:col-span-2">
            <h2 className="font-cormorant text-5xl font-light italic leading-tight text-maroon md:text-6xl lg:text-7xl">
              2.8 million
              <br />
              <span className="not-italic font-normal text-4xl md:text-5xl">
                Indian weddings
              </span>
            </h2>
            <p className="mt-4 font-lato text-sm text-maroon/50">Every year</p>
            <div className="mt-8 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/image-3-5.jpg`}
                alt="Happy Indian wedding couple"
                className="w-full object-cover object-center"
                style={{ maxHeight: "260px" }}
              />
            </div>
            <div className="mt-3 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/image-3-6.png`}
                alt="Indian bridal styling detail"
                className="w-full object-cover object-center"
                style={{ maxHeight: "180px" }}
              />
            </div>
          </div>

          {/* Right — copy */}
          <div className="space-y-6 md:col-span-3">
            <div className="columns-1 gap-8 font-lato text-base font-light leading-relaxed text-charcoal/80 text-pretty md:columns-2">
              <p>
                Four months to your wedding. Seven events. Twelve family
                opinions. Dozens of outfit screenshots you'll never find again.
                Your mother wants traditional. Your friends want bold. Instagram
                wants everything.
              </p>
              <p className="mt-4 md:mt-0">
                You're about to spend ₹2–7 lakh on outfits — yet instead of
                excitement, you feel anxious, overwhelmed, invisible.
              </p>
            </div>

            <div className="h-px w-full bg-champagne/40" />

            <p className="font-dm-serif text-xl text-maroon md:text-2xl">
              This is the moment Ruhi is built for.
            </p>

            {/* Bridal detail strip */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/image-3-1.png`}
                  alt="Indian bridal detail"
                  className="w-full object-cover object-center"
                  style={{ maxHeight: "200px" }}
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/image-3-2.png`}
                  alt="Indian bridal jewellery detail"
                  className="w-full object-cover object-center"
                  style={{ maxHeight: "200px" }}
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/image-3-3.png`}
                  alt="Indian bridal outfit detail"
                  className="w-full object-cover object-center"
                  style={{ maxHeight: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
