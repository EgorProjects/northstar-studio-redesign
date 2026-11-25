import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url
  return ['', '/about', '/services', '/portfolio', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))
}
