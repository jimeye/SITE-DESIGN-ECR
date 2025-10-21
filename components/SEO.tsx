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

export function LocalBusinessJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ecr-agencement.fr'
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': siteUrl,
          name: 'ECR - Étude Conception Réalisations',
          alternateName: 'ECR Agencement',
          image: `${siteUrl}/og-image.jpg`,
          url: siteUrl,
          telephone: '+33148430509',
          email: 'ecr@club-internet.fr',
          priceRange: '€€€',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '7, rue Bernard',
            addressLocality: 'Bobigny',
            postalCode: '93000',
            addressCountry: 'FR',
            addressRegion: 'Île-de-France',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 48.9058,
            longitude: 2.4422,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00',
            },
          ],
          sameAs: [
            process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
            process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
          ],
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 48.9058,
              longitude: 2.4422,
            },
            geoRadius: '50000', // 50km radius
          },
          knowsAbout: [
            'Menuiserie sur-mesure',
            "Rénovation d'intérieur",
            'Agencement haut de gamme',
            'Dressing sur-mesure',
            'Bibliothèque murale',
            'Cuisine sur-mesure',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Services ECR',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Menuiserie sur-mesure',
                  description: 'Création de mobilier et rangements sur-mesure avec finitions luxueuses',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: "Rénovation d'intérieur",
                  description: 'Rénovation complète d\'appartements et maisons avec matériaux haut de gamme',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Agencement',
                  description: 'Conception et optimisation d\'espaces avec mobilier intégré',
                },
              },
            ],
          },
        }),
      }}
    />
  )
}

