import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  { num: "01", text: "Warm referrals, not cold impressions" },
  { num: "02", text: "Real content, real weddings" },
  { num: "03", text: "A network that compounds" },
];

const CollaborateSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="collaborate"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, hsl(33 52% 62% / 0.15) 0%, hsl(30 40% 50% / 0.25) 50%, hsl(25 45% 40% / 0.2) 100%)",
        backgroundColor: "hsl(30 33% 88%)",
      }}
    >
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 lg:px-12 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-2 font-lato text-xs uppercase tracking-[0.3em] text-maroon/40">
          For designers &amp; vendors
        </p>
        <h2 className="mb-6 font-cormorant text-3xl font-light italic text-maroon md:text-5xl text-balance">
          "Your work. In front of clients who are already deciding."
        </h2>
        <p className="mb-12 max-w-2xl font-lato text-base font-light leading-relaxed text-charcoal/70 text-pretty">
          Every Ruhi client is mid-purchase — spending ₹3–8L on wedding outfits.
          When we recommend you, it lands as a trusted expert referral, not an
          ad.
        </p>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {benefits.map((b) => (
            <div key={b.num}>
              <span className="font-lato text-xs tracking-[0.2em] text-champagne/60">
                {b.num}
              </span>
              <p className="mt-2 font-dm-serif text-lg text-maroon">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Editorial image */}
        <div className="mt-12 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/image-3-5.jpg`}
            alt="Indian wedding couple"
            className="w-full object-cover object-center"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
