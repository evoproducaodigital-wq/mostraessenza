import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Sensorial } from "@/components/site/Sensorial";
import { ArchitectsSection } from "@/components/site/ArchitectsSection";
import { Tour360 } from "@/components/site/Tour360";

import { Sponsors } from "@/components/site/Sponsors";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { architectsPOA, architectsPelotas } from "@/data/architects";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mostra Essenza 2026 — Jeito de Viver" },
      {
        name: "description",
        content:
          "A Mostra Essenza 2026 reúne arquitetos renomados em ambientes exclusivos. Uma experiência sensorial de arquitetura, design e decoração no Rio Grande do Sul.",
      },
      { property: "og:title", content: "Mostra Essenza 2026 — Jeito de Viver" },
      {
        property: "og:description",
        content:
          "Mais do que uma mostra. Uma experiência sensorial. Edição 2026 com os maiores nomes da arquitetura do sul do Brasil.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Mostra Essenza 2026",
          description:
            "Mostra de arquitetura, design e decoração da Essenza Casa e Jardim.",
          startDate: "2026-01-01",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: [
            { "@type": "Place", name: "Essenza Casa e Jardim", address: "Porto Alegre, RS" },
            { "@type": "Place", name: "Essenza Casa e Jardim", address: "Pelotas, RS" },
          ],
          organizer: { "@type": "Organization", name: "Essenza Casa e Jardim" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Sensorial />
        <ArchitectsSection
          id="arquitetos-poa"
          eyebrow="Arquitetos Convidados"
          city="Arquitetos Convidados Mostra Essenza"
          description="Profissionais convidados para assinar ambientes exclusivos na Mostra Essenza 2026, nas unidades de Porto Alegre e Pelotas."
          architects={[...architectsPOA, ...architectsPelotas]}
        />

        <Tour360 />
        
        <Sponsors />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

