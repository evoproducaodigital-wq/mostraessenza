export type Architect = {
  id: string;
  name?: string;
  office?: string;
  bio?: string;
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

// Estrutura pronta para CMS — basta marcar confirmed:true e preencher os campos.
const placeholders = (city: Architect["city"], count: number): Architect[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `${city}-${i + 1}`,
    city,
    confirmed: false,
  }));

export const architectsPOA: Architect[] = placeholders("porto-alegre", 9);
export const architectsPelotas: Architect[] = placeholders("pelotas", 6);
