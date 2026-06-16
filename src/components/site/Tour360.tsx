import { Expand } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export function Tour360() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="tour" ref={ref} className="py-32 md:py-44 bg-background">
      <div className="container-essenza">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7 reveal">
            <span className="eyebrow">IV — Tour Virtual</span>
            <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05]">
              Explore <span className="font-serif italic text-primary">cada detalhe</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-muted-foreground reveal">
            Uma experiência imersiva pelos ambientes da Mostra Essenza,
            navegável em tela cheia com hotspots interativos.
          </p>
        </div>

        <div className="relative aspect-[16/8] w-full bg-card border border-border/60 flex items-center justify-center overflow-hidden reveal">
          {/* Reserved slot for future Matterport iframe */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, var(--bronze), transparent 50%), radial-gradient(circle at 70% 60%, var(--gold), transparent 55%)",
            }}
          />
          <div className="relative flex flex-col items-center text-center gap-6 px-6">
            <Expand size={42} strokeWidth={1} className="text-primary" />
            <div>
              <div className="font-display text-2xl md:text-3xl text-foreground">
                Tour Matterport 360° em breve
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-md">
                Espaço preparado para integração do tour virtual oficial da Mostra Essenza 2026.
              </p>
            </div>
            <button className="border border-primary/70 px-6 py-3 text-[0.65rem] tracking-[0.35em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Iniciar Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
