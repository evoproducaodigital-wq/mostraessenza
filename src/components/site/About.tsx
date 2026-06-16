import { useReveal } from "@/hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="sobre" ref={ref} className="py-32 md:py-44 bg-background">
      <div className="container-essenza grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 reveal">
          <span className="eyebrow">I — Sobre a Mostra</span>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Uma história
            <br />
            construída
            <br />
            <span className="font-serif italic text-primary">através do design</span>
          </h2>
          <div className="mt-10 gold-line !w-24 !h-px" />
        </div>

        <div className="lg:col-span-5 lg:col-start-6 flex flex-col gap-8 reveal">
          <p className="text-lg leading-relaxed text-muted-foreground">
            A Essenza Casa e Jardim consolidou-se como referência em mobiliário,
            decoração e experiências que conectam arquitetura, arte e estilo de vida.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A Mostra Essenza representa o encontro entre grandes talentos da
            arquitetura e ambientes cuidadosamente concebidos para inspirar
            profissionais, clientes e apaixonados por design.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-8 pt-8 border-t border-border/60">
            <Stat n="22" label="Anos de história" />
            <Stat n="2" label="Cidades · POA & Pelotas" />
            <Stat n="∞" label="Possibilidades sensoriais" />
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-11 reveal hidden lg:flex flex-col justify-end">
          <p className="font-serif italic text-muted-foreground/70 text-sm rotate-180 [writing-mode:vertical-rl]">
            Essenza Casa e Jardim · est. 2003
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-primary">{n}</div>
      <div className="mt-2 text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
