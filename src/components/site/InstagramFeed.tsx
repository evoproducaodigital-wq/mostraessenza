import { Instagram } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export function InstagramFeed() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-32 md:py-44 bg-card border-y border-border/40">
      <div className="container-essenza">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 reveal">
          <div>
            <span className="eyebrow">VII — Instagram</span>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
              Acompanhe a <span className="font-serif italic text-primary">Mostra Essenza</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/essenzacasaejardimpoa/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-primary px-6 py-3 text-[0.7rem] tracking-[0.35em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors self-start"
          >
            <Instagram size={16} /> Seguir Perfil
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 reveal">
          {Array.from({ length: 6 }).map((_, i) => (
            <a
              key={i}
              href="https://www.instagram.com/essenzacasaejardimpoa/"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-background border border-border/60"
            >
              <div
                className="absolute inset-0 opacity-50 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--graphite), var(--background))",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/60">
                <Instagram size={22} className="text-primary" />
              </div>
              <span className="absolute bottom-2 left-2 text-[0.55rem] tracking-[0.3em] uppercase text-muted-foreground">
                @essenza · {String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
