import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram, Globe, Linkedin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getArchitectBySlug } from "@/data/architects";
const logo = "/images/mostra-essenza-logo.png";

export const Route = createFileRoute("/arquitetos/$slug")({
  loader: ({ params }) => {
    const architect = getArchitectBySlug(params.slug);
    if (!architect) throw notFound();
    return { architect };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Arquiteto não encontrado — Mostra Essenza 2026" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { architect } = loaderData;
    const title = `${architect.name ?? "Arquiteto"} — Mostra Essenza 2026`;
    const description =
      architect.projectDescription ??
      "Arquiteto convidado da Mostra Essenza 2026.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ArchitectNotFound,
  component: ArchitectPage,
});

function ArchitectNotFound() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
      <h1 className="font-display text-4xl">Arquiteto não encontrado</h1>
      <Link to="/" className="eyebrow text-primary">
        Voltar à home
      </Link>
    </div>
  );
}

function ArchitectPage() {
  const { architect: a } = Route.useLoaderData();

  return (
    <div className="bg-background text-foreground antialiased">
      <Header />
      <main className="pt-32 md:pt-40">
        <section className="container-essenza">
          <Link
            to="/"
            hash="arquitetos-poa"
            className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.35em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} /> Arquitetos
          </Link>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <div className="relative aspect-[4/5] bg-card border border-border/60 overflow-hidden">
              {a.photo ? (
                <img
                  src={a.photo}
                  alt={a.name ?? "Arquiteto"}
                  className="w-full h-full object-cover grayscale"
                />
              ) : (
                <img
                  src={logo}
                  alt=""
                  className="w-2/3 mx-auto mt-[20%] invert opacity-80 mix-blend-screen"
                />
              )}
            </div>

            <div>
              <span className="eyebrow">Arquiteto Convidado</span>
              <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
                {a.name ?? "Em breve"}
              </h1>
              {a.office && (
                <p className="mt-4 font-serif italic text-lg text-primary">{a.office}</p>
              )}
              <div className="mt-8 gold-line !w-24" />

              <div className="mt-10 space-y-10">
                <div>
                  <div className="text-[0.6rem] tracking-[0.35em] uppercase text-primary/80">
                    Projeto
                  </div>
                  <p className="mt-3 font-serif italic text-2xl md:text-3xl text-foreground">
                    {a.project ?? "Em breve"}
                  </p>
                </div>

                <div>
                  <div className="text-[0.6rem] tracking-[0.35em] uppercase text-primary/80">
                    Descrição do projeto
                  </div>
                  <div className="mt-3 space-y-4 leading-relaxed text-muted-foreground max-w-xl">
                    {(
                      a.projectDescription ??
                      "Descrição em curadoria. Em breve, mais detalhes sobre o ambiente."
                    )
                      .split("\n\n")
                      .map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                  </div>
                </div>

                {a.bio && (
                  <Block label="Mini biografia">
                    <div className="space-y-4">
                      {a.bio.split("\n\n").map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </Block>
                )}

                {a.formation && a.formation.length > 0 && (
                  <Block label="Formação">
                    <List items={a.formation} />
                  </Block>
                )}

                {a.specialties && a.specialties.length > 0 && (
                  <Block label="Especialidades">
                    <List items={a.specialties} />
                  </Block>
                )}

                {a.projects && a.projects.length > 0 && (
                  <Block label="Principais projetos">
                    <List items={a.projects} />
                  </Block>
                )}

                {a.awards && a.awards.length > 0 && (
                  <Block label="Premiações">
                    <List items={a.awards} />
                  </Block>
                )}

                {a.partners && a.partners.length > 0 && (
                  <Block label="Parceiros e agradecimentos">
                    <List items={a.partners} />
                  </Block>
                )}

                {a.phone && (
                  <Block label="Contato">
                    <p>{a.phone}</p>
                  </Block>
                )}


                {a.social && (
                  <div className="flex gap-5">
                    {a.social.instagram && (
                      <a
                        href={a.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {a.social.site && (
                      <a
                        href={a.social.site}
                        aria-label="Site"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    {a.social.linkedin && (
                      <a
                        href={a.social.linkedin}
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="container-essenza py-28 md:py-40">
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow">Galeria</span>
            <h2 className="mt-6 font-display text-3xl md:text-5xl">
              Galeria de <span className="font-serif italic text-primary">fotos</span>
            </h2>
            <div className="mt-6 gold-line !w-24" />
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(a.gallery && a.gallery.length > 0
              ? a.gallery
              : Array.from<string>({ length: 6 }).fill("")
            ).map((src: string, i: number) => (
              <div
                key={i}
                className="relative aspect-[4/3] bg-card border border-border/60 overflow-hidden flex items-center justify-center"
              >
                {src ? (
                  <img
                    src={src}
                    alt={`Projeto de ${a.name ?? "arquiteto"} — foto ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-serif italic text-lg text-muted-foreground/70">
                    foto · {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[0.6rem] tracking-[0.35em] uppercase text-primary/80">
        {label}
      </div>
      <div className="mt-3 leading-relaxed text-muted-foreground max-w-xl">
        {children}
      </div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-primary/60">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
