import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/40 pt-20 pb-10">
      <div className="container-essenza grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-[0.15em] uppercase">
            Mostra <span className="font-serif italic text-primary">Essenza</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Mais do que uma mostra. Uma experiência sensorial assinada pelos
            maiores nomes da arquitetura do sul do Brasil.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="https://www.instagram.com/essenzacasaejardimpoa/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="border border-border/60 p-3 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="border border-border/60 p-3 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="mailto:contato@essenzacasaejardim.com.br"
              aria-label="E-mail"
              className="border border-border/60 p-3 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <FooterCol
          title="Navegue"
          links={[
            { label: "Sobre", href: "#sobre" },
            { label: "Arquitetos", href: "#arquitetos-poa" },
            { label: "Galeria", href: "#galeria" },
            { label: "Tour 360°", href: "#tour" },
            { label: "Instagram", href: "https://www.instagram.com/essenzacasaejardimpoa/" },
            { label: "Contato", href: "#contato" },
          ]}
        />
        <FooterCol
          title="Contato"
          links={[
            { label: "Porto Alegre · RS", href: "#" },
            { label: "Pelotas · RS", href: "#" },
            { label: "contato@essenza.com.br", href: "mailto:contato@essenza.com.br" },
          ]}
        />
      </div>

      <div className="container-essenza mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row gap-4 items-center justify-between text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground/70">
        <span>© {new Date().getFullYear()} Essenza Casa e Jardim</span>
        <span>Mostra Essenza · Edição 2026</span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="eyebrow">{title}</div>
      <ul className="mt-6 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
