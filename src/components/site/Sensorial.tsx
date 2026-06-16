import {
  Compass,
  PenTool,
  Leaf,
  Lamp,
  Palette,
  Cpu,
  Sparkles,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { icon: Compass, title: "Arquitetura", text: "Espaços concebidos como obras habitáveis." },
  { icon: PenTool, title: "Design", text: "Mobiliário autoral e peças de coleção." },
  { icon: Leaf, title: "Paisagismo", text: "Natureza traduzida em ambiente." },
  { icon: Lamp, title: "Iluminação", text: "Atmosferas desenhadas pela luz." },
  { icon: Palette, title: "Arte", text: "Curadoria que dialoga com cada projeto." },
  { icon: Cpu, title: "Tecnologia", text: "Inovação a serviço do morar." },
  { icon: Sparkles, title: "Bem-estar", text: "Conforto sensorial em cada detalhe." },
];

export function Sensorial() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="sensorial"
      ref={ref}
      className="py-32 md:py-44 bg-card border-y border-border/40"
    >
      <div className="container-essenza">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">II — Experiência Sensorial</span>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.02]">
            Design que <span className="font-serif italic text-primary">desperta</span> emoções
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative bg-card p-10 min-h-[260px] flex flex-col justify-between reveal transition-colors duration-500 hover:bg-background"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start justify-between">
                <it.icon
                  size={28}
                  strokeWidth={1}
                  className="text-primary transition-transform duration-700 group-hover:scale-110"
                />
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {it.text}
                </p>
                <span className="mt-6 block h-px w-8 bg-primary/60 transition-all duration-500 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
