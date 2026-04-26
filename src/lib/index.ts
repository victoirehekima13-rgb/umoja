export const ROUTE_PATHS = {
  HOME: '/',
  PROGRAMS: '/programs',
  IMPACT: '/impact',
  RESOURCES: '/resources',
  CONTACT: '/contact',
} as const;

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'health' | 'logistics' | 'protection' | 'coordination';
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  objectives: string[];
  certification: boolean;
  image: string;
  price?: string;
  startDate?: string;
}

export interface ImpactStat {
  id: string;
  value: number;
  label: string;
  description: string;
  icon: string;
  suffix?: string;
  prefix?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'guide' | 'report' | 'case-study' | 'video' | 'tool';
  category: string;
  description: string;
  downloadUrl?: string;
  viewUrl?: string;
  image: string;
  publishDate: string;
  fileSize?: string;
  language: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  image: string;
  country: string;
}

export const PROGRAM_CATEGORIES = {
  health: 'Santé',
  logistics: 'Logistique',
  protection: 'Protection',
  coordination: 'Coordination',
} as const;

export const RESOURCE_TYPES = {
  guide: 'Guide Pratique',
  report: 'Rapport',
  'case-study': 'Étude de Cas',
  video: 'Vidéo',
  tool: 'Outil',
} as const;

export { RESOURCE_TYPES as RESOURCE_TYPES_EXPORT };

export const PROGRAM_LEVELS = {
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  advanced: 'Avancé',
} as const;
