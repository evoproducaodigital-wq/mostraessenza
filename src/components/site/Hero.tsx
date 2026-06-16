import { ChevronDown } from "lucide-react";
import logo from "@/assets/mostra-essenza-logo.png.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--gold), transparent 40%), radial-gradient(circle at 80% 70%, var(--bronze), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, var(--background) 90%)",
        }}
      />

      <div className="container-essenza relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-32 pb-24">
        <div className="lg:col-span-7 flex flex-col gap-10">
          <span className="eyebrow flex items-center gap-4">
            <span className="gold-line" /> Edição 2026 · Rio Grande do Sul
          </span>

          <div className="relative">
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.02em] text-foreground">
              Mostra
              <br />
              <span className="font-serif italic text-primary">Essenza</span>
              <span className="text-foreground"> 2026</span>
            </h1>
            <p className="mt-4 font-serif italic text-2xl md:text-3xl text-muted-foreground">
              Jeito de viver
            </p>
          </div>

          <p className="max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
            Mais do que uma mostra. Uma experiência sensorial. A Mostra Essenza
            2026 nasce com um propósito claro: antecipar tendências, apresentar
            soluções inovadoras e inspirar novas formas de viver.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#arquitetos-poa"
              className="inline-flex items-center justify-center border border-primary px-8 py-4 text-[0.7rem] tracking-[0.35em] uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
            >
              Conheça os Arquitetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-[0.7rem] tracking-[0.35em] uppercase hover:bg-primary/85 transition-colors duration-500"
            >
              Visitar a Mostra
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative aspect-[3/4] w-full max-w-md bg-card border border-border/60 flex items-center justify-center p-10">
            <img
              src={logo.url}
              alt="Mostra Essenza — Jeito de Viver"
              className="w-full h-auto object-contain invert mix-blend-screen opacity-95"
            />
            <span className="absolute -top-3 left-6 bg-background px-3 eyebrow">
              Logo Oficial
            </span>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[0.6rem] tracking-[0.4em] uppercase">Descer</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
