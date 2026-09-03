import { useReveal } from "@/hooks/useReveal";
import { MapPin } from "lucide-react";

const stores = [
  {
    city: "Porto Alegre",
    address: "R. Quintino Bocaiúva, 1026 — Moinhos de Vento",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=R.+Quintino+Bocai%C3%BAva%2C+1026+-+Moinhos+de+Vento%2C+Porto+Alegre+-+RS",
  },
  {
    city: "Pelotas",
    address: "R. Quinze de Novembro, 776 — Centro",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=R.+Quinze+de+Novembro%2C+776+-+Centro%2C+Pelotas+-+RS",
  },
];

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

        <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          {stores.map((store) => (
            <a
              key={store.city}
              href={store.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 border border-border/60 bg-card/30 p-8 hover:border-primary/60 hover:bg-card/60 transition-colors"
            >
              <MapPin size={24} className="text-primary" />
              <div>
                <h3 className="font-display text-xl tracking-[0.15em] uppercase text-foreground">
                  Essenza {store.city}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {store.address}
                </p>
              </div>
              <span className="mt-2 text-[0.65rem] tracking-[0.3em] uppercase text-primary group-hover:text-foreground transition-colors">
                Ver no mapa
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 text-[0.7rem] tracking-[0.4em] uppercase">
            Visite a Mostra
          </span>
        </div>
      </div>
    </section>
  );
}
