import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/data/services'
import { getAllProjectSlugs } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Static pages (logos exclu)
  const routes = ['', '/about', '/services', '/portfolio', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  // Service pages
  const serviceSlugs = getAllServiceSlugs()
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Portfolio pages
  const projectSlugs = getAllProjectSlugs()
  const portfolioPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...servicePages, ...portfolioPages]
}

