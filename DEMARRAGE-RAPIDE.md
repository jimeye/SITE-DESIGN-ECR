# ⚡ Démarrage Ultra-Rapide - 5 minutes

## 1️⃣ Installer les dépendances (2 min)

```bash
cd /Users/jimmyfellous/Downloads/SITE-DESIGN
pnpm install
```

Si vous n'avez pas `pnpm` :
```bash
npm install -g pnpm
```

## 2️⃣ Créer le fichier d'environnement (30 sec)

```bash
cp env.example.txt .env.local
```

Ou créez manuellement `.env.local` avec :
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=ecr@club-internet.fr
```

## 3️⃣ (Optionnel) Télécharger des images placeholder (1 min)

```bash
chmod +x scripts/setup-placeholder-images.sh
bash scripts/setup-placeholder-images.sh
```

**OU** ignorez cette étape - le site fonctionnera avec des images cassées (vous les corrigerez après).

## 4️⃣ Lancer le site (30 sec)

```bash
pnpm dev
```

✅ **Ouvrez** : http://localhost:3000

## 🎉 C'est tout !

Le site est maintenant accessible.

---

## 📋 Que faire ensuite ?

### Option A : Tester rapidement avec placeholders

Si vous avez lancé le script d'images, le site est prêt à être exploré !

### Option B : Corriger les images cassées manuellement

Ajoutez vos vraies images dans :
- `public/hero-home.jpg`
- `public/portfolio/` (voir `public/placeholder-images.md`)

### Option C : Utiliser des URLs de placeholder temporaires

Éditez les fichiers dans `data/` et remplacez les chemins par :
```typescript
image: 'https://placehold.co/1200x800/e8dcc4/0a0a0a?text=ECR+Project'
```

---

## 🔍 Vérifications rapides

### Le site se lance ?
```bash
pnpm dev
```
→ Doit afficher : `Ready in Xs`

### Pas d'erreurs TypeScript ?
```bash
pnpm type-check
```
→ Aucune erreur ne doit apparaître

### Les tests passent ?
```bash
pnpm test
```
→ Tous les tests doivent être verts

---

## 🆘 Problèmes ?

### "Cannot find module"
```bash
rm -rf node_modules
pnpm install
```

### "Port 3000 already in use"
```bash
lsof -ti:3000 | xargs kill -9
```

### Images cassées
Normal ! Ajoutez des images ou lancez le script placeholder.

---

## 📚 Documentation complète

- `README.md` - Documentation technique
- `SUMMARY.md` - Récapitulatif de tout ce qui a été généré
- `INSTRUCTIONS-LANCEMENT.md` - Guide détaillé
- `GETTING-STARTED.md` - Guide pas à pas complet

---

**Bon développement ! 🚀**

