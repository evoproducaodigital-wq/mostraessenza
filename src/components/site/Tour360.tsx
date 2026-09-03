import { lazy, Suspense, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { Expand, MoveHorizontal } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Panorama360 = lazy(() => import("@/components/site/Panorama360"));

const t1 = "/images/tour/tour-1.jpg";
const t2 = "/images/tour/tour-2.jpg";
const t3 = "/images/tour/tour-3.jpg";
const t4 = "/images/tour/tour-4.jpg";
const t5 = "/images/tour/tour-5.jpg";
const t6 = "/images/tour/tour-6.jpg";
const t7 = "/images/tour/tour-7.jpg";
const t8 = "/images/tour/tour-8.jpg";
const t9 = "/images/tour/tour-9.jpg";
const t10 = "/images/tour/tour-10.jpg";
const t11 = "/images/tour/tour-11.jpg";
const t12 = "/images/tour/tour-12.jpg";
const t13 = "/images/tour/tour-13.jpg";
const t14 = "/images/tour/tour-14.jpg";
const t15 = "/images/tour/tour-15.jpg";
const t16 = "/images/tour/tour-16.jpg";
const t17 = "/images/tour/tour-17.jpg";
const t18 = "/images/tour/tour-18.jpg";
const t19 = "/images/tour/tour-19.jpg";
const t20 = "/images/tour/tour-20.jpg";
const t21 = "/images/tour/tour-21.jpg";
const t22 = "/images/tour/tour-22.jpg";
const t23 = "/images/tour/tour-23.jpg";

const views = [
  { url: t1, title: "Sala Tropical" },
  { url: t2, title: "Living Clássico" },
  { url: t3, title: "Estar Botânico" },
  { url: t4, title: "Suíte Natureza" },
  { url: t5, title: "Lounge Dourado" },
  { url: t6, title: "Sala de Reuniões" },
  { url: t7, title: "Salão Cor de Marfim" },
  { url: t8, title: "Sala de Jantar Rubi" },
  { url: t9, title: "Hall de Entrada" },
  { url: t10, title: "Jardim de Inverno" },
  { url: t11, title: "Deck das Palmeiras" },
  { url: t12, title: "Pátio da Casa Cinza" },
  { url: t13, title: "Living Jardim de Vidro" },
  { url: t14, title: "Sala Verde Clássica" },
  { url: t15, title: "Suíte Cortiça" },
  { url: t16, title: "Corredor Náutico" },
  { url: t17, title: "Muro de Arte Urbana" },
  { url: t18, title: "Sala Terracota" },
  { url: t19, title: "Espaço Galeria" },
  { url: t20, title: "Corredor Listrado Azul" },
  { url: t21, title: "Salão do Tapete Listrado" },
  { url: t22, title: "Escadaria Bordô" },
  { url: t23, title: "Fachada Histórica" },
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

        <div className="relative w-full bg-card border border-border/60 overflow-hidden reveal">
          <div className="w-full aspect-[21/9]">
            <ClientOnly
              fallback={
                <img
                  src={current.url}
                  alt={`Vista panorâmica 360° — ${current.title}, Mostra Essenza 2026`}
                  className="h-full w-full object-cover"
                />
              }
            >
              <Suspense
                fallback={
                  <img
                    src={current.url}
                    alt={`Vista panorâmica 360° — ${current.title}`}
                    className="h-full w-full object-cover"
                  />
                }
              >
                <Panorama360 key={current.url} src={current.url} title={current.title} />
              </Suspense>
            </ClientOnly>
          </div>

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
          <div className="h-[75vh] w-full">
            {open && (
              <ClientOnly fallback={null}>
                <Suspense fallback={null}>
                  <Panorama360
                    key={`full-${current.url}`}
                    src={current.url}
                    title={current.title}
                  />
                </Suspense>
              </ClientOnly>
            )}
          </div>

          <p className="px-2 pb-1 text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
            {current.title} — arraste para percorrer o ambiente
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
