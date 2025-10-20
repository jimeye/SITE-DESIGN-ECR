import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrganizationJsonLd } from '@/components/SEO'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ECR - Étude Conception Réalisations',
  description:
    "Menuiserie, Rénovation d'intérieur et Agencement haut de gamme. ECR réalise des intérieurs prestigieux, confortables et élégants à Paris et région parisienne.",
  keywords: [
    'menuiserie Paris',
    'rénovation intérieur haut de gamme',
    'agencement luxe',
    'menuiserie sur-mesure',
    'rénovation appartement Paris',
    'agencement prestige',
    'dressing sur-mesure',
    'bibliothèque murale',
    'cuisine sur-mesure',
    'rénovation haussmannien',
  ],
  authors: [{ name: 'ECR' }],
  creator: 'ECR',
  publisher: 'ECR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'ECR - Étude Conception Réalisations',
    title: 'ECR - Menuiserie, Rénovation & Agencement',
    description:
      "Réalisations d'intérieurs prestigieux avec menuiserie sur-mesure, rénovation haut de gamme et agencement d'exception",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ECR - Étude Conception Réalisations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECR - Menuiserie, Rénovation & Agencement',
    description:
      "Intérieurs prestigieux sur-mesure à Paris et région parisienne",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <OrganizationJsonLd />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

