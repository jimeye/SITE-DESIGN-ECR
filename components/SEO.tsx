import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function generateMetadata({
  title = 'ECR - Étude Conception Réalisations',
  description = 'Menuiserie, Rénovation d\'intérieur et Agencement haut de gamme. ECR réalise des intérieurs prestigieux, confortables et élégants à Paris et région parisienne.',
  image = '/og-image.jpg',
  url = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecr-agencement.fr',
  type = 'website',
  noindex = false,
}: SEOProps): Metadata {
  const siteName = 'ECR - Étude Conception Réalisations'
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      type,
      locale: 'fr_FR',
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

interface JsonLdProps {
  type: 'Organization' | 'BreadcrumbList' | 'Service'
  data: Record<string, unknown>
}

export function JsonLd({ type, data }: JsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      type="Organization"
      data={{
        name: 'ECR - Étude Conception Réalisations',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ecr-agencement.fr',
        logo:
          (process.env.NEXT_PUBLIC_SITE_URL || 'https://ecr-agencement.fr') +
          '/logo.svg',
        description:
          "Menuiserie, Rénovation d'intérieur et Agencement haut de gamme à Paris et région parisienne",
        address: {
          '@type': 'PostalAddress',
          streetAddress: '7, rue Bernard',
          addressLocality: 'Bobigny',
          postalCode: '93000',
          addressCountry: 'FR',
        },
        telephone: '+33148430509',
        email: 'ecr@club-internet.fr',
        sameAs: [
          process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
          process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
        ],
      }}
    />
  )
}

