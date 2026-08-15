import { lazy, Suspense, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { Expand, MoveHorizontal } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Panorama360 = lazy(() => import("@/components/site/Panorama360"));

import t1 from "@/assets/tour/tour-1.jpg.asset.json";
import t2 from "@/assets/tour/tour-2.jpg.asset.json";
import t3 from "@/assets/tour/tour-3.jpg.asset.json";
import t4 from "@/assets/tour/tour-4.jpg.asset.json";
import t5 from "@/assets/tour/tour-5.jpg.asset.json";
import t6 from "@/assets/tour/tour-6.jpg.asset.json";
import t7 from "@/assets/tour/tour-7.jpg.asset.json";
import t8 from "@/assets/tour/tour-8.jpg.asset.json";
import t9 from "@/assets/tour/tour-9.jpg.asset.json";
import t10 from "@/assets/tour/tour-10.jpg.asset.json";

const views = [
  { url: t1.url, title: "Sala Tropical" },
  { url: t2.url, title: "Living Clássico" },
  { url: t3.url, title: "Estar Botânico" },
  { url: t4.url, title: "Suíte Natureza" },
  { url: t5.url, title: "Lounge Dourado" },
  { url: t6.url, title: "Sala de Reuniões" },
  { url: t7.url, title: "Salão Cor de Marfim" },
  { url: t8.url, title: "Sala de Jantar Rubi" },
  { url: t9.url, title: "Hall de Entrada" },
  { url: t10.url, title: "Jardim de Inverno" },
];

export function Tour360() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = views[active];

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
            em vistas panorâmicas que revelam cada gesto de projeto.
          </p>
        </div>

        <div className="relative w-full bg-card border border-border/60 overflow-hidden reveal group">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Ampliar vista panorâmica: ${current.title}`}
            className="block w-full"
          >
            <img
              src={current.url}
              alt={`Vista panorâmica 360° — ${current.title}, Mostra Essenza 2026`}
              className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
            <div>
              <div className="text-[0.6rem] tracking-[0.35em] uppercase text-primary">
                {String(active + 1).padStart(2, "0")} / {String(views.length).padStart(2, "0")}
              </div>
              <div className="mt-2 font-display text-2xl md:text-3xl text-foreground">
                {current.title}
              </div>
            </div>
            <div className="flex items-center gap-3 text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
              <MoveHorizontal size={16} strokeWidth={1} className="text-primary" />
              Vista panorâmica
              <button
                onClick={() => setOpen(true)}
                className="ml-3 flex items-center gap-2 border border-primary/70 px-5 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Expand size={14} strokeWidth={1.5} />
                Ampliar
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 reveal">
          {views.map((v, i) => (
            <button
              key={v.url}
              onClick={() => setActive(i)}
              aria-label={`Ver ${v.title}`}
              aria-current={i === active}
              className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                i === active
                  ? "border-primary opacity-100"
                  : "border-border/50 opacity-55 hover:opacity-90"
              }`}
            >
              <img
                src={v.url}
                alt={v.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          aria-label={`Vista ampliada: ${current.title}`}
          className="max-w-[96vw] w-[96vw] border-border/60 bg-background p-2"
        >
          <div className="overflow-x-auto">
            <img
              src={current.url}
              alt={`Vista panorâmica ampliada — ${current.title}`}
              className="h-[70vh] w-auto max-w-none object-contain"
            />
          </div>
          <p className="px-2 pb-1 text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
            {current.title} — arraste para percorrer o ambiente
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
