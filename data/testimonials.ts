export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
  project?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "ECR a transformé notre appartement haussmannien avec un raffinement exceptionnel. Leur attention aux détails et leur respect du patrimoine architectural ont dépassé nos attentes. Un travail d'orfèvre.",
    author: 'Sophie Martineau',
    role: 'Propriétaire',
    project: 'Appartement Haussmannien - Paris 16ème',
    avatar: '/testimonials/avatar-1.jpg',
  },
  {
    id: '2',
    quote:
      "Professionnalisme exemplaire et finitions irréprochables. ECR a su créer des menuiseries sur-mesure qui allient élégance et fonctionnalité. Le respect des délais et la qualité d'exécution sont remarquables.",
    author: 'Philippe Durand',
    role: 'Chef d\'entreprise',
    company: 'Durand & Associés',
    project: 'Penthouse - Neuilly-sur-Seine',
    avatar: '/testimonials/avatar-2.jpg',
  },
  {
    id: '3',
    quote:
      "Une équipe passionnée qui a su comprendre notre vision et la concrétiser avec brio. L'agencement de notre villa est à la fois esthétique et parfaitement fonctionnel. Un résultat exceptionnel.",
    author: 'Catherine Beaumont',
    role: 'Architecte d\'intérieur',
    project: 'Villa Contemporaine - Saint-Cloud',
    avatar: '/testimonials/avatar-3.jpg',
  },
  {
    id: '4',
    quote:
      "ECR allie savoir-faire traditionnel et innovation. La transformation de notre loft industriel est une réussite totale. Leur expertise technique et leur sens esthétique font toute la différence.",
    author: 'Marc Lefevre',
    role: 'Promoteur immobilier',
    company: 'Prestige Immobilier',
    project: 'Loft Industriel - Boulogne',
    avatar: '/testimonials/avatar-4.jpg',
  },
]

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id)
}

export function getFeaturedTestimonials(count: number = 3): Testimonial[] {
  return testimonials.slice(0, count)
}

