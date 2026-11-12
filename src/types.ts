export type PlanId = 'descoberta' | 'encanto' | 'paixao';

export interface Plan {
  id: PlanId;
  name: string;
  badge?: string;
  duration: string;
  editionsCount: string;
  pricePerEdition: string;
  priceTotalCalculation?: string;
  subtitle: string;
  popular?: boolean;
  features: string[];
  symbol: string;
}

export interface QuizProfile {
  braSize: string;
  pantySize: string;
  nightgownSize: string;
  pyjamaSize: string;
  supportPreference: string;
  pantyStylePreference: string;
  selectedStyles: string[];
  favoritePieces: string[];
  avoidNotes: string;
  personaName: string;
  personaDesc: string;
}

export interface CustomerAddress {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
  referencePoint?: string;
}
