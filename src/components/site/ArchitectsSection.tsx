import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import logo from "@/assets/mostra-essenza-logo.png.asset.json";
import type { Architect } from "@/data/architects";
import { useReveal } from "@/hooks/useReveal";
import { Instagram, Globe, Linkedin } from "lucide-react";

type Props = {
  id: string;
  eyebrow: string;
  city: string;
  architects: Architect[];
};

export function ArchitectsSection({ id, eyebrow, city, architects }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<Architect | null>(null);

  return (
    <section id={id} ref={ref} className="py-32 md:py-44 bg-background">
      <div className="container-essenza">
        <div className="flex flex-col items-center text-center reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[1] tracking-tight">
            {city}
          </h2>
          <div className="mt-6 gold-line !w-32" />
          <p className="mt-8 max-w-xl text-muted-foreground">
            Arquitetos convidados para assinar ambientes exclusivos na Mostra
            Essenza 2026.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {architects.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setSelected(a)}
              className="group relative aspect-[3/4] bg-card border border-border/60 flex flex-col items-center justify-center p-8 text-center reveal transition-all duration-500 hover:border-primary/60 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="absolute top-5 left-5 text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute top-5 right-5 text-[0.6rem] tracking-[0.3em] uppercase text-primary">
                Em breve
              </span>

              <img
                src={logo.url}
                alt=""
                className="w-3/4 invert opacity-90 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.35em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
                Arquiteto confirmado
              </span>
            </button>
          ))}
        </div>
      </div>

      <ArchitectDialog
        architect={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

function ArchitectDialog({
  architect,
  onClose,
}: {
  architect: Architect | null;
  onClose: () => void;
}) {
  const open = !!architect;
  const a = architect;
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-3xl bg-background border-border/60 p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
          <div className="bg-card flex items-center justify-center p-10 min-h-[280px] border-b md:border-b-0 md:border-r border-border/60">
            {a?.photo ? (
              <img src={a.photo} alt={a.name} className="w-full h-full object-cover" />
            ) : (
              <img
                src={logo.url}
                alt=""
                className="w-2/3 invert opacity-90 mix-blend-screen"
              />
            )}
          </div>
          <div className="p-8 md:p-12">
            <DialogHeader>
              <span className="eyebrow">Arquiteto Convidado</span>
              <DialogTitle className="mt-4 font-display text-3xl md:text-4xl text-foreground">
                {a?.name ?? "Em breve"}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {a?.office ?? "Perfil do arquiteto em breve."}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 space-y-6 text-sm text-muted-foreground">
              <Field label="Mini biografia">
                {a?.bio ?? "Conteúdo em curadoria. Acompanhe as próximas confirmações."}
              </Field>
              <Field label="Formação">
                {a?.formation?.join(" · ") ?? "—"}
              </Field>
              <Field label="Principais projetos">
                {a?.projects?.join(" · ") ?? "—"}
              </Field>
              <Field label="Premiações">
                {a?.awards?.join(" · ") ?? "—"}
              </Field>
              <Field label="Especialidades">
                {a?.specialties?.join(" · ") ?? "—"}
              </Field>
            </div>

            <div className="mt-10 flex gap-4">
              {a?.social?.instagram && (
                <a
                  href={a.social.instagram}
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {a?.social?.site && (
                <a
                  href={a.social.site}
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Site"
                >
                  <Globe size={18} />
                </a>
              )}
              {a?.social?.linkedin && (
                <a
                  href={a.social.linkedin}
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[0.6rem] tracking-[0.35em] uppercase text-primary/80">
        {label}
      </div>
      <div className="mt-2 leading-relaxed">{children}</div>
    </div>
  );
}
