import { useReveal } from "@/hooks/useReveal";

export function EssenzaStore() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-32 md:py-44 bg-background">
      <div className="container-essenza grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 reveal">
          <span className="eyebrow">VI — Essenza Casa e Jardim</span>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
            Muito além do <span className="font-serif italic text-primary">mobiliário</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            A Essenza Casa e Jardim oferece experiências que transformam
            espaços em extensões da personalidade de quem os habita.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Uma curadoria construída ao longo de mais de duas décadas, reunindo
            marcas autorais, peças de coleção e um atendimento dedicado ao
            morar bem.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-6 gap-3 reveal">
          <StorePlaceholder className="col-span-4 aspect-[4/5]" n={1} />
          <div className="col-span-2 flex flex-col gap-3">
            <StorePlaceholder className="aspect-square" n={2} />
            <StorePlaceholder className="aspect-square" n={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StorePlaceholder({ className, n }: { className?: string; n: number }) {
  return (
    <div className={`relative overflow-hidden border border-border/60 bg-card ${className}`}>
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--graphite), var(--background))",
        }}
      />
      <span className="absolute bottom-4 left-4 text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
        Loja · {String(n).padStart(2, "0")}
      </span>
    </div>
  );
}
