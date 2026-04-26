import { TrainingProgram, ImpactStat, Resource, Testimonial } from '@/lib/index';
import { IMAGES } from '@/assets/images';

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 'health-emergency-response',
    title: 'Réponse d\'Urgence en Santé Publique',
    category: 'health',
    duration: '6 semaines',
    level: 'intermediate',
    description: 'Formation complète sur la gestion des urgences sanitaires dans les contextes humanitaires, incluant la coordination des équipes médicales, la logistique pharmaceutique et les protocoles d\'intervention rapide.',
    objectives: [
      'Maîtriser les protocoles d\'intervention d\'urgence sanitaire',
      'Coordonner efficacement les équipes médicales sur le terrain',
      'Gérer les stocks de médicaments et équipements médicaux',
      'Établir des centres de santé temporaires',
      'Appliquer les normes SPHERE en santé humanitaire'
    ],
    certification: true,
    image: IMAGES.TRAINING_3,
    price: 'Gratuit',
    startDate: '2026-04-15'
  },
  {
    id: 'logistics-supply-chain',
    title: 'Chaîne Logistique Humanitaire',
    category: 'logistics',
    duration: '8 semaines',
    level: 'advanced',
    description: 'Programme avancé couvrant la gestion complète de la chaîne d\'approvisionnement humanitaire, de la planification stratégique à la distribution sur le terrain, incluant les systèmes de tracking et la gestion des entrepôts.',
    objectives: [
      'Planifier et optimiser les chaînes d\'approvisionnement complexes',
      'Gérer les entrepôts et centres de distribution',
      'Utiliser les systèmes de tracking et monitoring',
      'Coordonner le transport multimodal en zones difficiles',
      'Appliquer les standards internationaux de logistique humanitaire'
    ],
    certification: true,
    image: IMAGES.TRAINING_5,
    price: 'Gratuit',
    startDate: '2026-05-01'
  },
  {
    id: 'protection-vulnerable-populations',
    title: 'Protection des Populations Vulnérables',
    category: 'protection',
    duration: '5 semaines',
    level: 'intermediate',
    description: 'Formation spécialisée sur la protection des populations vulnérables incluant les enfants, femmes, personnes âgées et personnes handicapées dans les contextes de crise et post-conflit.',
    objectives: [
      'Identifier et évaluer les risques de protection',
      'Mettre en œuvre des mécanismes de protection communautaire',
      'Gérer les cas de violence basée sur le genre',
      'Coordonner avec les acteurs de protection',
      'Appliquer les principes de Do No Harm'
    ],
    certification: true,
    image: IMAGES.TRAINING_8,
    price: 'Gratuit',
    startDate: '2026-04-22'
  },
  {
    id: 'coordination-cluster-system',
    title: 'Coordination et Système de Clusters',
    category: 'coordination',
    duration: '4 semaines',
    level: 'advanced',
    description: 'Formation sur la coordination humanitaire inter-agences, le système de clusters des Nations Unies, et les mécanismes de coordination nationale et locale dans les réponses d\'urgence.',
    objectives: [
      'Comprendre et utiliser le système de clusters',
      'Faciliter la coordination inter-agences',
      'Organiser et animer des réunions de coordination',
      'Utiliser les outils de gestion de l\'information humanitaire',
      'Établir des partenariats stratégiques'
    ],
    certification: true,
    image: IMAGES.HUMANITARIAN_WORK_2,
    price: 'Gratuit',
    startDate: '2026-05-10'
  },
  {
    id: 'nutrition-emergency',
    title: 'Nutrition en Situation d\'Urgence',
    category: 'health',
    duration: '6 semaines',
    level: 'beginner',
    description: 'Introduction complète à la nutrition humanitaire, couvrant le dépistage de la malnutrition, la gestion des programmes nutritionnels et les interventions d\'urgence pour les populations affectées.',
    objectives: [
      'Dépister et évaluer la malnutrition aiguë',
      'Gérer les programmes de nutrition thérapeutique',
      'Organiser des distributions alimentaires ciblées',
      'Surveiller l\'état nutritionnel des populations',
      'Appliquer les protocoles PCMA'
    ],
    certification: true,
    image: IMAGES.HUMANITARIAN_WORK_4,
    price: 'Gratuit',
    startDate: '2026-04-08'
  },
  {
    id: 'wash-water-sanitation',
    title: 'Eau, Hygiène et Assainissement (WASH)',
    category: 'health',
    duration: '7 semaines',
    level: 'intermediate',
    description: 'Programme complet sur les interventions WASH en contexte humanitaire, incluant l\'approvisionnement en eau potable, l\'assainissement, la promotion de l\'hygiène et la gestion des déchets.',
    objectives: [
      'Évaluer les besoins en eau et assainissement',
      'Installer et gérer des systèmes d\'eau potable',
      'Mettre en place des infrastructures sanitaires',
      'Conduire des campagnes de promotion de l\'hygiène',
      'Appliquer les standards SPHERE WASH'
    ],
    certification: true,
    image: IMAGES.TEAM_5,
    price: 'Gratuit',
    startDate: '2026-05-20'
  }
];

export const impactStats: ImpactStat[] = [
  {
    id: 'trained-professionals',
    value: 45000,
    label: 'Professionnels Formés',
    description: 'Praticiens humanitaires certifiés depuis 2015',
    icon: 'Users',
    suffix: '+'
  },
  {
    id: 'countries-reached',
    value: 120,
    label: 'Pays Couverts',
    description: 'Présence mondiale dans les zones de crise',
    icon: 'Globe',
    suffix: '+'
  },
  {
    id: 'training-programs',
    value: 250,
    label: 'Programmes de Formation',
    description: 'Cours spécialisés et certifications disponibles',
    icon: 'BookOpen',
    suffix: '+'
  },
  {
    id: 'partner-organizations',
    value: 180,
    label: 'Organisations Partenaires',
    description: 'ONG, agences ONU et institutions académiques',
    icon: 'Building2',
    suffix: '+'
  },
  {
    id: 'lives-impacted',
    value: 12,
    label: 'Millions de Vies Impactées',
    description: 'Bénéficiaires directs et indirects de nos programmes',
    icon: 'Heart',
    suffix: 'M+'
  },
  {
    id: 'resources-published',
    value: 500,
    label: 'Ressources Publiées',
    description: 'Guides, rapports et outils disponibles gratuitement',
    icon: 'FileText',
    suffix: '+'
  }
];

export const resources: Resource[] = [
  {
    id: 'sphere-handbook-2026',
    title: 'Manuel SPHERE 2026 - Édition Révisée',
    type: 'guide',
    category: 'Standards Humanitaires',
    description: 'La référence mondiale pour la qualité et la redevabilité dans l\'action humanitaire. Édition 2026 avec mises à jour sur le changement climatique et les crises prolongées.',
    downloadUrl: '/resources/sphere-handbook-2026.pdf',
    image: IMAGES.TEAM_7,
    publishDate: '2026-01-15',
    fileSize: '12.5 MB',
    language: 'Français'
  },
  {
    id: 'logistics-emergency-guide',
    title: 'Guide Pratique de Logistique d\'Urgence',
    type: 'guide',
    category: 'Logistique',
    description: 'Manuel complet couvrant tous les aspects de la logistique humanitaire, de la planification à l\'exécution, avec études de cas récentes et check-lists opérationnelles.',
    downloadUrl: '/resources/logistics-emergency-guide.pdf',
    image: IMAGES.TRAINING_3,
    publishDate: '2025-11-20',
    fileSize: '8.2 MB',
    language: 'Français'
  },
  {
    id: 'protection-toolkit-2026',
    title: 'Boîte à Outils Protection 2026',
    type: 'tool',
    category: 'Protection',
    description: 'Collection d\'outils pratiques pour les acteurs de protection : formulaires d\'évaluation, protocoles de référencement, guides d\'entretien et matrices d\'analyse des risques.',
    downloadUrl: '/resources/protection-toolkit-2026.zip',
    image: IMAGES.HUMANITARIAN_WORK_2,
    publishDate: '2026-02-10',
    fileSize: '15.8 MB',
    language: 'Français'
  },
  {
    id: 'annual-report-2025',
    title: 'Rapport Annuel 2025 - Impact Global',
    type: 'report',
    category: 'Rapports Institutionnels',
    description: 'Bilan complet de nos activités 2025 : formations dispensées, partenariats établis, innovations pédagogiques et impact mesuré sur le terrain.',
    downloadUrl: '/resources/annual-report-2025.pdf',
    image: IMAGES.TEAM_5,
    publishDate: '2026-01-30',
    fileSize: '6.4 MB',
    language: 'Français'
  },
  {
    id: 'case-study-sahel-response',
    title: 'Étude de Cas : Réponse Intégrée au Sahel',
    type: 'case-study',
    category: 'Études de Cas',
    description: 'Analyse approfondie d\'une intervention multi-sectorielle au Sahel : coordination, défis logistiques, approche communautaire et leçons apprises pour les futures opérations.',
    downloadUrl: '/resources/case-study-sahel.pdf',
    image: IMAGES.HUMANITARIAN_WORK_4,
    publishDate: '2025-12-05',
    fileSize: '4.7 MB',
    language: 'Français'
  },
  {
    id: 'video-wash-training',
    title: 'Série Vidéo : Formation WASH Terrain',
    type: 'video',
    category: 'Formations Vidéo',
    description: 'Collection de 12 vidéos pédagogiques sur les interventions WASH : installation de points d\'eau, construction de latrines, promotion de l\'hygiène et gestion des déchets.',
    viewUrl: '/resources/videos/wash-training',
    image: IMAGES.TRAINING_5,
    publishDate: '2026-02-20',
    fileSize: '2.1 GB',
    language: 'Français'
  },
  {
    id: 'coordination-handbook',
    title: 'Manuel de Coordination Inter-Agences',
    type: 'guide',
    category: 'Coordination',
    description: 'Guide complet sur la coordination humanitaire : système de clusters, mécanismes de coordination, gestion de l\'information et outils de facilitation.',
    downloadUrl: '/resources/coordination-handbook.pdf',
    image: IMAGES.TEAM_7,
    publishDate: '2025-10-15',
    fileSize: '9.3 MB',
    language: 'Français'
  },
  {
    id: 'nutrition-assessment-tool',
    title: 'Outil d\'Évaluation Nutritionnelle Rapide',
    type: 'tool',
    category: 'Nutrition',
    description: 'Application mobile et formulaires pour l\'évaluation rapide de l\'état nutritionnel des populations : protocoles MUAC, enquêtes SMART et analyse des données.',
    downloadUrl: '/resources/nutrition-assessment-tool.zip',
    image: IMAGES.TRAINING_8,
    publishDate: '2026-01-10',
    fileSize: '45.2 MB',
    language: 'Français'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Dr. Amina Diallo',
    role: 'Coordinatrice Santé',
    organization: 'Médecins Sans Frontières',
    content: 'Les formations de Humanitarian Global ont transformé ma pratique professionnelle. Les modules sur la réponse d\'urgence sanitaire m\'ont donné les outils concrets pour gérer efficacement les crises sur le terrain. La certification obtenue est reconnue internationalement.',
    image: IMAGES.TEAM_5,
    country: 'Sénégal'
  },
  {
    id: 'testimonial-2',
    name: 'Jean-Pierre Mukendi',
    role: 'Responsable Logistique',
    organization: 'Programme Alimentaire Mondial',
    content: 'Le programme de logistique humanitaire est exceptionnel. J\'ai particulièrement apprécié l\'approche pratique avec des études de cas réelles et des simulations. Les compétences acquises sont directement applicables dans mes opérations quotidiennes.',
    image: IMAGES.HUMANITARIAN_WORK_2,
    country: 'République Démocratique du Congo'
  },
  {
    id: 'testimonial-3',
    name: 'Sarah Martinez',
    role: 'Spécialiste Protection',
    organization: 'UNHCR',
    content: 'La formation sur la protection des populations vulnérables a dépassé mes attentes. Les formateurs sont des experts de terrain qui partagent leur expérience concrète. Les ressources pédagogiques sont d\'une qualité exceptionnelle et régulièrement mises à jour.',
    image: IMAGES.TEAM_7,
    country: 'Colombie'
  },
  {
    id: 'testimonial-4',
    name: 'Ahmed Hassan',
    role: 'Coordinateur Pays',
    organization: 'UNICEF',
    content: 'Humanitarian Global offre les meilleures formations en coordination humanitaire. Le module sur le système de clusters m\'a permis d\'améliorer significativement la coordination inter-agences dans mon pays d\'intervention. Un investissement indispensable pour tout coordinateur.',
    image: IMAGES.HUMANITARIAN_WORK_4,
    country: 'Yémen'
  },
  {
    id: 'testimonial-5',
    name: 'Marie Kouassi',
    role: 'Nutritionniste Humanitaire',
    organization: 'Action Contre la Faim',
    content: 'Le programme de nutrition en situation d\'urgence est complet et très bien structuré. Les sessions pratiques sur le dépistage et la prise en charge de la malnutrition aiguë sont particulièrement utiles. Je recommande vivement cette formation à tous les nutritionnistes humanitaires.',
    image: IMAGES.TRAINING_3,
    country: 'Côte d\'Ivoire'
  },
  {
    id: 'testimonial-6',
    name: 'Carlos Mendoza',
    role: 'Ingénieur WASH',
    organization: 'Oxfam International',
    content: 'La formation WASH de Humanitarian Global est la référence dans le secteur. Les modules techniques sont excellents et les formateurs partagent des solutions innovantes adaptées aux contextes difficiles. Les certifications obtenues ont boosté ma carrière professionnelle.',
    image: IMAGES.TRAINING_5,
    country: 'Honduras'
  }
];