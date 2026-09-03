const alexandre = "/images/architects/alexandre-brocker.png";
const andreia = "/images/architects/andreia-tavares.png";
const angelica = "/images/architects/angelica-fenner.png";
const deisi = "/images/architects/deisi-marins.png";
const doris = "/images/architects/doris-borges-fortes.png";
const eduardo = "/images/architects/eduardo-machado.png";
const gordo = "/images/architects/gordo-muswieck.png";
const fernanda = "/images/architects/fernanda-basso.png";
const guilherme = "/images/architects/guilherme-lopes.png";
const helenita = "/images/architects/helenita-paula-laurino.png";
const barbara = "/images/architects/barbara-haas-aline-menezes.png";
const heloisa = "/images/architects/heloisa-braga.png";
const ivan = "/images/architects/ivan-andrade.png";
const jane = "/images/architects/jane-fleck.png";
const liana = "/images/architects/liana-lamare.png";
const livia = "/images/architects/livia-bortoncello.png";
const luiz = "/images/architects/luiz-humberto.png";
const renato = "/images/architects/renato-bing.jpeg";
const simoneB = "/images/architects/simone-bertuzzo-maira-ritter.png";
const simoneN = "/images/architects/simone-neutzling.jpeg";
const petra = "/images/architects/petra-goetzke.png";
const ruy = "/images/architects/ruy-barcellos.png";
const lucianeD = "/images/architects/luciane-cardoso-daniela-martins.png";
const nayara = "/images/architects/nayara-apolinario-veronica-laurindo.png";
const zeca = "/images/architects/zeca-amaral.jpeg";
const carol = "/images/architects/carol-ochman.png";
const patricia = "/images/architects/patricia-carvalho-tatiana-franco.png";
const eliana = "/images/architects/eliana-martins.png";
const lucianaO = "/images/architects/luciana-de-oliveira.jpeg";
const carolinaA = "/images/architects/carolina-rodrigues-alejandra-affonso.jpeg";
const daniBrod = "/images/architects/daniela-brod.png";
const danieleM = "/images/architects/daniele-dame-marina-fabiao.webp";
const daniellaA = "/images/architects/daniella-azevedo.jpeg";
const eduardoH = "/images/architects/eduardo-horta.jpeg";
const joaoH = "/images/architects/joao-hammes.jpeg";
const simoneP = "/images/architects/simone-pons.jpeg";
const monica = "/images/architects/monica-furtado.png";
const guilhermeS = "/images/architects/guilherme-silveira-sarah-nogueira.png";
const marli = "/images/architects/marli-lima.png";
import { architectDetails } from "./architect-details";

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
  { slug: "alexandre-brocker", name: "Alexandre Brocker", photo: alexandre },
  { slug: "andreia-tavares", name: "Andréia Tavares", photo: andreia },
  { slug: "angelica-fenner", name: "Angélica Fenner", photo: angelica },
  { slug: "deisi-marins", name: "Deisi Marins", photo: deisi },
  { slug: "doris-borges-fortes", name: "Dóris Borges Fortes", photo: doris },
  { slug: "eduardo-machado", name: "Eduardo Machado", photo: eduardo },
  { slug: "gordo-muswieck", name: "Gordo Muswieck", photo: gordo },
  { slug: "fernanda-basso", name: "Fernanda Basso", photo: fernanda },
  { slug: "guilherme-lopes", name: "Guilherme Lopes", photo: guilherme },
  {
    slug: "helenita-paula-laurino",
    name: "Helenita Falcão Laurino e Paula Laurino Dutra",
    photo: helenita,
  },
  { slug: "barbara-haas-aline-menezes", name: "Bárbara Haas e Aline Menezes", photo: barbara },
  { slug: "heloisa-braga", name: "Heloísa Braga", photo: heloisa },
  { slug: "ivan-andrade", name: "Ivan Andrade", photo: ivan },
  { slug: "jane-fleck", name: "Jane Fleck", photo: jane },
  { slug: "liana-lamare", name: "Liana Lamare", photo: liana },
  { slug: "livia-bortoncello", name: "Lívia Bortoncello", photo: livia },
  { slug: "luiz-humberto", name: "Luiz Humberto", photo: luiz },
  { slug: "renato-bing", name: "Renato Bing", photo: renato },
  { slug: "simone-bertuzzo-maira-ritter", name: "Simone Bertuzzo e Máira Ritter", photo: simoneB },
  { slug: "simone-neutzling", name: "Simone Neutzling", photo: simoneN },
  { slug: "petra-goetzke", name: "Petra Göetzke", photo: petra },
  { slug: "ruy-barcellos", name: "Ruy Barcellos", photo: ruy },
  {
    slug: "luciane-cardoso-daniela-martins",
    name: "Luciane Cardoso e Daniela Martins",
    photo: lucianeD,
  },
  {
    slug: "nayara-apolinario-veronica-laurindo",
    name: "Nayara Apolinário e Verônica Laurindo",
    photo: nayara,
  },
  { slug: "zeca-amaral", name: "Zéca Amaral", photo: zeca },
  { slug: "carol-ochman", name: "Carol Ochman", photo: carol },
  {
    slug: "patricia-carvalho-tatiana-franco",
    name: "Patrícia Carvalho e Tatiana Franco",
    photo: patricia,
  },
  { slug: "eliana-martins", name: "Eliana Martins", photo: eliana },
  { slug: "luciana-de-oliveira", name: "Luciana De Oliveira", photo: lucianaO },
  {
    slug: "carolina-rodrigues-alejandra-affonso",
    name: "Carolina Rodrigues e Alejandra Affonso",
    photo: carolinaA,
  },
  { slug: "daniela-brod", name: "Dani Brod", photo: daniBrod },
  {
    slug: "daniele-dame-marina-fabiao",
    name: "Daniele Damé e Marina Fabião",
    photo: danieleM,
  },
  { slug: "daniella-azevedo", name: "Daniella Azevedo", photo: daniellaA },
  { slug: "eduardo-horta", name: "Eduardo Horta", photo: eduardoH },
  { slug: "joao-hammes", name: "João Hammes", photo: joaoH },
  { slug: "simone-pons", name: "Simone Pons", photo: simoneP },
  { slug: "monica-furtado", name: "Mônica Furtado", photo: monica },
  {
    slug: "guilherme-silveira-sarah-nogueira",
    name: "Guilherme Silveira e Sarah Nogueira",
    photo: guilhermeS,
  },
  { slug: "marli-lima", name: "Marli Lima", photo: marli },
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
