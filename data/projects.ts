export interface Project {
  id: string
  slug: string
  title: string
  excerpt: string
  description: string
  category: string
  tags: string[]
  image: string
  images: string[]
  client: string
  year: string
  duration: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'appartement-haussmannien-paris-16',
    title: 'Appartement Haussmannien - Paris 16ème',
    excerpt:
      "Rénovation d'exception d'un appartement haussmannien avec conservation patrimoniale",
    description:
      "Transformation complète d'un appartement haussmannien de 180m² dans le 16ème arrondissement. Conservation et restauration des moulures, parquets anciens et cheminées en marbre. Création d'une cuisine ouverte sur-mesure et d'un dressing de 25m² dans la suite parentale. Association subtile entre patrimoine et modernité.",
    category: 'Rénovation',
    tags: ['Rénovation', 'Haussmannien', 'Luxe', 'Paris'],
    image: '/portfolio/haussmann-main.jpg',
    images: [
      '/portfolio/haussmann-1.jpg',
      '/portfolio/haussmann-2.jpg',
      '/portfolio/haussmann-3.jpg',
      '/portfolio/haussmann-4.jpg',
    ],
    client: 'Privé',
    year: '2024',
    duration: '14 semaines',
    featured: true,
  },
  {
    id: '2',
    slug: 'villa-contemporaine-saint-cloud',
    title: 'Villa Contemporaine - Saint-Cloud',
    excerpt:
      "Aménagement intérieur d'une villa contemporaine",
    description:
      "Aménagement intérieur d'une villa contemporaine\nSurface : 250m²\nObjectif : Apporter du caractère sans voler la vedette à la nature environnante\nStyles : Contemporaine, minimaliste, hôtel de luxe",
    category: 'Agencement',
    tags: ['Agencement', 'Contemporain', 'Mobilier sur-mesure'],
    image: '/portfolio/villa-main.jpg',
    images: [
      '/portfolio/villa-1.jpg',
      '/portfolio/villa-2.jpg',
      '/portfolio/villa-3.jpg',
      '/portfolio/villa-4.jpg',
      '/portfolio/villa-5.jpg',
      '/portfolio/villa-6.jpg',
      '/portfolio/villa-7.jpg',
      '/portfolio/villa-8.jpg',
    ],
    client: 'Privé',
    year: '2024',
    duration: '10 semaines',
    featured: true,
  },
  {
    id: '3',
    slug: 'penthouse-neuilly-sur-seine',
    title: 'Penthouse - Neuilly-sur-Seine',
    excerpt:
      "Menuiserie d'exception pour un penthouse avec vue panoramique sur Paris",
    description:
      "Réalisation de menuiseries sur-mesure pour un penthouse de 250m² : bibliothèque monumentale de 8m de haut, bar en chêne fumé, portes escamotables pour optimiser l'espace et créer une fluidité entre les pièces. Intégration de LED et domotique.",
    category: 'Menuiserie',
    tags: ['Menuiserie', 'Luxe', 'Innovation'],
    image: '/portfolio/penthouse-main.jpg',
    images: [
      '/portfolio/penthouse-1.jpg',
      '/portfolio/penthouse-2.jpg',
      '/portfolio/penthouse-3.jpg',
      '/portfolio/penthouse-4.jpg',
      '/portfolio/penthouse-5.jpg',
    ],
    client: 'Privé',
    year: '2023',
    duration: '12 semaines',
    featured: true,
  },
  {
    id: '4',
    slug: 'loft-industriel-boulogne',
    title: 'Loft Industriel - Boulogne-Billancourt',
    excerpt:
      "Dans un bâtiment en pierre de taille avec entrée privative",
    description:
      "Dans un bâtiment en pierre de taille avec entrée privative, il mise sur une architecture ouverte et très lumineuse.\n\nL'espace principal avec sa cuisine ouverte laisse place à beaucoup de possibilités que ce soit en tournage/shooting ou en réunion. Les 4 chambres peuvent être également utilisées.",
    category: 'Rénovation',
    tags: ['Rénovation', 'Industriel', 'Loft', 'Agencement'],
    image: '/portfolio/loft-main.jpg',
    images: [
      '/portfolio/loft-1.jpg',
      '/portfolio/loft-2.jpg',
      '/portfolio/loft-3.jpg',
      '/portfolio/loft-4.jpg',
      '/portfolio/loft-5.jpg',
    ],
    client: 'Privé',
    year: '2023',
    duration: '16 semaines',
    featured: false,
  },
  {
    id: '5',
    slug: 'maison-architecte-saint-germain',
    title: "Maison d'Architecte - Saint-Germain-en-Laye",
    excerpt:
      "Menuiserie contemporaine et agencement pour une maison d'architecte",
    description:
      "Création de menuiseries et agencement pour une maison d'architecte de 400m². Passerelle suspendu, bibliothèque murale de 15m linéaires, dressings dans les 4 chambres, mobilier de salle de bain en teck.",
    category: 'Menuiserie',
    tags: ['Menuiserie', 'Agencement', 'Design', 'Contemporain'],
    image: '/portfolio/architecte-main.jpg',
    images: [
      '/portfolio/architecte-1.jpg',
      '/portfolio/architecte-2.jpg',
      '/portfolio/architecte-3.jpg',
      '/portfolio/architecte-4.jpg',
    ],
    client: 'Privé',
    year: '2023',
    duration: '18 semaines',
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getAllCategories(): string[] {
  const categories = projects.map((project) => project.category)
  return Array.from(new Set(categories))
}

export function getAllTags(): string[] {
  const tags = projects.flatMap((project) => project.tags)
  return Array.from(new Set(tags))
}

