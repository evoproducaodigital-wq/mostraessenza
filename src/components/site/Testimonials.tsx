import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    quote:
      "A Mostra Essenza é, sem dúvida, um dos espaços mais inspiradores para o pensamento arquitetônico contemporâneo do sul do país.",
    author: "Arquiteta convidada",
    role: "Edição anterior",
  },
  {
    quote:
      "Cada ambiente é uma narrativa. O cuidado com a curadoria e a atmosfera transforma a visita em uma verdadeira experiência sensorial.",
    author: "Designer",
    role: "Visitante",
  },
  {
    quote:
      "A parceria com a Essenza Casa e Jardim eleva qualquer projeto. Há ali uma genuína paixão pelo morar bem.",
    author: "Parceiro institucional",
    role: "Indústria do mobiliário",
  },
  {
    quote:
      "Saí com a sensação de ter passeado por dentro de uma revista de arquitetura — só que real, palpável, viva.",
    author: "Visitante",
    role: "Porto Alegre",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-32 md:py-44 bg-card border-y border-border/40">
      <div className="container-essenza">
        <div className="max-w-2xl reveal">
          <span className="eyebrow">V — Depoimentos</span>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
            Vozes da <span className="font-serif italic text-primary">Essenza</span>
          </h2>
        </div>

        <div className="mt-16 reveal">
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {items.map((t, i) => (
                <CarouselItem key={i} className="md:basis-2/3 lg:basis-1/2">
                  <figure className="h-full bg-background border border-border/60 p-10 md:p-14 flex flex-col gap-8">
                    <span className="font-display text-7xl leading-none text-primary/60">
                      “
                    </span>
                    <blockquote className="font-serif italic text-xl md:text-2xl leading-snug text-foreground">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-auto pt-6 border-t border-border/60">
                      <div className="font-display text-lg">{t.author}</div>
                      <div className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                        {t.role}
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-10 flex gap-3 justify-end">
              <CarouselPrevious className="static translate-y-0 bg-transparent border-border/60 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 bg-transparent border-border/60 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
