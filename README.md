# ECR - Étude Conception Réalisations

Site web professionnel pour ECR, spécialiste en menuiserie, rénovation d'intérieur et agencement haut de gamme à Paris et région parisienne.

## 🎨 Design

Design minimaliste et élégant, avec :
- Palette de couleurs beiges chauds et noirs sophistiqués
- Typographie raffinée (Inter + Playfair Display)
- Espacements généreux et mise en page aérée
- Animations subtiles et transitions fluides
- Interface responsive mobile-first

## 🚀 Technologies

- **Framework** : Next.js 14+ (App Router)
- **Language** : TypeScript (strict mode)
- **Styling** : Tailwind CSS
- **Validation** : Zod + React Hook Form
- **Tests** : Vitest + React Testing Library
- **Linting** : ESLint + Prettier
- **CI/CD** : GitHub Actions
- **Container** : Docker

## 📁 Structure du projet

```
SITE-DESIGN/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout racine
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # À propos
│   ├── services/          # Services (index + pages dynamiques)
│   ├── portfolio/         # Portfolio (index + études de cas)
│   ├── contact/           # Contact
│   └── api/               # Route Handlers
├── components/            # Composants React réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── Testimonial.tsx
│   ├── ProcessSteps.tsx
│   ├── ContactForm.tsx
│   └── SEO.tsx
├── data/                  # Données statiques
│   ├── services.ts
│   ├── projects.ts
│   └── testimonials.ts
├── lib/                   # Utilitaires
├── public/                # Assets statiques
├── tests/                 # Tests unitaires
└── styles/                # Styles globaux
```

## 🛠️ Installation

### Prérequis

- Node.js 18+
- pnpm 8+

### Installation des dépendances

```bash
pnpm install
```

## 🔧 Commandes

### Développement

```bash
pnpm dev
```

Lance le serveur de développement sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
pnpm build
```

Génère une build optimisée pour la production.

### Démarrer en production

```bash
pnpm start
```

Lance le serveur de production (nécessite `pnpm build` au préalable).

### Linting

```bash
# Vérifier le code
pnpm lint

# Formater le code
pnpm format

# Vérifier le formatage
pnpm format:check
```

### Tests

```bash
# Lancer les tests
pnpm test

# Tests avec UI
pnpm test:ui
```

### Vérification TypeScript

```bash
pnpm type-check
```

## 🐳 Docker

### Build de l'image

```bash
docker build -t ecr-site .
```

### Lancer le container

```bash
docker run -p 3000:3000 ecr-site
```

## 🏗️ Architecture technique

### App Router vs Pages Router

Ce projet utilise le **Next.js App Router** (nouvelle architecture) qui offre :
- Server Components par défaut (meilleures performances)
- Layouts imbriqués
- Chargement de données simplifié
- Streaming et Suspense natifs

### Server Components vs Client Components

**Server Components** (par défaut) :
- Rendus côté serveur
- Pas de JavaScript côté client
- Meilleur pour SEO et performances
- Exemples : pages, layouts, composants statiques

**Client Components** (`'use client'`) :
- Rendus côté client
- Nécessaires pour l'interactivité
- Exemples : formulaires, menus mobiles, states

### Choix SEO

1. **Metadata API** : Génération de meta tags dynamiques par page
2. **JSON-LD** : Structured data pour Google (Organization, Breadcrumb)
3. **Sitemap dynamique** : Généré automatiquement depuis les données
4. **robots.txt** : Configuration pour les crawlers
5. **Open Graph & Twitter Cards** : Partage optimisé sur les réseaux sociaux
6. **Canonical URLs** : Évite le contenu dupliqué

### Performance

- **Image Optimization** : next/image avec lazy loading
- **Code Splitting** : Automatique avec App Router
- **Server Components** : Réduction du JavaScript client
- **CSS-in-JS minimal** : Utilisation de Tailwind pour performances optimales

## 📝 Variables d'environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ECR - Étude Conception Réalisations
NEXT_PUBLIC_CONTACT_EMAIL=ecr@club-internet.fr
NEXT_PUBLIC_CONTACT_PHONE=01 48 43 05 09
NEXT_PUBLIC_CONTACT_ADDRESS=7, rue Bernard - 93000 BOBIGNY
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/ecr
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/ecr
```

## 🎯 Fonctionnalités

- ✅ Page d'accueil avec hero, services, processus, portfolio, témoignages
- ✅ Pages services détaillées avec tarifs et livrables
- ✅ Portfolio avec études de cas et lightbox galerie
- ✅ Formulaire de contact avec validation
- ✅ Navigation responsive avec menu mobile optimisé
- ✅ SEO optimisé (meta tags, Open Graph, JSON-LD, sitemap)
- ✅ Accessibilité WCAG AA
- ✅ Animations Framer Motion scroll-triggered
- ✅ Popup adresse avec choix d'itinéraires (Google Maps, Waze, Apple Plans)
- ✅ Responsive avancé mobile portrait/paysage
- ✅ Tests unitaires
- ✅ CI/CD avec GitHub Actions
- ✅ Déployé sur Vercel

## 🧪 Tests

Les tests sont écrits avec **Vitest** et **React Testing Library** :

- `tests/ServiceCard.test.tsx` : Tests du composant ServiceCard
- `tests/ContactForm.test.tsx` : Tests du formulaire de contact avec validation

Philosophie : Tests axés sur le comportement utilisateur, pas l'implémentation.

## 🚢 Déploiement

### Vercel (recommandé)

```bash
# Installer Vercel CLI
pnpm i -g vercel

# Déployer
vercel
```

### Docker

Voir la section Docker ci-dessus.

### Autre hébergeur

Le projet peut être déployé sur n'importe quel hébergeur supportant Node.js :
1. `pnpm build` pour générer le build
2. `pnpm start` pour lancer le serveur

## 🔒 Accessibilité

Le site respecte les normes WCAG 2.1 niveau AA :
- Navigation au clavier complète
- Contraste de couleurs AA minimum
- ARIA labels sur les composants interactifs
- HTML sémantique
- Alt text sur toutes les images
- Focus visible sur tous les éléments interactifs

## 🌐 Déploiement

**Site en ligne** : [https://site-design-ecr.vercel.app/](https://site-design-ecr.vercel.app/)

**GitHub** : [https://github.com/jimeye/SITE-DESIGN-ECR](https://github.com/jimeye/SITE-DESIGN-ECR)

**72 commits** poussés avec succès !

## 📧 Contact

Pour toute question concernant le projet :
- Email : ecr@club-internet.fr
- Téléphone : 01 48 43 05 09

## 📄 Licence

© 2024 ECR - Étude Conception Réalisations. Tous droits réservés.

