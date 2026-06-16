import { useReveal } from "@/hooks/useReveal";

export function Sponsors() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-28 md:py-36 bg-background">
      <div className="container-essenza">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">VIII — Patrocinadores</span>
          <h2 className="mt-8 font-display text-3xl md:text-4xl leading-tight">
            Marcas que compõem o <span className="font-serif italic text-primary">universo Essenza</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border/40 reveal">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="group bg-background h-28 flex items-center justify-center transition-colors hover:bg-card"
            >
              <span className="font-display italic text-muted-foreground/60 group-hover:text-primary transition-colors tracking-wider">
                Marca {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
