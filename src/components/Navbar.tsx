import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Story", href: "#problem" },
  { label: "Approach", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "Collaborate", href: "#collaborate" },
];

const Navbar = ({ onOpenForm }: { onOpenForm: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-maroon/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#"
          className="font-cormorant text-2xl font-bold tracking-wide text-parchment"
        >
          रूही
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-lato text-sm uppercase tracking-[0.2em] text-parchment/80 transition-colors duration-200 hover:text-champagne"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onOpenForm}
            className="border border-champagne px-5 py-2 font-lato text-xs uppercase tracking-[0.2em] text-champagne transition-all duration-200 hover:bg-champagne hover:text-maroon active:scale-[0.97]"
          >
            Begin Journey
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-parchment md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 bg-maroon/95 px-6 pb-6 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-lato text-sm uppercase tracking-[0.2em] text-parchment/80 hover:text-champagne"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenForm();
            }}
            className="mt-2 border border-champagne px-5 py-2 font-lato text-xs uppercase tracking-[0.2em] text-champagne"
          >
            Begin Journey
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
