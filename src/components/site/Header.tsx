import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { hash: "sobre", label: "Sobre" },
  { hash: "sensorial", label: "Experiência" },
  { hash: "arquitetos-poa", label: "Arquitetos" },
  { hash: "tour", label: "Tour 360°" },
  { hash: "contato", label: "Contato" },
];


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/40 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container-essenza grid grid-cols-[auto_1fr] items-center gap-6">
        <Link
          to="/"
          className="font-display text-lg tracking-[0.2em] uppercase text-foreground"
        >
          Essenza
        </Link>
        <nav className="hidden md:flex items-center justify-end gap-10">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="container-essenza flex flex-col gap-5 py-8">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
