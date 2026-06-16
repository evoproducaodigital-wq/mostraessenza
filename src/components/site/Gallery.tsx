import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useReveal } from "@/hooks/useReveal";

const items = Array.from({ length: 10 }, (_, i) => ({
  i,
  h: [320, 460, 380, 540, 360, 500, 340, 420, 480, 360][i],
}));

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galeria" ref={ref} className="py-32 md:py-44 bg-card border-y border-border/40">
      <div className="container-essenza">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">III — Galeria</span>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05]">
            Ambientes que traduzem o<br />
            <span className="font-serif italic text-primary">jeito de viver</span> Essenza
          </h2>
        </div>

        <div className="mt-20 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((it) => (
            <button
              key={it.i}
              onClick={() => setActive(it.i)}
              className="group mb-6 block w-full break-inside-avoid bg-background border border-border/60 overflow-hidden reveal"
              style={{ height: it.h }}
            >
              <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--graphite) 0%, var(--background) 100%)",
                  }}
                />
                <span className="relative font-serif italic text-2xl text-muted-foreground/70">
                  ambiente · {String(it.i + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl bg-background border-border/60 p-0">
          <div className="aspect-video w-full flex items-center justify-center bg-card relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--graphite), var(--background))",
              }}
            />
            <span className="relative font-serif italic text-3xl text-muted-foreground">
              ambiente · {active !== null ? String(active + 1).padStart(2, "0") : ""}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
