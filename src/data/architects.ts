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
import barbara from "@/assets/architects/barbara-haas-aline-menezes.png.asset.json";
import heloisa from "@/assets/architects/heloisa-braga.png.asset.json";
import ivan from "@/assets/architects/ivan-andrade.png.asset.json";
import jane from "@/assets/architects/jane-fleck.png.asset.json";
import liana from "@/assets/architects/liana-lamare.png.asset.json";
import livia from "@/assets/architects/livia-bortoncello.png.asset.json";
import luiz from "@/assets/architects/luiz-humberto.png.asset.json";
import renato from "@/assets/architects/renato-bing.jpeg.asset.json";
import simoneB from "@/assets/architects/simone-bertuzzo-maira-ritter.png.asset.json";
import simoneN from "@/assets/architects/simone-neutzling.jpeg.asset.json";
import petra from "@/assets/architects/petra-goetzke.png.asset.json";
import ruy from "@/assets/architects/ruy-barcellos.png.asset.json";
import lucianeD from "@/assets/architects/luciane-cardoso-daniela-martins.png.asset.json";
import nayara from "@/assets/architects/nayara-apolinario-veronica-laurindo.png.asset.json";
import zeca from "@/assets/architects/zeca-amaral.jpeg.asset.json";
import carol from "@/assets/architects/carol-ochman.png.asset.json";
import patricia from "@/assets/architects/patricia-carvalho-tatiana-franco.png.asset.json";
import eliana from "@/assets/architects/eliana-martins.png.asset.json";
import lucianaO from "@/assets/architects/luciana-de-oliveira.jpeg.asset.json";
import carolinaA from "@/assets/architects/carolina-rodrigues-alejandra-affonso.jpeg.asset.json";

export type Architect = {
  id: string;
  slug: string;
  name?: string;
  office?: string;
  phone?: string;
  bio?: string;
  project?: string;
  projectDescription?: string;
  specialties?: string[];
  awards?: string[];
  partners?: string[];
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
  { slug: "barbara-haas-aline-menezes", name: "Bárbara Haas e Aline Menezes", photo: barbara.url },
  { slug: "heloisa-braga", name: "Heloísa Braga", photo: heloisa.url },
  { slug: "ivan-andrade", name: "Ivan Andrade", photo: ivan.url },
  { slug: "jane-fleck", name: "Jane Fleck", photo: jane.url },
  { slug: "liana-lamare", name: "Liana Lamare", photo: liana.url },
  { slug: "livia-bortoncello", name: "Lívia Bortoncello", photo: livia.url },
  { slug: "luiz-humberto", name: "Luiz Humberto", photo: luiz.url },
  { slug: "renato-bing", name: "Renato Bing", photo: renato.url },
  { slug: "simone-bertuzzo-maira-ritter", name: "Simone Bertuzzo e Máira Ritter", photo: simoneB.url },
  { slug: "simone-neutzling", name: "Simone Neutzling", photo: simoneN.url },
  { slug: "petra-goetzke", name: "Petra Göetzke", photo: petra.url },
  { slug: "ruy-barcellos", name: "Ruy Barcellos", photo: ruy.url },
  {
    slug: "luciane-cardoso-daniela-martins",
    name: "Luciane Cardoso e Daniela Martins",
    photo: lucianeD.url,
  },
  {
    slug: "nayara-apolinario-veronica-laurindo",
    name: "Nayara Apolinário e Verônica Laurindo",
    photo: nayara.url,
  },
  { slug: "zeca-amaral", name: "Zéca Amaral", photo: zeca.url },
  { slug: "carol-ochman", name: "Carol Ochman", photo: carol.url },
  {
    slug: "patricia-carvalho-tatiana-franco",
    name: "Patrícia Carvalho e Tatiana Franco",
    photo: patricia.url,
  },
  { slug: "eliana-martins", name: "Eliana Martins", photo: eliana.url },
  { slug: "luciana-de-oliveira", name: "Luciana De Oliveira", photo: lucianaO.url },
  {
    slug: "carolina-rodrigues-alejandra-affonso",
    name: "Carolina Rodrigues e Alejandra Affonso",
    photo: carolinaA.url,
  },
];

const base: Architect[] = named.map((a) => ({
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

// Arquitetos que só existem no conteúdo enviado (sem foto ainda).
const detailOnly: Architect[] = architectDetails
  .filter((d) => !base.some((b) => b.slug === d.slug))
  .map((d) => ({
    id: d.slug,
    slug: d.slug,
    gallery: [],
    confirmed: true,
    city: "porto-alegre" as const,
  }));

export const architectsPOA: Architect[] = [...base, ...detailOnly]
  .map((a) => {
    const detail = architectDetails.find((d) => d.slug === a.slug);
    return detail ? { ...a, ...detail } : a;
  })
  .sort((a, b) => (a.name ?? "").localeCompare(b.name ?? "", "pt-BR"));

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
