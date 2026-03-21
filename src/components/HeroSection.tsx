import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ onOpenForm }: { onOpenForm: () => void }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-charcoal">
      {/* Hero portrait — full bg on mobile, right-side panel on desktop */}
      <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-1/2">
        <img
          src={`${import.meta.env.BASE_URL}images/image-1-1.png`}
          alt="Luxury Indian bridal styling"
          className="h-full w-full object-cover object-top"
        />
        {/* Mobile: fade from bottom so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30 md:hidden" />
        {/* Desktop: fade from left */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent" />
      </div>

      {/* Warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, hsl(20 50% 15% / 0.7) 0%, hsl(0 60% 10% / 0.85) 50%, hsl(0 0% 8% / 0.95) 100%)",
        }}
      />

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-5xl px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="mb-6 font-lato text-xs uppercase tracking-[0.4em] text-champagne/70 md:mb-8">
          Luxury Indian Bridal Styling
        </p>

        <h1 className="font-cormorant text-4xl font-light leading-[1.05] text-parchment sm:text-5xl md:text-7xl lg:text-[96px]">
          <span className="text-balance">Because your story</span>
        </h1>

        <div className="mx-auto my-3 h-px w-24 bg-champagne/40 md:my-6 md:w-48" />

        <h1 className="font-cormorant text-4xl font-light leading-[1.05] text-parchment sm:text-5xl md:text-7xl lg:text-[96px]">
          <span className="text-balance">deserves more</span>
          <br />
          <span className="italic text-champagne">than stress</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg font-lato text-sm font-light leading-relaxed text-parchment/60 text-pretty sm:text-base md:mt-12 md:text-lg">
          Bringing clarity and confidence to Indian wedding fashion
        </p>

        <button
          onClick={onOpenForm}
          className="mt-8 border border-parchment/50 px-8 py-3 font-lato text-xs uppercase tracking-[0.25em] text-parchment transition-all duration-300 hover:border-champagne hover:bg-maroon hover:text-champagne active:scale-[0.97] md:mt-14"
        >
          Start Your Journey
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-parchment/30" />
      </div>
    </section>
  );
};

export default HeroSection;
