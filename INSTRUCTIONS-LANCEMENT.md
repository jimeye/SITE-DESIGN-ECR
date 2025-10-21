# 📋 Instructions pour lancer le site ECR

Bienvenue ! Voici comment lancer votre nouveau site ECR pas à pas.

## 🌐 Site déjà en ligne

**Vercel** : [https://site-design-ecr.vercel.app/](https://site-design-ecr.vercel.app/)

**GitHub** : [https://github.com/jimeye/SITE-DESIGN-ECR](https://github.com/jimeye/SITE-DESIGN-ECR)

**72 commits** déjà poussés avec succès !

---

## ✅ Ce qui a été généré

Le site complet avec :
- **Pages** : Accueil, Services (3 pages), Portfolio, À propos, Contact
- **Composants** : Header, Footer, Hero, Formulaires, Cards, etc.
- **Design** : Style Valerie Joseph (beige élégant, minimaliste)
- **Contenu** : Textes en français pour ECR
- **Tests** : Vitest + React Testing Library
- **CI/CD** : GitHub Actions
- **Docker** : Dockerfile pour production

## 🚀 ÉTAPE PAR ÉTAPE

### 1️⃣ Installer les dépendances

```bash
cd /Users/jimmyfellous/Downloads/SITE-DESIGN
pnpm install
```

**Durée estimée** : 2-3 minutes

Si vous n'avez pas pnpm :
```bash
npm install -g pnpm
```

### 2️⃣ Créer le fichier .env.local

Créez un fichier `.env.local` à la racine :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=ecr@club-internet.fr
```

### 3️⃣ Lancer le serveur

```bash
pnpm dev
```

Le site sera sur **http://localhost:3000**

### 4️⃣ Corriger les images manquantes

**IMPORTANT** : Le site va s'afficher mais avec des images cassées car elles n'existent pas encore.

**Solution rapide** : Utilisez des placeholders

Remplacez les chemins d'images dans les fichiers `data/*.ts` par :
```typescript
// Dans data/projects.ts, par exemple
image: 'https://placehold.co/1200x800/e8dcc4/0a0a0a?text=ECR'
```

Ou ajoutez de vraies images dans `public/` (voir `public/placeholder-images.md`)

## 🎨 Navigation du site

Une fois lancé, visitez :

- **/** - Page d'accueil
- **/services** - Liste des services
- **/services/menuiserie** - Service menuiserie
- **/services/renovation-interieur** - Service rénovation
- **/services/agencement** - Service agencement
- **/portfolio** - Galerie projets (filtrable)
- **/about** - À propos d'ECR
- **/contact** - Formulaire de contact

## 🛠️ Commandes disponibles

```bash
pnpm dev        # Développement (http://localhost:3000)
pnpm build      # Build de production
pnpm start      # Lancer en production (après build)
pnpm test       # Tests unitaires
pnpm lint       # Vérifier le code
pnpm format     # Formater le code
```

## 🔧 Réglages dans Cursor

Si vous utilisez Cursor et que vous avez des erreurs TypeScript :

1. **Redémarrer le serveur TypeScript** : 
   - Cmd + Shift + P
   - "TypeScript: Restart TS Server"

2. **Installer les dépendances manquantes** :
   ```bash
   pnpm install
   ```

## 📝 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.ts` section `colors`

### Modifier le contenu

- Services : `data/services.ts`
- Projets : `data/projects.ts`
- Témoignages : `data/testimonials.ts`

### Modifier les pages

Toutes les pages sont dans `app/`

## ⚠️ Problèmes fréquents

### "Cannot find module..."
```bash
pnpm install
```

### Port 3000 déjà utilisé
```bash
lsof -ti:3000 | xargs kill -9
pnpm dev
```

### Images cassées
Ajoutez des vraies images dans `public/` ou utilisez des URLs de placeholder

## 📊 Structure générée

```
SITE-DESIGN/
├── app/                 # Pages Next.js
├── components/          # Composants React
├── data/               # Données (services, projets)
├── lib/                # Utilitaires
├── public/             # Images statiques
├── tests/              # Tests
├── package.json        # Dépendances
├── tailwind.config.ts  # Config Tailwind
└── README.md           # Documentation
```

## 🎯 Prochaines étapes

1. ✅ **Vérifier** que le site se lance (`pnpm dev`) - FAIT
2. ✅ **Ajouter** vos photos de projets - FAIT (5 projets avec galeries)
3. ✅ **Personnaliser** le contenu dans `data/` - FAIT
4. ✅ **Déployer** sur Vercel (gratuit) - FAIT
5. ⏳ **Connecter** votre domaine ecr-agencement.fr - EN ATTENTE

## 💡 Conseil

Pour tester rapidement sans images, modifiez temporairement les composants pour ne pas afficher les images, ou utilisez des URLs de services comme :
- https://placehold.co/1200x800
- https://via.placeholder.com/1200x800

## 📧 Support

Consultez :
- `README.md` - Documentation complète
- `GETTING-STARTED.md` - Guide détaillé
- `public/placeholder-images.md` - Liste des images nécessaires

---

**Bon développement ! 🎨**

