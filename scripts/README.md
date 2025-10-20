# Scripts utilitaires

## setup-placeholder-images.sh

Script pour télécharger automatiquement des images placeholder depuis Unsplash.

### Usage

```bash
chmod +x scripts/setup-placeholder-images.sh
bash scripts/setup-placeholder-images.sh
```

### Prérequis

- `curl` installé (déjà présent sur macOS)
- Connexion internet

### Ce qu'il fait

1. Crée les dossiers `public/portfolio` et `public/testimonials`
2. Télécharge des images depuis Unsplash API
3. Place les images aux bons emplacements

### Après exécution

Lancez `pnpm dev` et le site affichera les images placeholder !

### Note

Ces images sont temporaires. Remplacez-les par vos vraies photos de projets ECR.

