import { useReveal } from "@/hooks/useReveal";

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section
      id="contato"
      ref={ref}
      className="relative min-h-[80vh] flex items-center bg-background overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, var(--gold), transparent 60%)",
        }}
      />
      <div className="container-essenza relative z-10 py-32 text-center reveal">
        <span className="eyebrow">Mostra Essenza 2026</span>
        <h2 className="mt-10 font-display text-5xl md:text-8xl leading-[0.95] tracking-tight max-w-5xl mx-auto">
          Viva a <span className="font-serif italic text-primary">experiência</span>
          <br />
          Essenza
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Descubra tendências, conheça profissionais renomados e inspire-se com
          ambientes que representam o futuro do morar.
        </p>
        <div className="mt-14">
          <a
            href="mailto:contato@essenzacasaejardim.com.br"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 text-[0.7rem] tracking-[0.4em] uppercase hover:bg-primary/85 transition-colors"
          >
            Agendar Visita
          </a>
        </div>
      </div>
    </section>
  );
}
