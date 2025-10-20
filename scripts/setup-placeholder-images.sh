#!/bin/bash

# Script pour créer des images placeholder pour le site ECR
# Usage: bash scripts/setup-placeholder-images.sh

echo "🎨 Création des dossiers d'images..."

# Créer les dossiers nécessaires
mkdir -p public/portfolio
mkdir -p public/testimonials

echo "📸 Téléchargement d'images placeholder depuis Unsplash..."

# Fonction pour télécharger une image
download_image() {
    local url=$1
    local output=$2
    echo "  → $output"
    curl -L -o "$output" "$url" --silent
}

# Images principales (1920x1080)
download_image "https://source.unsplash.com/1920x1080/?luxury,interior,living" "public/hero-home.jpg"
download_image "https://source.unsplash.com/1200x1600/?interior,design,workshop" "public/about-image.jpg"
download_image "https://source.unsplash.com/1200x630/?luxury,interior" "public/og-image.jpg"

echo "📁 Images portfolio..."

# Projet 1: Appartement Haussmannien
download_image "https://source.unsplash.com/1200x800/?haussmann,paris,apartment" "public/portfolio/haussmann-main.jpg"
download_image "https://source.unsplash.com/1200x800/?classic,interior,living" "public/portfolio/haussmann-1.jpg"
download_image "https://source.unsplash.com/1200x800/?parisian,apartment" "public/portfolio/haussmann-2.jpg"
download_image "https://source.unsplash.com/1200x800/?elegant,interior" "public/portfolio/haussmann-3.jpg"
download_image "https://source.unsplash.com/1200x800/?luxury,bedroom" "public/portfolio/haussmann-4.jpg"

# Projet 2: Villa Contemporaine
download_image "https://source.unsplash.com/1200x800/?modern,villa,exterior" "public/portfolio/villa-main.jpg"
download_image "https://source.unsplash.com/1200x800/?contemporary,living" "public/portfolio/villa-1.jpg"
download_image "https://source.unsplash.com/1200x800/?modern,kitchen" "public/portfolio/villa-2.jpg"
download_image "https://source.unsplash.com/1200x800/?minimalist,interior" "public/portfolio/villa-3.jpg"

# Projet 3: Penthouse
download_image "https://source.unsplash.com/1200x800/?penthouse,luxury" "public/portfolio/penthouse-main.jpg"
download_image "https://source.unsplash.com/1200x800/?luxury,library" "public/portfolio/penthouse-1.jpg"
download_image "https://source.unsplash.com/1200x800/?bar,interior,luxury" "public/portfolio/penthouse-2.jpg"
download_image "https://source.unsplash.com/1200x800/?penthouse,view" "public/portfolio/penthouse-3.jpg"
download_image "https://source.unsplash.com/1200x800/?luxury,bathroom" "public/portfolio/penthouse-4.jpg"

# Projet 4: Loft Industriel
download_image "https://source.unsplash.com/1200x800/?industrial,loft" "public/portfolio/loft-main.jpg"
download_image "https://source.unsplash.com/1200x800/?loft,industrial,interior" "public/portfolio/loft-1.jpg"
download_image "https://source.unsplash.com/1200x800/?industrial,kitchen" "public/portfolio/loft-2.jpg"
download_image "https://source.unsplash.com/1200x800/?loft,bedroom" "public/portfolio/loft-3.jpg"

# Projet 5: Maison d'Architecte
download_image "https://source.unsplash.com/1200x800/?architect,house,modern" "public/portfolio/architecte-main.jpg"
download_image "https://source.unsplash.com/1200x800/?staircase,modern" "public/portfolio/architecte-1.jpg"
download_image "https://source.unsplash.com/1200x800/?modern,living,design" "public/portfolio/architecte-2.jpg"
download_image "https://source.unsplash.com/1200x800/?architect,interior" "public/portfolio/architecte-3.jpg"
download_image "https://source.unsplash.com/1200x800/?luxury,kitchen,modern" "public/portfolio/architecte-4.jpg"

echo "👤 Images témoignages..."

# Avatars (150x150)
download_image "https://i.pravatar.cc/150?img=1" "public/testimonials/avatar-1.jpg"
download_image "https://i.pravatar.cc/150?img=12" "public/testimonials/avatar-2.jpg"
download_image "https://i.pravatar.cc/150?img=5" "public/testimonials/avatar-3.jpg"
download_image "https://i.pravatar.cc/150?img=33" "public/testimonials/avatar-4.jpg"

echo ""
echo "✅ Toutes les images placeholder ont été créées !"
echo ""
echo "📋 Prochaines étapes :"
echo "   1. Vérifiez les images dans public/"
echo "   2. Lancez 'pnpm dev' pour voir le résultat"
echo "   3. Remplacez par vos vraies images ECR quand vous les avez"
echo ""

