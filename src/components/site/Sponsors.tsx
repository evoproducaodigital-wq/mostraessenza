import { useReveal } from "@/hooks/useReveal";

const sponsors = [
  { name: "Top Film Películas", src: "/images/sponsors/top-film.png" },
  { name: "Marmoraria Vicenza", src: "/images/sponsors/marmoraria-vicenza.png" },
  { name: "Maison Fonestier 1750", src: "/images/sponsors/maison-fonestier.png" },
  { name: "Madesul Madeiras", src: "/images/sponsors/madesul.png" },
  { name: "Loveggy Joias", src: "/images/sponsors/loveggy.png" },
  { name: "Metalli Stylo Design", src: "/images/sponsors/metalli.png" },
  { name: "Coral", src: "/images/sponsors/coral.png" },
  { name: "Persol", src: "/images/sponsors/persol.png" },
  { name: "Casa Vidro", src: "/images/sponsors/casa-vidro.png" },
  { name: "Amauri Tintas", src: "/images/sponsors/amauri-tintas.png" },
];

export function Sponsors() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="patrocinadores" ref={ref} className="py-28 md:py-36 bg-background scroll-mt-24">
      <div className="container-essenza">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="eyebrow">VIII — Patrocinadores</span>
          <h2 className="mt-8 font-display text-3xl md:text-4xl leading-tight">
            Marcas que compõem o <span className="font-serif italic text-primary">universo Essenza</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/40 reveal">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="group bg-background h-32 flex items-center justify-center px-6 transition-colors hover:bg-card"
              title={s.name}
            >
              <img
                src={s.src}
                alt={`Logo ${s.name}`}
                loading="lazy"
                className="max-h-16 w-auto max-w-[80%] object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <span className="eyebrow">Marketing e desenvolvimento</span>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.instagram.com/evo.estrategia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center opacity-80 transition-opacity hover:opacity-100"
            >
              <img
                src="/images/evo-logo.png"
                alt="Logo evo agência de marketing"
                loading="lazy"
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
