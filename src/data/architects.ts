import alexandre from "@/assets/architects/alexandre-brocker.png.asset.json";
import andreia from "@/assets/architects/andreia-tavares.png.asset.json";
import angelica from "@/assets/architects/angelica-fenner.png.asset.json";
import deisi from "@/assets/architects/deisi-marins.png.asset.json";
import doris from "@/assets/architects/doris-borges-fortes.png.asset.json";
import eduardo from "@/assets/architects/eduardo-machado.png.asset.json";
import gordo from "@/assets/architects/gordo-muswieck.png.asset.json";
import fernanda from "@/assets/architects/fernanda-basso.png.asset.json";
import guilherme from "@/assets/architects/guilherme-lopes.png.asset.json";
import helenita from "@/assets/architects/helenita-paula-laurino.png.asset.json";

export type Architect = {
  id: string;
  slug: string;
  name?: string;
  office?: string;
  bio?: string;
  project?: string;
  projectDescription?: string;
  specialties?: string[];
  awards?: string[];
  photo?: string;
  social?: { instagram?: string; site?: string; linkedin?: string };
  formation?: string[];
  projects?: string[];
  gallery?: string[];
  confirmed: boolean;
  city: "porto-alegre" | "pelotas";
};

const named: Array<{ slug: string; name: string; photo: string }> = [
  { slug: "alexandre-brocker", name: "Alexandre Brocker", photo: alexandre.url },
  { slug: "andreia-tavares", name: "Andréia Tavares", photo: andreia.url },
  { slug: "angelica-fenner", name: "Angélica Fenner", photo: angelica.url },
  { slug: "deisi-marins", name: "Deisi Marins", photo: deisi.url },
  { slug: "doris-borges-fortes", name: "Dóris Borges Fortes", photo: doris.url },
  { slug: "eduardo-machado", name: "Eduardo Machado", photo: eduardo.url },
  { slug: "gordo-muswieck", name: "Gordo Muswieck", photo: gordo.url },
  { slug: "fernanda-basso", name: "Fernanda Basso", photo: fernanda.url },
  { slug: "guilherme-lopes", name: "Guilherme Lopes", photo: guilherme.url },
  {
    slug: "helenita-paula-laurino",
    name: "Helenita Falcão Laurino e Paula Laurino Dutra",
    photo: helenita.url,
  },
];

export const architectsPOA: Architect[] = named.map((a) => ({
  id: a.slug,
  slug: a.slug,
  name: a.name,
  photo: a.photo,
  project: "Ambiente em breve",
  projectDescription:
    "A descrição do projeto assinado por este arquiteto para a Mostra Essenza 2026 será divulgada em breve.",
  gallery: [],
  confirmed: true,
  city: "porto-alegre",
}));

// Estrutura pronta para CMS — basta marcar confirmed:true e preencher os campos.
const placeholders = (city: Architect["city"], count: number): Architect[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${city}-${i + 1}`,
    slug: `${city}-${i + 1}`,
    city,
    confirmed: false,
  }));

export const architectsPelotas: Architect[] = placeholders("pelotas", 6);

export const allArchitects: Architect[] = [...architectsPOA, ...architectsPelotas];

export const getArchitectBySlug = (slug: string) =>
  allArchitects.find((a) => a.slug === slug);
