# 🚀 Guide de démarrage rapide

## Étape 1 : Installation des dépendances

Ouvrez le terminal dans le dossier du projet et exécutez :

```bash
pnpm install
```

Si vous n'avez pas `pnpm` installé, installez-le d'abord :

```bash
npm install -g pnpm
```

## Étape 2 : Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
cp .env.example .env.local
```

Ou créez-le manuellement avec ce contenu :

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=ECR - Étude Conception Réalisations
NEXT_PUBLIC_CONTACT_EMAIL=ecr@club-internet.fr
NEXT_PUBLIC_CONTACT_PHONE=01 48 43 05 09
NEXT_PUBLIC_CONTACT_ADDRESS=7, rue Bernard - 93000 BOBIGNY
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/ecr
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/ecr
```

## Étape 3 : Ajouter les images (temporaires)

Pour que le site s'affiche correctement, vous devez ajouter des images.

**Option A : Télécharger des images temporaires**

Vous pouvez télécharger des images d'exemple depuis Unsplash et les placer dans `public/` :

1. Hero : [unsplash.com/s/photos/luxury-interior](https://unsplash.com/s/photos/luxury-interior)
2. Portfolio : [unsplash.com/s/photos/interior-design](https://unsplash.com/s/photos/interior-design)

**Option B : Utiliser des placeholders**

Pour un démarrage rapide, créez des images placeholder de 1px :

```bash
mkdir -p public/portfolio public/testimonials
touch public/hero-home.jpg public/about-image.jpg public/og-image.jpg
cd public/portfolio
touch haussmann-main.jpg villa-main.jpg penthouse-main.jpg loft-main.jpg architecte-main.jpg
touch haussmann-1.jpg haussmann-2.jpg haussmann-3.jpg haussmann-4.jpg
touch villa-1.jpg villa-2.jpg villa-3.jpg
touch penthouse-1.jpg penthouse-2.jpg penthouse-3.jpg penthouse-4.jpg
touch loft-1.jpg loft-2.jpg loft-3.jpg
touch architecte-1.jpg architecte-2.jpg architecte-3.jpg architecte-4.jpg
cd ../testimonials
touch avatar-1.jpg avatar-2.jpg avatar-3.jpg avatar-4.jpg
```

*Note : Le site fonctionnera mais affichera des images cassées. Remplacez-les par de vraies images dès que possible.*

## Étape 4 : Lancer le serveur de développement

```bash
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Étape 5 : Vérifier que tout fonctionne

Ouvrez votre navigateur et visitez :

- **Page d'accueil** : [http://localhost:3000](http://localhost:3000)
- **Services** : [http://localhost:3000/services](http://localhost:3000/services)
- **Portfolio** : [http://localhost:3000/portfolio](http://localhost:3000/portfolio)
- **À propos** : [http://localhost:3000/about](http://localhost:3000/about)
- **Contact** : [http://localhost:3000/contact](http://localhost:3000/contact)

## Étape 6 : Corriger les chemins d'images (si nécessaire)

Si vous voyez des images cassées (icônes 🖼️❌) :

1. Vérifiez que les fichiers d'images existent dans `public/`
2. Vérifiez que les noms de fichiers correspondent exactement (sensible à la casse)
3. Les chemins dans le code commencent par `/` (ex: `/hero-home.jpg`)

Pour remplacer rapidement toutes les images par un service de placeholder :

Éditez les fichiers dans `data/` et remplacez les chemins d'images par :
```
https://placehold.co/1200x800/e8dcc4/0a0a0a?text=ECR+Project
```

## 🛠️ Commandes utiles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Lancer en mode production (après build)
pnpm start

# Tests
pnpm test

# Linter
pnpm lint

# Formatage
pnpm format
```

## ❓ Problèmes courants

### "Module not found"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### "Port 3000 already in use"
```bash
# Tuez le processus sur le port 3000
lsof -ti:3000 | xargs kill -9
# Ou utilisez un autre port
pnpm dev -p 3001
```

### Images cassées
Vérifiez que les fichiers existent dans `public/` avec les bons noms.

### Erreurs TypeScript
```bash
pnpm type-check
```

## 📚 Prochaines étapes

1. **Remplacer les images** par de vraies photos de projets ECR
2. **Personnaliser le contenu** dans `data/services.ts`, `data/projects.ts`, etc.
3. **Configurer le formulaire de contact** pour envoyer de vrais emails
4. **Déployer** sur Vercel, Netlify ou votre hébergeur
5. **Configurer le domaine** ecr-agencement.fr

## 🆘 Besoin d'aide ?

Consultez le [README.md](./README.md) pour la documentation complète.

