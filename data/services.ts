export interface Service {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  startingPrice: string
  tagline: string
  deliverables: string[]
  timeline: string
  icon: string
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'menuiserie',
    title: 'Menuiserie',
    excerpt:
      'Création sur-mesure de mobilier et rangements avec finitions luxueuses',
    description:
      "Notre savoir-faire et nos innovations nous permettent de répondre au mieux à vos attentes en vous donnant des solutions techniques et esthétiques cohérentes avec votre bien immobilier. Nous créons des espaces de rangement et du mobilier sur mesure qui reflètent votre personnalité et s'intègrent parfaitement à votre intérieur.",
    startingPrice: '3 500',
    tagline: 'Excellence artisanale',
    deliverables: [
      'Étude personnalisée de votre projet',
      'Plans techniques et visuels 3D',
      'Création de mobilier sur-mesure',
      'Espaces de rangement optimisés',
      'Finitions luxueuses et détails raffinés',
      'Installation professionnelle',
      'Garantie sur mesure',
    ],
    timeline: '4 à 8 semaines selon la complexité du projet',
    icon: 'menuiserie',
  },
  {
    id: '2',
    slug: 'renovation-interieur',
    title: "Rénovation d'intérieur",
    excerpt:
      "Rénovation complète haut de gamme avec maîtrise de tous corps d'état",
    description:
      "Nous maîtrisons toutes les étapes de la rénovation d'intérieur et mettons tout en œuvre pour respecter les délais tout en vous assurant une finition sans égal pour un raffinement luxueux de vos différents espaces de vie. De l'appartement parisien à la maison de prestige, nous transformons vos espaces en lieux d'exception.",
    startingPrice: '15 000',
    tagline: 'Prestige garanti',
    deliverables: [
      "Audit complet de votre espace",
      "Conception et plans architecturaux",
      "Coordination tous corps d'état",
      "Travaux de gros œuvre et second œuvre",
      "Finitions haut de gamme",
      "Suivi de chantier rigoureux",
      "Respect des délais convenus",
      "Garantie décennale",
    ],
    timeline: "8 à 16 semaines selon l'ampleur des travaux",
    icon: 'renovation',
  },
  {
    id: '3',
    slug: 'agencement',
    title: 'Agencement',
    excerpt:
      "Agencement tous corps d'état pour créer des espaces fonctionnels et élégants",
    description:
      "Notre expérience dans le domaine des travaux tous corps d'État nous permet de vous garantir un service de qualité. Que ce soit l'agencement d'un séjour, d'une chambre parentale avec création de dressing, ou d'un espace professionnel, nous optimisons chaque mètre carré avec élégance et fonctionnalité.",
    startingPrice: '5 000',
    tagline: 'Sur mesure',
    deliverables: [
      "Plan d'agencement personnalisé",
      "Optimisation de l'espace",
      "Création de dressing sur-mesure",
      "Aménagement de pièces de vie",
      "Coordination artisans",
      "Choix des matériaux nobles",
      "Installation et finitions",
      "Suivi post-installation",
    ],
    timeline: '5 à 10 semaines selon le projet',
    icon: 'agencement',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}

